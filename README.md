# Academic Research Profile Website

A clean, maintainable academic personal website for presenting an early-career research profile at the intersection of computational physics, statistical learning, particle physics, cosmology, and scientific computing.

The site is intentionally designed as an academic homepage for prospective PhD supervisors and committees. It avoids startup-style copy, fake publication claims, and decorative portfolio elements.

## Current structure

- Hero with focused research identity and immediate credibility signals
- Research positioning
- Research-oriented project cards using Problem / Method / Results / Artifacts / Status
- Education timeline
- Research experience
- Selected writing and evidence, with the CV as the central public artifact
- Fit for PhD groups
- Technical preparation
- Academic CV callout
- Contact and evaluation links

## Project structure

```text
academic-website/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── docs/
│   │   └── cv.pdf
│   ├── img/
│   │   └── README.md
│   └── js/
│       ├── components.js
│       ├── data.js
│       └── main.js
├── scripts/
│   └── build.js
├── package.json
├── .nojekyll
└── README.md
```

## How to edit profile information

Most public-facing content is stored in:

```text
assets/js/data.js
```

Update these values first:

```js
export const profile = {
  name: "Academic Researcher",
  shortName: "Research Profile",
  tagline: "Machine Learning for Physics-Driven Scientific Inference",
  email: "",
  github: "",
  linkedin: "",
  scholar: "",
  orcid: "",
  cv: "assets/docs/cv.pdf"
};
```

Use empty strings for links that are not ready for public release. The renderer hides empty optional links instead of showing fake URLs.


## Profile photo

Place your portrait at:

```text
assets/img/profile.jpg
```

Recommended image:

- square or portrait crop
- at least 800px wide
- professional academic headshot
- neutral background

The homepage automatically shows a subtle photo area if the file is not present.

## Evidence to add when available

To make the site fully competitive as a real PhD applicant homepage, add approved details to `assets/js/data.js`:

- real name and academic email
- current institution, degree dates, thesis title, and supervisor
- Google Scholar and ORCID if available
- public repositories, reports, preprints, thesis PDF, or poster links
- concrete project outcomes and figures where public release is allowed

Replace `assets/docs/cv.pdf` with the current academic CV.

## Local commands

No dependencies are required for the website itself.

Validate and build the static deployment folder:

```bash
npm run build
```

Serve locally:

```bash
npm run serve
```

Then open the local URL printed by the command.

## Deploy to GitHub Pages

Run:

```bash
npm run build
```

Publish the generated `dist/` folder or deploy the repository root, depending on your GitHub Pages workflow.

## Maintenance notes

- Keep claims factual and evidence-backed.
- Do not show empty publication sections.
- Add artifact links only when they are ready for public readers.
- Prefer precise scientific language over broad AI buzzwords.
- Keep the CV current; it is the central evidence document on the homepage.
