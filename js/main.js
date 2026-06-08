import { Header, initHeaderMenu } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { initDashboardCard } from "./components/DashboardCard.js";
import { HeroSection, initHeroExampleToggle } from "./sections/HeroSection.js";
import { ProblemSection } from "./sections/ProblemSection.js";
import { ServicesSection, initServicesSection } from "./sections/ServicesSection.js";
import { WhySection } from "./sections/WhySection.js";
import { ProcessSection } from "./sections/ProcessSection.js";
import { WhoWeHelpSection, initWhoWeHelpSection } from "./sections/WhoWeHelpSection.js";
import { FinalCtaSection } from "./sections/FinalCtaSection.js";

const headerMount = document.querySelector("#site-header");
const app = document.querySelector("#app");
const footerMount = document.querySelector("#site-footer");

headerMount.outerHTML = Header();
app.innerHTML = [
  HeroSection(),
  ProblemSection(),
  ServicesSection(),
  WhySection(),
  ProcessSection(),
  WhoWeHelpSection(),
  FinalCtaSection(),
].join("");
footerMount.outerHTML = Footer();

initHeaderMenu();
initHeroExampleToggle();
initServicesSection();
initDashboardCard();
initWhoWeHelpSection();
