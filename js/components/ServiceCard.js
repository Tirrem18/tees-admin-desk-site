export function ServiceCard({ href, icon, title, text }) {
  return `
    <a class="service-card" href="${href}">
      <span class="service-icon">${icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
      <span class="learn-link">Learn more</span>
    </a>
  `;
}
