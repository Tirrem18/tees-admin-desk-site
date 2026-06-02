import { ProblemCard } from "../components/ProblemCard.js";

const problems = [
  {
    icon: "!",
    iconClass: "red",
    title: "Expired certificates",
    text: "Renewals get missed and compliance risks increase.",
  },
  {
    icon: "&#9633;",
    iconClass: "amber",
    title: "Messy folders",
    text: "Files are everywhere and hard to find when needed.",
  },
  {
    icon: "&#9675;",
    iconClass: "teal",
    title: "Missed follow-ups",
    text: "Quotes and approvals get forgotten or chased late.",
  },
  {
    icon: "&#9638;",
    iconClass: "blue",
    title: "Broken spreadsheets",
    text: "Data gets messy, unreliable and time-consuming.",
  },
];

export function ProblemSection() {
  return `
    <section class="section problem-section">
      <div class="container">
        <div class="section-heading">
          <h2>Small business admin gets messy fast.</h2>
          <p>
            Documents end up in emails, folders, WhatsApp chats and old spreadsheets.
            Things get missed. Opportunities slip. Stress builds.
          </p>
        </div>

        <div class="problem-grid">
          ${problems.map((problem) => ProblemCard(problem)).join("")}
        </div>
      </div>
    </section>
  `;
}
