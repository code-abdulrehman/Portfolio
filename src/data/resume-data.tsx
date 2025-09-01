
import NSNLogo from "../images/logos/nsn.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { WhatsappIcon } from "@/components/icons/Whatsapp";

function calculateMonthYearDiff(startDateStr: any) {
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

  const match = startDateStr.toLowerCase().match(/(\d+)([a-z]+)\s+(\d{4})/);
  if (!match) return "Invalid date format. Use '2feb 2023'";

  let [_, day, monthStr, year] = match;
  let monthIndex = months.indexOf(monthStr);
  if (monthIndex === -1) return "Invalid month name";

  // Create start date
  let startDate = new Date(parseInt(year), monthIndex, parseInt(day));
  let today = new Date();

  // Calculate difference in months and years
  let totalMonths = (today.getFullYear() - startDate.getFullYear()) * 12 + (today.getMonth() - startDate.getMonth());

  let years = Math.floor(totalMonths / 12);
  let monthsRemaining = totalMonths % 12;
  let monthWord = monthsRemaining === 1 ? "month" : "months";
  let yearWord = years === 1 ? "year" : "years";

  return `${years} ${yearWord} ${monthsRemaining} ${monthWord}`;
}


const incrementedDate = calculateMonthYearDiff("2feb 2023");

export const RESUME_DATA = {
  name: "Abdul Rehman ",
  initials: "AA",
  location: "Hasilpur, Punjab, Pakistan",
  locationLink:
    "https://www.google.com/maps/place/Hasilpur,+Pakistan/@29.6962368,72.5534141,16z/data=!4m15!1m8!3m7!1s0x393c57be4bb51659:0xc707deab03084110!2sHasilpur,+Pakistan!3b1!8m2!3d29.6970451!4d72.5537974!16zL20vMDkyaGg3!3m5!1s0x393c57be4bb51659:0xc707deab03084110!8m2!3d29.6970451!4d72.5537974!16zL20vMDkyaGg3?entry=ttu&g_ep=EgoyMDI1MDMyMy4wIKXMDSoASAFQAw%3D%3D",
  about: "Software Engineer/Frontend Developer focused on ReactJS, VueJS, NextJS, and AI",
  summary:
    `As a front-end developer with over ${incrementedDate}  of experience in web development, skilled in static site generators, ReactJS, and VueJS, I am constantly improving my knowledge and developing professional skills. I stay updated with market trends, learn from my experiences and colleagues, and always strive to be an ethical IT professional with strong qualities.

My future goal is to become a Full-Stack Developer with expertise in AI and Machine Learning technologies, contributing to innovative and impactful projects. I aim to apply my programming skills and technological understanding to create products that generate more opportunities for people and bring significant value to the company.

In the long term, my vision is not limited to becoming a founder or CEO. My focus is on continuous growth, developing products, and scaling to the next level — creating meaningful solutions that empower people and open new possibilities in the tech industry.

`,
  avatarUrl:
    "https://avatars.githubusercontent.com/u/184140412?v=4",
  contact: {
    email: "code.abdulrehman@gmail.com",
    // tel: "+923377916802",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/code-abdulrehman/",
        icon: GitHubIcon,
      },
      {
        name: "Whatsapp",
        url: "https://wa.me/923377916802",
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
            • Develop and fix the application’s defect base on requirements<br/> 
            • Develop responsive web apps.<br/>
            • Bug fixes.<br/>
          </div>
      - Technologies: <br/>
          <div class="ml-5">
            • React, Vue, Next.js, Tailwind, PrimeVue <br/>
            • React(React-hooks), Vue(Vue-router), i18next, Redux(Redux-toolkit), Pinia <br/>
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
            • Grow my skills in the static site.<br/>
            • Explore new technologies.<br/>
            • Social Media Marketing:
            </div>
            - Technologies: <br/>
            <div class="ml-5">
            • HTML, CSS, JavaScript <br/>
            • Facebook ads<br/> 
          </div>
      - Tools control: VSCode, Excel, Meta Ads Manager, etc.
      `,
    },
  ],
  skills: [
    "Html",
    "Css",
    "JavaScript",
    "OpenAI SDK",
    "React/ Vue/ Next.js",
    "Redux/ ReduxToolkit /Pinia",
    "PrimeVue",
    "Tailwind/ Bootstrap/ CSS/ SCSS /LESS",
    "Clerk",
    "Firebase",
  ],
  projects: [
    {
      title: "Sci-Fi Dashboard",
      techStack: [
        "React.js",
        "TailwindCSS",
        "zag-js",
        "gsap",
        "motion",
      ],
      description: "Military-style sci-fi dashboard with dynamic data visuals.",
      keywords: ["sci-fi", "dashboard", "UI", "futuristic", "data visualization"],
      link: {
        label: "Sci-Fi Dashboard",
        href: "https://sci-fi-dashboard.vercel.app/",
      },
    },
    {
  title: "React Chatbot Docs",
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
      title: "Putter Hosting",
      techStack: [
        "Side Project",
        "Putter.js",
        "HTML5",
        "Tailwind",
        "JavaScript",
      ],
      description: "A platform to deploy your website.",
      link: {
        label: "Self Hosting",
        href: "https://puter-hosting-app.vercel.app/",
      },
    },
    {
      title: "E-Bag",
      techStack: [
        "Side Project",
        "React",
        "React-router",
        "HTML5",
        "Tailwind",
      ],
      description: "React-based E-commerce website.",
      link: {
        label: "E-Bag",
        href: "https://e-bag.vercel.app/",
      },
    },
    {
      title: "Github Scroller",
      techStack: [
        "Side Project",
        "React",
        "HTML5",
        "Tailwind",
        "Pagination",
      ],
      description: "A simple GitHub scroller.",
      link: {
        label: "Github Scroller",
        href: "https://github-scroller.vercel.app/",
      },
    },
    {
      title: "ChatAI",
      techStack: [
        "Side Project",
        "Next.js",
        "AI",
        "LLM",
        "Tailwind",
        "Terminal",
      ],
      description: "A chatbot with LLM. With custom API.",
      link: {
        label: "ChatAI",
        href: "https://chatai-ar.vercel.app/",
      },
    },
    {
      title: "Vite AI (Gemini)",
      techStack: [
        "Side Project",
        "Next.js",
        "AI",
        "LLM",
        "Tailwind",
        "Gemini",
      ],
      description: "A chatbot with GEMINI API.",
      link: {
        label: "Vite AI (Gemini)",
        href: "https://vite-ai2.vercel.app/",
      },
    },
     {
      title: "Daily Quotes",
      techStack: [
        "Side Project",
        "Automation",
        "Cron jobs",
        "API",
        "Tailwind",
        "HTML",
      ],
      description: "Quotes have the power to inspire.",
      link: {
        label: "Daily Quotes",
        href: "https://blockquote-flax.vercel.app/",
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
      title: "PGPT",
      techStack: [
        "Agents",
        "AI",
        "React component",
        "Multi-LLM",
        "OpenAI",
      ],
      description: "This is designed to make react components faster.",
      link: {
        label: "PGPT",
        href: "https://p-gpt-bots.vercel.app/",
      },
      condition: {
        status: "In Progress",
        start: "Apr 2025",
        end: "10aug 2025",
        description: "Coming Soon",
      },
    },
  ],
} as const;
