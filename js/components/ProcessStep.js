export function ProcessStep({ number, icon, title, text }) {
  return `
    <article class="process-step">
      <span class="step-number">${number}</span>
      <div class="step-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}
