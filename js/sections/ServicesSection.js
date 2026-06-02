import { ServiceCard } from "../components/ServiceCard.js";

const services = [
  {
    href: "contractor-paperwork.html",
    icon: "&check;",
    title: "Contractor Paperwork Support",
    text: `
      Keep accreditations, insurance certificates, RAMS, training records and
      tender evidence organised and easier to find.
    `,
  },
  {
    href: "contact.html",
    icon: "&nearr;",
    title: "Trade Lead & Quote Follow-Up",
    text: `
      Set up simple systems to capture enquiries, follow up quotes, track jobs
      and request reviews.
    `,
  },
  {
    href: "contact.html",
    icon: "&#9638;",
    title: "Spreadsheet-to-System Support",
    text: `
      Turn messy spreadsheets into cleaner trackers, dashboards, reminders and
      simple internal tools.
    `,
  },
  {
    href: "contact.html",
    icon: "&#8962;",
    title: "Landlord / HMO Admin",
    text: `
      Track gas safety dates, EICRs, EPCs, HMO licence dates, certificates and
      contractor access.
    `,
  },
];

export function ServicesSection() {
  return `
    <section class="section services-section" id="services">
      <div class="container">
        <div class="section-heading">
          <h2>Practical admin support for the jobs small businesses never have time for.</h2>
        </div>

        <div class="services-grid">
          ${services.map((service) => ServiceCard(service)).join("")}
        </div>
      </div>
    </section>
  `;
}
