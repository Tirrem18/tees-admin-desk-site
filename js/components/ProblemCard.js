export function ProblemCard({ icon, iconClass, title, text }) {
  return `
    <article class="problem-card">
      <span class="card-icon ${iconClass}">${icon}</span>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `;
}
