const metrics = [
  {
    icon: "&#9633;",
    iconClass: "",
    value: "86",
    label: "Documents sorted",
  },
  {
    icon: "&#9671;",
    iconClass: " blue",
    value: "14",
    label: "Deadlines tracked",
  },
  {
    icon: "!",
    iconClass: " orange",
    value: "7",
    label: "Missing items",
  },
  {
    icon: "&#9675;",
    iconClass: "",
    value: "5",
    label: "Follow-ups due",
  },
];

const priorities = [
  {
    status: "current",
    label: "Insurance certificate",
    pill: "Current",
  },
  {
    status: "due",
    label: "CHAS renewal",
    pill: "Due soon",
  },
  {
    status: "missing",
    label: "Training card",
    pill: "Missing",
  },
  {
    status: "today",
    label: "Quote follow-up",
    pill: "Today",
  },
];

export function DashboardCard() {
  return `
    <aside class="dashboard-card" aria-label="Admin overview example">
      <div class="dashboard-top">
        <span>Admin overview</span>
        <span>Updated today, 09:15</span>
      </div>

      <div class="metrics-grid">
        ${metrics
          .map(
            (metric) => `
              <div class="metric-card">
                <span class="metric-icon${metric.iconClass}">${metric.icon}</span>
                <strong>${metric.value}</strong>
                <span>${metric.label}</span>
              </div>
            `
          )
          .join("")}
      </div>

      <div class="priority-list">
        <h3>Today&rsquo;s priorities</h3>

        ${priorities
          .map(
            (priority) => `
              <div class="priority-row">
                <span class="status-dot ${priority.status}"></span>
                <span>${priority.label}</span>
                <span class="status-pill ${priority.status}">${priority.pill}</span>
              </div>
            `
          )
          .join("")}
      </div>
    </aside>
  `;
}
