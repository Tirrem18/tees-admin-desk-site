const icons = {
  question: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M9 6.5h10.5L25 12v13.5H9z" />
      <path d="M19.5 6.5V12H25" />
      <path d="M13 16h6" />
      <path d="M13 20h4" />
      <path d="M21.5 20.5h.01" />
      <path d="M21.5 16.5a2 2 0 0 0-3.4-1.4" />
    </svg>
  `,
  folder: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5.5 10.5h7l2 2h12v12H5.5z" />
      <path d="M9.5 17h9" />
      <path d="M20 20.5l2 2 4-4" />
    </svg>
  `,
  check: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <circle cx="16" cy="16" r="10.5" />
      <path d="m10.5 16.5 3.8 3.8 7.7-8" />
    </svg>
  `,
};

export function ProcessStep({ number, icon, title, text }) {
  return `
    <article class="process-step">
      <span class="step-number">${number}</span>
      <div class="step-icon">${icons[icon] || icon}</div>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}
