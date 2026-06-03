const tabs = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "expiry",
    label: "Expiry",
  },
  {
    id: "missing",
    label: "Missing items",
    shortLabel: "Missing",
  },
  {
    id: "updates",
    label: "Recent updates",
    shortLabel: "Recent",
  },
];

const currentMonth = new Intl.DateTimeFormat("en-GB", { month: "long" }).format(new Date());

const examples = [
  {
    id: "contractor-file-check",
    label: "Contractor file check example",
    title: "Tees Example Construction",
    updatedLabel: "Updated today, 09:15",
    reports: {
      overview: {
        heading: "Monthly overview",
        meta: currentMonth,
        metrics: [
          {
            icon: "&check;",
            iconClass: "",
            value: "86",
            label: "Documents checked",
          },
          {
            icon: "",
            iconClass: " blue calendar",
            value: "14",
            label: "Renewals tracked",
          },
          {
            icon: "?",
            iconClass: " orange",
            value: "4",
            label: "Missing items",
          },
          {
            icon: "!",
            iconClass: " red",
            value: "3",
            label: "Expiry warning",
          },
        ],
        rows: [
          {
            status: "expired",
            label: "1 document expired",
            pill: "Action needed",
          },
          {
            status: "expiring",
            label: "2 documents expiring soon",
            pill: "Due soon",
          },
          {
            status: "missing",
            label: "4 missing documents still needed",
            pill: "Missing",
          },
          {
            status: "updated",
            label: "6 new documents sorted and tracked",
            pill: "Updated",
          },
        ],
      },
      expiry: {
        heading: "Expiry",
        rows: [
          {
            status: "expired",
            label: "Public liability insurance",
            pill: "Expired",
          },
          {
            status: "expiring",
            label: "CHAS renewal",
            pill: "31 days",
          },
          {
            status: "expiring",
            label: "First aid certificate",
            pill: "68 days",
          },
        ],
        moreRows: [
          {
            status: "future",
            label: "Vehicle insurance",
            pill: "104 days",
          },
          {
            status: "future",
            label: "Asbestos awareness certificate",
            pill: "118 days",
          },
          {
            status: "future",
            label: "Waste carrier registration",
            pill: "146 days",
          },
        ],
      },
      missing: {
        heading: "Missing items",
        rows: [
          {
            status: "missing",
            label: "RAMS missing",
            pill: "Missing",
          },
          {
            status: "missing",
            label: "Updated insurance certificate missing",
            pill: "Missing",
          },
          {
            status: "missing",
            label: "Training records folder",
            pill: "Incomplete",
            expandKey: "training-records",
            details: [
              "Jordan Smith &mdash; CSCS card missing",
              "Liam Brown &mdash; IPAF card missing",
            ],
          },
        ],
      },
      updates: {
        heading: "Recent updates",
        rows: [
          {
            status: "updated",
            label: "2 documents added to Insurance folder",
            pill: "2 files",
            expandKey: "insurance-folder",
            details: [
              "Public Liability Insurance 2026.pdf",
              "Employers Liability Insurance 2026.pdf",
            ],
          },
          {
            status: "updated",
            label: "2 documents added to Training records folder",
            pill: "2 files",
            expandKey: "training-folder-updates",
            details: [
              "Chloe Walker CSCS Card.pdf",
              "Nathan Reed IPAF Certificate.pdf",
            ],
          },
          {
            status: "updated",
            label: "1 document added to RAMS folder",
            pill: "1 file",
            expandKey: "rams-folder",
            details: ["Site RAMS - Stockton Job.pdf"],
          },
          {
            status: "updated",
            label: "1 document added to CHAS evidence folder",
            pill: "1 file",
            expandKey: "chas-folder",
            details: [`CHAS Evidence Pack - ${currentMonth} Update.pdf`],
          },
        ],
      },
    },
  },
  {
    id: "large-construction-firm",
    label: "Large construction firm example",
    title: "Tees Example Large Contractor",
    updatedLabel: "Updated today, 10:23",
    reports: {
      overview: {
        heading: "Monthly overview",
        meta: currentMonth,
        metrics: [
          {
            icon: "&check;",
            iconClass: "",
            value: "9,240",
            label: "Documents checked",
          },
          {
            icon: "",
            iconClass: " blue calendar",
            value: "186",
            label: "Renewals tracked",
          },
          {
            icon: "?",
            iconClass: " orange",
            value: "23",
            label: "Missing items",
          },
          {
            icon: "!",
            iconClass: " red",
            value: "11",
            label: "Expiry warning",
          },
        ],
        rows: [
          {
            status: "expired",
            label: "3 documents expired",
            pill: "Action needed",
          },
          {
            status: "expiring",
            label: "8 documents expiring soon",
            pill: "Due soon",
          },
          {
            status: "missing",
            label: "23 missing documents still needed",
            pill: "Missing",
          },
          {
            status: "updated",
            label: "42 new documents sorted and tracked",
            pill: "Updated",
          },
        ],
      },
      expiry: {
        heading: "Expiry",
        rows: [
          {
            status: "expired",
            label: "3 expired documents",
            pill: "Action needed",
            expandKey: "large-expired-documents",
            details: [
              "Fleet insurance renewal &mdash; Expired",
              "Crane lift plan review &mdash; Expired",
              "Forklift inspection certificate &mdash; Expired",
            ],
          },
          {
            status: "expiring",
            label: "8 expiring soon documents",
            pill: "Due soon",
            expandKey: "large-expiring-documents",
            details: [
              "CHAS renewal &mdash; 18 days",
              "First aid training batch &mdash; 44 days",
              "Scaffold inspection records &mdash; 62 days",
              "+ 5 more expiring soon",
            ],
          },
        ],
      },
      missing: {
        heading: "Missing items",
        rows: [
          {
            status: "missing",
            label: "7 subcontractor insurance documents missing",
            pill: "7 missing",
            expandKey: "large-subcontractor-insurance",
            details: [
              "Northstar Scaffolding &mdash; Public liability certificate missing",
              "Tees Plant Hire &mdash; Employers liability certificate missing",
              "Riverbank Electrical &mdash; Insurance renewal copy missing",
              "+ 4 more subcontractor documents",
            ],
          },
          {
            status: "missing",
            label: "5 RAMS documents missing",
            pill: "5 missing",
            expandKey: "large-rams-missing",
            details: [
              "Stockton warehouse RAMS missing",
              "Darlington roof access RAMS missing",
              "Middlesbrough fit-out RAMS missing",
              "+ 2 more RAMS documents",
            ],
          },
          {
            status: "missing",
            label: "11 training records incomplete",
            pill: "Incomplete",
            expandKey: "large-training-records",
            details: [
              "Aaron Price &mdash; CSCS card missing",
              "Michael Turner &mdash; IPAF card missing",
              "Daniel Hughes &mdash; First aid certificate missing",
              "Sarah Collins &mdash; Asbestos awareness certificate missing",
              "+ 7 more training records",
            ],
          },
        ],
      },
      updates: {
        heading: "Recent updates",
        rows: [
          {
            status: "updated",
            label: "14 documents added to Insurance folder",
            pill: "14 files",
            expandKey: "large-insurance-folder",
            details: [
              "Fleet Insurance Schedule 2026.pdf",
              "Employers Liability Certificate 2026.pdf",
              "Public Liability Certificate 2026.pdf",
              "+ 11 more files",
            ],
          },
          {
            status: "updated",
            label: "12 documents added to Training records folder",
            pill: "12 files",
            expandKey: "large-training-folder-updates",
            details: [
              "Sophie Carter CSCS Card.pdf",
              "Ben Morris IPAF Certificate.pdf",
              "Priya Shah First Aid Certificate.pdf",
              "+ 9 more files",
            ],
          },
          {
            status: "updated",
            label: "9 documents added to RAMS folder",
            pill: "9 files",
            expandKey: "large-rams-folder",
            details: [
              "RAMS - Middlesbrough Office Fit-Out.pdf",
              "RAMS - Stockton Warehouse Works.pdf",
              "RAMS - Darlington Roof Access.pdf",
              "+ 6 more files",
            ],
          },
          {
            status: "updated",
            label: "7 documents added to CHAS evidence folder",
            pill: "7 files",
            expandKey: "large-chas-folder",
            details: [
              `CHAS Evidence Pack - ${currentMonth} Update.pdf`,
              "Accident Reporting Procedure.pdf",
              "Health and Safety Policy 2026.pdf",
              "+ 4 more files",
            ],
          },
        ],
      },
    },
  },
];

const dashboardState = {
  activeExampleIndex: 0,
  activeTab: "overview",
  expiryExpanded: false,
  expandedRows: new Set(),
};

function getActiveExample() {
  return examples[dashboardState.activeExampleIndex] || examples[0];
}

function getActiveReport(tabId = dashboardState.activeTab) {
  return getActiveExample().reports[tabId] || getActiveExample().reports.overview;
}

function renderMetric(metric) {
  return `
    <div class="metric-card">
      <span class="metric-icon${metric.iconClass}">${metric.icon}</span>
      <strong>${metric.value}</strong>
      <span>${metric.label}</span>
    </div>
  `;
}

function renderDetails(details) {
  return `
    <div class="row-details">
      ${details
        .map(
          (detail) => `
            <div class="row-detail">
              <span class="detail-dot"></span>
              <span>${detail}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderRow(row) {
  const isExpanded = row.expandKey ? dashboardState.expandedRows.has(row.expandKey) : false;

  return `
    <div class="priority-row${row.expandKey ? " expandable" : ""}">
      <span class="status-dot ${row.status}"></span>
      ${
        row.expandKey
          ? `
            <button
              class="row-expand-toggle"
              type="button"
              aria-expanded="${isExpanded}"
              data-expand-key="${row.expandKey}"
            >
              <span>${row.label}</span>
              <span class="expand-indicator">${isExpanded ? "-" : "+"}</span>
            </button>
          `
          : `<span>${row.label}</span>`
      }
      <span class="status-pill ${row.status}">${row.pill}</span>
    </div>
    ${row.details && isExpanded ? renderDetails(row.details) : ""}
  `;
}

function renderExpiryMore(report) {
  return `
    ${dashboardState.expiryExpanded ? report.moreRows.map((row) => renderRow(row)).join("") : ""}
    <div class="report-more">
      <button type="button" data-expiry-toggle>
        ${dashboardState.expiryExpanded ? "Show less" : "View more"}
      </button>
    </div>
  `;
}

function renderReport(tabId) {
  const report = getActiveReport(tabId);

  return `
    ${
      report.metrics
        ? `
          <div class="metrics-grid">
            ${report.metrics.map((metric) => renderMetric(metric)).join("")}
          </div>
        `
        : ""
    }

    <div class="priority-list">
      <div class="priority-heading">
        <h3>${report.heading}</h3>
        ${report.meta ? `<span>${report.meta}</span>` : ""}
      </div>
      ${report.rows.map((row) => renderRow(row)).join("")}
      ${report.moreRows ? renderExpiryMore(report) : ""}
    </div>
  `;
}

function renderTabs(activeTab) {
  return `
    <div class="report-tabs" role="tablist" aria-label="Sample report pages">
      ${tabs
        .map(
          (tab) => `
            <button
              class="report-tab${tab.shortLabel ? " has-short-label" : ""}"
              type="button"
              role="tab"
              aria-selected="${tab.id === activeTab}"
              data-report-tab="${tab.id}"
            >
              <span class="report-tab-label-full">${tab.label}</span>
              ${tab.shortLabel ? `<span class="report-tab-label-short">${tab.shortLabel}</span>` : ""}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function updateDashboardScrollState(body) {
  if (!body) {
    return;
  }

  body.classList.remove("is-scrollable");
  body.dataset.scrollable = "false";
  body.scrollTop = 0;

  requestAnimationFrame(() => {
    const isScrollable = body.scrollHeight > body.clientHeight + 1;

    body.classList.toggle("is-scrollable", isScrollable);
    body.dataset.scrollable = String(isScrollable);

    if (!isScrollable) {
      body.scrollTop = 0;
    }
  });
}

export function DashboardCard() {
  const activeExample = getActiveExample();

  return `
    <div class="dashboard-demo">
      <div class="example-switcher" aria-label="Example report selector">
        <button type="button" aria-label="Previous example" data-example-direction="-1">&lsaquo;</button>
        <span data-example-label>${activeExample.label}</span>
        <button type="button" aria-label="Next example" data-example-direction="1">&rsaquo;</button>
      </div>

      <aside class="dashboard-card" aria-label="Sample admin report">
        <div class="dashboard-top">
          <span data-dashboard-title>${activeExample.title}</span>
          <span data-dashboard-updated>${activeExample.updatedLabel}</span>
        </div>

        ${renderTabs(dashboardState.activeTab)}

        <div
          class="dashboard-body"
          data-report-body
          data-active-report="${dashboardState.activeTab}"
          data-scrollable="false"
        >
          ${renderReport(dashboardState.activeTab)}
        </div>
      </aside>
    </div>
  `;
}

function switchExample(direction) {
  dashboardState.activeExampleIndex =
    (dashboardState.activeExampleIndex + direction + examples.length) % examples.length;
  dashboardState.expiryExpanded = false;
  dashboardState.expandedRows.clear();
}

function updateDashboard(demo) {
  const activeExample = getActiveExample();
  const body = demo.querySelector("[data-report-body]");
  const exampleLabel = demo.querySelector("[data-example-label]");
  const dashboardTitle = demo.querySelector("[data-dashboard-title]");
  const dashboardUpdated = demo.querySelector("[data-dashboard-updated]");
  const tabButtons = demo.querySelectorAll("[data-report-tab]");

  if (!body) {
    return;
  }

  if (exampleLabel) {
    exampleLabel.textContent = activeExample.label;
  }

  if (dashboardTitle) {
    dashboardTitle.textContent = activeExample.title;
  }

  if (dashboardUpdated) {
    dashboardUpdated.textContent = activeExample.updatedLabel;
  }

  body.innerHTML = renderReport(dashboardState.activeTab);
  body.dataset.activeReport = dashboardState.activeTab;

  updateDashboardScrollState(body);

  tabButtons.forEach((tabButton) => {
    const isActive = tabButton.dataset.reportTab === dashboardState.activeTab;
    tabButton.setAttribute("aria-selected", String(isActive));
  });
}

export function initDashboardCard() {
  const demo = document.querySelector(".dashboard-demo");

  if (!demo || demo.dataset.dashboardReady === "true") {
    return;
  }

  demo.dataset.dashboardReady = "true";
  updateDashboardScrollState(demo.querySelector("[data-report-body]"));

  demo.addEventListener("click", (event) => {
    const exampleButton = event.target.closest("[data-example-direction]");
    const tabButton = event.target.closest("[data-report-tab]");
    const expiryToggle = event.target.closest("[data-expiry-toggle]");
    const expandToggle = event.target.closest("[data-expand-key]");

    if (exampleButton) {
      switchExample(Number(exampleButton.dataset.exampleDirection));
      updateDashboard(demo);
      return;
    }

    if (tabButton) {
      dashboardState.activeTab = tabButton.dataset.reportTab;
      updateDashboard(demo);
      return;
    }

    if (expiryToggle) {
      dashboardState.expiryExpanded = !dashboardState.expiryExpanded;
      updateDashboard(demo);
      return;
    }

    if (expandToggle) {
      const expandKey = expandToggle.dataset.expandKey;

      if (dashboardState.expandedRows.has(expandKey)) {
        dashboardState.expandedRows.delete(expandKey);
      } else {
        dashboardState.expandedRows.add(expandKey);
      }

      updateDashboard(demo);
    }
  });
}
