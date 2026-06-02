import { Button } from "../components/Button.js";

export function FinalCtaSection() {
  return `
    <section class="section final-cta">
      <div class="container">
        <div class="cta-card">
          <div class="cta-content">
            <h2>Not sure what admin support you need yet?</h2>
            <p>
              That is fine. Send a quick message about what is wasting time, causing
              stress or getting missed. We will tell you honestly whether Tees Admin Desk
              can help.
            </p>

            ${Button({
              href: "contact.html",
              text: "Ask for a free admin review",
              variant: "btn-primary",
            })}

            <p class="cta-note">
              No pressure. No complicated software. Just a practical look at what needs organising.
            </p>
          </div>

          <div class="cta-illustration" aria-hidden="true">
            <div class="folder-shape"></div>
            <div class="checklist-shape">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
