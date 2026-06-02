import { Button } from "../components/Button.js";
import { DashboardCard } from "../components/DashboardCard.js";

export function HeroSection() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">
            <span class="eyebrow-dot"></span>
            Teesside &amp; North East admin support
          </div>

          <h1>Paperwork, deadlines and follow-ups kept under control.</h1>

          <p class="hero-text">
            Tees Admin Desk helps small Teesside and North East businesses organise
            documents, track renewals, chase missing information, clean up spreadsheets
            and keep simple admin systems moving.
          </p>

          <div class="trust-line">
            <span class="trust-icon">&check;</span>
            <span>
              <strong>Local, practical admin support</strong> &mdash; without adding another
              complicated software tool.
            </span>
          </div>

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
      </div>
    </section>
  `;
}
