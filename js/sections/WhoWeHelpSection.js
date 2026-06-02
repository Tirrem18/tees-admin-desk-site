const groups = [
  "Contractors",
  "Trades",
  "Landlords",
  "Letting agents",
  "Small service businesses",
  "Manufacturers",
  "Admin-heavy SMEs",
  "Local North East firms",
];

export function WhoWeHelpSection() {
  return `
    <section class="section who-section" id="who-we-help">
      <div class="container">
        <div class="who-card">
          <div>
            <span class="section-label">Who we help</span>
            <h2>Built for small businesses that need admin moving, not more complexity.</h2>
          </div>

          <div class="who-list">
            ${groups.map((group) => `<span>${group}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}
