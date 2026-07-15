/* Reusable rendering helpers for the static academic website. */

const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export const link = ({ href, label, className = "" }) =>
  href ? `<a class="${className}" href="${escapeHtml(href)}">${escapeHtml(label)}</a>` : "";

export const renderNavigation = (items) =>
  items.map(([label, href]) => `<li><a href="${escapeHtml(href)}">${escapeHtml(label)}</a></li>`).join("");

export const renderList = (items, className = "") =>
  `<ul class="${escapeHtml(className)}">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;

export const renderCard = ({ meta, title, body }) => `
  <article class="card">
    ${meta ? `<span class="card__meta">${escapeHtml(meta)}</span>` : ""}
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(body)}</p>
  </article>
`;

const resourceLink = (href, label, fallbackLabel) => {
  if (!href) return `<span class="link-list__inactive">${escapeHtml(fallbackLabel)}</span>`;
  return `<a href="${escapeHtml(href)}">${escapeHtml(label)}</a>`;
};

export const renderProject = ({ title, area, problem, method, results, artifacts, status, technologies, github, paper }) => {
  const links = [
    github
      ? `<li class="project-link project-link--github">${resourceLink(github, "GitHub Repository", "")}</li>`
      : "",
    paper
      ? `<li class="project-link project-link--paper">${resourceLink(paper, "Internship report", "")}</li>`
      : ""
  ].filter(Boolean).join("");

  return `
    <article class="project-card project-card--research">
      <div class="project-card__main">
        <span class="card__meta">${escapeHtml(area)}</span>
        <h3>${escapeHtml(title)}</h3>
        <dl class="research-brief">
          <div><dt>Problem</dt><dd>${escapeHtml(problem)}</dd></div>
          <div><dt>Method</dt><dd>${escapeHtml(method)}</dd></div>
          <div><dt>Results</dt><dd>${escapeHtml(results)}</dd></div>
          <div><dt>Artifacts</dt><dd>${escapeHtml(artifacts)}</dd></div>
        </dl>
        <ul class="tag-list" aria-label="Methods and tools used for ${escapeHtml(title)}">
          ${technologies.map((tech) => `<li><span>${escapeHtml(tech)}</span></li>`).join("")}
        </ul>
      </div>
      <div class="project-card__aside">
        <span class="status-label">${escapeHtml(status)}</span>
        ${links ? `<ul class="link-list">${links}</ul>` : `<p class="artifact-note">Artifact links are added only after public-release approval.</p>`}
      </div>
    </article>
  `;
};

export const renderTimelineItem = ({ period, title, institution, dates, focus, evidence }) => {
  const meta = [institution, dates].filter(Boolean);
  return `
    <li class="timeline__item">
      <div class="timeline__period">${escapeHtml(period)}</div>
      <h3>${escapeHtml(title)}</h3>
      ${meta.length ? `<div class="timeline__meta">${meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>` : ""}
      <p>${escapeHtml(focus)}</p>
      ${renderList(evidence, "mini-list")}
    </li>
  `;
};

export const renderSkillGroup = ({ title, items }) => `
  <article class="skill-card">
    <h3>${escapeHtml(title)}</h3>
    ${renderList(items)}
  </article>
`;

export const renderWriting = ({ type, title, body, href, linkLabel }) => `
  <article class="report-card writing-card">
    <span class="card__meta">${escapeHtml(type)}</span>
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(body)}</p>
    ${href ? `<div class="writing-card__link">${resourceLink(href, linkLabel, linkLabel)}</div>` : ""}
  </article>
`;

export const renderContactLink = ({ href, label, detail }) => {
  if (!href) return "";
  return `<a href="${escapeHtml(href)}"><span>${escapeHtml(label)}</span><small>${escapeHtml(detail)}</small><span aria-hidden="true">→</span></a>`;
};
