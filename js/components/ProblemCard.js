const icons = {
  certificate: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M9 5.5h10.5L25 11v15.5H9z" />
      <path d="M19.5 5.5V11H25" />
      <path d="M13 15h6" />
      <path d="M13 19h4" />
      <path d="M23 18v3.2" />
      <path d="M23 25h.01" />
    </svg>
  `,
  folders: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5.5 10.5h7l2 2h12v12H5.5z" />
      <path d="M8 8h6.5l2 2H24" />
      <path d="M9.5 17h13" />
      <path d="M9.5 21h9" />
    </svg>
  `,
  time: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="14" cy="15" r="8.5" />
      <path d="M14 10.5V15l3 2" />
      <path d="M20.5 22.5h6" />
      <path d="M20.5 26h4" />
    </svg>
  `,
  spreadsheet: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="6" y="6.5" width="20" height="19" rx="2.5" />
      <path d="M6 12.5h20" />
      <path d="M6 18.5h20" />
      <path d="M13 12.5v13" />
      <path d="M20 12.5v13" />
    </svg>
  `,
};

export function ProblemCard({ icon, iconClass, title, text, tag }) {
  return `
    <article class="problem-card">
      <span class="problem-icon ${iconClass}">${icons[icon]}</span>
      <h3>${title}</h3>
      <p>${text}</p>
      <span class="problem-tag ${iconClass}">${tag}</span>
    </article>
  `;
}
