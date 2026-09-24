export function SiteHeader({active}: {active: 'home'|'about'|'japan'}) {
 return <header className="site-header"><a className="wordmark" href="/">Sarah<span>’s adventures</span><span className="brand-dot" aria-hidden="true">.</span></a><nav aria-label="Main navigation"><a href="/" aria-current={active==='home'?'page':undefined}>Adventures</a><a href="/about" aria-current={active==='about'?'page':undefined}>About me</a></nav></header>
}
export function SiteFooter(){return <footer><a href="/">Sarah’s adventures</a><a href="#top">Back to top ↑</a></footer>}
