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
      {
        name: "IMPORTANT/",
        children: [
          { name: "RAMS template.docx" },
          { name: "Stockton job RAMS final.pdf" },
          { name: "rams final final v2.pdf" },
          { name: "health and safety policy old.docx" },
        ],
      },
      { name: "New admin 2026/" },
      { name: "photos/" },
      {
        name: "Training certs and records/",
        children: [
          { name: "Dave CSCS.jpg" },
          { name: "John forklift cert.pdf" },
          { name: "first aid expired.pdf" },
          { name: "IPAF - need new copy.png" },
        ],
      },
      {
        name: "Quotes and jobs/",
        children: [
          { name: "quote 1.docx" },
          { name: "Wilson job quote sent.pdf" },
          { name: "accepted quote maybe.pdf" },
          { name: "old quotes/", children: [{ name: "abc builders quote.pdf" }, { name: "smith job quote.docx" }] },
        ],
      },
      {
        name: "2025/26 admin bits/",
        children: [
          { name: "public liability 2024.pdf" },
          { name: "employers liability.pdf" },
          { name: "old company info.docx" },
          { name: "notes for renewal.txt" },
        ],
      },
      {
        name: "Insurance docs/",
        children: [
          { name: "PL certificate latest.pdf" },
          { name: "employers liability 2025 maybe.pdf" },
          { name: "insurance schedule.pdf" },
          { name: "old insurance/", children: [{ name: "insurance 2022.pdf" }, { name: "insurance 2023.pdf" }] },
        ],
      },
      {
        name: "Job docs current/",
        children: [
          { name: "site photos/" },
          { name: "method statement.docx" },
          { name: "invoice details.txt" },
          { name: "customer email.pdf" },
        ],
      },
      {
        name: "New folder/",
        children: [{ name: "scan0001.pdf" }, { name: "scan0002.pdf" }, { name: "image.jpg" }],
      },
      {
        name: "New folder (2)/",
        children: [{ name: "document.pdf" }, { name: "cert maybe.pdf" }],
      },
      {
        name: "Downloads/",
        children: [{ name: "download.pdf" }, { name: "download (1).pdf" }, { name: "download (2).pdf" }],
      },
      {
        name: "desktop stuff/",
        children: [{ name: "rams.pdf" }, { name: "insurance.pdf" }, { name: "screenshot.png" }],
      },
      {
        name: "OLD CERTS/",
        children: [
          { name: "expired insurance.pdf" },
          { name: "gas safe old.pdf" },
          { name: "training expired.jpg" },
        ],
      },
      {
        name: "tender bits/",
        children: [
          { name: "evidence.pdf" },
          { name: "company info.docx" },
          { name: "need to update this.docx" },
        ],
      },
      {
        name: "Accreditation/",
        children: [{ name: "safecontractor.pdf" }, { name: "CHAS old.pdf" }, { name: "application notes.docx" }],
      },
      {
        name: "invoices and receipts/",
        children: [{ name: "invoice march.pdf" }, { name: "unpaid maybe.xlsx" }, { name: "receipt fuel.jpg" }],
      },
      {
        name: "email attachments/",
        children: [{ name: "attachment.pdf" }, { name: "attachment2.pdf" }, { name: "sent by Tom.pdf" }],
      },
      {
        name: "WhatsApp files/",
        children: [{ name: "IMG_4812.jpg" }, { name: "IMG_4813.jpg" }, { name: "site video.mp4" }],
      },
      {
        name: "company docs/",
        children: [{ name: "bank letter.pdf" }, { name: "company number.txt" }, { name: "policy.pdf" }],
      },
      {
        name: "certificates/",
        children: [{ name: "cert.pdf" }, { name: "cert new.pdf" }, { name: "dave cert.pdf" }],
      },
      {
        name: "subcontractors/",
        children: [{ name: "tom insurance.pdf" }, { name: "steve cscs.jpg" }, { name: "need public liability.pdf" }],
      },
      {
        name: "jobs old/",
        children: [{ name: "Hartlepool job/" }, { name: "Stockton site/" }, { name: "Middlesbrough quote stuff/" }],
      },
      { name: "Public Liability 2025.pdf" },
      { name: "RAMS final final v2.pdf" },
      { name: "scan0001.pdf" },
      { name: "Untitled spreadsheet.xlsx" },
      { name: "cert.jpg" },
      { name: "notes.txt" },
    ],
    after: [
      {
        name: "00 Admin/",
        type: "folder",
        children: [
          {
            name: "Company_Details/",
            type: "folder",
            children: [
              { name: "Company_Info_Old.docx", type: "file" },
              { name: "Company_Number.txt", type: "file" },
              { name: "Bank_Letter.pdf", type: "file" },
            ],
          },
          {
            name: "Policies/",
            type: "folder",
            children: [
              { name: "Company_Policy.pdf", type: "file" },
              { name: "Health_and_Safety_Policy_Current.docx", type: "file" },
            ],
          },
          {
            name: "Renewal_Notes/",
            type: "folder",
            children: [{ name: "Renewal_Notes_2025.txt", type: "file" }],
          },
        ],
      },
      {
        name: "01 Insurance/",
        type: "folder",
        children: [
          {
            name: "Current/",
            type: "folder",
            children: [
              { name: "Public_Liability_2025.pdf", type: "file" },
              { name: "Employers_Liability_2025_To_Confirm.pdf", type: "file" },
              { name: "Insurance_Schedule_2025.pdf", type: "file" },
            ],
          },
          {
            name: "Previous/",
            type: "folder",
            children: [
              { name: "Public_Liability_2024.pdf", type: "file" },
              { name: "Insurance_2023.pdf", type: "file" },
              { name: "Insurance_2022.pdf", type: "file" },
            ],
          },
          {
            name: "To_Check/",
            type: "folder",
            children: [
              { name: "Employers_Liability_To_Confirm.pdf", type: "file" },
              { name: "Insurance_From_Desktop_To_Check.pdf", type: "file" },
              { name: "Public_Liability_2025_Duplicate_To_Check.pdf", type: "file" },
            ],
          },
        ],
      },
      {
        name: "02 Health & Safety RAMS/",
        type: "folder",
        children: [
          {
            name: "RAMS_Templates/",
            type: "folder",
            children: [{ name: "RAMS_Template.docx", type: "file" }],
          },
          {
            name: "Job_RAMS/",
            type: "folder",
            children: [
              { name: "Stockton_Job_RAMS_Final.pdf", type: "file" },
              { name: "RAMS_Final_v2_To_Check.pdf", type: "file" },
              { name: "RAMS_From_Desktop_To_Check.pdf", type: "file" },
              { name: "RAMS_Final_v2_Duplicate_To_Check.pdf", type: "file" },
            ],
          },
          {
            name: "Policies/",
            type: "folder",
            children: [{ name: "Health_and_Safety_Policy_Old.docx", type: "file" }],
          },
          {
            name: "Method_Statements/",
            type: "folder",
            children: [{ name: "Method_Statement.docx", type: "file" }],
          },
        ],
      },
      {
        name: "03 Training Records/",
        type: "folder",
        children: [
          {
            name: "Current/",
            type: "folder",
            children: [
              { name: "Dave_CSCS_Card.jpg", type: "file" },
              { name: "John_Forklift_Certificate.pdf", type: "file" },
              { name: "Dave_Certificate_To_Check.pdf", type: "file" },
            ],
          },
          {
            name: "Expired_or_To_Update/",
            type: "folder",
            children: [
              { name: "First_Aid_Expired.pdf", type: "file" },
              { name: "IPAF_Need_New_Copy.png", type: "file" },
              { name: "Training_Expired.jpg", type: "file" },
            ],
          },
        ],
      },
      {
        name: "04 Accreditations/",
        type: "folder",
        children: [
          {
            name: "Current/",
            type: "folder",
            children: [{ name: "SafeContractor.pdf", type: "file" }],
          },
          {
            name: "Previous_or_To_Update/",
            type: "folder",
            children: [
              { name: "CHAS_Old.pdf", type: "file" },
              { name: "Accreditation_Application_Notes.docx", type: "file" },
            ],
          },
        ],
      },
      {
        name: "05 Quotes & Tenders/",
        type: "folder",
        children: [
          {
            name: "Quotes_Sent/",
            type: "folder",
            children: [
              { name: "Wilson_Job_Quote_Sent.pdf", type: "file" },
              { name: "ABC_Builders_Quote.pdf", type: "file" },
              { name: "Smith_Job_Quote.docx", type: "file" },
            ],
          },
          {
            name: "Accepted_or_To_Check/",
            type: "folder",
            children: [
              { name: "Accepted_Quote_To_Confirm.pdf", type: "file" },
              { name: "Quote_1_To_Confirm.docx", type: "file" },
            ],
          },
          {
            name: "Tender_Evidence/",
            type: "folder",
            children: [
              { name: "Tender_Evidence.pdf", type: "file" },
              { name: "Company_Info_For_Tenders.docx", type: "file" },
              { name: "Tender_Info_To_Update.docx", type: "file" },
            ],
          },
        ],
      },
      {
        name: "06 Job Documents/",
        type: "folder",
        children: [
          {
            name: "Current_Jobs/",
            type: "folder",
            children: [
              { name: "Customer_Email.pdf", type: "file" },
              { name: "Invoice_Details.txt", type: "file" },
            ],
          },
          {
            name: "Job_Photos/",
            type: "folder",
            children: [
              { name: "Site_Photos/", type: "folder" },
              { name: "IMG_4812.jpg", type: "file" },
              { name: "IMG_4813.jpg", type: "file" },
              { name: "Site_Video.mp4", type: "file" },
            ],
          },
          {
            name: "Previous_Jobs/",
            type: "folder",
            children: [
              { name: "Hartlepool_Job/", type: "folder" },
              { name: "Stockton_Site/", type: "folder" },
              { name: "Middlesbrough_Quote_Stuff/", type: "folder" },
            ],
          },
        ],
      },
      {
        name: "07 Subcontractors/",
        type: "folder",
        children: [
          { name: "Tom_Public_Liability.pdf", type: "file" },
          { name: "Steve_CSCS_Card.jpg", type: "file" },
          { name: "Subcontractor_Public_Liability_To_Request.pdf", type: "file" },
        ],
      },
      {
        name: "08 Finance/",
        type: "folder",
        children: [
          {
            name: "Invoices/",
            type: "folder",
            children: [
              { name: "Invoice_March.pdf", type: "file" },
              { name: "Unpaid_Items_To_Check.xlsx", type: "file" },
            ],
          },
          {
            name: "Receipts/",
            type: "folder",
            children: [{ name: "Fuel_Receipt.jpg", type: "file" }],
          },
        ],
      },
      {
        name: "09 To Confirm/",
        type: "folder",
        children: [
          { name: "Scan0001.pdf", type: "file" },
          { name: "Scan0002.pdf", type: "file" },
          { name: "Image_To_Review.jpg", type: "file" },
          { name: "Document_To_Identify.pdf", type: "file" },
          { name: "Certificate_To_Confirm.pdf", type: "file" },
          { name: "Screenshot_To_Review.png", type: "file" },
          { name: "Attachment_To_Identify.pdf", type: "file" },
          { name: "Attachment_2_To_Identify.pdf", type: "file" },
          { name: "Sent_By_Tom_To_Check.pdf", type: "file" },
          { name: "Untitled_Spreadsheet_To_Check.xlsx", type: "file" },
          { name: "Notes_To_Review.txt", type: "file" },
          { name: "Cert_Image_To_Confirm.jpg", type: "file" },
        ],
      },
      {
        name: "99 Archive/",
        type: "folder",
        children: [
          {
            name: "Old_Certificates/",
            type: "folder",
            children: [
              { name: "Expired_Insurance.pdf", type: "file" },
              { name: "Gas_Safe_Old.pdf", type: "file" },
            ],
          },
          {
            name: "Old_Downloads/",
            type: "folder",
            children: [
              { name: "Download.pdf", type: "file" },
              { name: "Download_1.pdf", type: "file" },
              { name: "Download_2.pdf", type: "file" },
            ],
          },
          {
            name: "Original_Messy_Folders/",
            type: "folder",
            children: [
              { name: "New_Folder/", type: "folder" },
              { name: "New_Folder_2/", type: "folder" },
              { name: "Desktop_Stuff/", type: "folder" },
              { name: "Email_Attachments/", type: "folder" },
              { name: "Downloads/", type: "folder" },
              { name: "OLD_CERTS/", type: "folder" },
            ],
          },
        ],
      },
    ],
  },
  {
    number: "02",
    icon: "calendar",
    iconClass: "teal",
    title: "Deadline & renewal tracking",
    text:
      "I track key dates, renewals, certificates, checks and deadlines, then contact you before things run out based on the reminder timing you choose.",
    panelLabel: "Step 2 preview",
    panelBody:
      "A simple tracker keeps expiry dates, follow-ups and review points in one place, sorted by what needs attention first.",
    deadlines: [
      {
        title: "RAMS review",
        source: "02 Health & Safety RAMS",
        daysRemaining: -14,
      },
      {
        title: "Training certificate",
        source: "03 Training Records",
        daysRemaining: 20,
      },
      {
        title: "Public liability insurance",
        source: "01 Insurance",
        daysRemaining: 95,
      },
      {
        title: "Accreditation renewal",
        source: "04 Accreditations",
        daysRemaining: 140,
      },
      {
        title: "Quote follow-up",
        source: "05 Quotes & Tenders",
        daysRemaining: 180,
      },
    ],
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

const COMPARISON_MOBILE_QUERY = "(max-width: 720px)";
const DESKTOP_COMPARISON_VISIBLE_COUNT = 6;
const MOBILE_COMPARISON_VISIBLE_COUNT = 5;
const MOBILE_DEADLINE_VISIBLE_COUNT = 4;

function isMobileServiceViewport() {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(COMPARISON_MOBILE_QUERY).matches
  );
}

function getComparisonVisibleCount() {
  if (isMobileServiceViewport()) {
    return MOBILE_COMPARISON_VISIBLE_COUNT;
  }

  return DESKTOP_COMPARISON_VISIBLE_COUNT;
}

function getDeadlineVisibleCount(deadlineCount) {
  return isMobileServiceViewport() ? MOBILE_DEADLINE_VISIBLE_COUNT : deadlineCount;
}

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
      </span>
    </button>
  `;
}

function renderServiceArrow(direction, disabled) {
  const isPrevious = direction < 0;

  return `
    <button
      class="mobile-service-arrow"
      type="button"
      data-service-direction="${direction}"
      aria-label="${isPrevious ? "Previous service step" : "Next service step"}"
      ${disabled ? "disabled aria-disabled=\"true\"" : ""}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${isPrevious ? "m15 18-6-6 6-6" : "m9 6 6 6-6 6"}" />
      </svg>
    </button>
  `;
}

function renderMobileServiceNavigatorContent(index) {
  const service = services[index] || services[0];

  return `
    ${renderServiceArrow(-1, index === 0)}
    <div class="mobile-service-card ${service.iconClass}" data-mobile-service-card aria-live="polite">
      <span class="service-step-number">${service.number}</span>
      <span class="service-step-icon ${service.iconClass}">${icons[service.icon]}</span>
      <span class="service-step-copy">
        <span class="mobile-service-count">Step ${index + 1} of ${services.length}</span>
        <span class="service-step-title">${service.title}</span>
      </span>
    </div>
    ${renderServiceArrow(1, index === services.length - 1)}
  `;
}

function renderMoreRow(count, side) {
  return `
    <li>
      <button class="comparison-row more-row" type="button" data-comparison-more="${side}">
        + ${count} more
      </button>
    </li>
  `;
}

function getItemKey(side, item, index, parentKey = "") {
  return `${side}-${parentKey}${index}-${item.name}`;
}

function renderComparisonItem(item, side, index, isExpanded, openFolderKeys, depth = 0, parentKey = "") {
  const hasChildren = Boolean(item.children?.length);
  const isFolder = item.type === "folder" || hasChildren || item.name.endsWith("/");
  const itemKey = getItemKey(side, item, index, parentKey);
  const isOpen = isExpanded && openFolderKeys.includes(itemKey);
  const style = depth ? ` style="--depth: ${depth}"` : "";
  const row = hasChildren
    ? `
      <button
        class="comparison-row folder-row${isOpen ? " is-open" : ""}"
        type="button"
        data-comparison-folder="${side}"
        data-folder-key="${itemKey}"
        ${style}
      >
        <span class="file-cue folder-cue"></span>${item.name}
      </button>
    `
    : `
      <span class="comparison-row file-row${isFolder ? " folder-display-row" : ""}"${style}>
        <span class="file-cue${isFolder ? " folder-cue" : ""}"></span>${item.name}
      </span>
    `;
  const children =
    isOpen && hasChildren
      ? `
        <ul class="comparison-nested-list">
          ${item.children
            .map((child, childIndex) =>
              renderComparisonItem(child, side, childIndex, isExpanded, openFolderKeys, depth + 1, `${itemKey}-`)
            )
            .join("")}
        </ul>
      `
      : "";

  return `<li>${row}${children}</li>`;
}

function renderComparisonList(items, side, isExpanded, openFolderKeys) {
  const visibleItems = isExpanded ? items : items.slice(0, getComparisonVisibleCount());
  const hiddenCount = items.length - visibleItems.length;
  const itemRows = visibleItems
    .map((item, index) => renderComparisonItem(item, side, index, isExpanded, openFolderKeys))
    .join("");

  return `${itemRows}${!isExpanded && hiddenCount > 0 ? renderMoreRow(hiddenCount, side) : ""}`;
}

function renderComparisonCard(label, side, items, expandedSide, openFolderKeys) {
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
      <ul data-comparison-list="${side}">${renderComparisonList(items, side, isExpanded, openFolderKeys)}</ul>
    </div>
  `;
}

function addDaysToToday(daysRemaining) {
  const date = new Date();

  date.setHours(12, 0, 0, 0);
  date.setDate(date.getDate() + daysRemaining);

  return date;
}

function formatExpiryDate(daysRemaining) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(addDaysToToday(daysRemaining));
}

function formatDaysRemaining(daysRemaining) {
  if (daysRemaining < 0) {
    return `${Math.abs(daysRemaining)} days overdue`;
  }

  if (daysRemaining === 0) {
    return "Today";
  }

  return `${daysRemaining} ${daysRemaining === 1 ? "day" : "days"}`;
}

function getDeadlineStatus(daysRemaining) {
  if (daysRemaining < 0) {
    return {
      statusClass: "expired",
      statusLabel: "Expired",
    };
  }

  if (daysRemaining < 90) {
    return {
      statusClass: "expiring",
      statusLabel: "Due soon",
    };
  }

  return {
    statusClass: "future",
    statusLabel: "Upcoming",
  };
}

function renderDeadlineTracker(deadlines) {
  const sortedDeadlines = [...deadlines].sort((first, second) => first.daysRemaining - second.daysRemaining);
  const visibleDeadlines = sortedDeadlines.slice(0, getDeadlineVisibleCount(sortedDeadlines.length));

  return `
    <div class="deadline-tracker" aria-label="Deadline tracker example">
      <div class="deadline-tracker-head">
        <span>Item</span>
        <span>Expiry</span>
        <span>Days</span>
        <span>Status</span>
      </div>
      <ul class="deadline-tracker-list">
        ${visibleDeadlines
          .map((deadline) => {
            const status = getDeadlineStatus(deadline.daysRemaining);

            return `
              <li class="deadline-row">
                <span class="deadline-item">
                  <strong>${deadline.title}</strong>
                  <span>${deadline.source}</span>
                </span>
                <span class="deadline-date">${formatExpiryDate(deadline.daysRemaining)}</span>
                <span class="deadline-days">${formatDaysRemaining(deadline.daysRemaining)}</span>
                <span class="status-pill ${status.statusClass}">${status.statusLabel}</span>
              </li>
            `;
          })
          .join("")}
      </ul>
    </div>
  `;
}

function renderPreviewContent(service, expandedSide = null, openFolderKeys = []) {
  const isExpanded = Boolean(expandedSide);
  const comparison =
    service.before && service.after
      ? `
        <div class="service-comparison${expandedSide ? " is-expanded" : ""}" data-expanded-side="${expandedSide || ""}">
          ${
            expandedSide === "after"
              ? ""
              : renderComparisonCard("Before", "before", service.before, expandedSide, openFolderKeys)
          }
          ${
            expandedSide === "before"
              ? ""
              : renderComparisonCard("After", "after", service.after, expandedSide, openFolderKeys)
          }
        </div>
      `
      : "";
  const deadlineTracker = service.deadlines ? renderDeadlineTracker(service.deadlines) : "";

  return `
    ${
      isExpanded
        ? ""
        : `
          <div class="service-preview-heading">
            <h3 data-service-preview-title>${service.title}</h3>
            <span class="service-preview-label" data-service-preview-label>${service.panelLabel}</span>
          </div>
        `
    }
    ${isExpanded ? "" : `<p class="service-preview-copy" data-service-preview-body>${service.panelBody}</p>`}
    ${comparison}
    ${deadlineTracker}
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

          <div class="mobile-service-nav" data-mobile-service-nav aria-label="Service step navigation">
            ${renderMobileServiceNavigatorContent(0)}
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
  const mobileNav = section?.querySelector("[data-mobile-service-nav]");

  if (!section || !preview || !steps?.length) {
    return;
  }

  let activeServiceIndex = 0;
  let expandedComparisonSide = null;
  let openFolderKeys = [];
  const comparisonMediaQuery =
    typeof window !== "undefined" && typeof window.matchMedia === "function"
      ? window.matchMedia(COMPARISON_MOBILE_QUERY)
      : null;

  function renderPreview(service, scrollState = null) {
    preview.innerHTML = renderPreviewContent(service, expandedComparisonSide, openFolderKeys);

    if (!scrollState) {
      return;
    }

    const list = preview.querySelector(`[data-comparison-list="${scrollState.side}"]`);

    if (list) {
      const maxScrollTop = Math.max(0, list.scrollHeight - list.clientHeight);
      list.scrollTop = Math.min(scrollState.scrollTop, maxScrollTop);
    }
  }

  function renderMobileNavigator() {
    if (mobileNav) {
      mobileNav.innerHTML = renderMobileServiceNavigatorContent(activeServiceIndex);
    }
  }

  comparisonMediaQuery?.addEventListener("change", () => {
    renderPreview(services[activeServiceIndex] || services[0]);
  });

  function setActiveService(index) {
    activeServiceIndex = Math.max(0, Math.min(index, services.length - 1));
    expandedComparisonSide = null;
    openFolderKeys = [];

    const service = services[activeServiceIndex] || services[0];

    steps.forEach((step) => {
      const isActive = Number(step.dataset.serviceStep) === activeServiceIndex;

      step.classList.toggle("is-active", isActive);
      step.setAttribute("aria-pressed", String(isActive));
    });

    renderMobileNavigator();

    preview.classList.remove("red", "teal", "amber", "blue", "is-changing");
    preview.classList.add(service.iconClass, "is-changing");
    renderPreview(service);

    window.setTimeout(() => {
      preview.classList.remove("is-changing");
    }, 160);
  }

  steps.forEach((step) => {
    step.addEventListener("click", () => {
      setActiveService(Number(step.dataset.serviceStep));
    });
  });

  mobileNav?.addEventListener("click", (event) => {
    const directionButton = event.target.closest("[data-service-direction]");

    if (!directionButton || directionButton.disabled) {
      return;
    }

    setActiveService(activeServiceIndex + Number(directionButton.dataset.serviceDirection));
  });

  preview.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-comparison-toggle]");
    const folder = event.target.closest("[data-comparison-folder]");
    const more = event.target.closest("[data-comparison-more]");

    if (folder) {
      const side = folder.dataset.comparisonFolder;
      const folderKey = folder.dataset.folderKey;
      const service = services[activeServiceIndex] || services[0];
      const list = preview.querySelector(`[data-comparison-list="${side}"]`);
      const scrollState =
        expandedComparisonSide === side && list
          ? { side, scrollTop: list.scrollTop }
          : null;

      const isSameExpandedSide = expandedComparisonSide === side;

      expandedComparisonSide = side;
      openFolderKeys = isSameExpandedSide
        ? openFolderKeys.includes(folderKey)
          ? openFolderKeys.filter((key) => key !== folderKey && !key.startsWith(`${folderKey}-`))
          : [...openFolderKeys, folderKey]
        : [folderKey];
      renderPreview(service, scrollState);
      return;
    }

    if (more) {
      const side = more.dataset.comparisonMore;
      const service = services[activeServiceIndex] || services[0];

      expandedComparisonSide = side;
      openFolderKeys = [];
      renderPreview(service);
      return;
    }

    if (!toggle) {
      return;
    }

    const side = toggle.dataset.comparisonToggle;
    const service = services[activeServiceIndex] || services[0];

    expandedComparisonSide = expandedComparisonSide === side ? null : side;
    openFolderKeys = [];
    renderPreview(service);
  });
}
