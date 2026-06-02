export function Header() {
  return `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Tees Admin Desk home">
          <img src="assets/Logo.png" alt="Tees Admin Desk logo" class="brand-logo" />
          <div class="brand-copy">
            <span class="brand-name">Tees Admin Desk</span>
            <span class="brand-tagline">Organised &bull; Tracked &bull; Ready</span>
          </div>
        </a>

        <nav class="site-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#how-it-works">How it works</a>
          <a href="#who-we-help">Who we help</a>
          <a href="#about">About</a>
          <a href="contact.html">Contact</a>
        </nav>

        <a class="header-cta" href="contact.html">Free admin review</a>
      </div>
    </header>
  `;
}
