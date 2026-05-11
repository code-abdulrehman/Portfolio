
import NSNLogo from "../images/logos/nsn.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { WhatsappIcon } from "@/components/icons/Whatsapp";
import { CalendarIcon } from "lucide-react";

function calculateMonthYearDiff(startDateStr: string) {
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

  const match = startDateStr.toLowerCase().match(/(\d+)([a-z]+)\s+(\d{4})/);
  if (!match) return "Invalid date format. Use '2feb 2023'";

  const [, day, monthStr, year] = match;
  const monthIndex = months.indexOf(monthStr);
  if (monthIndex === -1) return "Invalid month name";

  // Create start date
  const startDate = new Date(parseInt(year, 10), monthIndex, parseInt(day, 10));
  const today = new Date();

  // Calculate difference in months and years
  const totalMonths =
    (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const monthsRemaining = totalMonths % 12;
  const monthWord = monthsRemaining === 1 ? "month" : "months";
  const yearWord = years === 1 ? "year" : "years";

  return `${years} ${yearWord} ${monthsRemaining} ${monthWord}`;
}


const incrementedDate = calculateMonthYearDiff("2feb 2023");

export const RESUME_DATA = {
  name: "Abdul Rehman ",
  initials: "AA",
  location: "Hasilpur, Punjab, Pakistan",
  locationLink:
    "https://www.google.com/maps/place/Hasilpur,+Pakistan/@29.6962368,72.5534141,16z/data=!4m15!1m8!3m7!1s0x393c57be4bb51659:0xc707deab03084110!2sHasilpur,+Pakistan!3b1!8m2!3d29.6970451!4d72.5537974!16zL20vMDkyaGg3!3m5!1s0x393c57be4bb51659:0xc707deab03084110!8m2!3d29.6970451!4d72.5537974!16zL20vMDkyaGg3?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D",
  about: "Frontend + Full-stack Engineer building fast SaaS & AI-powered web apps",
  summary: `Frontend Engineer with ${incrementedDate} of hands-on experience shipping modern web products.
I build responsive, SEO-friendly interfaces with React, Next.js and Vue, and I care about performance, accessibility, and clean design systems.
I also build full-stack features with Node/Express and Phoenix LiveView, working with databases and APIs.
My mindset is systems-first (reliability, clarity, and scalable architecture) and I’m growing into product ownership: understand the problem, propose the solution, and deliver end-to-end.`,
  avatarUrl:
    "https://avatars.githubusercontent.com/u/184140412?v=4",
  contact: {
    email: "code.abdulrehman+resume@gmail.com",
    // tel: "+923377916802",
    social: [
      {
        name: "Calendly",
        url: "https://calendly.com/abdulrehman62/30minthis",
        icon: CalendarIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/code-abdulrehman/",
        icon: GitHubIcon,
      },
      {
        name: "Whatsapp",
        url: "https://wa.me/923238766737",
        icon: WhatsappIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/abdulrehman62/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Hasilpur Science College",
      degree: "Intermediate, Computer Science",
      start: "Mar. 2024",
      end: "Present",
    },
    {
      school: "Govt. high School, Hasilpur",
      degree: "Matric, Mathematics and Computer Science",
      start: "Aug. 2022",
      end: "Mar. 2024",
    },
  ],
  work: [
    {
      company: "Dycoders",
      link: "https://www.dycoders.com/",
      badges: ["Full-time"],
      title: "Frontend Engineer",
      logo: NSNLogo,
      start: "Mar. 2024",
      end: "Present",
      description: `
      - Team size: 8+<br/>
      - Responsibilities:<br/>
          <div class="ml-5">
            • Build and ship UI features based on requirements and user feedback<br/>
            • Fix bugs, improve UX flows, and maintain reusable components<br/>
            • Collaborate with design/product to estimate work and deliver iteratively<br/>
          </div>
      - Technologies: <br/>
          <div class="ml-5">
            • React, Vue, Next.js, LiveView, Tailwind, PrimeVue <br/>
          </div>
      - Tools control: Git, Postman, Jira, Figma, VSCode, Cursor, Insomnia, etc.
      `,
    },
    {
      company: "Self Employed",
      link: "https://www.dycoders.com/",
      badges: ["Full-time"],
      title: "Frontend Web Developer",
      logo: NSNLogo,
      start: "Feb. 2023",
      end: "Mar. 2024",
      description: `
      - Team size: 1<br/>
      - Responsibilities:<br/>
          <div class="ml-5">
            • Built landing pages and small business websites (mobile-first, SEO basics)<br/>
            • Social media + marketing support (Meta Ads) for outreach and lead generation<br/>
            </div>
            - Technologies: <br/>
            <div class="ml-5">
            • HTML, CSS, JavaScript, Facebook ads<br/> 
          </div>
      - Tools control: VSCode, Excel, Meta Ads Manager, etc.
      `,
    },
  ],
  stats: {
    period: "Feb–May 2026",
    totalRequests: 2415,
    topRegions: [
      { region: "Washington, D.C., USA", code: "iad1", requests: 1126, share: "46.6%" },
      { region: "Frankfurt, Germany", code: "fra1", requests: 220, share: "9.1%" },
      { region: "Mumbai, India", code: "bom1", requests: 212, share: "8.8%" },
      { region: "San Francisco, USA", code: "sfo1", requests: 186, share: "7.7%" },
      { region: "Singapore", code: "sin1", requests: 179, share: "7.4%" },
    ],
  },
  certifications: [
    {
      name: "Y Combinator - Working as a Software Engineer at a Start Up Job Simulation",
      issuer: "Forage",
      issued: "May 2026",
      credentialId: "ddnYP33Yp6FiS2YnP",
      bullets: [
        "Gained hands-on experience simulating real-world software engineering tasks in a startup environment, including problem-solving, building features, and adapting to fast-paced development cycles.",
      ],
    },
    {
      name: "Skyscanner - Front-End Software Engineering Job Simulation",
      issuer: "Forage",
      issued: "May 2026",
      credentialId: "Qfu43W5EqtydBFXDz",
      bullets: [
        "Completed a job simulation where I built a web application using React as a front-end engineer at Skyscanner.",
        "Learned about the Skyscanner's frontend development process and best practices.",
      ],
    },
    {
      name: "Deloitte Australia Technology Job Simulation (Forage)",
      issuer: "Forage",
      issued: "May 2026",
      credentialId: "kxdjm9AXDCa5WyG6f",
      bullets: [
        "Completed a job simulation involving development and coding",
        "Wrote a proposal for creating a dashboard",
      ],
    },
    {
      name: "Claude 101",
      issuer: "Anthropic Education",
      issued: "Apr 2026",
      credentialId: "rq3hsky7a4dn",
      bullets: ["Learned Claude fundamentals and prompting patterns", "Applied LLMs to real coding workflows"],
    },
    {
      name: "Claude Code in Action",
      issuer: "Anthropic Education",
      issued: "Apr 2026",
      credentialId: "jr9feecw6pc3",
      bullets: ["Practiced agent-style coding workflows", "Improved debugging and refactoring with AI assistance"],
    },
    {
      name: "Claude Code 101",
      issuer: "Anthropic Education",
      issued: "Apr 2026",
      credentialId: "jr9feecw6pc3",
      bullets: ["Learned Claude Code basics for daily development", "Focused on safe, iterative changes and verification"],
    },
    {
      name: "Effective Leadership",
      issuer: "HP LIFE",
      issued: "Feb 2026",
      credentialId: "343cbf68-dc7e-478e-92df-b8e538eee0a3",
      bullets: ["Built leadership basics: communication, ownership, accountability", "Improved collaboration and decision-making"],
    },
    {
      name: "Introduction to Generative AI",
      issuer: "AWS Training Online",
      issued: "Jan 2026",
      bullets: ["Learned GenAI concepts, use cases, and limitations", "Explored practical applications for product teams"],
    },
    {
      name: "React Native (Beginner)",
      issuer: "MindLuster",
      issued: "Dec 2025",
      credentialId: "17c8f9a0",
      bullets: ["Built basic mobile UI screens and navigation patterns", "Learned core React Native components and layout"],
    },
    {
      name: "Critical Thinking",
      issuer: "GCF Global Learning",
      issued: "Jul 2025",
      credentialId: "cXyzsBEdTmu3JZXF",
      bullets: ["Strengthened problem framing and decision-making", "Improved reasoning for product/engineering trade-offs"],
    },
    {
      name: "Web Development Tools Essentials",
      issuer: "MindLuster",
      issued: "Mar 2025",
      credentialId: "6682db53",
      bullets: ["Learned modern dev tooling and workflows", "Improved productivity with IDE + debugging basics"],
    },
    {
      name: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      issued: "Mar 2025",
      bullets: ["Strengthened React ecosystem fundamentals", "Practiced building UI with modern tooling and CSS utilities"],
    },
    {
      name: "Introduction to Microsoft Excel",
      issuer: "Coursera",
      issued: "Feb 2024",
      credentialId: "Q2UWNVH2DVN8",
      bullets: ["Worked with spreadsheets for reporting and data organization", "Learned formulas, formatting, and basic analysis"],
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      issued: "Oct 2023",
      bullets: ["Built responsive layouts with HTML/CSS", "Learned accessibility basics and mobile-first design"],
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Vue",
    "Tailwind CSS",
    "PrimeVue",
    "Redux Toolkit / Pinia",
    "Node.js",
    "Express",
    "REST APIs",
    "PostgreSQL",
    "MongoDB",
    "Prisma (basic)",
    "Phoenix LiveView",
    "Ecto (basic)",
    "Auth (OAuth, JWT)",
    "Firebase",
    "Clerk",
    "Vercel",
    "Docker (basic)",
    "Git & GitHub",
    "Postman / Insomnia",
  ],
  projects: [
    {
      title: "40+ Projects",
      techStack: ["Portfolio", "Catalog", "Links"],
      description: "A complete catalog of my projects (company + personal) in one place.",
      link: {
        label: "Open projects sheet",
        href: "https://docs.google.com/spreadsheets/d/1BEQc6yUOHxgZRULBS-7Qg4mZnge5ylxdhpsgHArHTIY/edit?gid=0#gid=0",
      },
    },
    {
      title: "App Planner",
      techStack: ["Elixir", "LiveView", "Tailwind", "Product",],
      description: "App planning & product task tracking workspace built with LiveView.",
      link: {
        label: "App Planner",
        href: "https://app-planner.gigalixirapp.com/",
      },
    },
    {
      title: "AST",
      techStack: [
        "React.js",
        "TailwindCSS",
        "Dashboard",
        "SEO",
        "Vue.js",
      ],
      description: "ASTELECOM is a leading electronics company. ",
      keywords: ["ASTELECOM", "Electronics", "Company", "Pakistan"],
      link: {
        label: "ASTELECOM",
        href: "https://astelecom.store/",
      },
    },
     {
      title: "Playbacks",
      techStack: [
        "React.js",
        "TailwindCSS",
        "AI",
        "Rich IDE's",
      ],
      description: "Record and replay coding sessions with AI insights for learning and debugging.",
      keywords: ["Ai", "EduTech", "Playbacks", "Coding"],
      link: {
        label: "Playbacks",
        href: "https://playbacks.imabdulrehman.site/",
      },
    },
    {
      title: "Sci-Fi Dashboard",
      techStack: [
        "React.js",
        "TailwindCSS",
        "zag-js",
        "gsap",
        "motion",
      ],
      description: "Military-style sci-fi dashboard with dynamic data visuals. ",
      keywords: ["sci-fi", "dashboard", "UI", "futuristic", "data visualization"],
      link: {
        label: "Sci-Fi Dashboard",
        href: "https://sci-fi-dashboard.vercel.app/",
      },
    },
    {
  title: "Chatbot Documentation",
  techStack: [
    "VuePress",
    "Markdown",
    "OpenAI",
    "Tailwind CSS",
  ],
  description: "Build React chatbots with OpenAI — documented with VuePress.",
      keywords: ["vuepress", "scss", "markdown", "docs", "vercel"],
  link: {
    label: "React Chatbot Docs",
    href: "https://rcvp.vercel.app/",
  },
},

    {
      title: "Thoggo",
      techStack: [
        "Astro.js",
        "React.js",
        "Gemini",
        "Tailwind",
      ],
      description: "A simple and modern blogging platform.",
      link: {
        label: "Thoggo",
        href: "https://thoggo.vercel.app/",
      },
    }, 
    {
      title: "SoundCloud",
      techStack: [
        "Audio player",
        "react",
        "uploads",
        "Tailwind",
        "Themes",
      ],
      description: "A multi-theme audio player with uploads.",
      link: {
        label: "SoundCloud",
        href: "https://sound-cloud-01.vercel.app/",
      },
    },
    {
      title: "Ledgeron",
      techStack: [
        "Mobile-first",
        "React",
        "PWA",
        "HTML5",
        "Tailwind",
      ],
      description: "Offline-first daily expense recorder. PWA built with React, Vite & Tailwind.",
      link: {
        label: "Ledgeron",
        href: "https://ledgeron.imabdulrehman.site/",
      },
    },
    {
      title: "PPost",
      techStack: [
        "React",
        "Canvas",
        "AI",
        "Backend",
      ],
      description: "Design social media and marketing graphics effortlessly.",
      link: {
        label: "PPost",
        href: "https://ppost.vercel.app/app",
      },
    },
    {
      title: "Putter Hosting",
      techStack: [
        "Putter.js",
        "HTML5",
        "Tailwind",
        "JavaScript",
      ],
      description: "A platform to deploy your website Static website hosting with Putter.js.",
      link: {
        label: "Putter Hosting",
        href: "https://puter-hosting-app.vercel.app/",
      },
    },
    {
      title: "TeleClinic",
      techStack: [
        "Agents",
        "AI",
        "React",
        "Real-time",
        "Express",
      ],
      description: "An AI-powered telemedicine platform for real-time doctor consultations.",
      link: {
        label: "TeleClinic",
        href: "https://teleClinic.imabdulrehman.site",
      },
      condition: {
        status: "In Progress",
        start: "Dec 2025",
        end: "8aug 2026",
        description: "Launching soon ",
      },
    },
  ],
} as const;
