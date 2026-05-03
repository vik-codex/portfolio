// ============================================================
//  data.js — Vikas M Portfolio
//  All certificate images live in:  certs/  folder
//  Profile photo:  photo.jpg  (repo root)
// ============================================================

const TITLES = [
  "Medical Electronics Engineer",
  "Embedded Systems Developer",
  "IoT & Smart Healthcare Builder",
  "AI & Data Analytics Enthusiast",
  "Python · Arduino · MATLAB"
];

const ABOUT_TEXT = "I'm Vikas M, a Medical Electronics Engineering student at MSRIT, Bengaluru, passionate about building intelligent healthcare systems. I specialise in embedded systems, biomedical signal processing, and IoT-based health monitoring devices. With 4+ internships spanning data analytics, embedded firmware, IoT research, and AI, plus 9+ certifications from Google, Intel, AWS, Oracle, and more — I sit at the intersection of hardware intelligence and digital health. Currently open to full-time roles and impactful collaborations.";

const STATS = { internships: 4, certs: 9, skills: 30 };

const SKILLS = [
  {
    category: "Programming",
    icon: "💻",
    items: ["Python", "C", "C++", "JavaScript", "MATLAB"]
  },
  {
    category: "Embedded & Hardware",
    icon: "🔧",
    items: ["Arduino", "Raspberry Pi", "ESP32", "STM32", "Verilog"]
  },
  {
    category: "Medical Devices",
    icon: "🏥",
    items: ["ECG Monitoring", "SpO₂ Sensing", "EEG Analysis", "BP Monitoring", "DICOM"]
  },
  {
    category: "AI & Data Analytics",
    icon: "🤖",
    items: ["Machine Learning", "Generative AI", "Power BI", "Data Analytics", "Web Scraping"]
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    items: ["Git & GitHub", "VS Code", "Google Colab", "Multisim", "Keil MDK"]
  },
  {
    category: "Protocols & Comms",
    icon: "📡",
    items: ["I²C", "SPI", "UART", "Bluetooth LE", "Wi-Fi (ESP)"]
  }
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
    role: "Embedded Systems Intern",
    company: "IITB (Remote)",
    period: "Oct 2025 – Dec 2025",
    desc: "Developed STM32-based firmware for real-time sensor data acquisition and UART transmission. Interfaced multiple sensors and validated signal integrity.",
    tags: ["STM32", "UART", "C", "Firmware"]
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
  }
];

const PROJECTS = [
  {
    title: "Smart ECG Monitor",
    icon: "❤️",
    tags: ["Arduino", "Python", "Bluetooth", "Healthcare"],
    desc: "Real-time ECG monitoring system using AD8232 analog front-end and Arduino Uno. Cardiac data streamed over Bluetooth to a Python GUI for live waveform display, peak detection, and arrhythmia flagging."
  },
  {
    title: "SpO₂ & Heart Rate Monitor",
    icon: "🩺",
    tags: ["MAX30102", "ESP32", "C++", "OLED", "Wi-Fi"],
    desc: "Wearable pulse oximeter using MAX30102 sensor and ESP32 microcontroller. Displays real-time SpO₂ percentage and heart rate on a 0.96\" OLED display, with live data pushed over Wi-Fi to a web dashboard."
  },
  {
    title: "Python Web Scraper — E-Commerce Analytics",
    icon: "🕷️",
    tags: ["Python", "BeautifulSoup", "Pandas", "Excel"],
    desc: "Automated web scraper collecting product listings, prices, ratings, and reviews from e-commerce platforms. Data cleaned with Pandas, visualised in charts, and exported to structured Excel reports."
  },
  {
    title: "Power BI Healthcare Dashboard",
    icon: "📊",
    tags: ["Power BI", "DAX", "Data Visualisation"],
    desc: "Interactive hospital analytics dashboard in Power BI visualising patient admission trends, diagnosis distributions, department load, and bed occupancy rates — enabling data-driven operational decisions."
  }
];

// ── CERTIFICATIONS ──────────────────────────────────────────
// All images go inside the  certs/  folder in your GitHub repo
const CERTS = [
  {
    name: "Gemini Certified K12 Associate",
    issuer: "Google",
    date: "Nov 2025",
    icon: "🔵",
    img: "certs/gemini.jpg"
  },
  {
    name: "Intel AI Foundations",
    issuer: "Intel Corporation",
    date: "Oct 2025",
    icon: "🔷",
    img: "certs/intel.jpg"
  },
  {
    name: "AWS Educate ML Foundations",
    issuer: "Amazon Web Services",
    date: "Oct 2025",
    icon: "🟠",
    img: "certs/aws.jpg"
  },
  {
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "Oct 2025",
    icon: "🟣",
    img: "certs/outskill.jpg"
  },
  {
    name: "Oracle Cloud AI Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2025",
    icon: "🔴",
    img: "certs/oracle.jpg"
  },
  {
    name: "JavaScript Introduction & Fundamentals",
    issuer: "LetsUpgrade",
    date: "May 2025",
    icon: "🟡",
    img: "certs/letsupgrade.jpg"
  },
  {
    name: "Power BI Workshop",
    issuer: "OfficeMaster",
    date: "May 2025",
    icon: "🟢",
    img: "certs/powerbi.jpg"
  },
  {
    name: "Siemens Mobility Operations Simulation",
    issuer: "Siemens / Forage",
    date: "Feb 2026",
    icon: "⚙️",
    img: "certs/siemens.jpg"
  },
  {
    name: "Deloitte Data Analytics Engineering",
    issuer: "Deloitte / Forage",
    date: "Feb 2026",
    icon: "📊",
    img: "certs/deloitte.jpg"
  }
];

// ── JOB SIMULATIONS ─────────────────────────────────────────
const JOB_SIMS = [
  {
    company: "Goldman Sachs",
    role: "Software Engineering Job Simulation",
    period: "2026",
    icon: "🏛️",
    color: "#C9A84C",
    desc: "Completed a virtual software engineering job simulation at Goldman Sachs via Forage, focusing on security engineering and cryptographic analysis.",
    learnings: [
      "Assessed password security by analysing hashing algorithms (MD5, bcrypt, SHA) and identified weak implementations in a simulated system",
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
