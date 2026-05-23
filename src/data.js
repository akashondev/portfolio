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
