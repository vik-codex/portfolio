// ============================================================
//  data.js — Vikas M Portfolio
//  Cert images  →  certs/   folder
//  Project images → projects/ folder
//  Profile photo  →  photo.jpg (repo root)
// ============================================================

const TITLES = [
  "Medical Electronics Engineer",
  "Electronics & Embedded Systems Student",
  "Embedded Systems Developer",
  "IoT & Smart Healthcare Builder",
  "AI & Data Analytics Enthusiast",
  "Python · SciPy · MATLAB"
];

const ABOUT_TEXT = "I'm Vikas M, a Medical Electronics Engineering student at MSRIT, Bengaluru, passionate about building intelligent healthcare systems. I specialise in embedded systems, biomedical signal processing, and IoT-based health monitoring devices. With 5+ internships spanning data analytics, embedded firmware, IoT research, AI, and medical equipment, plus 10+ certifications from Google, Intel, AWS, Oracle, and more — I sit at the intersection of hardware intelligence and digital health. Currently open to full-time roles and impactful collaborations.";

const STATS = { internships: 5, certs: 10, skills: 30 };

const SKILLS = [
  { category: "Programming",         icon: "💻", items: ["Python", "C", "C++", "JavaScript", "MATLAB"] },
  { category: "Embedded & Hardware", icon: "🔧", items: ["Arduino", "Raspberry Pi", "ESP32", "STM32", "Verilog"] },
  { category: "Medical Devices",     icon: "🏥", items: ["ECG Monitoring", "SpO₂ Sensing", "EEG Analysis", "BP Monitoring", "DICOM"] },
  { category: "AI & Data Analytics", icon: "🤖", items: ["Machine Learning", "Generative AI", "Power BI", "Data Analytics", "Web Scraping"] },
  { category: "Tools & Platforms",   icon: "🛠️", items: ["Git & GitHub", "VS Code", "Google Colab", "Multisim", "Keil MDK"] },
  { category: "Protocols & Comms",   icon: "📡", items: ["I²C", "SPI", "UART", "Bluetooth LE", "Wi-Fi (ESP)"] }
];

const TIMELINE = [
  {
    role: "Data Analytics Intern",
    company: "Robo AI",
    period: "Jan 2026 – Mar 2026",
    desc: "Analysed real-world datasets to extract business insights. Built interactive dashboards in Power BI and automated reporting workflows using Python scripts.",
    tags: ["Python", "Power BI", "Data Analytics"]
  },
  {
    role: "Google DSC Member",
    company: "Google Developer Student Clubs",
    period: "Dec 2025 – Present",
    desc: "Active member of Google Developer Student Clubs, participating in technical sessions, workshops, and community driven developer initiatives.",
    tags: ["Community", "Developer Relations", "Google"]
  },
  {
    role: "Projects and Operations Associate",
    company: "Under25",
    period: "Nov 2025 – Present",
    desc: "Managing projects and operational workflows, coordinating cross functional tasks and driving execution across ongoing initiatives.",
    tags: ["Project Management", "Operations"]
  },
  {
    role: "Software Development Intern",
    company: "Prodigy Infotech",
    period: "Nov 2025 – Dec 2025",
    desc: "Software development internship focused on building and testing application features, contributing to live codebases and collaborative development workflows.",
    tags: ["Software Development", "JavaScript", "Python"]
  },
  {
    role: "PCB and Embedded Sensor Student Intern",
    company: "MSRIT",
    period: "Aug 2025 – Sep 2025",
    desc: "Worked on PCB design and embedded sensor integration as part of an academic research internship, focusing on hardware prototyping and sensor interfacing.",
    tags: ["PCB Design", "Embedded Systems", "Sensors"]
  },
  {
    role: "IoT Research Intern",
    company: "IBM (Virtual)",
    period: "Aug 2025 – Sep 2025",
    desc: "Explored IoT architecture and cloud integration using IBM Watson. Built a prototype smart patient monitoring system with real-time alert capabilities.",
    tags: ["IoT", "IBM Watson", "Python"]
  },
  {
    role: "AI & ML Intern",
    company: "Google Gen AI / be10x",
    period: "Jun 2025 – Aug 2025",
    desc: "Hands-on AI projects including prompt engineering, Gemini API integration, and generative AI application development for healthcare use cases.",
    tags: ["Generative AI", "Gemini API", "Python", "Prompt Engineering"]
  },
  {
    role: "Equipment and Sales Operations Assistant",
    company: "Bridgestone India",
    period: "Apr 2024 – Sep 2024",
    desc: "Assisted with equipment management and sales operations, supporting day to day workflow coordination and operational reporting.",
    tags: ["Operations", "Sales", "Equipment Management"]
  },
  {
    role: "Medical Electronics Engineering Intern",
    company: "Adhventha Hospital",
    period: "Sep 1 – Sep 30, 2026",
    desc: "Completed a 30-day internship with hands-on exposure to 29 medical equipment systems across critical care, imaging, diagnostics, laboratory, OT, and sterilization. Learned equipment working principles, handling, preventive maintenance, troubleshooting concepts, calibration, radiation safety, and hospital equipment safety.",
    tags: ["Medical Equipment", "Preventive Maintenance", "Troubleshooting", "Radiation Safety", "Hospital Safety"]
  },
  {
    role: "College Ambassador",
    company: "IIT Bombay Tech Fest",
    period: "Sep 2025 – Jan 2026",
    desc: "Represented IIT Bombay's flagship tech fest and supported student outreach and participation on campus.",
    tags: ["IIT Bombay", "Student Outreach", "Event Operations"]
  }
];

// ── PROJECTS ─────────────────────────────────────────────────
// ECG project output images go in:  projects/  folder in your repo
const PROJECTS = [
  {
    title: "ECG Signal Visualizer & HRV Analyser",
    icon: "❤️",
    tags: ["Python", "SciPy", "NumPy", "Matplotlib", "PhysioNet", "Signal Processing"],
    desc: "Real-time ECG signal processing and visualisation using clinical data from PhysioNet's MIT-BIH Arrhythmia Database. Implements a full biomedical signal pipeline: zero-phase Butterworth bandpass filter (0.5–40 Hz) to remove baseline wander and EMG noise, followed by a Pan-Tompkins-inspired R-peak detector. Outputs live scrolling ECG animation (~35 fps), HRV analysis (RR tachogram, SDNN, instantaneous heart rate), and Power Spectral Density plots before and after filtering.",
    outputs: [
      "projects/ecg_01_raw_vs_filtered.png",
      "projects/ecg_02_hrv_analysis.png",
      "projects/ecg_03_psd.png"
    ],
    outputLabels: [
      "Raw vs Filtered ECG + R-peaks",
      "HRV Analysis Dashboard",
      "Power Spectral Density"
    ],
    github: "https://github.com/vik-codex/ecg-signal-visualizer"
  },
  {
    title: "Python Web Scraper — E-Commerce Analytics",
    icon: "🕷️",
    tags: ["Python", "BeautifulSoup", "Pandas", "Excel"],
    desc: "Automated web scraper collecting product listings, prices, ratings, and reviews from e-commerce platforms. Data cleaned with Pandas, visualised in charts, and exported to structured Excel reports.",
    outputs: [],
    outputLabels: [],
    github: ""
  },
  {
    title: "Power BI Healthcare Dashboard",
    icon: "📊",
    tags: ["Power BI", "DAX", "Data Visualisation"],
    desc: "Interactive hospital analytics dashboard in Power BI visualising patient admission trends, diagnosis distributions, department load, and bed occupancy rates — enabling data-driven operational decisions.",
    outputs: [],
    outputLabels: [],
    github: ""
  },
  {
    title: "ArcNet – AI Governance Framework",
    icon: "🛡️",
    tags: ["Generative AI", "AI Governance", "LLM", "LaTeX"],
    desc: "Proposed ArcNet, a governance framework for evaluating generative AI safety. Selected as a finalist among international teams for safe AI deployment and authored and formatted the 6 page IEEE manuscript in LaTeX.",
    outputs: [],
    outputLabels: [],
    github: ""
  },
  {
    title: "HackMate – Hackathon Discovery & Team Formation Platform",
    icon: "🚀",
    tags: ["Hackathons", "Team Formation", "Web Platform"],
    desc: "Founded a platform connecting hackathon participants through smart team formation. Built tools for posting, joining, and discovering hackathon teams.",
    outputs: [],
    outputLabels: [],
    github: ""
  }
];

// ── CERTIFICATIONS ────────────────────────────────────────────
const CERTS = [
  { name: "Gemini Certified K12 Associate",          issuer: "Google",               date: "Nov 2025", icon: "🔵", img: "certs/gemini.jpg" },
  { name: "Intel AI Foundations",                    issuer: "Intel Corporation",    date: "Oct 2025", icon: "🔷", img: "certs/intel.jpg" },
  { name: "AWS Educate ML Foundations",              issuer: "Amazon Web Services",  date: "Oct 2025", icon: "🟠", img: "certs/aws.jpg" },
  { name: "Generative AI Mastermind",                issuer: "Outskill",             date: "Oct 2025", icon: "🟣", img: "certs/outskill.jpg" },
  { name: "Oracle Cloud AI Foundations Associate",   issuer: "Oracle",               date: "Sep 2025", icon: "🔴", img: "certs/oracle.jpg" },
  { name: "JavaScript Introduction & Fundamentals",  issuer: "LetsUpgrade",          date: "May 2025", icon: "🟡", img: "certs/letsupgrade.jpg" },
  { name: "Power BI Workshop",                       issuer: "OfficeMaster",         date: "May 2025", icon: "🟢", img: "certs/powerbi.jpg" },
  { name: "Siemens Mobility Operations Simulation",  issuer: "Siemens / Forage",     date: "Feb 2026", icon: "⚙️", img: "certs/siemens.jpg" },
  { name: "Deloitte Data Analytics Engineering",     issuer: "Deloitte / Forage",    date: "Feb 2026", icon: "📊", img: "certs/deloitte.jpg" },
  { name: "IBM Python for Data Science",                  issuer: "IBM",                   date: "Sep 2025", icon: "🔵", img: "certs/IBM.jpg" }
];

// ── JOB SIMULATIONS ───────────────────────────────────────────
const JOB_SIMS = [
  {
    company: "Goldman Sachs",
    role: "Software Engineering Job Simulation",
    period: "2026",
    icon: "🏛️",
    color: "#C9A84C",
    desc: "Completed a virtual software engineering job simulation at Goldman Sachs via Forage, focusing on security engineering and cryptographic analysis.",
    learnings: [
      "Assessed password security by analysing hashing algorithms (MD5, bcrypt, SHA) and identified weak implementations in a simulated engineering system",
      "Identified security vulnerabilities and proposed actionable improvements aligned with Goldman Sachs engineering security standards",
      "Wrote a detailed memo outlining findings and remediation strategies for a simulated internal audit scenario"
    ],
    img: "certs/gs.jpg"
  },
  {
    company: "Deloitte",
    role: "Data Analytics Engineering Job Simulation",
    period: "Feb 2026",
    icon: "📊",
    color: "#86C8E0",
    desc: "Performed end-to-end data analytics on real-world e-commerce datasets, extracting business insights and building Python-based data pipelines.",
    learnings: [
      "Built Python web scraping tools to collect and structure product data from e-commerce platforms at scale",
      "Applied data cleaning, transformation, and exploratory data analysis using Pandas to validate key business trends",
      "Presented findings with visualisations and a structured analytical report to simulate a client-facing deliverable"
    ],
    img: "certs/deloitte.jpg"
  },
  {
    company: "Siemens",
    role: "Mobility Operations Industrial Engineering Simulation",
    period: "Feb 2026",
    icon: "⚙️",
    color: "#9B8FE0",
    desc: "Completed an operations optimisation simulation for Siemens Mobility's high-speed rail manufacturing team.",
    learnings: [
      "Used manufacturing engineering principles to identify a critical bottleneck in the wheel assembly section of a rail production line",
      "Proposed a data-driven layout redesign to eliminate the bottleneck and improve throughput efficiency",
      "Delivered a structured PowerPoint improvement proposal simulating a real Siemens industrial engineering presentation"
    ],
    img: "certs/siemens.jpg"
  }
];
// GitHub Pages deployment refresh
