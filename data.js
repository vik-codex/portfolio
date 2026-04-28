// ============================================================
//  data.js  — Vikas M Portfolio
//  Images live in: certs/ folder in the repo root
// ============================================================

// ---------- TYPED TITLES ----------
const TITLES = [
  "Medical Electronics Engineer",
  "Embedded Systems Developer",
  "IoT & Smart Healthcare Builder",
  "AI & Data Analytics Enthusiast",
  "Python & Arduino Developer"
];

// ---------- ABOUT ----------
const ABOUT_TEXT = `I'm Vikas M, a final-year Medical Electronics Engineering student at MSRIT, Bengaluru. I specialise in embedded systems, IoT-based healthcare devices, and data analytics. With 4+ internships, 9+ certifications, and hands-on experience across Python, Arduino, MATLAB, and Power BI, I build solutions that sit at the intersection of hardware and intelligence. Currently open to full-time roles and collaborative projects.`;

// ---------- SKILLS ----------
const SKILLS = [
  { category: "Programming", icon: "💻", items: ["Python", "C", "C++", "JavaScript", "MATLAB"] },
  { category: "Embedded & Hardware", icon: "🔧", items: ["Arduino", "Raspberry Pi", "ESP32", "STM32", "Verilog"] },
  { category: "Medical Devices", icon: "🏥", items: ["ECG", "SpO2", "EEG", "Blood Pressure Monitoring", "DICOM"] },
  { category: "AI & Data", icon: "🤖", items: ["Machine Learning", "Generative AI", "Power BI", "Data Analytics", "Web Scraping"] },
  { category: "Tools & Platforms", icon: "🛠️", items: ["Git", "GitHub", "VS Code", "Google Colab", "Multisim"] },
  { category: "Communication & Protocols", icon: "📡", items: ["I2C", "SPI", "UART", "Bluetooth", "Wi-Fi (ESP)"] }
];

// ---------- EXPERIENCE / TIMELINE ----------
const TIMELINE = [
  {
    role: "Data Analytics Intern",
    company: "Robo AI",
    period: "Jan 2026 – Mar 2026",
    desc: "Analysed real-world datasets to extract business insights. Built dashboards in Power BI and automated reporting workflows using Python.",
    tags: ["Python", "Power BI", "Data Analytics"]
  },
  {
    role: "Embedded Systems Intern",
    company: "IITB (Remote)",
    period: "Oct 2025 – Dec 2025",
    desc: "Worked on STM32-based sensor interfacing projects. Developed firmware for real-time data acquisition and transmission over UART.",
    tags: ["STM32", "UART", "C", "Firmware"]
  },
  {
    role: "IoT Research Intern",
    company: "IBM (Virtual)",
    period: "Aug 2025 – Sep 2025",
    desc: "Explored IoT architecture and cloud integration using IBM Watson. Developed a prototype smart monitoring system.",
    tags: ["IoT", "IBM Watson", "Python"]
  },
  {
    role: "AI & ML Intern",
    company: "Google Gen AI / be10x",
    period: "Jun 2025 – Aug 2025",
    desc: "Completed hands-on AI projects including prompt engineering, Gemini API integration, and generative AI application development.",
    tags: ["Generative AI", "Gemini", "Python", "Prompt Engineering"]
  }
];

// ---------- PROJECTS ----------
const PROJECTS = [
  {
    title: "Smart ECG Monitor",
    icon: "❤️",
    tags: ["Arduino", "Python", "IoT", "Healthcare"],
    desc: "Real-time ECG monitoring system using AD8232 sensor and Arduino Uno. Data streamed over Bluetooth to a Python GUI for live waveform display and anomaly detection.",
    outputs: []
  },
  {
    title: "SpO2 & Heart Rate Monitor",
    icon: "🩺",
    tags: ["MAX30102", "ESP32", "C++", "OLED"],
    desc: "Wearable health monitor using MAX30102 pulse oximeter and ESP32. Displays real-time SpO2 and HR on OLED; sends data over Wi-Fi to a web dashboard.",
    outputs: []
  },
  {
    title: "Python Web Scraper for E-Commerce",
    icon: "🕷️",
    tags: ["Python", "BeautifulSoup", "Pandas", "Data Analytics"],
    desc: "Automated scraper to collect product listings, prices, and ratings from e-commerce platforms. Data cleaned and analysed using Pandas; results exported to Excel.",
    outputs: []
  },
  {
    title: "Power BI Healthcare Dashboard",
    icon: "📊",
    tags: ["Power BI", "DAX", "Data Visualisation"],
    desc: "Interactive dashboard built in Power BI to visualise patient admission trends, diagnosis distributions, and bed occupancy rates for a simulated hospital dataset.",
    outputs: []
  }
];

// ---------- CERTIFICATIONS ----------
// Add images to the  certs/  folder in your GitHub repo
// Then the src path below (e.g. "certs/gemini.jpg") will work automatically
const CERTS = [
  {
    name: "Gemini Certified K12 Associate",
    issuer: "Google",
    date: "Nov 2025",
    icon: "🔵",
    img: "certs/gemini.jpg"        // ← upload certs/gemini.jpg to GitHub
  },
  {
    name: "Intel AI Foundations",
    issuer: "Intel Corporation",
    date: "Oct 2025",
    icon: "🔷",
    img: "certs/intel.jpg"         // ← upload certs/intel.jpg to GitHub
  },
  {
    name: "AWS Educate ML Foundations",
    issuer: "Amazon Web Services",
    date: "Oct 2025",
    icon: "🟠",
    img: "certs/aws.jpg"           // ← upload certs/aws.jpg to GitHub
  },
  {
    name: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "Oct 2025",
    icon: "🟣",
    img: "certs/outskill.jpg"      // ← already in repo, move to certs/
  },
  {
    name: "Oracle Cloud AI Foundations Associate",
    issuer: "Oracle",
    date: "Sep 2025",
    icon: "🔴",
    img: "certs/oracle.jpg"        // ← re-upload the CORRECT Oracle cert as certs/oracle.jpg
  },
  {
    name: "JavaScript Introduction & Fundamentals",
    issuer: "LetsUpgrade",
    date: "May 2025",
    icon: "🟡",
    img: "certs/letsupgrade.jpg"   // ← already in repo, move to certs/
  },
  {
    name: "Power BI Workshop",
    issuer: "Power BI / OfficeMaster",
    date: "May 2025",
    icon: "🟢",
    img: "certs/powerbi.jpg"       // ← already in repo, move to certs/
  },
  {
    name: "Siemens Mobility Operations Simulation",
    issuer: "Siemens / Forage",
    date: "Feb 2026",
    icon: "⚙️",
    img: "certs/siemens.jpg"       // ← upload certs/siemens.jpg to GitHub
  },
  {
    name: "Deloitte Data Analytics Engineering",
    issuer: "Deloitte / Forage",
    date: "Feb 2026",
    icon: "📊",
    img: "certs/deloitte.jpg"      // ← already in repo, move to certs/
  }
];

// ---------- JOB SIMULATIONS ----------
const JOB_SIMS = [
  {
    company: "Goldman Sachs",
    role: "Software Engineering Job Simulation",
    period: "2026",
    icon: "🏛️",
    color: "#d4a017",
    desc: "Completed a virtual job simulation at Goldman Sachs focused on software engineering. Assessed password security using cryptographic hashing techniques, identified vulnerabilities in a simulated engineering system, and proposed actionable improvements aligned with industry security standards.",
    tag: "JOB SIMULATION",
    img: "certs/gs.jpg"            // ← already in repo, move to certs/
  },
  {
    company: "Deloitte",
    role: "Data Analytics Engineering Job Simulation",
    period: "Feb 2026",
    icon: "📊",
    color: "#00b3e6",
    desc: "Performed data analysis on real-world datasets to extract business insights and identify key trends. Built Python-based web scraping tools to collect and structure e-commerce data, then applied research and analytical thinking to validate findings and present meaningful conclusions.",
    tag: "JOB SIMULATION",
    img: "certs/deloitte.jpg"      // ← same cert image, reused
  },
  {
    company: "Siemens",
    role: "Mobility Operations Industrial Engineering Simulation",
    period: "Feb 2026",
    icon: "⚙️",
    color: "#7b68ee",
    desc: "Completed an operations optimisation simulation for Siemens Mobility's high-speed rail team. Used manufacturing and engineering principles to identify a critical bottleneck in the wheel assembly section, proposed a layout redesign, and presented a data-driven improvement proposal using PowerPoint.",
    tag: "JOB SIMULATION",
    img: "certs/siemens.jpg"       // ← upload certs/siemens.jpg to GitHub
  }
];

// ---------- STAT COUNTERS ----------
const STATS = {
  internships: 4,
  certs: 9,
  skills: 30
};
