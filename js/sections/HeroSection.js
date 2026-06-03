import { Button } from "../components/Button.js";
import { DashboardCard } from "../components/DashboardCard.js";

export function HeroSection() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <h1>Important paperwork, deadlines and renewals kept under control.</h1>

          <p class="hero-text">
            Tees Admin Desk helps contractors, trades and small North East businesses
            keep important documents organised, renewal dates tracked, missing
            information chased and simple admin records up to date. Your paperwork
            is easier to find, check and act on when it matters.
          </p>

          <div class="hero-actions">
            ${Button({
              href: "contact.html",
              text: "Request a free admin review",
              variant: "btn-primary",
            })}
            ${Button({
              href: "#services",
              text: "View services",
              variant: "btn-secondary",
            })}
          </div>
        </div>

        ${DashboardCard()}

        <div class="trust-line hero-trust">
          <span class="trust-icon">&check;</span>
          <span>
            <strong>Local, practical admin support</strong> &mdash; without adding another
            complicated software tool.
          </span>
        </div>
      </div>
    </section>
  `;
}
