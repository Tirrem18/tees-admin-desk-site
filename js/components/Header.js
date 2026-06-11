const navLinks = [
  { href: "services.html", label: "Services", page: "services" },
  { href: "examples.html", label: "Examples", page: "examples" },
  { href: "about.html", label: "About me", page: "about" },
];

function renderNavLink({ href, label, page }, currentPage) {
  const isCurrent = currentPage === page;
  const currentAttrs = isCurrent ? ' class="is-current" aria-current="page"' : "";

  return `<a href="${href}"${currentAttrs}>${label}</a>`;
}

export function Header({ currentPage = "" } = {}) {
  const reviewIsCurrent = currentPage === "free-admin-review";
  const reviewClass = reviewIsCurrent ? " is-current" : "";
  const reviewAria = reviewIsCurrent ? ' aria-current="page"' : "";

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

        <nav class="site-nav" id="main-navigation" aria-label="Main navigation">
          ${navLinks.map((link) => renderNavLink(link, currentPage)).join("")}
          <a class="menu-cta${reviewClass}" href="free-admin-review.html"${reviewAria}>Free admin review</a>
        </nav>

        <a class="header-cta${reviewClass}" href="free-admin-review.html"${reviewAria}>Free admin review</a>

        <button
          class="nav-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `;
}

export function initHeaderMenu() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (!header || !toggle || !nav) {
    return;
  }

  function setMenuOpen(isOpen) {
    header.dataset.menuOpen = String(isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  }

  toggle.addEventListener("click", () => {
    setMenuOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });
}
