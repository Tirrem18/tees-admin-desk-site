import { Header, initHeaderMenu } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

const headerMount = document.querySelector("#site-header");
const app = document.querySelector("#app");
const footerMount = document.querySelector("#site-footer");

const checkIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M20 6 9 17l-5-5" />
  </svg>
`;

headerMount.outerHTML = Header({ currentPage: "free-admin-review" });
app.innerHTML = `
  <section class="review-page">
    <div class="container">
      <div class="review-heading">
        <p class="section-label">FREE ADMIN REVIEW</p>
        <h1>Let&rsquo;s work out what needs sorting.</h1>
        <p>
          Send me a message and tell me what is getting messy, time-consuming or difficult
          to keep on top of. You can explain your situation by email, or we can arrange a
          quick call if that is easier.
        </p>
      </div>

      <div class="review-grid">
        <article class="review-main-card">
          <span class="review-card-kicker">Practical first step</span>
          <h2>What the free review is for</h2>
          <p>
            The review is free and simply helps me understand what you need, what is
            already in place, and whether Tees Admin Desk can help. It is a practical
            first step to understand the scope of your admin, files, renewals or paperwork
            before deciding what support makes sense.
          </p>
          <p class="review-reassurance">
            You do not need everything perfectly prepared. Just explain the situation as
            best you can, and we can work out the next step from there.
          </p>
        </article>

        <aside class="review-contact-card" aria-labelledby="review-contact-title">
          <div>
            <span class="review-card-kicker">Get in touch</span>
            <h2 id="review-contact-title">Email me at:</h2>
            <a class="review-email" href="mailto:jacob@teesadmindesk.co.uk">
              jacob@teesadmindesk.co.uk
            </a>
          </div>
          <a class="btn btn-primary" href="mailto:jacob@teesadmindesk.co.uk">Email Jacob</a>
        </aside>
      </div>

      <section class="review-checklist-card" aria-labelledby="review-checklist-title">
        <div class="review-checklist-intro">
          <span class="review-card-kicker">Helpful details</span>
          <h2 id="review-checklist-title">What to include in your message</h2>
        </div>

        <ul class="review-checklist">
          <li>${checkIcon}<span>Your name and business name</span></li>
          <li>${checkIcon}<span>What type of business you run</span></li>
          <li>${checkIcon}<span>What admin, paperwork or files are causing problems</span></li>
          <li>${checkIcon}<span>What you would like to make easier</span></li>
          <li>${checkIcon}<span>Whether you prefer email or a call</span></li>
        </ul>
      </section>
    </div>
  </section>
`;
footerMount.outerHTML = Footer();

initHeaderMenu();
