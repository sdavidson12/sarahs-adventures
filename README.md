# Sarah’s adventures

A personal travel journal by Sarah, based in Seattle.

## Publish on GitHub Pages

Open **Settings → Pages**. Under Build and deployment, select **Deploy from a branch**, choose **main** and **/docs**, then Save.

The site is prepared for the repository path `/sarahs-adventures/`. The `docs/` folder contains the ready-to-publish site. GitHub automatically republishes when changes to that folder are pushed to main.

## Edit the site

- Japan guide: `content/japan.json`
- About Me: `app/about/page.tsx`
- Homepage: `app/page.tsx`
- Design: `app/globals.css`

After editing, run `npm install` once, then `npm run build`. Commit both the source changes and the rebuilt `docs/` folder. Source edits alone do not rebuild the published pages automatically.

The current version includes the homepage, About Me, and Japan guide. Iceland, photo galleries, and GPX maps are pending. There is no on-site editor; Sarah can update this project through Codex.

## Move to Cloudflare later

Run `npm run build:static` to generate `out/` with domain-root links. In Cloudflare Pages use that build command and set `out` as the output directory. No server, database, or paid Workers plan is required.
