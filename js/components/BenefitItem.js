const icons = {
  check: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="m8 16.5 5 5L24 10" />
    </svg>
  `,
  location: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 27s8-7.2 8-14a8 8 0 1 0-16 0c0 6.8 8 14 8 14z" />
      <circle cx="16" cy="13" r="2.8" />
    </svg>
  `,
  tracker: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="7" y="6.5" width="18" height="19" rx="2.5" />
      <path d="M11 12h10" />
      <path d="M11 17h5" />
      <path d="M19 18.5l2 2 4-4" />
    </svg>
  `,
  spark: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 5v7" />
      <path d="M16 20v7" />
      <path d="M5 16h7" />
      <path d="M20 16h7" />
      <path d="m9 9 4 4" />
      <path d="m19 19 4 4" />
      <path d="m23 9-4 4" />
      <path d="m13 19-4 4" />
    </svg>
  `,
};

export function BenefitItem({ icon, iconClass, title, text }) {
  return `
    <article class="why-item">
      <span class="why-icon ${iconClass}">${icons[icon] || icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}
