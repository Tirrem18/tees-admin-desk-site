import { Button } from "../components/Button.js";
import { DashboardCard } from "../components/DashboardCard.js";

function HeroDashboard({ variant }) {
  return `
    <div class="hero-dashboard hero-dashboard-${variant}">
      ${DashboardCard()}

      <div class="trust-line hero-trust">
        <span class="trust-icon">&check;</span>
        <span>
          <strong>Clear monthly overviews. No complicated software to learn.</strong> Local admin support when paperwork needs sorting
        </span>
      </div>
    </div>
  `;
}

export function HeroSection() {
  return `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <h1>Important paperwork, deadlines and renewals kept under control</h1>

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

          <div class="hero-example-shell" data-example-state="closed">
            <button
              class="btn btn-secondary hero-example-toggle"
              type="button"
              aria-expanded="false"
              aria-controls="hero-example-content"
            >
              View example
            </button>

            <div class="hero-example-content" id="hero-example-content" hidden aria-hidden="true">
              <button
                class="hero-example-close"
                type="button"
                aria-label="Close example"
                aria-expanded="false"
                aria-controls="hero-example-content"
              >
                &times;
              </button>

              ${HeroDashboard({ variant: "mobile" })}
            </div>
          </div>
        </div>

        ${HeroDashboard({ variant: "desktop" })}
      </div>
    </section>
  `;
}

export function initHeroExampleToggle() {
  const shell = document.querySelector(".hero-example-shell");
  const toggle = document.querySelector(".hero-example-toggle");
  const content = document.querySelector("#hero-example-content");
  const closeButton = document.querySelector(".hero-example-close");

  if (!shell || !toggle || !content || !closeButton || shell.dataset.heroExampleReady === "true") {
    return;
  }

  shell.dataset.heroExampleReady = "true";

  function setExampleOpen(isOpen, restoreFocus = false) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    closeButton.setAttribute("aria-expanded", String(isOpen));
    shell.dataset.exampleState = isOpen ? "open" : "closed";
    content.hidden = !isOpen;
    content.setAttribute("aria-hidden", String(!isOpen));

    if (restoreFocus) {
      toggle.focus();
    }
  }

  setExampleOpen(false);

  toggle.addEventListener("click", () => {
    setExampleOpen(true);
  });

  closeButton.addEventListener("click", () => {
    setExampleOpen(false, true);
  });
}
