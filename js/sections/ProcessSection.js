import { ProcessStep } from "../components/ProcessStep.js";

const steps = [
  {
    number: "1",
    icon: "question",
    title: "You send it",
    text: "Send the paperwork, spreadsheet or admin process that is causing the problem.",
  },
  {
    number: "2",
    icon: "folder",
    title: "I sort it",
    text: "I organise the files, build a tracker, highlight what is missing and make the next actions clear.",
  },
  {
    number: "3",
    icon: "check",
    title: "You stay updated",
    text: "You get clear updates on what is sorted, what is missing and what needs attention next, with monthly upkeep available if needed.",
  },
];

export function ProcessSection() {
  return `
    <section class="section process-section" id="how-it-works">
      <div class="container">
        <div class="section-heading">
          <h2>How it works</h2>
        </div>

        <div class="process-grid">
          ${steps.map((step) => ProcessStep(step)).join("")}
        </div>
      </div>
    </section>
  `;
}
