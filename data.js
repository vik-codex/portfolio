// ============================================================
//  DATA.JS  —  THE ONLY FILE YOU EVER NEED TO EDIT
// ============================================================
//  NEW SKILL?       → Add a string inside any items:[] array
//  NEW EXPERIENCE?  → Copy one block inside experience[] and fill in
//  NEW CERT?        → Copy one block inside certifications[] and fill in
// ============================================================

const portfolioData = {

  // ── PERSONAL ─────────────────────────────────────────────
  name:     "Vikas M",
  email:    "vikas.mdpraveen@gmail.com",
  location: "Bengaluru, Karnataka, India",
  linkedin: "https://linkedin.com/in/vikas-m-280a87355",
  github:   "https://github.com/vik-codex",

  about: `Electronics Engineering student at MS Ramaiah Institute of Technology specializing in Medical Electronics, with hands-on experience building embedded systems, interfacing biosensors, and exploring AI-driven health-tech applications. I've interned across embedded systems, software development, and operations — driven by one goal: engineering technology that makes healthcare smarter and more accessible.`,

  // ── STATS ─────────────────────────────────────────────────
  stats: {
    internships:    4,
    certifications: 9,
    skills:         30
  },

  // ── SKILLS ───────────────────────────────────────────────
  skills: [
    {
      category: "Programming",
      icon: "💻",
      color: "#00ff88",
      items: ["C", "C++", "Python", "JavaScript", "Java"]
    },
    {
      category: "AI & Machine Learning",
      icon: "🧠",
      color: "#00d4ff",
      items: ["Machine Learning", "Large Language Models", "Data Analysis", "Power BI", "MATLAB"]
    },
    {
      category: "Cloud Technologies",
      icon: "☁️",
      color: "#7b61ff",
      items: ["AWS", "Oracle Cloud (OCI)", "Cloud Infrastructure", "Cloud Computing"]
    },
    {
      category: "Electronics & Embedded",
      icon: "⚡",
      color: "#ff6b35",
      items: ["Microcontrollers", "Embedded Systems", "Sensor Technology", "Signal Processing", "Sensory Integration"]
    },
    {
      category: "Design & Tools",
      icon: "🎨",
      color: "#ff3cac",
      items: ["Figma", "AutoCAD", "Solid Edge", "CAED"]
    },
    {
      category: "Core Concepts",
      icon: "🔐",
      color: "#f9ca24",
      items: ["Cybersecurity", "Business Management", "CRM", "Strategy"]
    }
  ],

  // ── EXPERIENCE ───────────────────────────────────────────
  experience: [
    {
      company: "Google Developer Student Clubs",
      role:    "DSC Member",
      period:  "Dec 2025 – Present",
      type:    "Community",
      color:   "#00ff88",
      points: [
        "Active member participating in workshops and tech events",
        "Peer learning in development and emerging technologies"
      ]
    },
    {
      company: "Under25",
      role:    "Projects & Operations Associate",
      period:  "Nov 2025 – Present",
      type:    "Operations",
      color:   "#00d4ff",
      points: [
        "Coordinated project operations for student/community initiatives",
        "Supported planning, reporting, and on-ground event operations",
        "Assisted with stakeholder communication and coordination"
      ]
    },
    {
      company: "Prodigy Infotech",
      role:    "Software Development Intern",
      period:  "Nov 2025 – Dec 2025",
      type:    "Software",
      color:   "#7b61ff",
      points: [
        "Developed and debugged real-world software features",
        "Gained experience with SDLC and building scalable applications"
      ]
    },
    {
      company: "MSRIT",
      role:    "Student Intern — Embedded Systems",
      period:  "Aug 2025 – Sep 2025",
      type:    "Hardware",
      color:   "#ff6b35",
      points: [
        "Internship in Sensor Technology and Embedded Systems",
        "Hands-on sensor interfacing, real-time applications, microcontroller programming"
      ]
    },
    {
      company: "Bridgestone India",
      role:    "Equipment & Sales Operations Assistant",
      period:  "Apr 2024 – Sep 2024",
      type:    "Operations",
      color:   "#ff3cac",
      points: [
        "Managed customer accounts and processed incoming sales orders",
        "Tracked inventory levels ensuring stock accuracy for the sales team"
      ]
    }
  ],

  // ── CERTIFICATIONS ───────────────────────────────────────
  certifications: [
    { name: "Gemini Certified K12 Associate",         issuer: "Google",                date: "Nov 2025", icon: "🔵" },
    { name: "Intel AI Foundations",                   issuer: "Intel Corporation",      date: "Oct 2025", icon: "🔷" },
    { name: "AWS Educate ML Foundations",             issuer: "Amazon Web Services",    date: "Oct 2025", icon: "🟠" },
    { name: "Generative Frontier",                    issuer: "Outskill",               date: "Oct 2025", icon: "🟣" },
    { name: "Oracle Cloud AI Foundations Associate",  issuer: "Oracle",                 date: "Sep 2025", icon: "🔴" },
    { name: "JavaScript Introduction & Fundamentals", issuer: "LetsUpgrade",            date: "May 2025", icon: "🟡" },
    { name: "Power BI Workshop",                      issuer: "Power BI",               date: "May 2025", icon: "🟢" },
    { name: "Siemens Mobility Operations Simulation", issuer: "Siemens",                date: "Feb 2026", icon: "⚙️" },
    { name: "Deloitte Data Analytics Engineering",    issuer: "Deloitte",               date: "Feb 2026", icon: "📊" }
  ]

};
