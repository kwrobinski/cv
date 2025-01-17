interface ResumeData {
  siteMetadata: SiteMetadata,
  name: string
  description: string
  location: Location
  urls: Urls
  about: string
  education: Education[]
  skills: Skill[]
  workExperience: WorkExperience[]
}

interface Location {
  title: string
  url: string
}

interface Urls {
  mail: string
  github: string
  linkedin: string
}

interface Education {
  institution: string
  degree: string
  date: string
}

interface Skill {
  groupName: string
  skillTitles: string[]
}

interface WorkExperience {
  company: string
  position: string
  time: string
  current?: boolean
  duties: string[]
}

interface SiteMetadata {
  title: string
  description: string
}

const RESUME_DATA: ResumeData = {
  siteMetadata: {
    title: "Kacper Wróbiński - Full-stack Developer",
    description: "Kacper Wróbiński - Full-stack Developer",
  },
  name: "Kacper Wróbiński",
  description:
    "Experienced Full Stack Engineer with a keen eye for detail, focused on delivering high-quality products.",
  location: {
    title: "Poznań, Poland",
    url: "https://www.google.com/maps/place/Pozna%C5%84",
  },
  urls: {
    mail: "mailto:hello@kwrobinski.dev",
    github: "https://github.com/kwrobinski",
    linkedin: "https://linkedin.com/in/kacper-wrobinski",
  },
  about:
    "I'm a Full Stack Engineer with 5 years of commercial experience, specializing in .NET and Vue.js for web development. I also develop mobile apps using React Native and Expo. I have a knack for configuring GitLab CI/CD pipelines, ensuring efficient deployments. With experience in team leading, I enjoy collaborating and guiding projects to success. My passion for exploring new technologies drives me to continuously enhance my skills and stay at the forefront of industry trends.",
  education: [
    {
      institution: "Collegium Da Vinci",
      degree: "Bachelor's degree in Computer Science",
      date: "2019-2023",
    },
  ],
  skills: [
    {
      groupName: "Backend",
      skillTitles: [
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "PostgreSQL",
        "xUnit",
        "CQRS",
        "Azure Blob Storage",
        "NLog",
      ],
    },
    {
      groupName: "Frontend",
      skillTitles: [
        "Vue.js / Nuxt",
        "React / Next",
        "JavaScript",
        "TypeScript",
        "shadcn/ui",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      groupName: "Mobile",
      skillTitles: ["React Native", "Expo", "Notifications", "Tamagui"],
    },
    {
      groupName: "Other",
      skillTitles: [
        "Gitlab CI/CD",
        "Jenkins",
        "Docker",
        "Playwright",
        "Cypress",
        "Ubuntu Server",
        "SonarQube",
        "JetBrains .NET Tools",
      ],
    },
  ],
  workExperience: [
    {
      current: true,
      company: "SoftwareStudio",
      position: "Full Stack Developer & Development Team Leader",
      time: "June 2021 - Present",
      duties: [
        "Designing and developing a low-code platform tailored to client needs.",
        "Optimizing systems for resource usage and improving developer experience.",
        "Creating iOS and Android applications for the low-code platform.",
        "Integrating various external platforms (e.g., courier APIs) to expand functionality.",
        "Configuring and overseeing CI/CD pipelines for efficient and reliable development workflows.",
        "Leading a small team of developers, including organizing tasks and code reviews.",
      ],
    },
    {
      company: "LKH Intermedia",
      position: "Full Stack Developer",
      time: "June 2019 - March 2021",
      duties: [
        "Developed an internal payment management system for customers and work organization application for internet installers.",
        "Designed and built the LKH Intermedia mobile application (Android) for customer account management.",
        "Developed and maintained the lkhintermedia.pl website with an online customer service portal.",
      ],
    },
  ],
}

export default RESUME_DATA
