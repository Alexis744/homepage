/*
  Academic profile content.
*/

export const profile = {
  name: "Alexis Grédelue",
  shortName: "Research profile",
  tagline: "Open to PhD Opportunities",
  email: "alexis.gre74@gmail.com",
  emailNote: "Contact details and references are provided in the academic CV.",
  github: "https://github.com/Alexis744?tab=repositories",
  linkedin: "https://www.linkedin.com/in/alexis-gr%C3%A9delue/",
  scholar: "",
  orcid: "https://orcid.org/0009-0004-4700-0072",
  cv: "assets/docs/cv.pdf"
};

export const navigation = [
  ["Research", "#research"],
  ["Projects", "#projects"],
  ["Publications", "#writing"],
  ["Education", "#education"],
  // ["CV", "#cv"],
  ["Contact", "#contact"]
];

export const heroSignals = [
  "Engineering Physics → MSc Universe and Particles + parallel Data Science Diploma",
  "Scientific machine-learning experience in particle physics at CERN/ATLAS",
  "Primary research direction: learning physical dynamics through world models and long-horizon prediction",
  "Parallel interest: agentic AI, scientific exploration, and procedural skill distillation from LLMs"
  ];

export const quickLinks = [
  { label: "CV", href: "assets/docs/cv.pdf" },
  { label: "Research projects", href: "#projects" },
  { label: "Selected writing", href: "#writing" },
  { label: "PhD fit", href: "#fit" }
];

export const currentFocus = [
  "World models for complex physical environments",
  "Learning physical dynamics from multimodal observations",
  "Long-horizon prediction, planning, and memory",
  "Parallel interest: agentic AI for scientific exploration and procedural skill distillation from LLMs"
];

export const researchFocus = [
  {
    title: "Physics and simulation as foundations",
    body: "Use physical modelling and simulation-based data to understand complex systems, formulate meaningful learning problems, and evaluate whether model predictions remain scientifically consistent."
  },
  {
    title: "Learning physical dynamics",
    body: "Develop models that infer latent states, interactions, and system evolution from incomplete, noisy, or multimodal observations."
  },
  {
    title: "Toward world models",
    body: "Study learned representations of environments that support long-horizon prediction, memory, and planning in complex physical systems."
  }
];

export const experiences = [
  {
    meta: "High-energy physics",
    title: "ATLAS Collaboration — LLP reinterpretation",
    body: "M2 research internship at LPCA Clermont-Ferrand within the ATLAS"+
          "Collaboration. I develop and compare machine-learning surrogate"+
          "models for the reinterpretation of long-lived-particle searches,"+
          "with a focus on calibration, validation, applicability limits,"+
          "and reproducible Python analysis pipelines."
  },
  {
    meta: "Engineering physics · Thermal modelling",
    title: "TIPEE & SPIE Batignolles - Temperature-prediction model for industry",
    body: "Engineering internship focused on the development of a"+
          "one-dimensional thermal model for an industrial partner."+
          "I translated the physical problem into a predictive numerical"+
          "model and delivered both the validated model and an Excel-based"+
          "executable tool for practical use."
  },
  {
    meta: "Cosmology · Observational data",
    title: "Kumamoto University — Type Ia supernovae",
    body: "Research internship in Japan focused on cosmological parameter"+
          "inference from Type Ia supernova observations. I analysed"+
          "observational datasets, compared cosmological models, and studied"+
          "the estimation of parameters describing the expansion and matter"+
          "content of the Universe."
  }
];

export const projects = [
  {
    title: "Surrogate Model for long-lived particle reinterpretation",
    area: "Particle physics / long-lived particles",
    problem: "Reinterpret long-lived particle search information using simulation outputs and statistical analysis workflows.",
    method: "Surrogate Model, analysis assumptions, and computational scripts into a reproducible reinterpretation workflow.",
    results: "Demonstrates preparation for collider-physics analysis where modelling choices, uncertainty handling, and reproducibility are central.",
    artifacts: "Research artifact structured for repository or manuscript/report attachment when approved for public release.",
    status: "Research project",
    technologies: ["Python", "Particle Physics", "Machine Learning", "Scientific Computing"],
    github: "https://github.com/Alexis744/ATLASInternship.git",
    paper: "assets/docs/ATLAS_internship_report.pdf"
  },
  {
    title: "Adaptation / extension of an open-source agentic AI system",
    area: "Agentic AI and research workflow automation",
    problem: "Adapt an open-source agentic AI framework into a local assistant for scientific coding, technical workflows, and structured task execution.",
    method: "Customized the interface, connection workflow, task procedures, local tooling, and documentation around an existing agent framework. The work focuses on orchestration and reproducible human-in-the-loop workflows, not on model fine-tuning.",
    results: "Ongoing works",
    artifacts: "Architecture notes, implementation documentation, and reproducible workflow examples will be provided when the project is ready for public release.",
    status: "Personal software prototype",
    technologies: ["Agentic AI", "Workflow Orchestration", "Local Tools", "Documentation", "Open-source Adaptation"],
    github: "",
    paper: ""
  }
];

export const education = [
  {
    period: "Foundation",
    title: "Engineering Physics",
    institution: "Polytech Clermont-Ferrand",
    dates: "2022-2025",
    focus: "Heat transfer phenomena, Solid state physics, engineering systems, and computer science.",
    evidence: ["Mathematical modelling", "Physical intuition", "Computational problem solving", "Engineering systems"]
  },
  {
    period: "Data Science",
    title: "University Diploma in Data Science",
    institution: "EUPI Clermont-Ferrand",
    dates: "2025-2026",
    focus: "Statistical learning, data analysis, programming, and machine learning methods.",
    evidence: ["Statistical learning", "Programming", "Data-driven analysis", "Machine learning fundamentals"]
  },
  {
    period: "Graduate Studies",
    title: "Master's Degree in Universe and Particles",
    institution: "EUPI Clermont-Ferrand",
    dates: "2025-2026",
    focus: "Particle physics, cosmology, general relativity, scientific computing, and electro-weak physics.",
    evidence: ["Particle physics", "Cosmology", "Scientific computing", "Electro-weak physics"]
  }
];

export const writing = [
  {
    type: "Research contribution",
    title: "ATLAS analysis correction and revised exclusion limits",
    body:"Identified a bug in the analysis code that led to the preparation of an erratum and a revision of the published results. The correction improved the exclusion limits by approximately 33% overall and by up to an order of magnitude for specific mass hypotheses.",
    href: "assets/docs/.pdf",
    linkLabel: "Erratum"
  },
  {
    type: "Ongoing research contribution",
    title: "Contribution to an ongoing PhD thesis",
    body:"My work on machine-learning-based reinterpretation, model validation, and applicability limits is being incorporated into part of an ongoing PhD thesis. The contribution is expected to be acknowledged when the final thesis is published.",
    href: "",
    linkLabel: ""
  },  
  // {
  //   type: "Internship report",
  //   title: "TIPEE internship report",
  //   body: "Applied physics internship report on thermal modelling, geospatial analysis, and experimental characterization.",
  //   href: "assets/docs/TIPEE_internship_report.pdf",
  //   linkLabel: "PDF"
  // },
  // {
  //   type: "Internship report",
  //   title: "Kumamoto internship report",
  //   body: "Cosmology research report on Type Ia supernovae and observational constraints on cosmological parameters.",
  //   href: "assets/docs/Kumamoto_internship_report.pdf",
  //   linkLabel: "PDF"
  // }
];

export const skillGroups = [
  {
    title: "Scientific data and simulation",
    items: [
      "Python, NumPy, and pandas",
      "ROOT, uproot, and Awkward Array",
      "Pythia8 and HepMC event simulation",
      "Simulation-based and observational datasets"
    ]
  },
  {
    title: "Machine learning and validation",
    items: [
      "Scikit-learn and XGBoost",
      "Neural-network training and evaluation",
      "Probability calibration and weighted metrics",
      "Model comparison and applicability analysis"
    ]
  },
  {
    title: "Scientific modelling and inference",
    items: [
      "Numerical and thermal modelling",
      "Statistical hypothesis comparison",
      "Cosmological parameter estimation",
      "Particle-physics reinterpretation workflows"
    ]
  },
  {
    title: "Research software and delivery",
    items: [
      "Linux, Git, and GitHub",
      "Modular Python analysis pipelines",
      "Data visualisation and automated reporting",
      "Docker and workflow automation"
    ]
  }
];

export const fitAreas = [
  "Machine learning for physical sciences",
  "Simulation-based and data-driven inference",
  "Particle physics or cosmology analysis groups",
  "Scientific computing and reproducible research",
  "Physically grounded representation learning"
];

export const cvHighlights = [
  "Education path from Engineering Physics to Data Science and Universe and Particles",
  "Research exposure in CERN / ATLAS and international academic environments",
  "Selected projects in particle physics reinterpretation and cosmological analysis",
  "Technical preparation in Python, numerical modelling, data analysis, and reproducible workflows"
];
