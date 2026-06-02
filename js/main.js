import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import { HeroSection } from "./sections/HeroSection.js";
import { ProblemSection } from "./sections/ProblemSection.js";
import { ServicesSection } from "./sections/ServicesSection.js";
import { WhySection } from "./sections/WhySection.js";
import { ProcessSection } from "./sections/ProcessSection.js";
import { WhoWeHelpSection } from "./sections/WhoWeHelpSection.js";
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
