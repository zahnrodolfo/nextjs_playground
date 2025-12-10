export type Link = { label: string; href: string };

export type Experience = {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
  tech?: string[];
};

export type Project = {
  name: string;
  description: string;
  url?: string;
  tech?: string[];
};

export type Education = {
  institution: string;
  degree: string;
  start?: string;
  end?: string;
  details?: string[];
};

export type Certification = {
  name: string;
  issuer?: string;
  year?: string;
  url?: string;
};

export type CV = {
  name: string;
  title: string;
  location?: string;
  email?: string;
  phone?: string;
  links: Link[];
  summary: string[];
  skills: { category: string; items: string[] }[];
  experience: Experience[];
  projects?: Project[];
  education?: Education[];
  certifications?: Certification[];
};

const cv: CV = {
  name: "Rodolfo Zahn",
  title: "Fullstack Software Engineer",
  location: "Valencia, Spain",
  email: "rodolfozahn@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rodolfo-zahn-b23909116/" },
    { label: "GitHub", href: "https://github.com/zahnrodolfo" },
  ],
  summary: [
    "Experienced engineer focused on building reliable web applications with modern frameworks, cloud services, and strong product sense. Passionate about performance, developer experience, and clean architecture.",
  ],
  skills: [
    { category: "Languages", items: ["TypeScript", "JavaScript", "PHP", "Python"] },
    { category: "Frontend", items: ["Angular", "HTML", "CSS", "TailwindCSS", "Storybook", "RxJS", "NgRx"] },
    { category: "Backend", items: ["Nest.js", "Node.js", "REST APIs", "GraphQL", "Laravel"] },
    { category: "Testing", items: ["Cypress", "Jest", "Karma"] },
    { category: "Cloud & DevOps", items: ["Docker", "CI/CD"] },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  ],
  experience: [
    {
      company: "PowerUs",
      role: "Engineering Manager",
      location: "Valencia, Remote",
      start: "Jul 2024",
      end: "Present",
      bullets: [
        "Owned architecture and implementation of PowerUs’s B2C web and mobile platforms with focus on scalability and performance",
        "Transitioned into management role to mentor and develop engineers across multiple seniority levels",
        "Designed and shipped AI-driven features like a CV parser and profile assessment tool that doubled conversion rates (4–5% → 10–11%) for profile completion"
      ],
      tech: ["Angular", "NestJS", "NodeJS", "TypeScript", "MongoDB", "Storybook"]
    },
    {
      company: "PowerUs",
      role: "Tech Lead",
      location: "Berlin, Remote",
      start: "Feb 2023",
      end: "Jun 2024",
      bullets: [
        "Led a small engineering team owning the B2C web application",
        "Mentored and onboarded 5 engineers, supporting career growth and ramp-up",
        "Directed technical strategy and maintained high code quality through reviews and pair programming",
        "Built the company’s first design system using Storybook, unifying UI components and patterns across teams",
        "Developed 'Configurable Funnel', a custom-built library enabling faster experimentation and funnel management",
        "Worked with the marketing team implement a SEO structure to dinamically create over 50.000 pages to display jobs and companies information"
      ],
      tech: ["Angular", "TypeScript", "Storybook", "NodeJS", "MongoDB", "SEO"]
    },
    {
      company: "PowerUs",
      role: "Software Engineer",
      location: "Berlin, Remote",
      start: "Feb 2021",
      end: "Jan 2023",
      bullets: [
        "Joined as one of the first four engineers in a 15-person startup",
        "Contributed to architecture and feature development of B2C, B2B, and internal CRM platforms",
        "Collaborated cross-functionally to deliver scalable and maintainable core product features"
      ],
      tech: ["Angular", "NestJS", "NodeJS", "TypeScript", "MongoDB", "Javascript", "MikroORM"]
    },
    {
      company: "MyHammer",
      role: "Front-End Developer",
      location: "Berlin, Germany",
      start: "May 2019",
      end: "Jan 2021",
      bullets: [
        "Enhanced user acquisition flow by improving registration and payment experiences",
        "Developed internal tool for marketplace pricing management to streamline operations",
        "Collaborated with backend engineers, designers, and product managers on user-focused solutions"
      ],
      tech: ["Angular", "JavaScript", "HTML", "CSS", "Typescript", "Jest", "Cypress"]
    },
    {
      company: "Inatel",
      role: "Front-End Developer",
      location: "Santa Rita do Sapucaí, Brazil",
      start: "Jan 2018",
      end: "Apr 2019",
      bullets: [
        "Participated in Business Support Systems project with Ericsson as Scrum Master, Technical Leader, and Developer",
        "Defined software architecture and led technical alignment meetings with stakeholders",
        "Performed frontend development, code reviews, demos, and retrospectives for a distributed team"
      ],
      tech: ["Angular", "JavaScript", "HTML", "CSS", "Typescript", "Jest", "Cypress", "D3.js"]
    },
    {
      company: "Irricontrol",
      role: "Mobile Developer",
      location: "Itajubá, Brazil",
      start: "Mar 2017",
      end: "Jul 2017",
      bullets: [
        "Developed the early-stage mobile application used by the company during its startup phase"
      ],
      tech: ["Android", "Ionic", "JavaScript"]
    },
    {
      company: "B2ML Sistemas",
      role: "Intern (Mobile Developer)",
      location: "Itajubá, Brazil",
      start: "Mar 2017",
      end: "Jul 2017",
      bullets: [
        "Developed mobile applications using Ionic and native Android"
      ],
      tech: ["Ionic", "Android", "JavaScript"]
    },
    {
      company: "Pandô Apps",
      role: "Intern (Web & Mobile Developer)",
      location: "Itajubá, Brazil",
      start: "Mar 2017",
      end: "Jul 2017",
      bullets: [
        "Worked on SIGAAUTO web application and small mobile applications"
      ],
      tech: ["JavaScript", "HTML", "CSS", "Ionic", "PHP", "MySQL"]
    }
  ],
  education: [
    {
      institution: "Universidade Federal de Itajubá",
      degree: "B.Sc. in Computer Science",
      start: "2013",
      end: "2017"
    },
  ]
};

export default cv;
