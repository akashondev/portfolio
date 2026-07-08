export const resumeData = {
  name: "Akash Vishwakarma",
  role: "Full-Stack Developer",
  tagline:
    "Building scalable, user-centric applications with modern technologies.",
  email: "akashvishwakarma1024@gmail.com",
  phone: "(+91) 9324464981",
  linkedin: "https://www.linkedin.com/in/akash-vishwakarma-9b3b2b363/",
  github: "https://github.com/akashondev",
  summary:
    "Computer Science graduate skilled in full-stack development and mobile app creation, with hands-on experience building scalable applications using modern technologies like React.js, Node.js, and Android development. Passionate about creating user-centric solutions with expertise in both frontend and backend development.",
  skills: [
    { category: "Languages", items: ["Java", "Python", "JavaScript", "C++"] },
    {
      category: "Frontend",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    { category: "Backend", items: ["Node.js", "Express.js"] },
    { category: "Databases", items: ["MongoDB", "SQL"] },
    {
      category: "Tools",
      items: ["VS Code", "NetBeans", "Git", "Android Studio"],
    },
  ],
  projects: [
    {
      title: "Movies Ticket Booking Website",
      description:
        "A full-stack movie ticket booking web app that allows users to explore movies, select showtimes, theaters, seats, and make payments. Features dynamic real-time seat selection and an admin dashboard for movie management.",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      highlights: [
        "Real-time seat blocking across users",
        "Admin CRUD dashboard",
        "Dynamic showtime & theater selection",
      ],
      link: "https://cinetix-react.vercel.app/add",
    },
    {
      title: "Video Editing Mobile App",
      description:
        "A mobile video editing application with features including video trimming, grayscale filters, resolution adjustment, text overlay, and cropping. Built with performance-intensive FFmpeg video processing.",
      tech: ["Java", "Kotlin", "Android Studio", "FFmpeg", "Supabase"],
      highlights: [
        "FFmpeg-powered frame manipulation",
        "Supabase user management",
        "Multiple editing tools in one app",
      ],
      link: null,
    },
  ],
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "Mulund College of Commerce (Autonomous)",
      period: "2022 – 2025",
      grade: "CGPA: 7.5 / 10",
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "Gyanodaya College",
      period: "2020 – 2022",
      grade: null,
    },
  ],
  certifications: [
    "Cyber Security — Microsoft",
    "Advanced Cyber Security — Microsoft",
    "Robotic Process Automation (RPA)",
    "Unity Game Development",
    "Tableau Data Visualization",
    "Ruby on Rails",
  ],
  achievements: [
    {
      title: "Math Wonder — Runner-Up",
      description:
        "Secured second place for creating a Möbius strip origami model showcasing the creative application of mathematical concepts.",
    },
  ],
};

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

Object.assign(resumeData, {
  role: "Full-Stack Developer",
  location: "Mumbai, India",
  availability: "Open to full-stack roles",
  tagline:
    "Full-stack developer building React + Node apps with real product flows, dashboards, auth, databases, and mobile experience.",
  summary:
    "Computer Science graduate focused on practical web and mobile products. I build React interfaces, Node/Express APIs, database-backed flows, and Android features with attention to clear user journeys, maintainable code, and useful proof of work.",
  proofStrip: [
    "React",
    "Node.js",
    "MongoDB/SQL",
    "Android",
    "Mumbai",
    "Open to full-stack roles",
  ],
  quickFacts: [
    ["Target role", "Full-stack developer"],
    ["Strongest stack", "React, Node.js, Express, databases"],
    ["Mobile work", "Android, Java/Kotlin, FFmpeg"],
    ["Location", "Mumbai, India"],
  ],
  capabilities: [
    {
      title: "Frontend interfaces",
      description:
        "React screens, responsive layouts, dashboards, forms, and stateful product flows that are easy to scan and use.",
      tools: ["React", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend APIs",
      description:
        "Node and Express endpoints for auth, admin workflows, booking logic, and application data.",
      tools: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database-backed flows",
      description:
        "MongoDB and SQL-backed features where users create, update, reserve, and retrieve real application data.",
      tools: ["MongoDB", "SQL", "Supabase"],
    },
    {
      title: "Mobile apps",
      description:
        "Android features for media processing, account flows, and device-first interactions.",
      tools: ["Java", "Kotlin", "Android Studio"],
    },
  ],
  skills: [
    { category: "Languages", items: ["JavaScript", "Java", "Python", "C++"] },
    { category: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
    { category: "Data", items: ["MongoDB", "SQL", "Supabase"] },
    { category: "Tools", items: ["Git", "VS Code", "Android Studio", "NetBeans"] },
  ],
  projects: [
    {
      title: "Cinetix Movie Ticket Booking",
      problem:
        "Movie booking needs a clear path from discovery to showtime, theater, seat selection, and admin management.",
      built:
        "Built a full-stack booking experience with movie browsing, showtime and theater selection, dynamic seats, payment flow, and an admin dashboard.",
      role:
        "Implemented the React UI, Node-backed product flow, seat interaction logic, and admin CRUD screens.",
      tech: ["React.js", "Node.js", "Tailwind CSS"],
      highlights: [
        "Seat selection flow built around real booking decisions",
        "Admin dashboard for movie management",
        "Showtime and theater selection structured as a product journey",
      ],
      link: "https://cinetix-react.vercel.app/add",
      githubLink: null,
    },
    {
      title: "Video Editing Android App",
      problem:
        "Mobile creators need quick editing tools without moving videos into a desktop workflow.",
      built:
        "Built an Android video editor with trimming, grayscale filters, resolution adjustment, text overlay, cropping, and user management.",
      role:
        "Worked on Android UI flows, FFmpeg processing integration, media actions, and Supabase-backed account features.",
      tech: ["Java", "Kotlin", "Android Studio", "FFmpeg", "Supabase"],
      highlights: [
        "FFmpeg-powered video manipulation",
        "Multiple editing tools in one mobile app",
        "Supabase used for user management",
      ],
      link: null,
      githubLink: null,
    },
  ],
  education: [
    {
      degree: "B.Sc. Computer Science",
      institution: "Mulund College of Commerce (Autonomous)",
      period: "2022 - 2025",
      grade: "CGPA: 7.5 / 10",
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "Gyanodaya College",
      period: "2020 - 2022",
      grade: null,
    },
  ],
  certifications: [
    "Cyber Security - Microsoft",
    "Advanced Cyber Security - Microsoft",
    "Robotic Process Automation (RPA)",
    "Unity Game Development",
    "Tableau Data Visualization",
    "Ruby on Rails",
  ],
  achievements: [
    {
      title: "Math Wonder - Runner-Up",
      description:
        "Secured second place for creating a Mobius strip origami model showcasing the creative application of mathematical concepts.",
    },
  ],
});

navLinks.splice(
  0,
  navLinks.length,
  { id: "hero", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
);
