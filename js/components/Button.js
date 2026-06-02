export function Button({ href, text, variant }) {
  return `
    <a class="btn ${variant}" href="${href}">${text}</a>
  `;
}
