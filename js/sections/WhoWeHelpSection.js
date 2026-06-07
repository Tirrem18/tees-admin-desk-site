const bestFit = [
  "Small contractors",
  "Commercial trades",
  "Subcontractors",
  "Facilities & maintenance firms",
  "Electrical contractors",
  "Plumbing & heating firms",
  "Roofing firms",
  "Fire & security installers",
  "Groundworks & civils firms",
  "Commercial cleaning suppliers",
  "Accreditation renewals",
  "Insurance, RAMS & training records",
];

function renderChips(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

export function WhoWeHelpSection() {
  return `
    <section class="section who-section" id="who-we-help">
      <div class="container">
        <div class="who-card">
          <div class="who-copy">
            <span class="section-label">Who I help</span>
            <h2>Built for contractors and trade businesses that need admin moving, not more complexity.</h2>
            <p>
              I work with businesses where paperwork, renewals, certificates and evidence folders
              can quickly affect jobs, accreditations and customer requests.
            </p>
          </div>

          <div class="who-list-wrap">
            <div class="who-list">
              ${renderChips(bestFit)}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
