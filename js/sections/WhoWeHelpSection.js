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

          <div class="who-list-wrap" data-who-chip-state="collapsed">
            <div class="who-list" id="who-chip-list">
              ${renderChips(bestFit)}
            </div>
            <button
              class="who-more-toggle"
              type="button"
              data-who-more-toggle
              aria-expanded="false"
              aria-controls="who-chip-list"
            >
              + more
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initWhoWeHelpSection() {
  const wrapper = document.querySelector("[data-who-chip-state]");
  const toggle = wrapper?.querySelector("[data-who-more-toggle]");

  if (!wrapper || !toggle) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isExpanded = wrapper.dataset.whoChipState === "expanded";
    const nextState = isExpanded ? "collapsed" : "expanded";

    wrapper.dataset.whoChipState = nextState;
    toggle.setAttribute("aria-expanded", String(!isExpanded));
    toggle.textContent = isExpanded ? "+ more" : "Show less";
  });
}
