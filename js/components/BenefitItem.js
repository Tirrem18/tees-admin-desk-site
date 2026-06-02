export function BenefitItem({ icon, title, text }) {
  return `
    <article class="why-item">
      <span class="why-icon">${icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}
