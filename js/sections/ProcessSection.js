import { ProcessStep } from "../components/ProcessStep.js";

const steps = [
  {
    number: "1",
    icon: "?",
    title: "Tell us what is messy",
    text: "Send the paperwork, spreadsheet or admin process that is causing the problem.",
  },
  {
    number: "2",
    icon: "&#9633;",
    title: "We organise it",
    text: "We sort the files, build a tracker, highlight missing items and make the next actions clear.",
  },
  {
    number: "3",
    icon: "&check;",
    title: "You stay on top of it",
    text: "Use us for one-off clean-up work or monthly admin upkeep so the mess does not come back.",
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
