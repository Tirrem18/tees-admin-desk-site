import { Header, initHeaderMenu } from "./components/Header.js";
import { Footer } from "./components/Footer.js";

const pages = {
  services: {
    title: "Sample Services",
  },
  examples: {
    title: "Sample Examples",
  },
  about: {
    title: "Sample About me",
  },
  "free-admin-review": {
    title: "Sample Free admin review",
  },
};

const headerMount = document.querySelector("#site-header");
const app = document.querySelector("#app");
const footerMount = document.querySelector("#site-footer");
const pageKey = app?.dataset.page || "";
const page = pages[pageKey] || { title: app?.dataset.pageTitle || "Sample Page" };

headerMount.outerHTML = Header({ currentPage: pageKey });
app.innerHTML = `
  <section class="section placeholder-page">
    <div class="container">
      <div class="placeholder-panel">
        <p class="section-label">TEES ADMIN DESK</p>
        <h1>${page.title}</h1>
        <p>This page will be built out with detailed content soon.</p>
      </div>
    </div>
  </section>
`;
footerMount.outerHTML = Footer();

initHeaderMenu();
