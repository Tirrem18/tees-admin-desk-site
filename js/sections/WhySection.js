import { BenefitItem } from "../components/BenefitItem.js";

const benefits = [
  {
    icon: "check",
    iconClass: "teal",
    title: "Done-for-you",
    text: "I help organise, track and chase the admin &mdash; not just tell you what to do.",
  },
  {
    icon: "location",
    iconClass: "navy",
    title: "Local",
    text: "Based around Teesside and built for small North East businesses.",
  },
  {
    icon: "tracker",
    iconClass: "blue",
    title: "Practical",
    text: "Shared folders, simple trackers, clear reports and plain-English updates.",
  },
  {
    icon: "spark",
    iconClass: "amber",
    title: "Flexible",
    text: "I adapt to what you need, whether it is a one-off clean-up or monthly support.",
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
