/* Main website entry point. Content is imported from data.js and rendered with small dependency-free components. */

import {
  currentFocus,
  cvHighlights,
  education,
  experiences,
  fitAreas,
  heroSignals,
  navigation,
  profile,
  quickLinks,
  projects,
  researchFocus,
  skillGroups,
  writing
} from "./data.js";

import {
  link,
  renderCard,
  renderContactLink,
  renderNavigation,
  renderProject,
  renderSkillGroup,
  renderTimelineItem,
  renderWriting,
  renderList
} from "./components.js";

const setHtml = (selector, html) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = html;
};

const setText = (selector, text) => {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
};

const updateStaticProfileText = () => {
  document.title = `${profile.shortName} | ${profile.tagline}`;
  document.querySelectorAll(".nav__brand").forEach((element) => {
    element.textContent = profile.shortName;
  });
};

const renderHeroActions = () => {
  const actions = [
    { href: profile.cv, label: "Open Academic CV", className: "button button--primary" },
    { href: "#projects", label: "View Research Projects", className: "button button--secondary" },
    { href: "#fit", label: "PhD Research Fit", className: "button button--secondary" }
  ];
  setHtml("#hero-actions", actions.map(link).join(""));
};

const renderContactLinks = () => {
  const links = [
    profile.email ? { href: `mailto:${profile.email}`, label: "Email", detail: profile.email } : null,
    { href: profile.cv, label: "Academic CV", detail: "Primary evidence document" },
    profile.scholar ? { href: profile.scholar, label: "Google Scholar", detail: "Publications and citations" } : null,
    profile.orcid ? { href: profile.orcid, label: "ORCID", detail: "Research identifier" } : null,
    profile.github ? { href: profile.github, label: "GitHub", detail: "Research code" } : null,
    profile.linkedin ? { href: profile.linkedin, label: "LinkedIn", detail: "Professional profile" } : null
  ].filter(Boolean);

  setHtml("#contact-links", links.map(renderContactLink).join(""));
  setText("#contact-note", profile.emailNote);
};

const bindMobileNavigation = () => {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector("#nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
};

const init = () => {
  updateStaticProfileText();
  setHtml("#nav-menu", renderNavigation(navigation));
  renderHeroActions();
  setHtml("#hero-signals", renderList(heroSignals, "evidence-list"));
  setHtml("#quick-links", quickLinks.map(({ label, href }) => `<a href="${href}">${label}</a>`).join(""));
  setHtml("#current-focus", renderList(currentFocus, "check-list"));
  setHtml("#research-grid", researchFocus.map(renderCard).join(""));
  setHtml("#experience-grid", experiences.map(renderCard).join(""));
  setHtml("#projects-grid", projects.map(renderProject).join(""));
  setHtml("#education-timeline", education.map(renderTimelineItem).join(""));
  setHtml("#skills-grid", skillGroups.map(renderSkillGroup).join(""));
  setHtml("#writing-list", writing.map(renderWriting).join(""));
  setHtml("#fit-list", renderList(fitAreas, "check-list"));
  setHtml("#cv-highlights", renderList(cvHighlights, "check-list"));
  renderContactLinks();
  setHtml("#current-year", new Date().getFullYear());
  bindMobileNavigation();
};

document.addEventListener("DOMContentLoaded", init);
