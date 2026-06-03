const icons = {
  files: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5.5 10h7l2 2h12v14H5.5z" />
      <path d="M9 16h9" />
      <path d="M9 20h6" />
      <path d="m20 21.5 2 2 4-4" />
    </svg>
  `,
  calendar: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="6" y="7.5" width="20" height="18" rx="2.5" />
      <path d="M11 5v5" />
      <path d="M21 5v5" />
      <path d="M6 13h20" />
      <circle cx="20.5" cy="20" r="3.5" />
      <path d="M20.5 18v2.2l1.6 1" />
    </svg>
  `,
  message: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5.5 9.5h18a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5h-18z" />
      <path d="m6.5 12 8.8 6.2L24 12" />
      <circle cx="24" cy="8" r="3" />
    </svg>
  `,
  overview: `
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="8" y="5.5" width="16" height="21" rx="2.5" />
      <path d="M12 10h8" />
      <path d="M12 15h3" />
      <path d="M18 15h2" />
      <path d="M12 20h3" />
      <path d="M18 20h2" />
    </svg>
  `,
};

const services = [
  {
    number: "01",
    icon: "files",
    iconClass: "red",
    title: "File reset & organisation",
    text: "I sort scattered files, email attachments and old folders into a clear structure that is easier to search, update and share.",
    panelLabel: "Step 1 preview",
    panelBody:
      "I discuss your needs, review how your files are currently stored, and identify what needs sorting first. Then I create a clear folder structure so documents are easier to find, maintain and share.",
    before: [
      "Documents",
      "New folder",
      "stuff",
      "insurance latest",
      "RAMS maybe",
      "desktop files",
      "scan0001.pdf",
      "old certs",
      "downloads",
      "misc",
    ],
    after: [
      "00_Admin",
      "01_Insurance",
      "02_Accreditations",
      "03_RAMS",
      "04_Training_Records",
      "05_Quotes_&_Tenders",
      "06_Job_Documents",
      "Archive",
    ],
  },
  {
    number: "02",
    icon: "calendar",
    iconClass: "teal",
    title: "Deadline & renewal tracking",
    text: "I record key dates, renewals, certificates, checks and deadlines so nothing important gets missed.",
    panelLabel: "Step 2 preview",
    panelBody:
      "Placeholder content for service 2. This area will later show tracked renewal dates, upcoming deadlines and expiry warnings.",
  },
  {
    number: "03",
    icon: "message",
    iconClass: "amber",
    title: "Missing info chasing",
    text: "I keep on top of missing documents, details, approvals and updates so everything stays complete and up to date.",
    panelLabel: "Step 3 preview",
    panelBody:
      "Placeholder content for service 3. This area will later show missing documents, requested information and follow-up progress.",
  },
  {
    number: "04",
    icon: "overview",
    iconClass: "blue",
    title: "Monthly admin overview",
    text: "You get a simple monthly summary showing what is sorted, what is missing, what is expiring soon and what needs action.",
    panelLabel: "Step 4 preview",
    panelBody:
      "Placeholder content for service 4. This area will later show a monthly summary of what is sorted, missing, expiring soon and needing action.",
  },
];

function renderServiceStep(service, index) {
  const isActive = index === 0;

  return `
    <button
      class="service-step ${service.iconClass}${isActive ? " is-active" : ""}"
      type="button"
      data-service-step="${index}"
      aria-pressed="${isActive}"
    >
      <span class="service-step-number">${service.number}</span>
      <span class="service-step-icon ${service.iconClass}">${icons[service.icon]}</span>
      <span class="service-step-copy">
        <span class="service-step-title">${service.title}</span>
        <span class="service-step-text">${service.text}</span>
      </span>
    </button>
  `;
}

function renderMoreRow(count, side) {
  return `
    <li>
      <button class="comparison-row more-row" type="button" data-comparison-item="${side}">
        + ${count} more
      </button>
    </li>
  `;
}

function renderComparisonList(items, side, isExpanded) {
  const visibleItems = isExpanded ? items : items.slice(0, 5);
  const hiddenCount = items.length - visibleItems.length;
  const itemRows = visibleItems
    .map(
      (item) => `
        <li>
          <button class="comparison-row" type="button" data-comparison-item="${side}">
            ${item}
          </button>
        </li>
      `
    )
    .join("");

  return `${itemRows}${!isExpanded && hiddenCount > 0 ? renderMoreRow(hiddenCount, side) : ""}`;
}

function renderComparisonCard(label, side, items, expandedSide) {
  const isExpanded = expandedSide === side;
  const buttonLabel = `${isExpanded ? "Minimise" : "Expand"} ${side} example`;
  const icon = isExpanded
    ? `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 4v5H4" />
        <path d="M15 20v-5h5" />
        <path d="M4 9l5-5" />
        <path d="m15 15 5 5" />
      </svg>
    `
    : `
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 4H4v5" />
        <path d="M15 20h5v-5" />
        <path d="M4 4l6 6" />
        <path d="m14 14 6 6" />
      </svg>
    `;

  return `
    <div class="comparison-card ${side}${isExpanded ? " is-expanded" : ""}">
      <div class="comparison-card-header">
        <span>${label}</span>
        <button
          class="comparison-expand"
          type="button"
          data-comparison-toggle="${side}"
          aria-pressed="${isExpanded}"
          aria-label="${buttonLabel}"
        >
          ${icon}
        </button>
      </div>
      <ul>${renderComparisonList(items, side, isExpanded)}</ul>
    </div>
  `;
}

function renderPreviewContent(service, expandedSide = null) {
  const comparison =
    service.before && service.after
      ? `
        <div class="service-comparison${expandedSide ? " is-expanded" : ""}" data-expanded-side="${expandedSide || ""}">
          ${
            expandedSide === "after"
              ? ""
              : renderComparisonCard("Before", "before", service.before, expandedSide)
          }
          ${
            expandedSide === "before"
              ? ""
              : renderComparisonCard("After", "after", service.after, expandedSide)
          }
        </div>
      `
      : "";

  return `
    <div class="service-preview-heading">
      <h3 data-service-preview-title>${service.title}</h3>
      <span class="service-preview-label" data-service-preview-label>${service.panelLabel}</span>
    </div>
    <p class="${expandedSide ? "is-hidden" : ""}" data-service-preview-body>${service.panelBody}</p>
    <div data-service-preview-extra>${comparison}</div>
  `;
}

export function ServicesSection() {
  const activeService = services[0];

  return `
    <section class="section services-section" id="services">
      <div class="container">
        <div class="section-heading services-heading">
          <p class="section-label">WHAT I DO</p>
          <h2>Practical admin support for keeping business paperwork under control.</h2>
          <p>
            I take the admin off your plate so you can focus on running your
            business. Everything is organised, tracked and easier to manage.
          </p>
        </div>

        <div class="services-workflow">
          <div class="service-steps" aria-label="Admin support services">
            ${services.map((service, index) => renderServiceStep(service, index)).join("")}
          </div>

          <aside class="service-preview ${activeService.iconClass}" data-service-preview aria-live="polite">
            ${renderPreviewContent(activeService)}
          </aside>
        </div>

        <p class="services-reassurance">
          <span class="reassurance-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="m6 12 4 4 8-8" />
            </svg>
          </span>
          <span>Clear records. Fewer chasing emails. Less stress. More time for the work that matters.</span>
        </p>
      </div>
    </section>
  `;
}

export function initServicesSection() {
  const section = document.querySelector(".services-section");
  const preview = section?.querySelector("[data-service-preview]");
  const steps = section?.querySelectorAll("[data-service-step]");

  if (!section || !preview || !steps?.length) {
    return;
  }

  let activeServiceIndex = 0;
  let expandedComparisonSide = null;

  function setActiveService(index) {
    activeServiceIndex = index;
    expandedComparisonSide = null;

    const service = services[index] || services[0];

    steps.forEach((step) => {
      const isActive = Number(step.dataset.serviceStep) === index;

      step.classList.toggle("is-active", isActive);
      step.setAttribute("aria-pressed", String(isActive));
    });

    preview.classList.remove("red", "teal", "amber", "blue", "is-changing");
    preview.classList.add(service.iconClass, "is-changing");
    preview.innerHTML = renderPreviewContent(service, expandedComparisonSide);

    window.setTimeout(() => {
      preview.classList.remove("is-changing");
    }, 160);
  }

  steps.forEach((step) => {
    step.addEventListener("click", () => {
      setActiveService(Number(step.dataset.serviceStep));
    });
  });

  preview.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-comparison-toggle]");

    if (!toggle) {
      return;
    }

    const side = toggle.dataset.comparisonToggle;
    const service = services[activeServiceIndex] || services[0];

    expandedComparisonSide = expandedComparisonSide === side ? null : side;
    preview.innerHTML = renderPreviewContent(service, expandedComparisonSide);
  });
}
