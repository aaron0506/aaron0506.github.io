const experiences = [
  {
    id: "ibm-consulting",
    type: "experience",
    organization: "IBM Consulting",
    role: "Consultant",
    period: "Current",
    location: "Greater China",
    category: "Enterprise Consulting",
    image: "assets/images/ibm-consulting.jpg",
    imageAlt: "Consulting team in a professional meeting",
    imagePosition: "center",
    creditName: "Dylan Gillis",
    creditUrl: "https://unsplash.com/photos/KdeqA3aTnBY",
    headline:
      "Bringing structured thinking, quantitative analysis and an AI-native working style to enterprise consulting.",
    cardText:
      "Current professional chapter focused on the intersection of strategy, data and technology.",
    overviewTitle:
      "Current consulting work across strategy, data and technology.",
    overview:
      "Aaron is currently developing his professional practice at IBM Consulting. He brings together structured problem solving, quantitative analysis and clear communication to turn ambiguous business questions into organized workstreams and decision-ready outputs. This profile is intentionally high-level because client names, engagement contexts and deliverables are confidential.",
    contributions: [
      "Frame ambiguous business questions into clear analytical workstreams.",
      "Connect research, data and stakeholder context to support practical decisions.",
      "Translate complex working material into concise, decision-oriented consulting outputs.",
    ],
    approach: [
      {
        title: "Frame",
        text: "Clarify the business decision, define the central question and establish a practical workplan.",
      },
      {
        title: "Diagnose",
        text: "Bring together data, research and stakeholder inputs to isolate the signals that matter.",
      },
      {
        title: "Deliver",
        text: "Turn the evidence into a clear recommendation and executable next step.",
      },
    ],
    tools: [
      "Structured Problem Solving",
      "Enterprise Transformation",
      "Data & AI",
      "Stakeholder Communication",
      "Executive Storylining",
    ],
    metrics: [
      ["Current role", "IBM Consulting"],
      ["Structured", "Problem solving"],
      ["Integrated", "Strategy · data · technology"],
    ],
    visual: {
      input: "Business questions and stakeholder context",
      method: "Structured analysis and evidence synthesis",
      output: "Decision-ready consulting outputs",
      dimensions: [
        "Problem framing",
        "Evidence synthesis",
        "Stakeholder context",
        "Executive storylining",
      ],
    },
  },
  {
    id: "ries-consulting",
    type: "experience",
    organization: "Ries Consulting",
    role: "Strategy Consulting Intern",
    period: "Apr. 2026 — Aug. 2026",
    location: "Shanghai, China",
    category: "Consumer Strategy",
    image: "assets/images/ries-consulting.jpg",
    imageAlt: "Team collaborating around a whiteboard",
    imagePosition: "center",
    creditName: "Vitaly Gariev",
    creditUrl:
      "https://unsplash.com/photos/team-collaborating-around-a-whiteboard-during-a-meeting-rgKX4o2xSqI",
    headline:
      "Built the evidence engine behind early-stage consumer and category strategy.",
    cardText:
      "Structured six research streams and created an AI-assisted path from raw market signals to client-ready recommendations.",
    overviewTitle:
      "From fragmented market evidence to a clear strategic narrative.",
    overview:
      "At Ries Consulting, Aaron supported consumer and category strategy by building the analytical foundation beneath the final recommendation. He organized qualitative and quantitative material from surveys, interviews, e-commerce listings, social discussions, competitor materials and industry reports, then translated the evidence into structured research outputs. He also developed an AI-assisted workflow to reduce repetitive analytical work and help the team move more efficiently from raw market signals to consultant-ready concepts and recommendations.",
    contributions: [
      "Built a consistent research base by structuring survey logic, interview notes, e-commerce listings, social discussions, competitor materials and industry reports.",
      "Converted fragmented evidence into pain-point summaries, category maps and comparison tables that consulting teams could review and use.",
      "Created a semi-automated, AI-assisted workflow for brand-popularity regression exploration, including data cleaning, variable definition, reusable code and relationship testing.",
      "Examined relationships across consumer discussion, product features, pricing signals and platform exposure, reducing repetitive analytical work.",
      "Translated research findings and AI outputs into product concepts, use cases, positioning rationales, slide outlines and concise recommendations.",
    ],
    approach: [
      {
        title: "Research architecture",
        text: "Unified six families of qualitative and quantitative evidence into one consistent analytical base.",
      },
      {
        title: "Analysis acceleration",
        text: "Used structured prompts to support data cleaning, variable definition, reusable code and relationship testing.",
      },
      {
        title: "Recommendation design",
        text: "Synthesized the strongest evidence into clear positioning choices and consultant-ready storylines.",
      },
    ],
    tools: [
      "Consumer Research",
      "Category Strategy",
      "Competitive Analysis",
      "AI-Assisted Analytics",
      "Storylining",
    ],
    metrics: [
      ["Multi-source", "Research foundation"],
      ["AI-assisted", "Regression exploration"],
      ["Client-ready", "Strategic outputs"],
    ],
    visual: {
      input: "Surveys, interviews and digital market signals",
      method: "Category mapping and AI-assisted regression",
      output: "Concepts, positioning and recommendations",
      dimensions: [
        "Consumer evidence",
        "Category structure",
        "AI workflow",
        "Strategic storyline",
      ],
    },
  },
  {
    id: "astri-ai",
    type: "experience",
    organization: "Hong Kong ASTRI",
    role: "IoT Sensing & AI Technologies Intern",
    period: "Jun. 2025 — Aug. 2025",
    location: "Hong Kong SAR",
    category: "Applied AI Research",
    image: "assets/images/astri-ai.jpg",
    imageAlt: "Electronic hardware and circuit board used for technology research",
    imagePosition: "center",
    creditName: "Tim Käbel",
    creditUrl:
      "https://unsplash.com/photos/closeup-photo-of-circuit-board-FCrYdP8gohg",
    headline:
      "Designed and evaluated phase-map learning workflows for optical reconstruction.",
    cardText:
      "Connected optical simulation, Fourier-domain targets, CVAE learning and phase-only image reconstruction.",
    overviewTitle:
      "Translating an inverse-optics problem into a reproducible learning pipeline.",
    overview:
      "At Hong Kong ASTRI, Aaron worked across two connected technical workstreams: Python-based optical simulation grounded in physical and mathematical constraints, and learning-based phase retrieval. He developed CVAE and CNN prototypes that transformed input images into phase maps, reconstructed phase-only images through inverse Fourier operations, and explored the Gerchberg–Saxton algorithm as a physics-guided source of training targets.",
    contributions: [
      "Developed a Python-based optical path tracing simulation to model scenarios within complex optical systems.",
      "Validated simulation behavior through physical principles and mathematical derivations, keeping the computational output tied to the underlying system.",
      "Developed an end-to-end Conditional Variational Autoencoder framework for image-conditioned phase-map generation.",
      "Automated Fourier-domain target generation, checkpointed model training and inverse-transform reconstruction for repeatable experiments.",
      "Tested a second physics-guided route using 50-iteration Gerchberg–Saxton targets and a convolutional phase predictor.",
      "Iterated model depth, latent-space design, loss weighting, learning-rate scheduling and Apple Silicon acceleration.",
    ],
    approach: [
      {
        title: "Model the system",
        text: "Translated the optical setup into a tractable Python simulation with clearly defined scenarios.",
      },
      {
        title: "Validate the physics",
        text: "Tested simulated behavior against physical constraints and mathematical reasoning.",
      },
      {
        title: "Automate learning",
        text: "Reframed manual phase-feature generation as a repeatable CVAE and CNN learning workflow.",
      },
    ],
    tools: [
      "Python",
      "Deep Learning",
      "CVAE",
      "Optical Simulation",
      "Mathematical Validation",
      "Fourier Methods",
      "Gerchberg–Saxton",
    ],
    metrics: [
      ["Python", "Optical simulation"],
      ["CVAE", "Phase retrieval"],
      ["GS + CNN", "Physics-guided learning"],
    ],
    visual: {
      input: "Optical scenarios and physical constraints",
      method: "Python path tracing and CVAE modeling",
      output: "Validated simulation and phase retrieval",
      dimensions: [
        "Simulation",
        "Validation",
        "CVAE learning",
        "Reconstruction",
      ],
    },
  },
  {
    id: "shenzhen-airport",
    type: "experience",
    organization: "Shenzhen Bao'an International Airport",
    role: "Data Analysis Intern · Terminal Area Management",
    period: "Jan. 2026 — Mar. 2026",
    location: "Shenzhen, China",
    category: "Aviation Operations",
    image: "assets/images/airport-research/terminal-3-exterior.jpg",
    imageAlt: "Passenger seating and glass facade inside Shenzhen Bao'an International Airport Terminal 3",
    imagePosition: "center 48%",
    creditName: "Renek78",
    creditUrl:
      "https://commons.wikimedia.org/wiki/File:Shenzhen_Bao%27an_International_Airport_Terminal_3_in_September_2025.jpg",
    headline:
      "Connected passenger demand signals with gates, counters and staffing decisions.",
    cardText:
      "Cleaned and analyzed terminal data to identify peak pressure and support practical resource-allocation reviews.",
    overviewTitle:
      "Turning terminal operating data into practical resource-allocation insight.",
    overview:
      "Within the Terminal Area Management Department at Shenzhen Bao'an International Airport, Aaron analyzed passenger flow, gate usage and check-in counter allocation to support resource-arrangement decisions across airlines and passenger-service operations. He used Python to clean and integrate operating data, explored demand patterns and peak-hour pressure points, and communicated findings through data visualizations and structured summary reports.",
    contributions: [
      "Analyzed terminal operational data covering passenger flow, gate usage and check-in counter allocation to support resource-arrangement decisions.",
      "Connected airline and passenger demand patterns with terminal-capacity considerations to identify where operational pressure was concentrated.",
      "Conducted data cleaning, integration and exploratory data analysis in Python to study passenger-volume distribution.",
      "Identified congestion patterns and peak-hour pressure points affecting airline operations and passenger-service efficiency.",
      "Assisted in evaluating gate, counter and staffing allocation using historical and real-time data.",
      "Communicated operational insights through data visualizations and structured reports to support terminal optimization.",
    ],
    approach: [
      {
        title: "Integrate",
        text: "Cleaned and combined terminal operating data into a consistent analytical base.",
      },
      {
        title: "Diagnose",
        text: "Examined passenger distribution, congestion patterns and peak-hour resource pressure.",
      },
      {
        title: "Communicate",
        text: "Translated analysis into clear visuals and structured operational summaries.",
      },
    ],
    tools: [
      "Python",
      "Exploratory Data Analysis",
      "Passenger-Flow Analysis",
      "Resource Allocation",
      "Data Visualization",
      "Airport Operations",
    ],
    metrics: [
      ["Terminal data", "Operational evidence"],
      ["Historical + live", "Resource evaluation"],
      ["Visual reports", "Decision communication"],
    ],
    visual: {
      input: "Passenger flow, gates and check-in counter data",
      method: "Python cleaning, integration and exploratory analysis",
      output: "Resource-allocation insight and terminal reports",
      dimensions: [
        "Passenger demand",
        "Gate usage",
        "Counter allocation",
        "Peak-hour pressure",
      ],
    },
  },
  {
    id: "guosen-securities",
    type: "experience",
    organization: "Guosen Securities",
    role: "Financial Product Research Intern",
    period: "Jul. 2024 — Sep. 2024",
    location: "Shenzhen, China",
    category: "Financial Research",
    image: "assets/images/guosen-finance.jpg",
    imageAlt: "Financial data being analyzed on digital screens",
    imagePosition: "center 44%",
    creditName: "Jakub Żerdzicki",
    creditUrl:
      "https://unsplash.com/photos/someone-is-analyzing-financial-data-on-a-computer-6_XfhTkSpbo",
    headline:
      "Owned the path from raw industry data to decision-ready investment research.",
    cardText:
      "Combined Excel and Python data preparation with sector research, competitive analysis and visual decision frameworks.",
    overviewTitle:
      "A complete data-to-insight workflow for financial product research.",
    overview:
      "Within Guosen Securities’ Financial Product Research Team, Aaron supported the full path from raw industry data to investment-research output. He used Excel and Python to clean and structure complex datasets, conducted sector-level industry and competitive research, and organized growth drivers, market opportunities and structural risks into clear analytical frameworks. The resulting visual outputs made complex evidence easier to evaluate and communicate.",
    contributions: [
      "Built an end-to-end data workflow in Excel and Python to clean, structure and analyze complex industry datasets.",
      "Improved the efficiency of research preparation and investment evaluation by turning heterogeneous information into a usable analytical base.",
      "Conducted sector-level industry research and competitive analysis across growth drivers, market opportunities and structural risks.",
      "Built financial-analysis frameworks that connected individual data points to the broader sector and competitive context.",
      "Created visualization tools that made research outputs clearer and supported faster interpretation and decision-making.",
    ],
    approach: [
      {
        title: "Structure",
        text: "Converted heterogeneous raw information into a consistent and usable analytical dataset.",
      },
      {
        title: "Interrogate",
        text: "Examined sector economics, competition, growth signals and downside risks.",
      },
      {
        title: "Visualize",
        text: "Designed compact frameworks that connected evidence to investment implications.",
      },
    ],
    tools: [
      "Financial Analysis",
      "Industry Research",
      "Excel",
      "Python",
      "Data Visualization",
    ],
    metrics: [
      ["Excel + Python", "Data workflow"],
      ["Sector-level", "Industry research"],
      ["Visual", "Analytical frameworks"],
    ],
    visual: {
      input: "Industry datasets and competitive evidence",
      method: "Excel, Python and sector-level analysis",
      output: "Research frameworks and visual insights",
      dimensions: [
        "Data preparation",
        "Sector analysis",
        "Risk review",
        "Visualization",
      ],
    },
  },
  {
    id: "ebola-transmission",
    type: "project",
    organization: "Ebola Transmission Modelling",
    role: "Mathematical Epidemiology Team Project",
    period: "Dec. 2024",
    location: "Ontario, Canada",
    category: "Mathematical Epidemiology",
    image: "assets/images/ebola-research/base-beta-comparison.png",
    imageAlt: "SIFR model simulations comparing Ebola transmission rates",
    imagePosition: "center",
    creditName: "Project report",
    creditUrl: "assets/files/project-reports/ebola-sirf-model.pdf",
    headline:
      "Modelled Ebola transmission through disease-state dynamics, equilibrium stability and intervention simulations.",
    cardText:
      "Built base and extended SIFR systems to test how transmission and burial practices change epidemic trajectories.",
    overviewTitle:
      "From compartment dynamics to intervention-sensitive epidemic scenarios.",
    overview:
      "A four-person McMaster University team developed discrete-time SIFR models for Ebola transmission. The research represented susceptible, infectious, funeral-related deceased and removed populations, analysed disease-free equilibria through Jacobian eigenvalues, and used R simulations to test how transmission rates, burial efficiency and immediate safe burial alter epidemic trajectories.",
    contributions: [
      "Built a discrete-time SIFR structure covering susceptible, infectious, funeral-related deceased and removed populations.",
      "Defined transmission, funeral-contact, mortality, burial and demographic parameters and translated them into coupled difference equations.",
      "Derived disease-free equilibria and used Jacobian matrices and dominant eigenvalues to interpret local stability.",
      "Extended the model with an immediate-burial intervention parameter to represent safer public-health practice.",
      "Ran R simulations across transmission-rate and burial-efficiency scenarios and translated the results into policy implications.",
    ],
    approach: [
      {
        title: "Model",
        text: "Structured the available data into regression-based transmission models with four to six variables.",
      },
      {
        title: "Test stability",
        text: "Calculated Jacobian matrices and examined equilibrium stability using mathematical methods.",
      },
      {
        title: "Simulate",
        text: "Used R simulations to translate model behavior into policy-relevant interpretation.",
      },
    ],
    tools: [
      "R",
      "Regression Modeling",
      "Jacobian Matrices",
      "Stability Analysis",
      "Epidemiological Modeling",
      "Policy Analysis",
    ],
    metrics: [
      ["4–6 variables", "Regression models"],
      ["Jacobian", "Stability analysis"],
      ["R", "Simulation environment"],
    ],
    visual: {
      input: "Transmission data and model variables",
      method: "Regression, Jacobian and equilibrium analysis",
      output: "R simulations and policy recommendations",
      dimensions: [
        "Data collection",
        "Regression",
        "Stability",
        "Policy insight",
      ],
    },
  },
  {
    id: "code-switching",
    type: "project",
    organization: "Code-Switching & University Engagement",
    role: "Independent Social Research Paper",
    period: "2025",
    location: "Shenzhen, China",
    category: "Applied Social Research",
    image: "assets/images/code-switching/participation-scatter-grid.png",
    imageAlt: "Regression scatter plots linking code-switching and student engagement",
    imagePosition: "center",
    creditName: "Project report",
    creditUrl: "assets/files/project-reports/code-switching-study.pdf",
    headline:
      "Studied how multilingual code-switching relates to classroom, group and extracurricular participation.",
    cardText:
      "Designed a 99-student survey and combined regression, t-tests and moderation analysis across three engagement settings.",
    overviewTitle:
      "Turning multilingual campus behaviour into testable evidence.",
    overview:
      "This ENG2001 research paper examined how code-switching relates to participation and collaboration in a traditional Asian university setting. Using 99 valid undergraduate responses, the study built engagement measures across classroom, extracurricular and group contexts, then applied regression, t-tests and interaction analysis to distinguish overall relationships from local versus non-local differences.",
    contributions: [
      "Designed a 16-item questionnaire covering language background, code-switching frequency and participation across three campus settings.",
      "Collected and structured 99 valid undergraduate responses from varied dialect regions and countries.",
      "Converted Likert responses into smoothed and rescaled 0–100 measures while retaining respondents’ relative ranking.",
      "Estimated simple and multivariate regressions linking code-switching to total, classroom, extracurricular and group engagement.",
      "Used independent-sample t-tests and an interaction model to test differences between Mandarin-native and non-native students.",
    ],
    approach: [
      {
        title: "Measure",
        text: "Operationalised code-switching and engagement across classroom, extracurricular and group settings.",
      },
      {
        title: "Estimate",
        text: "Applied simple and multiple regressions to identify the dimensions most associated with participation.",
      },
      {
        title: "Compare",
        text: "Used t-tests and moderation analysis to examine local and non-local differences.",
      },
    ],
    tools: [
      "Survey Design",
      "Likert Scaling",
      "Regression Analysis",
      "Independent t-tests",
      "Moderation Analysis",
      "Data Visualization",
    ],
    metrics: [
      ["99", "Valid respondents"],
      ["3", "Engagement settings"],
      ["16", "Survey items"],
    ],
    visual: {
      input: "Multilingual student questionnaire responses",
      method: "Scaling, regression, t-tests and moderation",
      output: "Evidence on participation and collaboration",
      dimensions: [
        "Classroom",
        "Extracurricular",
        "Group work",
        "Language background",
      ],
    },
  },
  {
    id: "ai-airport-operations",
    type: "project",
    organization: "AI-Assisted Airport Operations Prototype",
    role: "Vibe Coding Project",
    period: "Mar. 2026 — Jun. 2026",
    location: "Hong Kong",
    category: "Aviation Digital Product",
    image: "assets/images/astri-ai.jpg",
    imageAlt: "Electronic hardware representing aviation technology development",
    imagePosition: "center",
    creditName: "Tim Käbel",
    creditUrl:
      "https://unsplash.com/photos/closeup-photo-of-circuit-board-FCrYdP8gohg",
    headline:
      "Built an AI-assisted prototype around real international-airport operating and passenger use cases.",
    cardText:
      "Explored how generative AI can accelerate airport-product prototyping, UI iteration and operational communication.",
    overviewTitle:
      "Connecting airport operations, passenger journeys and rapid AI-assisted product development.",
    overview:
      "Aaron built an AI-assisted prototype for comparing major international-airport operations. The product brought together flight-status display, terminal-navigation logic, passenger-flow touchpoints and service information. Generative AI accelerated UI iteration and debugging, while the product design remained anchored in real aviation use cases such as transfer planning, departure and arrival lookup, facility search and disruption communication.",
    contributions: [
      "Built an AI-assisted prototype for comparing major international-airport operations.",
      "Included flight-status display, terminal-navigation logic, passenger-flow touchpoints and airport-service information.",
      "Used generative AI to accelerate UI iteration, debugging and rapid product exploration.",
      "Designed the experience around international transfer planning, departure and arrival lookup, service-facility search and disruption communication.",
      "Linked airport-data presentation with clearer passenger communication and improved travel-journey experience.",
      "Explored how airline IT systems can support coordination among airlines, airports and passengers in cross-border travel.",
    ],
    approach: [
      {
        title: "Prototype",
        text: "Used generative AI to accelerate the creation, iteration and debugging of the working product.",
      },
      {
        title: "Design for journeys",
        text: "Mapped real airport and passenger use cases into information, navigation and service interactions.",
      },
      {
        title: "Connect operations",
        text: "Explored how digital systems can improve communication and coordination across the aviation ecosystem.",
      },
    ],
    tools: [
      "Generative AI",
      "Rapid Prototyping",
      "UI Iteration",
      "Aviation Operations",
      "Passenger Experience",
      "Debugging",
    ],
    metrics: [
      ["AI-assisted", "Prototype workflow"],
      ["Journey-led", "Product design"],
      ["Cross-system", "Aviation coordination"],
    ],
    visual: {
      input: "Airport operations and passenger use cases",
      method: "Generative-AI prototyping and UI iteration",
      output: "Integrated airport-operations prototype",
      dimensions: [
        "Flight status",
        "Terminal navigation",
        "Passenger touchpoints",
        "Service information",
      ],
    },
  },
  {
    id: "quant-finance",
    type: "project",
    organization: "Quantitative Asset Pricing",
    role: "Research Project",
    period: "Feb. 2025 — May 2025",
    location: "Hong Kong",
    category: "Quantitative Finance",
    image: "assets/images/quant-finance.jpg",
    imageAlt: "Performance analytics shown on a laptop screen",
    imagePosition: "center",
    creditName: "Luke Chesser",
    creditUrl:
      "https://unsplash.com/photos/graphs-of-performance-analytics-on-a-laptop-screen-JKUTrJ4vK00",
    headline:
      "Built four linked empirical studies of valuation, return distributions, systematic risk and portfolio effects in China’s A-share market.",
    cardText:
      "Combined CSMAR data engineering, cross-sectional regressions, distribution testing and monthly portfolio construction.",
    overviewTitle:
      "Four empirical reports, one integrated view of China’s A-share market.",
    overview:
      "Across four FIN 3080 reports, Aaron built a broad empirical workflow using CSMAR stock-trading, financial-statement, financial-indicator, market-index and Fama–French factor data. The analysis moved from constructing firm-level valuation and accounting variables to testing P/B drivers, evaluating CSI 300 return normality, replicating CAPM-style risk-premium tests, and forming monthly rebalanced portfolios by book-to-market and market capitalization. The result is a connected research program linking raw A-share data to interpretable valuation, risk and portfolio findings.",
    contributions: [
      "Built a research panel covering 679,949 monthly records for 5,525 A-share companies and aligned monthly trading data with lagged quarterly accounting information.",
      "Derived monthly P/E and P/B ratios, quarterly R&D-to-assets ratios and firm age, then compared Main Board and GEM distributions across returns, valuation, profitability, investment and balance-sheet scale.",
      "Tracked monthly median P/E ratios from 2000 to 2023 and tested the persistence of above-median ROE and revenue growth, finding clear decay in sustained profitability.",
      "Constructed 540,104 monthly P/B observations, trimmed the 5th and 95th percentile tails, and estimated a 1,388-firm cross-sectional model showing significant positive relationships between P/B, ROE and volatility.",
      "Formed ten equal-weighted P/B portfolios with monthly rebalancing from 2010 to 2023; average returns declined across P/B deciles, supporting a low-P/B versus high-P/B value spread.",
      "Derived 224 monthly CSI 300 returns and rejected normality through distribution statistics and a Shapiro–Wilk test, with kurtosis of 4.450 and p-value below 0.01.",
      "Replicated portfolio-level and cross-sectional CAPM tests using weekly Main Board data; portfolio betas were strongly significant and the risk-premium slope was positive while the intercept was not significant.",
      "Built ten market-capitalization portfolios for SSE and SZSE Main Board stocks and estimated market-risk and book-to-market factor regressions, identifying monotonically declining alpha from small- to large-cap portfolios.",
    ],
    approach: [
      {
        title: "Engineer the panel",
        text: "Joined monthly market data with lagged quarterly accounting variables, market classifications, index series and factor returns.",
      },
      {
        title: "Test relationships",
        text: "Used descriptive statistics, cross-sectional regression, normality testing, CAPM replication and factor regressions.",
      },
      {
        title: "Translate to portfolios",
        text: "Sorted firms into decile portfolios, rebalanced positions monthly and converted regression output into investment interpretation.",
      },
    ],
    tools: [
      "CSMAR",
      "Data Engineering",
      "Cross-Sectional Regression",
      "Shapiro–Wilk Test",
      "CAPM",
      "Fama–French Factors",
      "Portfolio Sorting",
      "Monthly Rebalancing",
    ],
    metrics: [
      ["679,949", "Monthly A-share records"],
      ["10 × 2", "Value and size portfolios"],
      ["224 months", "CSI 300 return sample"],
    ],
    visual: {
      input: "CSMAR trading, accounting, index and factor data",
      method: "Panel construction, regressions, tests and portfolio sorting",
      output: "Four reports with tables, charts and investment interpretation",
      dimensions: [
        "Valuation",
        "Return distribution",
        "Systematic risk",
        "Portfolio effects",
      ],
    },
    reportModules: [
      {
        title: "A-share fundamentals and valuation",
        scope: "Main Board vs. GEM · 2000–2023",
        finding:
          "GEM firms showed higher valuation ratios, return volatility and R&D intensity, while median P/E levels in both markets were historically low by September 2023. Above-median ROE and revenue-growth persistence decayed sharply over time.",
      },
      {
        title: "P/B drivers and the value effect",
        scope: "Cross-section and ten portfolios · 2010–2023",
        finding:
          "ROE and volatility were significantly positively associated with P/B, although the model explained only 13.3% of cross-sectional variation. Monthly portfolio returns declined across P/B deciles, consistent with a low-P/B value premium.",
      },
      {
        title: "CSI 300 distribution and CAPM",
        scope: "Index returns 2005–2023 · Weekly stocks 2017–2022",
        finding:
          "CSI 300 returns were non-normal with heavy tails. CAPM-style portfolio betas ranged from 0.799 to 1.150 and were strongly significant; the cross-sectional risk-premium slope was positive while the intercept was not significant for the full Main Board sample.",
      },
      {
        title: "Market-cap portfolios and factor exposure",
        scope: "SSE & SZSE Main Board · 2001–2024",
        finding:
          "All ten size portfolios loaded positively on market risk. Estimated alpha declined monotonically from 2.1% for the smallest-cap portfolio to 0.2% for the largest, supporting a persistent small-cap return effect in the sample.",
      },
    ],
  },
];

const metricIcons = ["↗", "◎", "◇"];
const capabilityIcons = ["◇", "↗", "◎", "▦", "∆", "∿"];
const workflowIcons = ["↓", "◎", "↗"];

function experienceCard(experience, compact = false) {
  return `
    <article
      class="experience-card${experience.id === "ibm-consulting" ? " featured" : ""}${compact ? " compact" : ""}"
      data-edit-id="experience-${experience.id}"
      data-edit-label="${experience.organization} experience card"
    >
      <a
        href="experience.html?id=${experience.id}"
        aria-label="Open ${experience.organization} ${experience.type === "project" ? "project" : "experience"}"
      >
        <div class="card-image">
          <img
            src="${experience.image}"
            alt="${experience.imageAlt}"
            style="object-position: ${experience.imagePosition}"
          />
          <span class="card-category">${experience.category}</span>
          ${experience.id === "ibm-consulting" ? '<span class="card-current">Current</span>' : ""}
        </div>
        <div class="card-body">
          <div class="card-meta">
            <span>${experience.period}</span>
            <span>${experience.location}</span>
          </div>
          <h3>${experience.organization}</h3>
          <p class="card-role">${experience.role}</p>
          <p class="card-description">${experience.cardText}</p>
          <span class="card-link">
            ${experience.type === "project" ? "View project" : "View experience"}
            <b>→</b>
          </span>
        </div>
      </a>
    </article>
  `;
}

function renderHome() {
  const experienceGrid = document.getElementById("experienceGrid");
  const projectGrid = document.getElementById("projectGrid");

  if (experienceGrid) {
    experienceGrid.innerHTML = experiences
      .filter((experience) => experience.type === "experience")
      .map((experience) => experienceCard(experience))
      .join("");
  }

  if (projectGrid) {
    projectGrid.innerHTML = experiences
      .filter((experience) => experience.type === "project")
      .map((experience) => experienceCard(experience))
      .join("");
  }
}

function renderRiesCase(experience, next) {
  const target = document.getElementById("experienceContent");

  document.body.classList.add("ries-case-page");
  document.title = "Ries Consulting | Aaron Li";

  target.innerHTML = `
    <article class="ries-case">
      <section class="ries-hero">
        <div class="ries-hero-gridline" aria-hidden="true"></div>
        <div class="container ries-hero-layout">
          <div class="ries-hero-copy" data-reveal>
            <p class="ries-kicker">Strategy Consulting Intern · Shanghai</p>
            <h1>Built the evidence engine behind early-stage strategy.</h1>
            <p>
              I turned fragmented consumer and category signals into a
              structured analytical base, then accelerated the path from
              research to client-facing recommendations with an AI-assisted
              workflow.
            </p>
            <div class="ries-hero-meta">
              <div><span>Role</span><strong>Strategy Consulting Intern</strong></div>
              <div><span>Period</span><strong>Apr. 2026 – Aug. 2026</strong></div>
              <div><span>Location</span><strong>Shanghai, China</strong></div>
            </div>
          </div>

          <div class="ries-hero-visual" data-reveal>
            <img src="assets/images/ries-consulting.jpg" alt="Consulting team structuring ideas around a whiteboard" />
            <aside>
              <span>THE ASSIGNMENT</span>
              <strong>Build a decision-ready view of consumers, categories and brand opportunity.</strong>
              <p>Research → analysis → positioning → proposal</p>
            </aside>
          </div>
        </div>
      </section>

      <nav class="ries-nav" aria-label="Ries Consulting case sections">
        <div class="container">
          <span>Consumer & category strategy</span>
          <div>
            <a href="#ries-mandate">Mandate</a>
            <a href="#ries-research">Research</a>
            <a href="#ries-ai">AI workflow</a>
            <a href="#ries-output">Output</a>
            <a href="#ries-capability">Capabilities</a>
          </div>
        </div>
      </nav>

      <section class="ries-mandate" id="ries-mandate">
        <div class="container">
          <div class="ries-section-head" data-reveal>
            <span>01</span>
            <div>
              <p>Engagement mandate</p>
              <h2>Turn incomplete market signals into a strategy team’s core analytical base.</h2>
            </div>
          </div>

          <div class="ries-mandate-grid">
            <article data-reveal>
              <span>STARTING POINT</span>
              <h3>Fragmented evidence</h3>
              <p>Consumer voices, digital listings and competitor material arrived in different formats, levels of detail and analytical quality.</p>
            </article>
            <article data-reveal>
              <span>STRATEGIC NEED</span>
              <h3>A shared fact base</h3>
              <p>The team needed consistent pain points, category logic and comparisons that could support early hypotheses and working sessions.</p>
            </article>
            <article data-reveal>
              <span>MY ROLE</span>
              <h3>Independent research ownership</h3>
              <p>I organised the evidence architecture, converted raw inputs into usable artefacts and connected findings to proposal development.</p>
            </article>
          </div>

          <div class="ries-brief-bar" data-reveal>
            <span>AMBIGUOUS QUESTION</span>
            <i></i>
            <strong>STRUCTURED EVIDENCE</strong>
            <i></i>
            <span>STRATEGIC DIRECTION</span>
          </div>
        </div>
      </section>

      <section class="ries-research" id="ries-research">
        <div class="container">
          <div class="ries-section-head ries-head-light" data-reveal>
            <span>02</span>
            <div>
              <p>Research architecture</p>
              <h2>Six evidence streams, organised around one decision.</h2>
            </div>
          </div>

          <div class="ries-source-dashboard">
            <div class="ries-source-core" data-reveal>
              <span>CORE ANALYTICAL BASE</span>
              <strong>Consumer × Category × Competition</strong>
              <p>Every source was translated into comparable evidence before synthesis.</p>
            </div>
            <div class="ries-source-grid">
              ${[
                ["01", "Survey logic", "Demand patterns and attribute priorities"],
                ["02", "Interview notes", "Motivations, language and unmet needs"],
                ["03", "E-commerce listings", "Assortment, claims and pricing signals"],
                ["04", "Social discussions", "Pain points, vocabulary and brand heat"],
                ["05", "Competitor materials", "Positioning, proof points and whitespace"],
                ["06", "Industry reports", "Market structure and category context"],
              ]
                .map(
                  ([number, title, insight]) => `
                    <article data-reveal>
                      <span>${number}</span>
                      <h3>${title}</h3>
                      <p>${insight}</p>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </div>

          <div class="ries-synthesis-map" data-reveal>
            <div class="ries-map-input">
              <span>INPUTS</span>
              <strong>6 research streams</strong>
              <p>Qualitative + quantitative + digital</p>
            </div>
            <i aria-hidden="true">→</i>
            <div class="ries-map-process">
              <span>SYNTHESIS</span>
              <div>
                <b>Pain-point summaries</b>
                <b>Category maps</b>
                <b>Comparison tables</b>
              </div>
            </div>
            <i aria-hidden="true">→</i>
            <div class="ries-map-output">
              <span>TEAM ASSET</span>
              <strong>One reusable fact base</strong>
              <p>Clear enough to challenge, extend and present</p>
            </div>
          </div>

          <div class="ries-research-proof">
            <div data-reveal>
              <span>WHAT THIS DEMONSTRATED</span>
              <h3>Research was not a collection exercise—it was analytical design.</h3>
            </div>
            <ul data-reveal>
              <li><strong>Frame:</strong> Decide which questions each source could answer.</li>
              <li><strong>Standardise:</strong> Convert inconsistent material into comparable fields.</li>
              <li><strong>Triangulate:</strong> Test whether consumer, competitor and market signals reinforced one another.</li>
              <li><strong>Synthesise:</strong> Convert evidence into a small number of decision-relevant patterns.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="ries-ai" id="ries-ai">
        <div class="container">
          <div class="ries-section-head" data-reveal>
            <span>03</span>
            <div>
              <p>AI-assisted analysis</p>
              <h2>Make regression exploration repeatable without removing human judgement.</h2>
            </div>
          </div>

          <div class="ries-ai-grid">
            <div class="ries-driver-map" data-reveal>
              <div class="ries-driver-center">
                <span>DEPENDENT SIGNAL</span>
                <strong>Brand heat</strong>
              </div>
              <div class="ries-driver driver-1"><span>Consumer discussion</span></div>
              <div class="ries-driver driver-2"><span>Product features</span></div>
              <div class="ries-driver driver-3"><span>Pricing signals</span></div>
              <div class="ries-driver driver-4"><span>Platform exposure</span></div>
              <i class="ries-connector connector-1"></i>
              <i class="ries-connector connector-2"></i>
              <i class="ries-connector connector-3"></i>
              <i class="ries-connector connector-4"></i>
            </div>

            <div class="ries-ai-copy" data-reveal>
              <span>EXPLORATION MODEL</span>
              <h3>Brand heat = f(discussion, features, price, exposure)</h3>
              <p>
                I used structured prompts to guide AI tools through repetitive
                analytical steps while keeping variable choices, plausibility
                checks and strategic interpretation under human control.
              </p>
              <div class="ries-guardrails">
                <div><strong>AI accelerated</strong><span>Cleaning · code drafting · repeated tests</span></div>
                <div><strong>I retained</strong><span>Question framing · variable logic · interpretation</span></div>
              </div>
            </div>
          </div>

          <div class="ries-workflow-chart">
            ${[
              ["01", "Clean", "Standardise fields and prepare reusable inputs"],
              ["02", "Define", "Specify variables and expected relationships"],
              ["03", "Generate", "Create reusable analytical code"],
              ["04", "Test", "Explore relationships and inspect outputs"],
              ["05", "Interpret", "Translate patterns into strategic meaning"],
            ]
              .map(
                ([number, title, text]) => `
                  <article data-reveal>
                    <span>${number}</span>
                    <h3>${title}</h3>
                    <p>${text}</p>
                  </article>
                `,
              )
              .join("")}
          </div>

          <div class="ries-efficiency-panel" data-reveal>
            <div>
              <span>BEFORE</span>
              <strong>Repeated manual preparation</strong>
              <i class="ries-manual-bar"><b></b><b></b><b></b><b></b></i>
            </div>
            <div class="ries-efficiency-arrow">→</div>
            <div>
              <span>AFTER</span>
              <strong>Reusable analytical workflow</strong>
              <i class="ries-reuse-bar"><b></b><b></b><b></b><b></b></i>
            </div>
            <p>No invented time saving: the evidence is the change from repeated one-off steps to a repeatable process.</p>
          </div>
        </div>
      </section>

      <section class="ries-output" id="ries-output">
        <div class="container">
          <div class="ries-section-head ries-head-light" data-reveal>
            <span>04</span>
            <div>
              <p>Strategy translation</p>
              <h2>Move from analytical finding to client-facing proposal.</h2>
            </div>
          </div>

          <div class="ries-output-flow" data-reveal>
            <div><span>01</span><strong>Raw signals</strong><p>Consumer and market evidence</p></div>
            <i>→</i>
            <div><span>02</span><strong>Patterns</strong><p>Pain points and category structure</p></div>
            <i>→</i>
            <div><span>03</span><strong>Choices</strong><p>Concept and positioning directions</p></div>
            <i>→</i>
            <div><span>04</span><strong>Proposal</strong><p>Clear client-facing storyline</p></div>
          </div>

          <div class="ries-deliverable-grid">
            <article data-reveal><span>01</span><h3>Product concepts</h3><p>Directions grounded in consumer pain points and category opportunity.</p></article>
            <article data-reveal><span>02</span><h3>Use-case angles</h3><p>Situations that made the concept concrete and relevant to the target consumer.</p></article>
            <article data-reveal><span>03</span><h3>Positioning rationale</h3><p>A clear explanation of who the offer is for, what it stands for and why it can win.</p></article>
            <article data-reveal><span>04</span><h3>Slide outlines</h3><p>A consultant-ready sequence connecting evidence, implication and recommendation.</p></article>
            <article data-reveal><span>05</span><h3>Concise recommendations</h3><p>Decision-oriented messages that helped the team progress toward a client proposal.</p></article>
          </div>
        </div>
      </section>

      <section class="ries-capability" id="ries-capability">
        <div class="container">
          <div class="ries-section-head" data-reveal>
            <span>05</span>
            <div>
              <p>Capability evidence</p>
              <h2>What I proved through the work.</h2>
            </div>
          </div>

          <div class="ries-capability-dashboard">
            <div class="ries-capability-numbers" data-reveal>
              <article><strong>6</strong><span>evidence streams structured</span></article>
              <article><strong>5</strong><span>repeatable workflow stages</span></article>
              <article><strong>5</strong><span>consulting output types</span></article>
            </div>
            <div class="ries-capability-list">
              <article data-reveal><span>01</span><div><h3>Research architecture</h3><p>Structure messy qualitative and quantitative inputs around a decision, not around the source format.</p></div></article>
              <article data-reveal><span>02</span><div><h3>Analytical automation</h3><p>Use AI to reduce repetitive work while preserving judgement, traceability and quality control.</p></div></article>
              <article data-reveal><span>03</span><div><h3>Strategic synthesis</h3><p>Recognise the few patterns that matter across consumer, category and competitor evidence.</p></div></article>
              <article data-reveal><span>04</span><div><h3>Consulting communication</h3><p>Turn analysis into product directions, positioning logic and a concise proposal storyline.</p></div></article>
            </div>
          </div>

          <p class="ries-confidential" data-reveal>
            Client, brand and category details are intentionally omitted. The
            page focuses on my working method, responsibilities and
            demonstrated capabilities.
          </p>
        </div>
      </section>

      <section class="next-experience ries-next">
        <a href="experience.html?id=${next.id}">
          <div class="container">
            <span>Next experience</span>
            <strong>${next.organization} →</strong>
          </div>
        </a>
      </section>
    </article>
  `;
}

function renderEbolaCase(experience, next) {
  const target = document.getElementById("experienceContent");

  document.body.classList.add("ebola-case-page");
  document.title = "Ebola Transmission Modelling | Aaron Li";

  target.innerHTML = `
    <article class="epi-case">
      <section class="epi-hero">
        <div class="epi-contour" aria-hidden="true"></div>
        <div class="container epi-hero-grid">
          <div class="epi-hero-copy" data-reveal>
            <p class="epi-kicker">Mathematical epidemiology · McMaster University</p>
            <h1>Modelling Ebola beyond infection alone.</h1>
            <p>
              A discrete-time SIFR system captured infection, funeral-related
              transmission and recovery—then tested which interventions changed
              the epidemic curve.
            </p>
            <div class="epi-meta">
              <span>Team research</span>
              <span>R simulation</span>
              <span>December 2024</span>
            </div>
          </div>

          <aside class="epi-model-card" data-reveal>
            <div class="epi-model-head">
              <span>STATE SYSTEM</span>
              <i>Discrete time</i>
            </div>
            <div class="epi-flow" aria-label="SIFR model moves from susceptible to infectious to funeral-related deceased to removed">
              <div><strong>S</strong><span>Susceptible</span></div>
              <i>β, β<sub>F</sub></i>
              <div><strong>I</strong><span>Infectious</span></div>
              <i>γ</i>
              <div><strong>F</strong><span>Funeral</span></div>
              <i>σ</i>
              <div><strong>R</strong><span>Removed</span></div>
            </div>
            <div class="epi-model-note">
              <span>Extended intervention</span>
              <strong>ε · immediate safe burial</strong>
            </div>
          </aside>
        </div>
      </section>

      <nav class="epi-nav" aria-label="Ebola project sections">
        <div class="container">
          <span>Ebola / SIFR</span>
          <div>
            <a href="#epi-question">Question</a>
            <a href="#epi-model">Model</a>
            <a href="#epi-simulations">Simulations</a>
            <a href="#epi-policy">Policy</a>
          </div>
        </div>
      </nav>

      <section class="epi-overview" id="epi-question">
        <div class="container">
          <div class="epi-section-title" data-reveal>
            <span>01 / RESEARCH QUESTION</span>
            <h2>How do transmission and funeral practices reshape an Ebola outbreak?</h2>
          </div>
          <div class="epi-question-grid">
            <article data-reveal>
              <span>Q1</span>
              <h3>Monitoring</h3>
              <p>Which parameters best signal whether the epidemic is moving toward control or instability?</p>
            </article>
            <article data-reveal>
              <span>Q2</span>
              <h3>Funeral transmission</h3>
              <p>How does contact with infectious deceased individuals alter the scale and speed of transmission?</p>
            </article>
            <article data-reveal>
              <span>Q3</span>
              <h3>Intervention</h3>
              <p>How much can safer and faster burial practices reduce secondary infections?</p>
            </article>
          </div>
          <div class="epi-stat-strip" data-reveal>
            <div><strong>4</strong><span>state variables</span></div>
            <div><strong>6</strong><span>core parameters</span></div>
            <div><strong>2</strong><span>model variants</span></div>
            <div><strong>300–400</strong><span>simulated days</span></div>
          </div>
        </div>
      </section>

      <section class="epi-model-section" id="epi-model">
        <div class="container">
          <div class="epi-section-title epi-title-light" data-reveal>
            <span>02 / MODEL ARCHITECTURE</span>
            <h2>Separate infection from funeral-related risk.</h2>
          </div>
          <div class="epi-model-grid">
            <div class="epi-equations" data-reveal>
              <article>
                <span>BASE MODEL</span>
                <h3>SIFR dynamics</h3>
                <p><strong>S → I</strong> through contact with infectious people and funeral-related deceased.</p>
                <p><strong>I → F</strong> when infected individuals die and remain epidemiologically active during funeral practices.</p>
                <p><strong>F → R</strong> when burial is completed and funeral transmission ends.</p>
              </article>
              <article>
                <span>EXTENDED MODEL</span>
                <h3>Immediate-burial pathway</h3>
                <p>The extension adds <strong>εI</strong>, allowing a share of infected deaths to move directly into the removed state without a traditional funeral.</p>
              </article>
            </div>
            <div class="epi-parameter-board" data-reveal>
              ${[
                ["β", "person-to-person transmission"],
                ["βF", "funeral-related transmission"],
                ["γ", "infection-to-death transition"],
                ["σ", "burial completion rate"],
                ["μ", "birth and natural-death rate"],
                ["ε", "immediate safe-burial rate"],
              ]
                .map(
                  ([symbol, meaning]) => `
                    <div><strong>${symbol}</strong><span>${meaning}</span></div>
                  `,
                )
                .join("")}
            </div>
          </div>

          <div class="epi-stability" data-reveal>
            <div>
              <span>DISEASE-FREE EQUILIBRIUM</span>
              <strong>S* = 1 · I* = 0 · F* = 0</strong>
            </div>
            <p>
              The Jacobian matrix converts the nonlinear system into a local
              stability test. A dominant eigenvalue above one signals an
              unstable equilibrium and the potential for uncontrolled spread.
            </p>
          </div>
        </div>
      </section>

      <section class="epi-simulation-section" id="epi-simulations">
        <div class="container">
          <div class="epi-section-title" data-reveal>
            <span>03 / SIMULATION EVIDENCE</span>
            <h2>Intervention levers change the peak before they change the long run.</h2>
          </div>

          <div class="epi-evidence-block">
            <div class="epi-evidence-copy" data-reveal>
              <span>BURIAL EFFICIENCY / BASE MODEL</span>
              <h3>Faster burial reduces funeral-related exposure.</h3>
              <p>
                Raising σ shortens the period in which deceased individuals
                remain infectious. In the simulated base model, higher burial
                efficiency reduced funeral-associated fatalities and supported
                a larger healthy population after the acute phase.
              </p>
              <div class="epi-callout">
                <strong>σ = 0.04</strong>
                <span>higher burial-completion scenario</span>
              </div>
            </div>
            <figure class="epi-report-figure" data-reveal>
              <div><img src="assets/images/ebola-research/base-burial-efficiency.png" alt="Base SIFR simulation with burial efficiency sigma equal to 0.04" loading="lazy" /></div>
              <figcaption><span>FIG. 02</span> Base model · burial efficiency</figcaption>
            </figure>
          </div>

          <div class="epi-evidence-block epi-evidence-reverse">
            <figure class="epi-report-figure epi-wide-chart" data-reveal>
              <div><img src="assets/images/ebola-research/base-beta-comparison.png" alt="Base SIFR simulations comparing transmission rates beta 0.000318 and 0.000718" loading="lazy" /></div>
              <figcaption><span>FIG. 03</span> Base model · transmission-rate comparison</figcaption>
            </figure>
            <div class="epi-evidence-copy" data-reveal>
              <span>TRANSMISSION RATE / BASE MODEL</span>
              <h3>Higher β creates a faster, larger infectious peak.</h3>
              <p>
                Increasing β from 0.000318 to 0.000718 moved the infectious
                population peak from roughly 70% toward 85% in the simulated
                scenarios. The sharp short-run change creates a direct
                healthcare-capacity risk.
              </p>
            </div>
          </div>

          <div class="epi-extended-grid">
            <figure class="epi-report-figure" data-reveal>
              <div><img src="assets/images/ebola-research/extended-burial-comparison.png" alt="Extended Ebola model simulations comparing burial efficiencies sigma 0.02 and 0.04" loading="lazy" /></div>
              <figcaption><span>FIG. 05</span> Extended model · σ = 0.02 vs. 0.04</figcaption>
            </figure>
            <figure class="epi-report-figure" data-reveal>
              <div><img src="assets/images/ebola-research/extended-beta-comparison.png" alt="Extended Ebola model simulations comparing beta 0.000318 and 0.000518" loading="lazy" /></div>
              <figcaption><span>FIG. 06</span> Extended model · β = 0.000318 vs. 0.000518</figcaption>
            </figure>
          </div>
          <p class="epi-extended-note" data-reveal>
            In the extended model, increasing β accelerated the infectious peak
            from approximately day 25 to day 20. Increasing σ produced a larger
            susceptible population and fewer funeral-related fatalities after
            the initial outbreak phase.
          </p>
        </div>
      </section>

      <section class="epi-policy-section" id="epi-policy">
        <div class="container">
          <div class="epi-section-title epi-title-light" data-reveal>
            <span>04 / POLICY TRANSLATION</span>
            <h2>Move the model levers through real public-health action.</h2>
          </div>
          <div class="epi-policy-grid">
            <article data-reveal><span>β ↓</span><h3>Reduce contact transmission</h3><p>Isolation, contact tracing and public education slow the rise in active infections and protect system capacity.</p></article>
            <article data-reveal><span>βF ↓</span><h3>Limit funeral exposure</h3><p>Culturally sensitive protocols can reduce close contact with infectious deceased individuals.</p></article>
            <article data-reveal><span>σ ↑</span><h3>Improve burial efficiency</h3><p>Faster completion of safe burial shortens the duration of funeral-related infectious risk.</p></article>
            <article data-reveal><span>ε ↑</span><h3>Enable immediate safe burial</h3><p>The extended pathway redirects infectious deaths away from traditional funeral transmission.</p></article>
          </div>
          <div class="epi-limitations" data-reveal>
            <strong>Model boundary</strong>
            <p>
              The system assumes fixed rates, homogeneous mixing and simplified
              population transitions. Its value is scenario insight—not a
              point forecast of a real outbreak.
            </p>
            <a href="assets/files/project-reports/ebola-sirf-model.pdf" target="_blank" rel="noreferrer">Open complete report ↗</a>
          </div>
        </div>
      </section>

      <section class="next-experience epi-next">
        <a href="experience.html?id=${next.id}">
          <div class="container">
            <span>Next project</span>
            <strong>${next.organization} →</strong>
          </div>
        </a>
      </section>
    </article>
  `;
}

function renderCodeSwitchCase(experience, next) {
  const target = document.getElementById("experienceContent");

  document.body.classList.add("language-case-page");
  document.title = "Code-Switching & University Engagement | Aaron Li";

  target.innerHTML = `
    <article class="language-case">
      <section class="language-hero">
        <div class="language-rings" aria-hidden="true"></div>
        <div class="container language-hero-grid">
          <div class="language-hero-copy" data-reveal>
            <p class="language-kicker">Applied social research · ENG2001</p>
            <h1>When language shifts, does participation change?</h1>
            <p>
              A 99-student study tested how code-switching relates to classroom,
              group and extracurricular engagement in a multilingual Asian
              university.
            </p>
            <div class="language-meta">
              <span>Survey design</span>
              <span>Regression</span>
              <span>Moderation analysis</span>
            </div>
          </div>
          <aside class="language-sample-card" data-reveal>
            <span>SAMPLE / VALID RESPONSES</span>
            <strong>99</strong>
            <p>undergraduate voices</p>
            <div>
              <i>Classroom</i>
              <i>Extracurricular</i>
              <i>Group work</i>
            </div>
          </aside>
        </div>
      </section>

      <nav class="language-nav" aria-label="Code-switching project sections">
        <div class="container">
          <span>Code-switching / engagement</span>
          <div>
            <a href="#language-question">Question</a>
            <a href="#language-design">Design</a>
            <a href="#language-results">Results</a>
            <a href="#language-meaning">Meaning</a>
          </div>
        </div>
      </nav>

      <section class="language-question" id="language-question">
        <div class="container">
          <div class="language-section-head" data-reveal>
            <span>01</span>
            <div>
              <p>Research gap</p>
              <h2>Move from abstract belonging to observable campus behaviour.</h2>
            </div>
          </div>
          <div class="language-question-grid">
            <div class="language-question-copy" data-reveal>
              <p>
                Prior research often discusses code-switching through identity
                or psychology. This study asked whether it is associated with
                specific participation outcomes inside a traditional Asian
                university environment.
              </p>
            </div>
            <div class="language-rq-list">
              <article data-reveal><span>RQ1</span><p>How does code-switching frequency relate to participation and collaboration?</p></article>
              <article data-reveal><span>RQ2</span><p>Do Mandarin-native and non-native students show different habits or engagement outcomes?</p></article>
            </div>
          </div>
        </div>
      </section>

      <section class="language-design" id="language-design">
        <div class="container">
          <div class="language-section-head" data-reveal>
            <span>02</span>
            <div>
              <p>Measurement design</p>
              <h2>Convert multilingual behaviour into three comparable dimensions.</h2>
            </div>
          </div>
          <div class="language-dimension-grid">
            <article data-reveal><span>01</span><h3>Classroom</h3><p>Language switching during discussion and frequency of speaking or sharing opinions.</p></article>
            <article data-reveal><span>02</span><h3>Extracurricular</h3><p>Code-switching, activity participation and role-weighted involvement outside class.</p></article>
            <article data-reveal><span>03</span><h3>Group work</h3><p>Mixed-language communication, completion and perceived collaboration efficiency.</p></article>
          </div>

          <div class="language-transform-grid">
            <div class="language-transform-copy" data-reveal>
              <span>DATA TRANSFORMATION</span>
              <h3>Preserve order, improve interpretability.</h3>
              <p>
                Six core variables began as 1–5 Likert responses. A small
                uniform perturbation reduced visual overlap, then scores were
                linearly rescaled to 0–100.
              </p>
              <div class="language-formula">
                <strong>x̃ = x + ε</strong><i>ε ~ U(-0.35, 0.35)</i>
                <strong>y = 100 × (x̃ − 1) / 4</strong><i>rescaled outcome</i>
              </div>
              <div class="language-design-stats">
                <span><strong>16</strong> survey items</span>
                <span><strong>3</strong> contexts</span>
                <span><strong>0–100</strong> final scale</span>
              </div>
            </div>
            <figure class="language-report-figure" data-reveal>
              <div><img src="assets/images/code-switching/likert-smoothing.png" alt="Original Likert scores compared with smoothed continuous scores" loading="lazy" /></div>
              <figcaption><span>FIG. 01</span> Likert-score smoothing transformation</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="language-results" id="language-results">
        <div class="container">
          <div class="language-section-head language-head-light" data-reveal>
            <span>03</span>
            <div>
              <p>Regression evidence</p>
              <h2>Overall engagement rose with code-switching frequency.</h2>
            </div>
          </div>
          <div class="language-main-result">
            <figure class="language-report-figure language-figure-dark" data-reveal>
              <div><img src="assets/images/code-switching/participation-scatter-grid.png" alt="Four regression scatter plots for extracurricular, classroom, group and total engagement" loading="lazy" /></div>
              <figcaption><span>FIG. 02</span> Code-switching and engagement across four views</figcaption>
            </figure>
            <div class="language-result-summary" data-reveal>
              <span>SIMPLE REGRESSION</span>
              <strong>β = 0.6859</strong>
              <p>Code-switching total → engagement total</p>
              <div>
                <i><b>R²</b> 0.318</i>
                <i><b>p</b> 0.001</i>
              </div>
              <p class="language-result-note">
                The association was positive and statistically significant, but
                the cross-sectional design does not establish causality.
              </p>
            </div>
          </div>

          <div class="language-coefficient-section">
            <div class="language-coefficient-copy" data-reveal>
              <span>MULTIPLE REGRESSION</span>
              <h3>The classroom channel carried the strongest signal.</h3>
              <p>
                With all three dimensions entered together, classroom and
                extracurricular code-switching remained significant. The group
                coefficient was small and not significant.
              </p>
              <div class="language-r-square">
                <span><strong>0.451</strong> R²</span>
                <span><strong>0.433</strong> Adjusted R²</span>
              </div>
            </div>
            <div class="language-coefficient-bars" data-reveal>
              ${[
                ["Classroom", 0.599, "p = 0.001", 100],
                ["Extracurricular", 0.2963, "p = 0.005", 49],
                ["Group work", 0.0331, "p = 0.655", 6],
              ]
                .map(
                  ([label, value, p, width]) => `
                    <div>
                      <header><strong>${label}</strong><span>β = ${value}</span></header>
                      <i><b style="width: ${width}%"></b></i>
                      <p>${p}</p>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>

          <figure class="language-table-wide" data-reveal>
            <img src="assets/images/code-switching/engagement-regressions.png" alt="Simple and multiple regression tables for total student engagement" loading="lazy" />
            <figcaption><span>TABLE 01</span> Simple and multivariate engagement models</figcaption>
          </figure>
        </div>
      </section>

      <section class="language-comparison">
        <div class="container">
          <div class="language-section-head" data-reveal>
            <span>04</span>
            <div>
              <p>Local vs. non-local</p>
              <h2>Language background did not change the central relationship.</h2>
            </div>
          </div>
          <div class="language-comparison-grid">
            <figure class="language-report-figure" data-reveal>
              <div><img src="assets/images/code-switching/local-nonlocal-ttest.png" alt="T-test comparison between Mandarin-native and non-native students" loading="lazy" /></div>
              <figcaption><span>TABLE 02</span> Independent-sample comparisons</figcaption>
            </figure>
            <figure class="language-report-figure" data-reveal>
              <div><img src="assets/images/code-switching/moderation-regression.png" alt="Moderation regression with code-switching, local status and interaction term" loading="lazy" /></div>
              <figcaption><span>TABLE 03</span> Language-background moderation model</figcaption>
            </figure>
          </div>
          <div class="language-comparison-conclusion" data-reveal>
            <div><span>Interaction term</span><strong>β = -0.18</strong><i>p = 0.388</i></div>
            <p>
              Only extracurricular code-switching and extracurricular
              engagement differed significantly between the two groups. The
              non-significant interaction indicates no evidence that
              Mandarin-native status changed the overall code-switching–
              engagement relationship.
            </p>
          </div>
        </div>
      </section>

      <section class="language-meaning" id="language-meaning">
        <div class="container">
          <div class="language-section-head language-head-light" data-reveal>
            <span>05</span>
            <div>
              <p>Interpretation</p>
              <h2>Code-switching appears to function as a participation tool.</h2>
            </div>
          </div>
          <div class="language-takeaway-grid">
            <article data-reveal><span>01</span><h3>Classroom use matters most</h3><p>In an English-medium environment, switching languages may help students clarify complex ideas and remain active in discussion.</p></article>
            <article data-reveal><span>02</span><h3>The effect is broadly shared</h3><p>The overall pattern was not materially different between Mandarin-native and non-native respondents.</p></article>
            <article data-reveal><span>03</span><h3>Support multilingual practice</h3><p>Universities can treat strategic language switching as a communication resource rather than automatically as disengagement.</p></article>
          </div>
          <div class="language-boundary" data-reveal>
            <strong>Research boundary</strong>
            <p>
              The study uses a 99-person, self-reported, cross-sectional sample.
              Results describe association within this university context and
              should not be read as causal or universally representative.
            </p>
            <a href="assets/files/project-reports/code-switching-study.pdf" target="_blank" rel="noreferrer">Open complete paper ↗</a>
          </div>
        </div>
      </section>

      <section class="next-experience language-next">
        <a href="experience.html?id=${next.id}">
          <div class="container">
            <span>Next project</span>
            <strong>${next.organization} →</strong>
          </div>
        </a>
      </section>
    </article>
  `;
}

function renderQuantCase(experience, next) {
  const target = document.getElementById("experienceContent");
  const alphaSeries = [2.1, 1.3, 1.0, 0.8, 0.6, 0.5, 0.4, 0.4, 0.3, 0.2];

  document.body.classList.add("quant-case-page");
  document.title = "Quantitative Asset Pricing | Aaron Li";

  target.innerHTML = `
    <article class="quant-case">
      <section class="quant-case-hero">
        <div class="quant-grid-field" aria-hidden="true"></div>
        <div class="container quant-case-hero-grid">
          <div class="quant-case-intro" data-reveal>
            <p class="quant-kicker">
              Quantitative research portfolio
              <span>China A-shares · 2025</span>
            </p>
            <h1>From 679,949 records to investable evidence.</h1>
            <p class="quant-hero-lede">
              Four linked empirical studies tested how valuation, profitability,
              return distributions and factor exposures behave across China’s
              equity market.
            </p>
            <div class="quant-hero-meta">
              <div>
                <span>Research scope</span>
                <strong>2000–2024</strong>
              </div>
              <div>
                <span>Primary source</span>
                <strong>CSMAR</strong>
              </div>
              <div>
                <span>Deliverables</span>
                <strong>4 reports</strong>
              </div>
            </div>
          </div>

          <aside class="quant-signal-panel" data-reveal>
            <div class="quant-signal-head">
              <span>SIZE EFFECT / ALPHA</span>
              <i>Regression evidence</i>
            </div>
            <div class="quant-alpha-chart" role="img" aria-label="Portfolio alpha declines from 2.1 percent for the smallest-cap portfolio to 0.2 percent for the largest-cap portfolio.">
              ${alphaSeries
                .map(
                  (value, index) => `
                    <div>
                      <span style="height: ${(value / 2.1) * 100}%"></span>
                      <i>P${index + 1}</i>
                    </div>
                  `,
                )
                .join("")}
            </div>
            <div class="quant-signal-summary">
              <strong>2.1% → 0.2%</strong>
              <span>Estimated alpha, small-cap to large-cap deciles</span>
            </div>
          </aside>
        </div>
      </section>

      <nav class="quant-case-nav" aria-label="Quantitative project sections">
        <div class="container">
          <span>Research case</span>
          <div>
            <a href="#quant-overview">Overview</a>
            <a href="#quant-evidence">Evidence</a>
            <a href="#quant-method">Method</a>
            <a href="#quant-synthesis">Synthesis</a>
          </div>
        </div>
      </nav>

      <section class="quant-opening" id="quant-overview">
        <div class="container quant-opening-grid">
          <div class="quant-opening-label" data-reveal>
            <span>01</span>
            <p>Research position</p>
          </div>
          <div class="quant-opening-copy" data-reveal>
            <p class="quant-display-quote">
              What survives when familiar asset-pricing ideas are tested against
              the structure and history of China’s A-share market?
            </p>
            <div class="quant-opening-body">
              <p>
                This was not one isolated model. The work progressed from
                building a firm-level panel, to explaining valuation
                differences, to constructing investable portfolios, and finally
                to testing systematic risk and factor exposure.
              </p>
              <p>
                Each report answered a distinct question, while sharing a
                consistent research discipline: transparent sample
                construction, interpretable statistical tests and conclusions
                bounded by the evidence.
              </p>
            </div>
          </div>
        </div>

        <div class="container quant-number-strip" data-reveal>
          <div><strong>679,949</strong><span>monthly firm records</span></div>
          <div><strong>5,525</strong><span>A-share companies</span></div>
          <div><strong>224</strong><span>CSI 300 monthly returns</span></div>
          <div><strong>20</strong><span>value and size portfolios</span></div>
        </div>
      </section>

      <section class="quant-pipeline" id="quant-method">
        <div class="container">
          <div class="quant-section-head" data-reveal>
            <div><span>02</span><p>Research architecture</p></div>
            <h2>A reproducible path from raw market data to inference.</h2>
          </div>
          <div class="quant-pipeline-grid">
            <article data-reveal>
              <span>INPUT / 01</span>
              <h3>Assemble</h3>
              <p>Trading records, quarterly financial statements, market indices, risk-free rates and Fama–French factors.</p>
              <i>CSMAR source tables</i>
            </article>
            <article data-reveal>
              <span>TRANSFORM / 02</span>
              <h3>Engineer</h3>
              <p>Lag accounting data, derive valuation ratios, trim outliers, align frequencies and assign monthly deciles.</p>
              <i>Panel construction</i>
            </article>
            <article data-reveal>
              <span>TEST / 03</span>
              <h3>Estimate</h3>
              <p>Cross-sectional models, Shapiro–Wilk testing, CAPM replication and factor regressions.</p>
              <i>Statistical inference</i>
            </article>
            <article data-reveal>
              <span>OUTPUT / 04</span>
              <h3>Interpret</h3>
              <p>Translate coefficients, distributions and portfolio returns into bounded investment conclusions.</p>
              <i>Four evidence-led reports</i>
            </article>
          </div>
        </div>
      </section>

      <section class="quant-evidence-intro" id="quant-evidence">
        <div class="container quant-section-head" data-reveal>
          <div><span>03</span><p>Empirical evidence</p></div>
          <h2>Four questions. Four layers of market evidence.</h2>
        </div>
      </section>

      <section class="quant-research-module quant-module-light">
        <div class="container">
          <div class="quant-module-heading" data-reveal>
            <div>
              <span>REPORT 01</span>
              <p>Fundamentals &amp; valuation</p>
            </div>
            <h2>How different are Main Board and GEM companies?</h2>
          </div>
          <div class="quant-module-story">
            <div class="quant-module-copy" data-reveal>
              <p class="quant-module-lede">
                A market-wide panel connected monthly trading observations with
                lagged quarterly fundamentals.
              </p>
              <ul>
                <li><strong>679,949</strong> monthly records across <strong>5,525</strong> companies.</li>
                <li>GEM firms showed higher valuation multiples, volatility and R&amp;D intensity.</li>
                <li>By September 2023, median P/E levels were historically low for both boards.</li>
                <li>Persistence in above-median ROE and revenue growth decayed sharply over time.</li>
              </ul>
            </div>
            <div class="quant-figure-duo">
              <figure class="quant-report-figure" data-reveal>
                <div><img src="assets/images/quant-research/valuation-pe.png" alt="Median price-to-earnings ratios for Main Board and GEM companies from 2000 to 2023" loading="lazy" /></div>
                <figcaption><span>FIG. 01A</span> Median P/E by market, 2000–2023</figcaption>
              </figure>
              <figure class="quant-report-figure" data-reveal>
                <div><img src="assets/images/quant-research/profitability-persistence.png" alt="Declining share of companies maintaining above-median return on equity and revenue growth" loading="lazy" /></div>
                <figcaption><span>FIG. 01B</span> Persistence of profitability and growth</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section class="quant-research-module quant-module-ink">
        <div class="container">
          <div class="quant-module-heading" data-reveal>
            <div>
              <span>REPORT 02</span>
              <p>Price-to-book &amp; value</p>
            </div>
            <h2>Does a lower P/B ratio translate into higher returns?</h2>
          </div>
          <div class="quant-equation-card" data-reveal>
            <span>Cross-sectional model · December 2010 · N = 1,388</span>
            <strong>P/B = 0.169 + 0.017 × ROE + 8.597 × Volatility</strong>
            <div>
              <p><i>R²</i><b>13.3%</b></p>
              <p><i>Sample after trimming</i><b>486,079</b></p>
              <p><i>Portfolio window</i><b>2010–2023</b></p>
            </div>
          </div>
          <div class="quant-value-grid">
            <figure class="quant-report-figure quant-report-figure-dark" data-reveal>
              <div><img src="assets/images/quant-research/value-deciles.png" alt="Average returns declining across ten price-to-book ratio portfolios" loading="lazy" /></div>
              <figcaption><span>FIG. 02A</span> Mean return by P/B decile</figcaption>
            </figure>
            <div class="quant-value-conclusion" data-reveal>
              <span>CORE FINDING</span>
              <h3>Returns declined across P/B deciles.</h3>
              <p>
                Ten equal-weighted portfolios were rebalanced monthly. The
                lowest-P/B portfolio generated the strongest average return,
                while the highest-P/B portfolio was negative in the sample.
              </p>
              <div>
                <strong>Low P/B</strong>
                <i></i>
                <strong>High P/B</strong>
              </div>
            </div>
          </div>
          <figure class="quant-wide-figure" data-reveal>
            <img src="assets/images/quant-research/value-cumulative.png" alt="Cumulative returns for ten price-to-book portfolios from 2010 to 2023" loading="lazy" />
            <figcaption>
              <span>FIG. 02B</span>
              Cumulative return paths show the long-run separation between P/B portfolios.
            </figcaption>
          </figure>
        </div>
      </section>

      <section class="quant-research-module quant-module-light">
        <div class="container">
          <div class="quant-module-heading" data-reveal>
            <div>
              <span>REPORT 03</span>
              <p>Distribution &amp; CAPM</p>
            </div>
            <h2>Are index returns normal—and is beta rewarded?</h2>
          </div>
          <div class="quant-distribution-grid">
            <figure class="quant-report-figure" data-reveal>
              <div><img src="assets/images/quant-research/csi300-distribution.png" alt="Histogram of monthly CSI 300 returns with a fitted normal distribution" loading="lazy" /></div>
              <figcaption><span>FIG. 03A</span> CSI 300 monthly return distribution</figcaption>
            </figure>
            <div class="quant-stat-panel" data-reveal>
              <span>DISTRIBUTION TEST</span>
              <div><strong>0.909%</strong><p>monthly mean</p></div>
              <div><strong>8.071%</strong><p>standard deviation</p></div>
              <div><strong>4.450</strong><p>kurtosis</p></div>
              <div><strong>&lt; 0.01</strong><p>Shapiro–Wilk p-value</p></div>
              <p class="quant-stat-conclusion">
                The normality assumption was rejected; the return sample
                exhibited materially heavier tails than a Gaussian benchmark.
              </p>
            </div>
          </div>
          <div class="quant-capm-block">
            <div class="quant-capm-copy" data-reveal>
              <span>CAPM REPLICATION</span>
              <h3>Beta was strongly priced at the portfolio level.</h3>
              <p>
                Weekly Main Board stocks were sorted into ten beta portfolios.
                Estimated portfolio betas ranged from <strong>0.799 to
                1.150</strong> and were highly significant.
              </p>
              <p>
                In the second-stage cross-section, the risk-premium slope was
                positive (<strong>γ₁ = 0.00267, p = 0.0252</strong>) while the
                intercept was not significant for the full Main Board sample.
              </p>
            </div>
            <figure class="quant-table-figure" data-reveal>
              <div><img src="assets/images/quant-research/capm-results.png" alt="CAPM regression table for ten beta-sorted portfolios" loading="lazy" /></div>
              <figcaption><span>TABLE 03B</span> Portfolio-level CAPM estimates</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="quant-research-module quant-module-blue">
        <div class="container">
          <div class="quant-module-heading" data-reveal>
            <div>
              <span>REPORT 04</span>
              <p>Size &amp; factor exposure</p>
            </div>
            <h2>Does the small-cap effect remain after factor controls?</h2>
          </div>
          <div class="quant-size-grid">
            <div class="quant-size-story" data-reveal>
              <span>10 MONTHLY-REBALANCED PORTFOLIOS</span>
              <p>
                SSE and SZSE Main Board stocks were ranked by market
                capitalization and evaluated against market-risk and
                book-to-market factors.
              </p>
              <div class="quant-size-finding">
                <div><strong>288</strong><span>observations per portfolio</span></div>
                <div><strong>0.982–1.053</strong><span>market-risk loadings</span></div>
                <div><strong>2.1% → 0.2%</strong><span>alpha, P1 to P10</span></div>
              </div>
              <p>
                Alpha declined monotonically from the smallest- to the
                largest-cap portfolio. Market loadings remained positive and
                significant, while book-to-market exposure was generally
                negative.
              </p>
            </div>
            <figure class="quant-table-figure quant-table-figure-blue" data-reveal>
              <div><img src="assets/images/quant-research/size-factor-results.png" alt="Factor regression results for ten market-capitalization portfolios" loading="lazy" /></div>
              <figcaption><span>TABLE 04A</span> Portfolio excess-return regressions</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="quant-takeaways" id="quant-synthesis">
        <div class="container">
          <div class="quant-section-head" data-reveal>
            <div><span>04</span><p>Research synthesis</p></div>
            <h2>What the evidence says—and what it does not.</h2>
          </div>
          <div class="quant-takeaway-grid">
            <article data-reveal><span>01</span><h3>Valuation is structured</h3><p>Board type, profitability and volatility help explain valuation, but most cross-sectional variation remains outside the simple model.</p></article>
            <article data-reveal><span>02</span><h3>Value appears economically meaningful</h3><p>Low-P/B portfolios outperformed high-P/B portfolios in this sample; the result is evidence, not a guarantee of future returns.</p></article>
            <article data-reveal><span>03</span><h3>Tail risk matters</h3><p>CSI 300 monthly returns were not normally distributed, reinforcing the need to look beyond means and standard deviations.</p></article>
            <article data-reveal><span>04</span><h3>Size survives controls</h3><p>The alpha gradient remained visible after controlling for market and book-to-market factors across the constructed portfolios.</p></article>
          </div>
          <p class="quant-provenance" data-reveal>
            Figures are reproduced from the project reports. Statistics and
            interpretations shown on this page are drawn from the reported
            samples, tables and model outputs.
          </p>
        </div>
      </section>

      <section class="next-experience quant-next">
        <a href="experience.html?id=${next.id}">
          <div class="container">
            <span>Next experience</span>
            <strong>${next.organization} →</strong>
          </div>
        </a>
      </section>
    </article>
  `;
}

function renderAstriCase(experience, next) {
  const target = document.getElementById("experienceContent");

  document.body.classList.add("astri-case-page");
  document.title = "Hong Kong ASTRI | Aaron Li";

  target.innerHTML = `
    <article class="astri-case">
      <section class="astri-hero">
        <div class="astri-hero-grid" aria-hidden="true"></div>
        <div class="container astri-hero-layout">
          <div class="astri-hero-copy" data-reveal>
            <p class="astri-kicker">Hong Kong ASTRI · Applied AI Research</p>
            <h1>From optical physics to learned phase maps.</h1>
            <p class="astri-hero-lede">
              I translated an inverse-optics problem into an executable research
              pipeline—connecting physical simulation, Fourier-domain targets,
              generative learning and phase-only reconstruction.
            </p>
            <div class="astri-hero-meta">
              <div><span>Role</span><strong>${experience.role}</strong></div>
              <div><span>Period</span><strong>${experience.period}</strong></div>
              <div><span>Location</span><strong>${experience.location}</strong></div>
            </div>
          </div>

          <div class="astri-hero-visual" data-reveal>
            <div class="astri-phase-field" aria-hidden="true">
              <i></i><i></i><i></i><i></i>
              <span class="astri-phase-core">φ</span>
              <span class="astri-orbit orbit-one"></span>
              <span class="astri-orbit orbit-two"></span>
              <span class="astri-orbit orbit-three"></span>
            </div>
            <div class="astri-hero-model">
              <span>RESEARCH SYSTEM</span>
              <strong>Image-conditioned phase generation</strong>
              <div>
                <b>28 × 28</b><i>input</i>
                <em>→</em>
                <b>20D</b><i>latent</i>
                <em>→</em>
                <b>φ̂(x)</b><i>phase</i>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav class="astri-nav" aria-label="ASTRI research case sections">
        <div class="container">
          <span>Optical phase intelligence</span>
          <div>
            <a href="#astri-brief">Brief</a>
            <a href="#astri-system">System</a>
            <a href="#astri-evidence">Evidence</a>
            <a href="#astri-interpretation">Interpretation</a>
            <a href="#astri-capability">Capabilities</a>
          </div>
        </div>
      </nav>

      <section class="astri-brief" id="astri-brief">
        <div class="container">
          <div class="astri-section-head" data-reveal>
            <span>01</span>
            <div>
              <p>Research brief</p>
              <h2>Can a learned model replace repeated manual phase-feature generation?</h2>
            </div>
          </div>

          <div class="astri-brief-grid">
            <article class="astri-brief-main" data-reveal>
              <span>THE PROBLEM</span>
              <p>
                Optical reconstruction requires both a physical model and a
                reliable representation of phase. The work combined
                first-principles simulation with data-driven approximation:
                formulate the system, create phase targets, learn the mapping
                and reconstruct the result.
              </p>
              <div class="astri-question">
                <i>Research question</i>
                <strong>
                  How much of the phase-retrieval workflow can be automated
                  while keeping the output testable against optical principles?
                </strong>
              </div>
            </article>

            <article class="astri-workstream" data-reveal>
              <span>A · PHYSICS</span>
              <h3>Optical simulation</h3>
              <p>
                Built Python models for optical paths and checked simulated
                scenarios against mathematical and physical constraints.
              </p>
              <div><b>Inputs</b><i>Optical configuration</i></div>
              <div><b>Method</b><i>Path tracing + derivation</i></div>
              <div><b>Output</b><i>Validated scenarios</i></div>
            </article>

            <article class="astri-workstream" data-reveal>
              <span>B · LEARNING</span>
              <h3>Phase prediction</h3>
              <p>
                Developed CVAE and CNN experiments for phase-map prediction and
                reconstruction from image-conditioned inputs.
              </p>
              <div><b>Inputs</b><i>Grayscale images</i></div>
              <div><b>Method</b><i>CVAE + GS/CNN</i></div>
              <div><b>Output</b><i>Predicted phase maps</i></div>
            </article>
          </div>
        </div>
      </section>

      <section class="astri-system" id="astri-system">
        <div class="container">
          <div class="astri-section-head astri-section-head-light" data-reveal>
            <span>02</span>
            <div>
              <p>System design</p>
              <h2>An end-to-end path from pixels to phase-only reconstruction.</h2>
            </div>
          </div>

          <div class="astri-pipeline" data-reveal>
            <article>
              <span>01</span>
              <i class="astri-pipeline-icon">▦</i>
              <h3>Image input</h3>
              <p>28 × 28 grayscale observations, normalized for model training.</p>
            </article>
            <em>→</em>
            <article>
              <span>02</span>
              <i class="astri-pipeline-icon">∿</i>
              <h3>Phase target</h3>
              <p>Fourier phase extraction or iterative GS target generation.</p>
            </article>
            <em>→</em>
            <article>
              <span>03</span>
              <i class="astri-pipeline-icon">◎</i>
              <h3>CVAE learning</h3>
              <p>Convolutional encoder, 20D latent space and conditioned decoder.</p>
            </article>
            <em>→</em>
            <article>
              <span>04</span>
              <i class="astri-pipeline-icon">φ</i>
              <h3>Phase map</h3>
              <p>A bounded prediction representing the learned optical phase.</p>
            </article>
            <em>→</em>
            <article>
              <span>05</span>
              <i class="astri-pipeline-icon">◇</i>
              <h3>Reconstruction</h3>
              <p>Inverse Fourier propagation under a defined amplitude assumption.</p>
            </article>
          </div>

          <div class="astri-model-grid">
            <article class="astri-architecture" data-reveal>
              <div class="astri-panel-label">
                <span>MODEL ARCHITECTURE</span>
                <b>Improved CVAE checkpoint</b>
              </div>
              <div class="astri-architecture-flow">
                <div><span>INPUT</span><strong>1 × 28 × 28</strong></div>
                <i></i>
                <div><span>ENCODER</span><strong>64 → 128 → 256</strong></div>
                <i></i>
                <div class="is-highlighted"><span>LATENT</span><strong>μ, log σ² · 20D</strong></div>
                <i></i>
                <div><span>DECODER</span><strong>256 → 128 → 64</strong></div>
                <i></i>
                <div><span>OUTPUT</span><strong>tanh phase · 28 × 28</strong></div>
              </div>
              <p>
                The decoder receives both the sampled latent representation and
                the flattened input image, preserving conditional information
                throughout phase generation.
              </p>
            </article>

            <aside class="astri-model-facts" data-reveal>
              <div><strong>11.34M</strong><span>trained parameters</span></div>
              <div><strong>43.26 MB</strong><span>saved checkpoint</span></div>
              <div><strong>20D</strong><span>latent representation</span></div>
              <div><strong>5</strong><span>prototype training epochs</span></div>
            </aside>
          </div>

          <div class="astri-experiment-lineage">
            <div class="astri-section-subhead" data-reveal>
              <span>EXPERIMENT LINEAGE</span>
              <h3>Three routes explored the same inverse problem.</h3>
            </div>
            <div class="astri-lineage-grid">
              <article data-reveal>
                <span>BASELINE</span>
                <h4>Conditional VAE</h4>
                <p>Established Fourier target generation, latent sampling and phase-only reconstruction.</p>
                <div><b>10 epochs</b><i>Adam · β = 0.1</i></div>
              </article>
              <article class="is-primary" data-reveal>
                <span>ITERATION</span>
                <h4>Deeper CVAE</h4>
                <p>Expanded convolutional capacity and introduced AdamW, cosine scheduling and augmentation.</p>
                <div><b>64–128–256</b><i>tanh output · saved model</i></div>
              </article>
              <article data-reveal>
                <span>PHYSICS-GUIDED</span>
                <h4>GS + CNN surrogate</h4>
                <p>Used iterative phase retrieval as a target generator, then learned a direct convolutional approximation.</p>
                <div><b>50 iterations</b><i>encoder–decoder CNN</i></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="astri-evidence" id="astri-evidence">
        <div class="container">
          <div class="astri-section-head" data-reveal>
            <span>03</span>
            <div>
              <p>Reproduced checkpoint audit</p>
              <h2>Evidence generated directly from the saved model.</h2>
            </div>
          </div>

          <div class="astri-audit-note" data-reveal>
            <div>
              <span>EVALUATION PROTOCOL</span>
              <strong>
                512 held-out MNIST images · seed 42 · deterministic posterior-mean
                decoding · unit-amplitude reconstruction
              </strong>
            </div>
            <p>
              The model was not retrained for this page. Every metric and figure
              below was reproduced from the existing 43.26 MB checkpoint.
            </p>
          </div>

          <div class="astri-kpi-grid">
            <article data-reveal><span>Audit sample</span><strong>512</strong><i>held-out images</i></article>
            <article data-reveal><span>Inference</span><strong>1.12 ms</strong><i>per image · local CPU</i></article>
            <article data-reveal><span>Phase agreement</span><strong>0.440</strong><i>mean circular similarity</i></article>
            <article data-reveal><span>Within tolerance</span><strong>44.9%</strong><i>pixels within ±30°</i></article>
            <article data-reveal><span>Consistency</span><strong>16.07 dB</strong><i>median phase-only PSNR</i></article>
          </div>

          <figure class="astri-result-figure astri-result-figure-wide" data-reveal>
            <div>
              <img
                src="assets/images/astri-research/cvae-reconstruction-grid.png"
                alt="Five MNIST inputs with Fourier target phases, CVAE-predicted phases, target reconstructions and predicted reconstructions"
                loading="lazy"
              />
            </div>
            <figcaption>
              <span>FIG. 01 · QUALITATIVE AUDIT</span>
              <p>
                Held-out inputs, target phase maps and deterministic model
                outputs. The checkpoint captures structured phase patterns,
                while the reconstructed detail remains visibly incomplete.
              </p>
            </figcaption>
          </figure>

          <div class="astri-evidence-grid">
            <figure class="astri-result-figure" data-reveal>
              <div>
                <img
                  src="assets/images/astri-research/cvae-phase-error-distribution.png"
                  alt="Histogram of absolute wrapped phase error and per-image circular phase similarity across 512 held-out images"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>FIG. 02 · PHASE ERROR</span>
                <p>
                  Circular evaluation prevents the discontinuity at −π and +π
                  from being counted as a large physical error.
                </p>
              </figcaption>
            </figure>

            <figure class="astri-result-figure" data-reveal>
              <div>
                <img
                  src="assets/images/astri-research/cvae-phase-reconstruction-scatter.png"
                  alt="Scatter plot of phase agreement against reconstruction PSNR for 512 held-out images"
                  loading="lazy"
                />
              </div>
              <figcaption>
                <span>FIG. 03 · SAMPLE-LEVEL RELATIONSHIP</span>
                <p>
                  Phase similarity and reconstruction consistency vary
                  materially by image, revealing where the prototype needs
                  stronger objectives and validation.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section class="astri-interpretation" id="astri-interpretation">
        <div class="container">
          <div class="astri-section-head astri-section-head-light" data-reveal>
            <span>04</span>
            <div>
              <p>Research interpretation</p>
              <h2>The prototype proved the pipeline—and exposed the next research questions.</h2>
            </div>
          </div>

          <div class="astri-interpretation-grid">
            <article class="astri-interpretation-card" data-reveal>
              <span>WHAT THE WORK ESTABLISHED</span>
              <ul>
                <li><b>End-to-end feasibility.</b> Inputs, target generation, learning, checkpointing and reconstruction operated as one research system.</li>
                <li><b>Model iteration.</b> Multiple architectures and optimization strategies were tested instead of treating the first implementation as final.</li>
                <li><b>Physics–AI connection.</b> Fourier methods and GS optimization were translated into learnable representations.</li>
                <li><b>Executable evidence.</b> The saved model can be independently loaded, audited and visualized.</li>
              </ul>
            </article>

            <article class="astri-interpretation-card astri-interpretation-card-accent" data-reveal>
              <span>WHAT THE AUDIT REVEALED</span>
              <p>
                The current checkpoint demonstrates learned structure, but its
                reconstruction fidelity is not deployment-ready. The most
                valuable outcome is therefore the research architecture and the
                clear path to a more rigorous second iteration.
              </p>
              <div><strong>Prototype</strong><i>Research-grade pipeline</i></div>
              <div><strong>Next gate</strong><i>Validated optical fidelity</i></div>
            </article>
          </div>

          <div class="astri-roadmap">
            <div class="astri-section-subhead" data-reveal>
              <span>NEXT EXPERIMENTS</span>
              <h3>A disciplined route from prototype to validated model.</h3>
            </div>
            <div class="astri-roadmap-grid">
              <article data-reveal><span>01</span><h4>Respect phase geometry</h4><p>Replace raw phase MSE with a circular loss or a two-channel sine–cosine representation.</p></article>
              <article data-reveal><span>02</span><h4>Lock the data contract</h4><p>Unify checkpoint architecture, normalization and inference preprocessing across training and evaluation.</p></article>
              <article data-reveal><span>03</span><h4>Precompute GS targets</h4><p>Cache iterative targets once instead of repeating 50 FFT cycles for every sample and epoch.</p></article>
              <article data-reveal><span>04</span><h4>Validate optical fidelity</h4><p>Add held-out circular error, PSNR, SSIM and runtime benchmarks with explicit amplitude assumptions.</p></article>
            </div>
          </div>
        </div>
      </section>

      <section class="astri-capability" id="astri-capability">
        <div class="container">
          <div class="astri-section-head" data-reveal>
            <span>05</span>
            <div>
              <p>Capability stack</p>
              <h2>Research skills demonstrated through executable work.</h2>
            </div>
          </div>
          <div class="astri-capability-grid">
            <article data-reveal><i>∿</i><strong>Fourier optics</strong><span>Phase targets · inverse transforms</span></article>
            <article data-reveal><i>◎</i><strong>Generative modeling</strong><span>CVAE · latent variables · KL loss</span></article>
            <article data-reveal><i>φ</i><strong>Phase retrieval</strong><span>Gerchberg–Saxton · circular error</span></article>
            <article data-reveal><i>▦</i><strong>Deep learning</strong><span>PyTorch · CNNs · transposed convolutions</span></article>
            <article data-reveal><i>∆</i><strong>Experiment design</strong><span>Baselines · iterations · checkpoint audit</span></article>
            <article data-reveal><i>↗</i><strong>Research engineering</strong><span>Reproducibility · MPS · visualization</span></article>
          </div>
          <p class="astri-provenance" data-reveal>
            Source basis: six Python research scripts, one saved CVAE checkpoint
            and a reproducible 512-image evaluation generated for this case page.
            Metrics describe this checkpoint and evaluation protocol only.
          </p>
        </div>
      </section>

      <section class="next-experience astri-next">
        <a href="experience.html?id=${next.id}">
          <div class="container">
            <span>Next experience</span>
            <strong>${next.organization} →</strong>
          </div>
        </a>
      </section>
    </article>
  `;
}

function renderAirportCase(experience, next) {
  const target = document.getElementById("experienceContent");

  document.body.classList.add("szx-case-page");
  document.title = "Shenzhen Bao'an International Airport | Aaron Li";

  target.innerHTML = `
    <article class="szx-case">
      <section class="szx-hero">
        <img
          class="szx-hero-image"
          src="assets/images/airport-research/terminal-3-exterior.jpg"
          alt="Passenger seating and glass facade inside Shenzhen Bao'an International Airport Terminal 3"
        />
        <div class="szx-hero-overlay"></div>
        <div class="szx-hero-lines" aria-hidden="true"></div>
        <div class="container szx-hero-layout">
          <div class="szx-hero-copy" data-reveal>
            <p class="szx-kicker">Terminal Area Management · Operations Analytics</p>
            <h1>Making terminal pressure visible before it becomes disruption.</h1>
            <p>
              I structured passenger-flow, gate-use and check-in resource data
              into an operational view that helped connect demand patterns with
              terminal capacity and resource-arrangement decisions.
            </p>
            <div class="szx-hero-meta">
              <div><span>Role</span><strong>Data Analysis Intern</strong></div>
              <div><span>Period</span><strong>${experience.period}</strong></div>
              <div><span>Location</span><strong>${experience.location}</strong></div>
            </div>
          </div>

          <aside class="szx-ops-board" data-reveal>
            <div class="szx-board-head">
              <span>OPERATING VIEW</span>
              <i>Terminal resource alignment</i>
            </div>
            <div class="szx-board-clock">
              <strong>SZX</strong>
              <span>Demand × capacity × timing</span>
            </div>
            <div class="szx-board-signal">
              <article><i>01</i><div><strong>Passenger flow</strong><span>Volume distribution and peak concentration</span></div><b>↗</b></article>
              <article><i>02</i><div><strong>Gate usage</strong><span>Timing, utilization and operating pressure</span></div><b>◎</b></article>
              <article><i>03</i><div><strong>Check-in counters</strong><span>Airline demand and counter availability</span></div><b>▦</b></article>
              <article><i>04</i><div><strong>Staffing</strong><span>Historical patterns and live conditions</span></div><b>◇</b></article>
            </div>
            <p>Operational figures are intentionally omitted.</p>
          </aside>
        </div>
      </section>

      <nav class="szx-nav" aria-label="Shenzhen airport experience sections">
        <div class="container">
          <span>Terminal operations case</span>
          <div>
            <a href="#szx-brief">Brief</a>
            <a href="#szx-data">Data</a>
            <a href="#szx-diagnosis">Diagnosis</a>
            <a href="#szx-decisions">Decisions</a>
            <a href="#szx-capability">Capabilities</a>
          </div>
        </div>
      </nav>

      <section class="szx-brief" id="szx-brief">
        <div class="container">
          <div class="szx-section-head" data-reveal>
            <span>01</span>
            <div>
              <p>Operating brief</p>
              <h2>Align terminal resources with when and where passenger demand appears.</h2>
            </div>
          </div>

          <div class="szx-mandate-grid">
            <article class="szx-mandate-main" data-reveal>
              <span>THE ASSIGNMENT</span>
              <h3>Turn heterogeneous operating records into a decision-ready view.</h3>
              <p>
                The analysis connected airline and passenger demand patterns
                with terminal capacity. The practical question was not only
                “how many passengers?” but “where does pressure accumulate, at
                what time, and which resource should respond?”
              </p>
              <div>
                <strong>Demand signal</strong><i>Passenger-volume distribution</i>
                <strong>Capacity signal</strong><i>Gates, counters and staffing</i>
                <strong>Decision signal</strong><i>Resource-arrangement priorities</i>
              </div>
            </article>

            <article class="szx-question-card" data-reveal>
              <span>QUESTION 01</span>
              <i>Where and when does passenger volume concentrate?</i>
              <p>Study distribution by time window and operating area to surface peak pressure.</p>
            </article>

            <article class="szx-question-card" data-reveal>
              <span>QUESTION 02</span>
              <i>Are operating resources aligned with demand?</i>
              <p>Review gate, counter and staffing availability against the observed pattern.</p>
            </article>

            <article class="szx-question-card" data-reveal>
              <span>QUESTION 03</span>
              <i>How should findings be communicated?</i>
              <p>Convert analysis into visual summaries that terminal teams can review quickly.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="szx-data" id="szx-data">
        <div class="container">
          <div class="szx-section-head szx-section-head-light" data-reveal>
            <span>02</span>
            <div>
              <p>Data architecture</p>
              <h2>A common analytical base across demand, capacity and time.</h2>
            </div>
          </div>

          <div class="szx-data-pipeline" data-reveal>
            <article><span>01</span><i>▦</i><h3>Collect</h3><p>Passenger flow, gate use, counter allocation and staffing records.</p></article>
            <em>→</em>
            <article><span>02</span><i>◇</i><h3>Clean</h3><p>Resolve inconsistent fields, formats, timestamps and operating labels.</p></article>
            <em>→</em>
            <article><span>03</span><i>⊕</i><h3>Integrate</h3><p>Join demand and resource signals at a comparable operating grain.</p></article>
            <em>→</em>
            <article><span>04</span><i>∿</i><h3>Explore</h3><p>Examine distributions, timing concentration and pressure points.</p></article>
            <em>→</em>
            <article><span>05</span><i>↗</i><h3>Communicate</h3><p>Translate findings into visual and structured terminal summaries.</p></article>
          </div>

          <div class="szx-data-model">
            <article data-reveal>
              <div class="szx-panel-title"><span>ANALYTICAL GRAIN</span><strong>Time window × terminal zone × operating resource</strong></div>
              <div class="szx-dimension-map">
                <div class="szx-dimension-core"><strong>Operating record</strong><span>Comparable decision unit</span></div>
                <div class="szx-dimension dimension-time"><i>TIME</i><b>Hour / peak window</b></div>
                <div class="szx-dimension dimension-zone"><i>PLACE</i><b>Terminal area</b></div>
                <div class="szx-dimension dimension-airline"><i>DEMAND</i><b>Passenger / airline</b></div>
                <div class="szx-dimension dimension-resource"><i>CAPACITY</i><b>Gate / counter / staff</b></div>
              </div>
            </article>

            <aside class="szx-data-contract" data-reveal>
              <span>DATA CONTRACT</span>
              <div><b>Historical records</b><i>Baseline demand and allocation patterns</i></div>
              <div><b>Real-time records</b><i>Current operational pressure</i></div>
              <div><b>Shared keys</b><i>Time, area and resource identity</i></div>
              <div><b>Output layer</b><i>Flags, comparisons and visual summaries</i></div>
            </aside>
          </div>
        </div>
      </section>

      <section class="szx-diagnosis" id="szx-diagnosis">
        <div class="container">
          <div class="szx-section-head" data-reveal>
            <span>03</span>
            <div>
              <p>Operational diagnosis</p>
              <h2>Move from volume counts to a map of terminal pressure.</h2>
            </div>
          </div>

          <div class="szx-diagnosis-layout">
            <article class="szx-pressure-map" data-reveal>
              <div class="szx-panel-title">
                <span>PRESSURE-POINT LOGIC</span>
                <strong>Demand signal → capacity check → operating implication</strong>
              </div>
              <div class="szx-pressure-lanes">
                <div class="szx-lane">
                  <b>Passenger circulation</b>
                  <span>Volume distribution</span>
                  <i></i>
                  <strong>Concentration by time and area</strong>
                </div>
                <div class="szx-lane">
                  <b>Check-in counters</b>
                  <span>Counter allocation</span>
                  <i></i>
                  <strong>Queue and service-pressure risk</strong>
                </div>
                <div class="szx-lane">
                  <b>Gate operations</b>
                  <span>Gate usage</span>
                  <i></i>
                  <strong>Utilization and timing overlap</strong>
                </div>
                <div class="szx-lane">
                  <b>Service staffing</b>
                  <span>Historical + live view</span>
                  <i></i>
                  <strong>Coverage against operating need</strong>
                </div>
              </div>
              <p>
                This diagram reconstructs the analytical logic from the
                internship scope; it does not display confidential airport
                records or airline-specific operating figures.
              </p>
            </article>

            <figure class="szx-photo-card" data-reveal>
              <img
                src="assets/images/airport-research/arrival-hall.jpg"
                alt="Arrival hall inside Shenzhen Bao'an International Airport Terminal 3"
                loading="lazy"
              />
              <figcaption><span>TERMINAL CONTEXT</span><p>Passenger circulation, service touchpoints and resource coverage meet in the same operating environment.</p></figcaption>
            </figure>
          </div>

          <div class="szx-analysis-table-wrap" data-reveal>
            <div class="szx-table-head">
              <div><span>ANALYSIS MATRIX</span><strong>How each operating signal supported a decision</strong></div>
              <p>Based on the responsibilities stated in the internship resume.</p>
            </div>
            <div class="szx-table-scroll">
              <table class="szx-analysis-table">
                <thead>
                  <tr>
                    <th>Operating signal</th>
                    <th>Analytical question</th>
                    <th>Diagnostic view</th>
                    <th>Decision connection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>Passenger flow</strong><span>Demand</span></td><td>Where is volume concentrated?</td><td>Distribution by time and terminal area</td><td>Locate peak-hour service pressure</td></tr>
                  <tr><td><strong>Gate usage</strong><span>Airside interface</span></td><td>When does gate pressure accumulate?</td><td>Usage timing and operating overlap</td><td>Support gate-allocation review</td></tr>
                  <tr><td><strong>Check-in counters</strong><span>Processing capacity</span></td><td>Does availability match airline demand?</td><td>Counter allocation against passenger pattern</td><td>Support counter-opening arrangements</td></tr>
                  <tr><td><strong>Staffing</strong><span>Service capacity</span></td><td>Is coverage aligned with the operating window?</td><td>Historical baseline plus real-time conditions</td><td>Support staffing evaluation</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section class="szx-decisions" id="szx-decisions">
        <div class="container">
          <div class="szx-section-head szx-section-head-light" data-reveal>
            <span>04</span>
            <div>
              <p>Decision support</p>
              <h2>Translate analysis into the language of terminal operations.</h2>
            </div>
          </div>

          <div class="szx-decision-flow">
            <article data-reveal><span>01</span><h3>Pattern</h3><p>Identify recurring passenger-volume distributions and high-pressure operating windows.</p><i>What is happening?</i></article>
            <em>→</em>
            <article data-reveal><span>02</span><h3>Constraint</h3><p>Compare demand with the availability and timing of gates, counters and staffing.</p><i>Why is pressure forming?</i></article>
            <em>→</em>
            <article data-reveal><span>03</span><h3>Priority</h3><p>Highlight the resources and time windows requiring closer operational review.</p><i>Where should attention go?</i></article>
            <em>→</em>
            <article data-reveal><span>04</span><h3>Communication</h3><p>Package the evidence into visualizations and structured summary reports.</p><i>How can teams act?</i></article>
          </div>

          <div class="szx-deliverables">
            <article class="szx-deliverables-main" data-reveal>
              <span>DELIVERABLE SYSTEM</span>
              <h3>From raw terminal records to an operational conversation.</h3>
              <p>
                The value of the analysis was not a standalone model. It was a
                clearer shared view that connected passenger demand, terminal
                capacity and resource decisions across operating teams.
              </p>
            </article>
            <article data-reveal><i>▦</i><strong>Clean analytical base</strong><span>Integrated terminal operating data</span></article>
            <article data-reveal><i>∿</i><strong>Pressure-point views</strong><span>Distribution and peak-hour analysis</span></article>
            <article data-reveal><i>◎</i><strong>Allocation reviews</strong><span>Gates, counters and staffing</span></article>
            <article data-reveal><i>↗</i><strong>Decision communication</strong><span>Visualizations and structured reports</span></article>
          </div>
        </div>
      </section>

      <section class="szx-capability" id="szx-capability">
        <div class="container">
          <div class="szx-section-head" data-reveal>
            <span>05</span>
            <div>
              <p>Capability stack</p>
              <h2>Analytical skills grounded in a live operating environment.</h2>
            </div>
          </div>
          <div class="szx-capability-grid">
            <article data-reveal><i>01</i><strong>Python data preparation</strong><span>Cleaning, integration and repeatable analysis</span></article>
            <article data-reveal><i>02</i><strong>Exploratory analysis</strong><span>Distribution, concentration and pressure points</span></article>
            <article data-reveal><i>03</i><strong>Passenger-flow thinking</strong><span>Demand patterns across time and terminal areas</span></article>
            <article data-reveal><i>04</i><strong>Resource allocation</strong><span>Gates, counters, staffing and capacity alignment</span></article>
            <article data-reveal><i>05</i><strong>Operational visualization</strong><span>Views designed for review and communication</span></article>
            <article data-reveal><i>06</i><strong>Structured reporting</strong><span>Concise summaries connecting evidence to action</span></article>
          </div>

          <div class="szx-source-note" data-reveal>
            <p>
              Experience content is based on the internship description in
              Aaron Li's engineering resume. Airline-level data, passenger
              figures and internal operating records are omitted.
            </p>
            <div>
              <span>Photography</span>
              <a href="https://commons.wikimedia.org/wiki/File:Shenzhen_Bao%27an_International_Airport_Terminal_3_in_September_2025.jpg" target="_blank" rel="noreferrer">Terminal 3 · Renek78 · CC0 ↗</a>
              <a href="https://commons.wikimedia.org/wiki/File:Shenzhen_Bao%27an_International_Airport_Arrival_hall_20140324.JPG" target="_blank" rel="noreferrer">Arrival hall · 颐园新居 · CC BY-SA 3.0 ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section class="next-experience szx-next">
        <a href="experience.html?id=${next.id}">
          <div class="container">
            <span>Next experience</span>
            <strong>${next.organization} →</strong>
          </div>
        </a>
      </section>
    </article>
  `;
}

function renderGuosenCase(experience, next) {
  const target = document.getElementById("experienceContent");

  document.body.classList.add("guosen-case-page");
  document.title = "Guosen Securities | Aaron Li";

  target.innerHTML = `
    <article class="guosen-case">
      <section class="guosen-hero">
        <img
          class="guosen-hero-image"
          src="assets/images/guosen-finance.jpg"
          alt="Financial data displayed across analytical screens"
        />
        <div class="guosen-hero-overlay"></div>
        <div class="guosen-hero-grid" aria-hidden="true"></div>
        <div class="container guosen-hero-layout">
          <div class="guosen-hero-copy" data-reveal>
            <p class="guosen-kicker">Guosen Securities · Financial Product Research</p>
            <h1>Turning raw industry data into an investable point of view.</h1>
            <p>
              I owned an end-to-end analytical workflow that combined Excel
              and Python data preparation with sector research, competitive
              analysis and visual frameworks for investment evaluation.
            </p>
            <div class="guosen-hero-meta">
              <div><span>Team</span><strong>Financial Product Research</strong></div>
              <div><span>Period</span><strong>${experience.period}</strong></div>
              <div><span>Location</span><strong>${experience.location}</strong></div>
            </div>
          </div>

          <aside class="guosen-terminal" data-reveal>
            <div class="guosen-terminal-head">
              <span>RESEARCH WORKBENCH</span>
              <i>Evidence → context → implication</i>
            </div>
            <div class="guosen-terminal-title">
              <strong>Sector research pipeline</strong>
              <span>Decision-oriented analytical structure</span>
            </div>
            <div class="guosen-terminal-flow">
              <article><i>01</i><div><strong>Raw data</strong><span>Complex industry datasets</span></div><b>▦</b></article>
              <article><i>02</i><div><strong>Structured evidence</strong><span>Clean, comparable analytical base</span></div><b>◇</b></article>
              <article><i>03</i><div><strong>Sector context</strong><span>Drivers, competition and risk</span></div><b>◎</b></article>
              <article><i>04</i><div><strong>Investment output</strong><span>Frameworks and visual synthesis</span></div><b>↗</b></article>
            </div>
            <p>Issuer and security-specific information is intentionally omitted.</p>
          </aside>
        </div>
      </section>

      <nav class="guosen-nav" aria-label="Guosen Securities experience sections">
        <div class="container">
          <span>Financial research case</span>
          <div>
            <a href="#guosen-brief">Brief</a>
            <a href="#guosen-data">Data engine</a>
            <a href="#guosen-sector">Sector lens</a>
            <a href="#guosen-framework">Framework</a>
            <a href="#guosen-capability">Capabilities</a>
          </div>
        </div>
      </nav>

      <section class="guosen-brief" id="guosen-brief">
        <div class="container">
          <div class="guosen-section-head" data-reveal>
            <span>01</span>
            <div>
              <p>Research mandate</p>
              <h2>Build a faster, clearer path from heterogeneous evidence to investment evaluation.</h2>
            </div>
          </div>

          <div class="guosen-brief-grid">
            <article class="guosen-brief-main" data-reveal>
              <span>THE ASSIGNMENT</span>
              <h3>Own the analytical chain, not only one spreadsheet.</h3>
              <p>
                The work covered the full progression from raw industry data
                to a research output: prepare the evidence, interrogate sector
                economics, organize competitive signals and communicate what
                matters for an investment decision.
              </p>
              <div>
                <strong>Input</strong><i>Complex industry datasets</i>
                <strong>Method</strong><i>Excel, Python and sector research</i>
                <strong>Output</strong><i>Analytical frameworks and visual insight</i>
              </div>
            </article>

            <article class="guosen-mandate-card" data-reveal>
              <span>01 · DATA</span>
              <i>Can the underlying evidence be trusted and compared?</i>
              <p>Clean, structure and analyze the raw dataset before interpretation.</p>
            </article>
            <article class="guosen-mandate-card" data-reveal>
              <span>02 · CONTEXT</span>
              <i>What explains the sector’s economics and competitive structure?</i>
              <p>Connect observations with growth drivers, market opportunity and industry dynamics.</p>
            </article>
            <article class="guosen-mandate-card" data-reveal>
              <span>03 · DECISION</span>
              <i>What does the evidence imply for investment evaluation?</i>
              <p>Use structured frameworks and visual outputs to make the conclusion reviewable.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="guosen-data" id="guosen-data">
        <div class="container">
          <div class="guosen-section-head guosen-section-head-light" data-reveal>
            <span>02</span>
            <div>
              <p>Data engine</p>
              <h2>A repeatable workflow for converting raw records into research evidence.</h2>
            </div>
          </div>

          <div class="guosen-pipeline" data-reveal>
            <article><span>01</span><i>▦</i><h3>Ingest</h3><p>Bring complex industry records into a workable analytical environment.</p></article>
            <em>→</em>
            <article><span>02</span><i>◇</i><h3>Clean</h3><p>Resolve inconsistent formats, missing fields and unusable observations.</p></article>
            <em>→</em>
            <article><span>03</span><i>⊕</i><h3>Structure</h3><p>Create comparable fields and organized analytical tables.</p></article>
            <em>→</em>
            <article><span>04</span><i>∿</i><h3>Analyze</h3><p>Test patterns, differences and relationships in the evidence.</p></article>
            <em>→</em>
            <article><span>05</span><i>◎</i><h3>Contextualize</h3><p>Connect results to sector economics and competitive dynamics.</p></article>
            <em>→</em>
            <article><span>06</span><i>↗</i><h3>Communicate</h3><p>Translate analysis into concise visual research output.</p></article>
          </div>

          <div class="guosen-tool-grid">
            <article class="guosen-tool-card" data-reveal>
              <div class="guosen-panel-title"><span>EXCEL LAYER</span><strong>Auditable research structure</strong></div>
              <div class="guosen-sheet">
                <div class="guosen-sheet-row guosen-sheet-head"><span>Field</span><span>Raw</span><span>Clean</span><span>Review</span></div>
                <div class="guosen-sheet-row"><strong>Industry metric</strong><i></i><b></b><em>Ready</em></div>
                <div class="guosen-sheet-row"><strong>Company category</strong><i></i><b></b><em>Ready</em></div>
                <div class="guosen-sheet-row"><strong>Time period</strong><i></i><b></b><em>Ready</em></div>
                <div class="guosen-sheet-row"><strong>Research tag</strong><i></i><b></b><em>Ready</em></div>
              </div>
              <p>Used for transparent structuring, review and research handoff.</p>
            </article>

            <article class="guosen-tool-card guosen-tool-card-code" data-reveal>
              <div class="guosen-panel-title"><span>PYTHON LAYER</span><strong>Repeatable analytical logic</strong></div>
              <div class="guosen-code">
                <p><i>01</i><span>validate_fields(raw_data)</span></p>
                <p><i>02</i><span>clean_and_standardize()</span></p>
                <p><i>03</i><span>build_sector_views()</span></p>
                <p><i>04</i><span>test_patterns_and_risks()</span></p>
                <p><i>05</i><span>export_research_output()</span></p>
              </div>
              <p>Conceptual representation of the workflow; no proprietary code or data is displayed.</p>
            </article>
          </div>

          <div class="guosen-quality-table-wrap" data-reveal>
            <div class="guosen-table-head">
              <div><span>DATA-TO-EVIDENCE CONTROL</span><strong>What each preparation step made possible</strong></div>
              <p>Framework reconstructed from the documented internship scope.</p>
            </div>
            <div class="guosen-table-scroll">
              <table class="guosen-quality-table">
                <thead><tr><th>Research issue</th><th>Preparation response</th><th>Analytical benefit</th><th>Decision relevance</th></tr></thead>
                <tbody>
                  <tr><td><strong>Inconsistent records</strong><span>Format</span></td><td>Standardize fields and definitions</td><td>Comparable observations</td><td>More reliable cross-company or sector review</td></tr>
                  <tr><td><strong>Fragmented evidence</strong><span>Structure</span></td><td>Organize data into research-ready tables</td><td>Clear analytical grain</td><td>Faster interrogation of drivers and risks</td></tr>
                  <tr><td><strong>Complex outputs</strong><span>Interpretation</span></td><td>Synthesize analysis into visual frameworks</td><td>Visible patterns and exceptions</td><td>More efficient investment evaluation</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section class="guosen-sector" id="guosen-sector">
        <div class="container">
          <div class="guosen-section-head" data-reveal>
            <span>03</span>
            <div>
              <p>Sector and competitive lens</p>
              <h2>Data became useful only when placed inside an industry story.</h2>
            </div>
          </div>

          <div class="guosen-sector-grid">
            <article class="guosen-sector-card" data-reveal>
              <span>GROWTH DRIVERS</span>
              <h3>What can expand the opportunity?</h3>
              <p>Structured evidence around the forces capable of supporting sector development and company growth.</p>
              <div><i>Demand</i><i>Adoption</i><i>Pricing</i><i>Scale</i></div>
            </article>
            <article class="guosen-sector-card guosen-sector-card-gold" data-reveal>
              <span>MARKET OPPORTUNITY</span>
              <h3>Where could value emerge?</h3>
              <p>Connected the dataset with market whitespace, competitive positioning and potential areas of expansion.</p>
              <div><i>Segments</i><i>Position</i><i>Economics</i><i>Catalysts</i></div>
            </article>
            <article class="guosen-sector-card guosen-sector-card-dark" data-reveal>
              <span>STRUCTURAL RISK</span>
              <h3>What can weaken the thesis?</h3>
              <p>Separated short-term noise from risks embedded in industry structure, competition or business economics.</p>
              <div><i>Competition</i><i>Concentration</i><i>Margins</i><i>Execution</i></div>
            </article>
          </div>

          <div class="guosen-research-map">
            <article data-reveal>
              <div class="guosen-panel-title"><span>RESEARCH ARCHITECTURE</span><strong>One evidence base, three analytical levels</strong></div>
              <div class="guosen-orbit-map">
                <div class="guosen-orbit-center"><strong>Investment view</strong><span>Evidence-backed implication</span></div>
                <div class="guosen-orbit orbit-company"><i>COMPANY</i><b>Operating and competitive signals</b></div>
                <div class="guosen-orbit orbit-sector"><i>SECTOR</i><b>Economics, structure and drivers</b></div>
                <div class="guosen-orbit orbit-market"><i>MARKET</i><b>Opportunity, demand and risk context</b></div>
              </div>
            </article>

            <aside class="guosen-research-questions" data-reveal>
              <span>CORE QUESTIONS</span>
              <div><b>01</b><p><strong>Attractiveness</strong><i>Is the sector structurally capable of creating value?</i></p></div>
              <div><b>02</b><p><strong>Position</strong><i>How does the company compete within that structure?</i></p></div>
              <div><b>03</b><p><strong>Durability</strong><i>Are the observed growth drivers repeatable?</i></p></div>
              <div><b>04</b><p><strong>Risk</strong><i>Which conditions could invalidate the interpretation?</i></p></div>
            </aside>
          </div>
        </div>
      </section>

      <section class="guosen-framework" id="guosen-framework">
        <div class="container">
          <div class="guosen-section-head guosen-section-head-light" data-reveal>
            <span>04</span>
            <div>
              <p>Investment framework</p>
              <h2>Make the analytical reasoning visible and reviewable.</h2>
            </div>
          </div>

          <div class="guosen-logic-chain" data-reveal>
            <article><span>01</span><h3>Evidence</h3><p>Clean observations and clearly defined fields.</p><i>What does the data show?</i></article>
            <em>→</em>
            <article><span>02</span><h3>Signal</h3><p>Patterns, changes and exceptions worth investigating.</p><i>What is materially different?</i></article>
            <em>→</em>
            <article><span>03</span><h3>Context</h3><p>Industry economics, competition and market structure.</p><i>Why might it be happening?</i></article>
            <em>→</em>
            <article><span>04</span><h3>Implication</h3><p>Opportunity, risk and relevance for investment evaluation.</p><i>Why does it matter?</i></article>
          </div>

          <div class="guosen-output-grid">
            <article class="guosen-output-main" data-reveal>
              <span>VISUAL SYNTHESIS</span>
              <h3>Compress complexity without losing the analytical chain.</h3>
              <p>
                Visual tools were used to connect individual data points to the
                broader sector and competitive context. The objective was not
                decoration; it was faster interpretation and a clearer basis
                for review.
              </p>
              <div class="guosen-mini-visual">
                <div><b>Data quality</b><i></i><span>Comparable base</span></div>
                <div><b>Sector context</b><i></i><span>Driver map</span></div>
                <div><b>Risk framing</b><i></i><span>Downside lens</span></div>
              </div>
              <small>Process rails describe the research sequence; they are not performance scores.</small>
            </article>

            <article class="guosen-output-card" data-reveal><i>▦</i><strong>Structured datasets</strong><span>Clean, organized evidence for analysis</span></article>
            <article class="guosen-output-card" data-reveal><i>◎</i><strong>Sector frameworks</strong><span>Drivers, opportunity and structural risk</span></article>
            <article class="guosen-output-card" data-reveal><i>◇</i><strong>Competitive views</strong><span>Company signals inside industry context</span></article>
            <article class="guosen-output-card" data-reveal><i>↗</i><strong>Visual research</strong><span>Decision-ready analytical communication</span></article>
          </div>
        </div>
      </section>

      <section class="guosen-capability" id="guosen-capability">
        <div class="container">
          <div class="guosen-section-head" data-reveal>
            <span>05</span>
            <div>
              <p>Capability stack</p>
              <h2>Technical execution connected to investment thinking.</h2>
            </div>
          </div>
          <div class="guosen-capability-grid">
            <article data-reveal><i>01</i><strong>Excel &amp; Python</strong><span>Cleaning, structuring and analytical workflow</span></article>
            <article data-reveal><i>02</i><strong>Industry research</strong><span>Sector economics and market context</span></article>
            <article data-reveal><i>03</i><strong>Competitive analysis</strong><span>Position, differentiation and structure</span></article>
            <article data-reveal><i>04</i><strong>Growth-driver analysis</strong><span>Demand, adoption, pricing and scale</span></article>
            <article data-reveal><i>05</i><strong>Risk framing</strong><span>Structural weaknesses and thesis boundaries</span></article>
            <article data-reveal><i>06</i><strong>Data visualization</strong><span>Clear research outputs for faster review</span></article>
          </div>

          <div class="guosen-source-note" data-reveal>
            <p>
              Content is based on Aaron Li's financial internship resume.
              Company-specific datasets, research coverage, securities and
              investment recommendations are intentionally omitted.
            </p>
            <a href="${experience.creditUrl}" target="_blank" rel="noreferrer">
              Experience photography · ${experience.creditName} on Unsplash ↗
            </a>
          </div>
        </div>
      </section>

      <section class="next-experience guosen-next">
        <a href="experience.html?id=${next.id}">
          <div class="container">
            <span>Next experience</span>
            <strong>${next.organization} →</strong>
          </div>
        </a>
      </section>
    </article>
  `;
}

function renderExperience() {
  const target = document.getElementById("experienceContent");
  if (!target) return;

  const id = new URLSearchParams(window.location.search).get("id");
  const experience =
    experiences.find((item) => item.id === id) || experiences[0];
  const currentIndex = experiences.findIndex(
    (item) => item.id === experience.id,
  );
  const next = experiences[(currentIndex + 1) % experiences.length];

  document.body.classList.remove(
    "quant-case-page",
    "ebola-case-page",
    "language-case-page",
    "ries-case-page",
    "astri-case-page",
    "szx-case-page",
    "guosen-case-page",
  );

  if (experience.id === "ries-consulting") {
    renderRiesCase(experience, next);
    setupDetailMotion();
    return;
  }

  if (experience.id === "ebola-transmission") {
    renderEbolaCase(experience, next);
    setupDetailMotion();
    return;
  }

  if (experience.id === "code-switching") {
    renderCodeSwitchCase(experience, next);
    setupDetailMotion();
    return;
  }

  if (experience.id === "quant-finance") {
    renderQuantCase(experience, next);
    setupDetailMotion();
    return;
  }

  if (experience.id === "astri-ai") {
    renderAstriCase(experience, next);
    setupDetailMotion();
    return;
  }

  if (experience.id === "shenzhen-airport") {
    renderAirportCase(experience, next);
    setupDetailMotion();
    return;
  }

  if (experience.id === "guosen-securities") {
    renderGuosenCase(experience, next);
    setupDetailMotion();
    return;
  }

  const hasReportModules =
    Array.isArray(experience.reportModules) &&
    experience.reportModules.length > 0;
  const contributionSectionNumber = hasReportModules ? "03" : "02";
  const approachSectionNumber = hasReportModules ? "04" : "03";
  const capabilitySectionNumber = hasReportModules ? "05" : "04";

  document.title = `${experience.organization} | Aaron Li`;

  target.innerHTML = `
    <section class="detail-hero">
      <img
        src="${experience.image}"
        alt="${experience.imageAlt}"
        style="object-position: ${experience.imagePosition}"
      />
      <div class="detail-overlay"></div>
      <div class="container detail-hero-copy">
        <p class="detail-category">${experience.category}</p>
        <h1>${experience.organization}</h1>
        <p>${experience.headline}</p>
      </div>
    </section>

    <section class="detail-facts">
      <div class="container detail-fact-grid">
        <div><span>Role</span><strong>${experience.role}</strong></div>
        <div><span>Period</span><strong>${experience.period}</strong></div>
        <div><span>Location</span><strong>${experience.location}</strong></div>
      </div>
    </section>

    <section class="section detail-overview" data-reveal>
      <div class="container detail-overview-grid">
        <div>
          <p class="section-label blue">
            ${experience.type === "project" ? "Project profile" : "Experience profile"}
          </p>
          <h2>${experience.overviewTitle}</h2>
          <p class="detail-summary">${experience.overview}</p>
          ${
            experience.id === "ibm-consulting"
              ? '<p class="confidential">Client and engagement specifics are intentionally omitted for confidentiality.</p>'
              : ""
          }
        </div>
        <aside class="metric-cards">
          ${experience.metrics
            .map(
              ([value, label], index) => `
                <div>
                  <i aria-hidden="true">${metricIcons[index]}</i>
                  <strong>${value}</strong>
                  <span>${label}</span>
                </div>
              `,
            )
            .join("")}
        </aside>
      </div>
    </section>

    <section class="section detail-visuals">
      <div class="container">
        <div class="detail-section-title horizontal visual-heading" data-reveal>
          <span>01</span>
          <div>
            <h2>Case at a glance</h2>
            <p>A visual summary of the workstream, from source material to professional output.</p>
          </div>
        </div>

        <div class="visual-dashboard">
          <article class="visual-card process-card" data-reveal>
            <header class="visual-card-header">
              <span class="mini-icon" aria-hidden="true">◎</span>
              <div>
                <strong>Three-stage workflow</strong>
                <small>Connected steps, not proficiency scores</small>
              </div>
            </header>

            <div class="ring-composition">
              <div
                class="process-ring"
                role="img"
                aria-label="Three linked work stages: ${experience.approach
                  .map((step) => step.title)
                  .join(", ")}"
              >
                <div>
                  <strong>3</strong>
                  <span>linked stages</span>
                </div>
              </div>

              <div class="process-legend">
                ${experience.approach
                  .map(
                    (step, index) => `
                      <div>
                        <i class="legend-dot dot-${index + 1}"></i>
                        <span>0${index + 1}</span>
                        <strong>${step.title}</strong>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </article>

          <div class="visual-stack">
            <article class="visual-card coverage-card" data-reveal>
              <header class="visual-card-header">
                <span class="mini-icon" aria-hidden="true">▥</span>
                <div>
                  <strong>Workstream coverage</strong>
                  <small>Areas addressed in this experience</small>
                </div>
              </header>
              <div class="coverage-bars">
                ${experience.visual.dimensions
                  .map(
                    (dimension, index) => `
                      <div>
                        <span>${dimension}</span>
                        <i><b style="--bar-delay: ${index * 70}ms"></b></i>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </article>

            <article class="visual-card workflow-table-card" data-reveal>
              <header class="visual-card-header">
                <span class="mini-icon" aria-hidden="true">▦</span>
                <div>
                  <strong>Input → method → output</strong>
                  <small>Compact workstream map</small>
                </div>
              </header>
              <div class="workflow-table" role="table" aria-label="Workstream map">
                ${[
                  ["Input", experience.visual.input],
                  ["Method", experience.visual.method],
                  ["Output", experience.visual.output],
                ]
                  .map(
                    ([label, value], index) => `
                      <div role="row">
                        <span class="workflow-icon" aria-hidden="true">${workflowIcons[index]}</span>
                        <strong role="rowheader">${label}</strong>
                        <p role="cell">${value}</p>
                      </div>
                    `,
                  )
                  .join("")}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    ${
      hasReportModules
        ? `
          <section class="section report-modules-section">
            <div class="container">
              <div class="detail-section-title horizontal report-heading" data-reveal>
                <span>02</span>
                <div>
                  <h2>Four research reports</h2>
                  <p>Distinct empirical modules connected through one A-share data and asset-pricing workflow.</p>
                </div>
              </div>
              <div class="report-module-grid">
                ${experience.reportModules
                  .map(
                    (module, index) => `
                      <article class="report-module-card" data-reveal>
                        <div class="report-module-index">
                          <span>REPORT 0${index + 1}</span>
                          <i aria-hidden="true">${metricIcons[index % metricIcons.length]}</i>
                        </div>
                        <h3>${module.title}</h3>
                        <p class="report-module-scope">${module.scope}</p>
                        <div class="report-module-finding">
                          <strong>Key finding</strong>
                          <p>${module.finding}</p>
                        </div>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </section>
        `
        : ""
    }

    <section class="section section-soft">
      <div class="container detail-section-grid">
        <div class="detail-section-title" data-reveal>
          <span>${contributionSectionNumber}</span>
          <div>
            <h2>Key contributions</h2>
            <p>Responsibilities and work completed during this experience.</p>
          </div>
        </div>
        <div class="contribution-list">
          ${experience.contributions
            .map(
              (item, index) => `
                <div data-reveal>
                  <span>0${index + 1}</span>
                  <p>${item}</p>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="detail-section-title horizontal" data-reveal>
          <span>${approachSectionNumber}</span>
          <div>
            <h2>Working approach</h2>
            <p>How the work moved from source material to a usable output.</p>
          </div>
        </div>
        <div class="approach-grid">
          ${experience.approach
            .map(
              (step, index) => `
                <article data-reveal>
                  <span>${index + 1}</span>
                  <h3>${step.title}</h3>
                  <p>${step.text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section detail-tools">
      <div class="container detail-section-grid capability-layout">
        <div class="detail-section-title" data-reveal>
          <span>${capabilitySectionNumber}</span>
          <div>
            <h2>Capability stack</h2>
            <p>Methods and tools evidenced by this experience.</p>
          </div>
        </div>
        <div class="capability-card-grid">
          ${experience.tools
            .map(
              (tool, index) => `
                <div class="capability-card" data-reveal>
                  <i aria-hidden="true">${capabilityIcons[index % capabilityIcons.length]}</i>
                  <strong>${tool}</strong>
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="photo-credit-line">
      <div class="container">
        <span>Experience image:</span>
        <a href="${experience.creditUrl}" target="_blank" rel="noreferrer">
          ${experience.creditName} on Unsplash ↗
        </a>
      </div>
    </section>

    <section class="next-experience">
      <a href="experience.html?id=${next.id}">
        <div class="container">
          <span>Next experience</span>
          <strong>${next.organization} →</strong>
        </div>
      </a>
    </section>
  `;

  setupDetailMotion();
}

function setupDetailMotion() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  document.body.classList.add("motion-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -24px" },
  );

  items.forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index * 35, 210)}ms`);
    observer.observe(item);
  });
}

function setupNavigation() {
  const button = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-main-nav]");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  });
}

function setupEditMode() {
  const editMode = new URLSearchParams(window.location.search).get("edit");
  if (editMode !== "1") return;

  document.body.classList.add("edit-mode");
  let hoveredElement = null;
  let selectedElement = null;

  document.addEventListener("mouseover", (event) => {
    const selectable = event.target.closest("[data-edit-id]");
    if (!selectable) return;

    if (hoveredElement && hoveredElement !== selectable) {
      hoveredElement.classList.remove("editor-hover");
    }
    hoveredElement = selectable;
    hoveredElement.classList.add("editor-hover");
  });

  document.addEventListener("mouseout", (event) => {
    const selectable = event.target.closest("[data-edit-id]");
    if (!selectable) return;
    const nextSelectable = event.relatedTarget?.closest?.("[data-edit-id]");
    if (nextSelectable === selectable) return;
    selectable.classList.remove("editor-hover");
  });

  document.addEventListener(
    "click",
    (event) => {
      const selectable = event.target.closest("[data-edit-id]");
      if (!selectable) return;

      event.preventDefault();
      event.stopPropagation();

      if (selectedElement) {
        selectedElement.classList.remove("editor-selected");
      }
      selectedElement = selectable;
      selectedElement.classList.add("editor-selected");

      window.parent.postMessage(
        {
          type: "website-section-selected",
          id: selectable.dataset.editId,
          label: selectable.dataset.editLabel,
        },
        "*",
      );
    },
    true,
  );

  window.parent.postMessage({ type: "website-editor-ready" }, "*");
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();

  if (document.body.dataset.page === "experience") {
    renderExperience();
  } else {
    renderHome();
    setupEditMode();
  }
});
