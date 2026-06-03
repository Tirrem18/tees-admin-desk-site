const icons = {
  files: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5.5 10h7l2 2h12v14H5.5z" />
      <path d="M9 16h9" />
      <path d="M9 20h6" />
      <path d="m20 21.5 2 2 4-4" />
    </svg>
  `,
  calendar: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="6" y="7.5" width="20" height="18" rx="2.5" />
      <path d="M11 5v5" />
      <path d="M21 5v5" />
      <path d="M6 13h20" />
      <circle cx="20.5" cy="20" r="3.5" />
      <path d="M20.5 18v2.2l1.6 1" />
    </svg>
  `,
  message: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5.5 9.5h18a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5h-18z" />
      <path d="m6.5 12 8.8 6.2L24 12" />
      <circle cx="24" cy="8" r="3" />
    </svg>
  `,
  overview: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="8" y="5.5" width="16" height="21" rx="2.5" />
      <path d="M12 10h8" />
      <path d="M12 15h3" />
      <path d="M18 15h2" />
      <path d="M12 20h3" />
      <path d="M18 20h2" />
    </svg>
  `,
};

export function ServiceCard({ href, icon, iconClass, title, text }) {
  return `
    <a class="service-card ${iconClass}" href="${href}">
      <span class="service-icon ${iconClass}">${icons[icon]}</span>
      <h3>${title}</h3>
      <p>${text}</p>
      <span class="learn-link">Learn more</span>
    </a>
  `;
}
