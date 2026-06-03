import { ProblemCard } from "../components/ProblemCard.js";

const problems = [
  {
    icon: "certificate",
    iconClass: "red",
    title: "Expired certificates",
    text: "Insurance, training cards and key documents can expire before anyone notices.",
    tag: "Risk",
  },
  {
    icon: "folders",
    iconClass: "amber",
    title: "Scattered folders",
    text: "Files sit across emails, shared drives, phones and old downloads.",
    tag: "Wasted time",
  },
  {
    icon: "time",
    iconClass: "teal",
    title: "Lost working time",
    text: "Simple checks, chasing paperwork and finding files take time away from actual jobs.",
    tag: "Time drain",
  },
  {
    icon: "spreadsheet",
    iconClass: "blue",
    title: "Unclear spreadsheets",
    text: "Trackers become outdated, unreliable and hard to trust.",
    tag: "No clear view",
  },
];

export function ProblemSection() {
  return `
    <section class="section problem-section">
      <div class="container">
        <div class="section-heading problem-heading">
          <h2>Admin gets messy fast when paperwork lives everywhere</h2>
          <p>
            Documents end up in emails, folders, WhatsApp chats and old spreadsheets.
            Renewals get missed, files become hard to find, and simple checks start
            taking longer than they should.
          </p>
        </div>

        <div class="problem-grid">
          ${problems.map((problem) => ProblemCard(problem)).join("")}
        </div>

        <p class="problem-bridge">
          <strong>Tees Admin Desk</strong> brings it into one clear system, so you know
          what is sorted, what is missing, and what needs action next.
        </p>
      </div>
    </section>
  `;
}
