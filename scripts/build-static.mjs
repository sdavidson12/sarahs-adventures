import { build } from 'esbuild';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { mkdir, readFile, writeFile, cp, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const github = process.argv.includes('--github');
const basePath = github ? '/sarahs-adventures' : '';
const out = path.join(root, github ? 'docs' : 'out');
const temp = path.join(root, '.sites-runtime', 'static-pages.mjs');
await mkdir(path.dirname(temp), {recursive:true});
await build({
 stdin:{contents:`export {default as Home, metadata as homeMeta} from './app/page';\nexport {default as About, metadata as aboutMeta} from './app/about/page';\nexport {default as Japan, metadata as japanMeta} from './app/trips/japan/page';`, resolveDir:root, loader:'tsx'},
 outfile:temp, bundle:true, platform:'node', format:'esm', packages:'external', jsx:'automatic', alias:{'@':root}, logLevel:'warning'
});
const pages = await import(pathToFileURL(temp).href);
await rm(out,{recursive:true,force:true});
await mkdir(out,{recursive:true});
await cp(path.join(root,'public'),out,{recursive:true});
const css = (await readFile(path.join(root,'app/globals.css'),'utf8')).replace(/^@import "tailwindcss";\n/,'').replace(/^@theme inline \{[^\n]+\}\n/m,'');
await mkdir(path.join(out,'assets'),{recursive:true});
await writeFile(path.join(out,'assets/site.css'),css);
const escape = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shell = (title,description,body) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:type" content="website"><link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/assets/site.css"></head><body>${body}</body></html>`.replace(/(href|src)="\/(?!\/)([^"]*)"/g, (_, attr, target) => `${attr}="${basePath}/${target}"`);
for (const [url,Component,meta] of [['/',pages.Home,pages.homeMeta],['/about/',pages.About,pages.aboutMeta],['/trips/japan/',pages.Japan,pages.japanMeta]]) {
 const directory=path.join(out,url); await mkdir(directory,{recursive:true});
 await writeFile(path.join(directory,'index.html'),shell(meta.title,meta.description || 'Meet Sarah, a Seattle-based cyclist, hiker, and swimmer sharing stories from her adventures.',renderToStaticMarkup(createElement(Component))));
 console.log(`Built ${url}`);
}
await writeFile(path.join(out,'404.html'),shell('Page not found | Sarah’s adventures','This page could not be found.','<main class="journal-home"><div><h1>Page not found.</h1><p>Let’s head back to the adventures.</p><a href="/">Return home</a></div></main>'));
await writeFile(path.join(out,'_headers'),'/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n');
await writeFile(path.join(out,'.nojekyll'),'');
console.log(`Static site ready in ${github ? 'docs' : 'out'}/. No server or database required.`);
