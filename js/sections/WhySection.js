import { BenefitItem } from "../components/BenefitItem.js";

const benefits = [
  {
    icon: "&check;",
    title: "Done-for-you",
    text: "We help organise, track and chase the admin &mdash; not just tell you what to do.",
  },
  {
    icon: "&#8982;",
    title: "Local",
    text: "Based around Teesside and built for small North East businesses.",
  },
  {
    icon: "&#9633;",
    title: "Practical",
    text: "Shared folders, simple trackers, clear reports and plain-English updates.",
  },
  {
    icon: "&#8801;",
    title: "Flexible",
    text: "Start with a one-off clean-up, then add monthly support if it helps.",
  },
];

export function WhySection() {
  return `
    <section class="section why-section" id="about">
      <div class="container">
        <div class="section-heading">
          <h2>Simple support, not another system to manage.</h2>
        </div>

        <div class="why-grid">
          ${benefits.map((benefit) => BenefitItem(benefit)).join("")}
        </div>
      </div>
    </section>
  `;
}
