/**
 * PORTFOLIO DATA SOURCE OF TRUTH
 * All content is strictly sourced from Bikesh Sah's resume.
 * Easily update your links, contact details, and project URLs here.
 */

export const portfolioData = {
  personal: {
    name: "Bikesh Sah",
    fullName: "Bikesh Prasad Sah Teli",
    title: "Full-Stack Developer (MERN)",
    roles: [
      "Full-Stack Developer",
      "MERN Stack Engineer",
      "Problem Solver"
    ],
    pitchLine1: "Full-Stack Developer (MERN) and B.Tech CSE student in Bangalore.",
    pitchLine2: "Building production-ready web applications with clean architecture, high-performance APIs, and intuitive UI.",
    location: "Bangalore, India",
    phone: "+91-7619618941",
    email: "bikeshsah096@gmail.com",
    github: "https://github.com/Bikeshsah017",
    githubUsername: "Bikeshsah017",
    linkedin: "https://linkedin.com/in/bikesh-sah-809956369",
    linkedinUsername: "bikesh-sah-809956369",
    resumeUrl: "/Bikesh_Sah_Resume.pdf", // Downloadable from public directory
    profilePhoto: "/profile.jpg", // Professional photo added
    openToWork: true,
    internshipBadge: "Open to internships",
    statusDetail: "Actively seeking Full-Stack Developer Internship",
  },

  summary: {
    heading: "Bridging Clean Code with High-Impact User Experience",
    bio: "Full-Stack Developer (MERN) and B.Tech Computer Science student seeking a Full-Stack Developer internship. Experienced in building production-ready web applications with React.js, Node.js, Express.js, MongoDB and RESTful APIs, with a focus on clean architecture and responsive UI. Delivered a web development internship and two full-stack projects, including a bot-detection system with 92% classification accuracy.",
    statCards: [
      { 
        value: "92%", 
        label: "Bot-Detection Accuracy",
        description: "On labeled session dataset"
      },
      { 
        value: "2", 
        label: "Full-Stack Projects",
        description: "Production MERN & ML systems"
      },
      { 
        value: "1", 
        label: "Internship Completed",
        description: "Code Alpha web development"
      },
      { 
        value: "8+", 
        label: "REST Endpoints",
        description: "CRUD with secure validation"
      },
    ],
    quickFacts: [
      { label: "Location", value: "Bangalore, India" },
      { label: "Education", value: "B.Tech CSE, Jain University (2023–Present)" },
      { label: "CGPA", value: "7.0 / 10" },
      { label: "Availability", value: "Immediate (Full-Stack Internship)" },
      { label: "Core Focus", value: "MERN Stack, REST APIs, Clean Architecture" },
      { label: "Training", value: "SailPoint IdentityIQ Enterprise Training" },
    ],
  },

  skills: [
    {
      category: "Languages",
      skills: ["JavaScript (ES6+)", "Python", "Java", "C", "SQL", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Responsive Web Design"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "RESTful API Design", "JWT Authentication", "Socket.io"],
    },
    {
      category: "Database",
      skills: ["MongoDB", "Mongoose ODM", "SQL", "CRUD Operations"],
    },
    {
      category: "Tools & Deployment",
      skills: ["Git", "GitHub", "Postman", "Vercel", "Render", "Netlify", "VS Code", "npm"],
    },
    {
      category: "AI & APIs",
      skills: ["LLM APIs (Claude, Groq)", "Machine Learning", "Gmail API", "Resend"],
    },
    {
      category: "Concepts",
      skills: ["Agile Methodology", "Data Structures & Algorithms", "OOP", "MVC Architecture"],
    },
  ],

  experience: [
    {
      id: "code-alpha",
      role: "Web Development Intern",
      company: "Code Alpha",
      companyUrl: "https://codealpha.tech",
      location: "Bangalore, India",
      duration: "Feb 2025 – Mar 2025",
      type: "Internship",
      highlights: [
        {
          text: "Built secure login and registration modules with client-side and server-side validation, reducing invalid form submissions by ~40%.",
          metric: "~40% fewer invalid submissions",
        },
        {
          text: "Developed 5+ responsive UI components using React.js and CSS3, tested across Chrome, Firefox and Safari.",
          metric: "Cross-browser tested",
        },
        {
          text: "Implemented a dynamic bill generation feature, automating invoice creation and cutting manual processing time by ~60%.",
          metric: "~60% manual time cut",
        },
        {
          text: "Improved page load speed by ~35% through debugging, code refactoring and asset optimization.",
          metric: "~35% faster page load",
        },
        {
          text: "Collaborated with a team of 4 developers using Git and an Agile workflow.",
          metric: "Agile 4-dev team",
        },
      ],
      tags: ["React.js", "CSS3", "JavaScript", "Git", "Agile", "Form Validation", "Optimization"],
    },
  ],

  projects: [
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      subtitle: "Personal Finance Tracking Platform",
      summary: "Full-stack MERN application enabling users to log 100+ daily transactions across multiple categories with real-time financial analytics.",
      points: [
        "Built a full-stack MERN application enabling users to track 100+ daily transactions across multiple categories.",
        "Implemented 4 interactive Chart.js dashboards (bar, pie, line, doughnut) for real-time income vs. expense visualization.",
        "Designed an analytics module that generates personalized budget suggestions from spending patterns.",
        "Developed 8 RESTful API endpoints for CRUD operations with input validation, error handling and secure MongoDB persistence.",
      ],
      metrics: [
        { value: "100+", label: "Daily Transactions" },
        { value: "4", label: "Chart.js Dashboards" },
        { value: "8", label: "RESTful Endpoints" },
        { value: "MERN", label: "Architecture" },
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "REST APIs"],
      githubUrl: "https://github.com/Bikeshsah017/expense-tracker", // REPLACE with your repo URL
      liveUrl: "https://expense-tracker-demo.vercel.app", // REPLACE with your demo URL
    },
    {
      id: "botbarrier",
      title: "BotBarrier",
      subtitle: "Intelligent Bot Detection System",
      summary: "Machine learning web security system distinguishing humans from bots on session telemetry with 92% classification accuracy.",
      points: [
        "Developed a web-security system achieving 92% accuracy in distinguishing humans from bots on a labeled test set of session data.",
        "Built a real-time behavioral analysis pipeline processing 1,000+ events per session (mouse movement, typing rhythm, click intervals, request frequency).",
        "Implemented a classification engine using pattern recognition and anomaly detection to flag suspicious sessions.",
        "Designed a real-time monitoring dashboard with live interaction tracking, threat scoring and automated alerts.",
      ],
      metrics: [
        { value: "92%", label: "Accuracy" },
        { value: "1,000+", label: "Events / Session" },
        { value: "Real-time", label: "Threat Scoring" },
        { value: "ML-Driven", label: "Anomaly Detection" },
      ],
      tech: ["JavaScript", "Node.js", "Python", "Machine Learning", "Socket.io"],
      githubUrl: "https://github.com/Bikeshsah017/botbarrier", // REPLACE with your repo URL
      liveUrl: "https://botbarrier-demo.vercel.app", // REPLACE with your demo URL
    },
  ],

  education: [
    {
      institution: "Jain (Deemed-to-be) University",
      location: "Bangalore, India",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Sep 2023 – Present",
      grade: "CGPA: 7.0 / 10",
      status: "In Progress",
      coursework: [
        "Data Structures & Algorithms",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
    },
    {
      institution: "Himalayan WhiteHouse International College",
      location: "Nepal",
      degree: "Higher Secondary Education (10+2)",
      period: "Jun 2021 – Jun 2023",
      grade: "NEB: 67%",
      status: "Completed",
      coursework: ["Physics", "Mathematics", "Computer Science"],
    },
  ],

  certifications: [
    {
      title: "SailPoint IdentityIQ Training",
      provider: "Enterprise Identity & Access Management",
      modules: [
        "Lifecycle Manager",
        "Compliance Manager",
        "Access Governance",
      ],
      details:
        "Lifecycle Manager, Compliance Manager, Access Governance (Active Directory, LDAP, JDBC, Web Services connectors), authoritative source integration, custom workflows, and scripting.",
      tags: ["SailPoint IIQ", "Active Directory", "LDAP", "JDBC", "Web Services", "Access Governance"],
    },
  ],

  emailConfig: {
    // Instructions for EmailJS setup:
    // 1. Sign up free at https://www.emailjs.com/
    // 2. Create an Email Service (e.g. Gmail) and get your SERVICE_ID
    // 3. Create an Email Template and get your TEMPLATE_ID
    // 4. Get your PUBLIC_KEY from Account > API Keys
    // 5. Replace the placeholder values below or add them to a .env file
    serviceId: "service_placeholder",
    templateId: "template_placeholder",
    publicKey: "public_placeholder",
    receiverEmail: "bikeshsah096@gmail.com",
  },
};
