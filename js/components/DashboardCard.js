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
  },
  {
    id: "updates",
    label: "Recent updates",
  },
];

const reports = {
  overview: {
    heading: "Monthly overview",
    meta: "March",
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
        details: ["CHAS Evidence Pack - March Update.pdf"],
      },
    ],
  },
};

const dashboardState = {
  activeTab: "overview",
  expiryExpanded: false,
  expandedRows: new Set(),
};

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
  const report = reports[tabId] || reports.overview;

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
              class="report-tab"
              type="button"
              role="tab"
              aria-selected="${tab.id === activeTab}"
              data-report-tab="${tab.id}"
            >
              ${tab.label}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

export function DashboardCard() {
  return `
    <div class="dashboard-demo">
      <div class="example-switcher" aria-label="Example report selector">
        <button type="button" aria-label="Previous example">&lsaquo;</button>
        <span>Contractor file check example</span>
        <button type="button" aria-label="Next example">&rsaquo;</button>
      </div>

      <aside class="dashboard-card" aria-label="Sample admin report">
        <div class="dashboard-top">
          <span>Tees Example Construction</span>
          <span>Updated today, 09:15</span>
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

function updateDashboard(dashboard) {
  const body = dashboard.querySelector("[data-report-body]");
  const tabButtons = dashboard.querySelectorAll("[data-report-tab]");

  if (!body) {
    return;
  }

  body.innerHTML = renderReport(dashboardState.activeTab);
  body.dataset.activeReport = dashboardState.activeTab;
  const report = reports[dashboardState.activeTab] || reports.overview;
  const hasExpandedRow = report.rows.some(
    (row) => row.expandKey && dashboardState.expandedRows.has(row.expandKey)
  );

  body.dataset.scrollable = String(
    (dashboardState.activeTab === "expiry" && dashboardState.expiryExpanded) || hasExpandedRow
  );

  tabButtons.forEach((tabButton) => {
    const isActive = tabButton.dataset.reportTab === dashboardState.activeTab;
    tabButton.setAttribute("aria-selected", String(isActive));
  });
}

export function initDashboardCard() {
  const dashboard = document.querySelector(".dashboard-card");

  if (!dashboard || dashboard.dataset.dashboardReady === "true") {
    return;
  }

  dashboard.dataset.dashboardReady = "true";

  dashboard.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-report-tab]");
    const expiryToggle = event.target.closest("[data-expiry-toggle]");
    const expandToggle = event.target.closest("[data-expand-key]");

    if (tabButton) {
      dashboardState.activeTab = tabButton.dataset.reportTab;
      updateDashboard(dashboard);
      return;
    }

    if (expiryToggle) {
      dashboardState.expiryExpanded = !dashboardState.expiryExpanded;
      updateDashboard(dashboard);
      return;
    }

    if (expandToggle) {
      const expandKey = expandToggle.dataset.expandKey;

      if (dashboardState.expandedRows.has(expandKey)) {
        dashboardState.expandedRows.delete(expandKey);
      } else {
        dashboardState.expandedRows.add(expandKey);
      }

      updateDashboard(dashboard);
    }
  });
}
