import { Header, initHeaderMenu } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

const headerMount = document.querySelector("#site-header");
const app = document.querySelector("#app");
const footerMount = document.querySelector("#site-footer");

headerMount.outerHTML = Header({ currentPage: "about" });
app.innerHTML = `
  <section class="about-page">
    <div class="container">
      <div class="about-hero">
        <div class="about-copy">
          <p class="section-label">ABOUT ME</p>
          <h1>Jacob Merritt</h1>

          <div class="about-text">
            <p>
              I&rsquo;m based in Billingham in the North East and started Tees Admin Desk
              to help small businesses get their paperwork, records and renewals under
              control.
            </p>
            <p>
              My background is in software engineering and data, so I&rsquo;m used to working
              with messy information, organising records, spotting patterns and turning
              scattered details into something clear and usable.
            </p>
            <p>
              I made Tees Admin Desk because I realised not every business needs complicated
              software or another system to learn. Sometimes a simple folder structure, clear
              tracker, monthly report or reminder system is the better answer.
            </p>
            <p>
              I know how useful good systems can be, but I also know they only work if they
              are easy to use. The aim is to keep things practical: documents easier to find,
              deadlines easier to track, missing information easier to chase, and important
              admin easier to act on.
            </p>
            <p>
              A lot of small businesses do not need a full-time admin hire or a complex
              platform. They need someone reliable to bring order to the paperwork, keep
              records up to date and make the important things visible before they become
              a problem.
            </p>
          </div>
        </div>

        <div class="about-photo-card">
          <img src="assets/Me.JPG" alt="Tees Admin Desk founder" class="about-photo" />
        </div>
      </div>

      <div class="about-points" aria-label="What Tees Admin Desk focuses on">
        <article class="about-point-card">
          <span>01</span>
          <h2>Local and practical</h2>
          <p>Based in Billingham, supporting small businesses across Teesside and the North East.</p>
        </article>

        <article class="about-point-card">
          <span>02</span>
          <h2>Systems that stay simple</h2>
          <p>I understand software and data, but I focus on tools and processes that are easy to use and genuinely helpful.</p>
        </article>

        <article class="about-point-card">
          <span>03</span>
          <h2>Clear and useful admin support</h2>
          <p>The goal is simple: organised files, tracked deadlines, less chasing, and a clearer view of what needs attention.</p>
        </article>
      </div>

      <section class="about-cta" aria-labelledby="about-cta-title">
        <div>
          <h2 id="about-cta-title">Need help getting your admin under control?</h2>
          <p>If your paperwork, folders or renewals are getting difficult to manage, I can help you put a clearer system in place.</p>
        </div>
        <a class="btn btn-primary" href="free-admin-review.html">Request a free admin review</a>
      </section>
    </div>
  </section>
`;
footerMount.outerHTML = Footer();

initHeaderMenu();
