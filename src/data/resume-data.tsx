
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
  about: "Frontend Developer focused on ReactJS, VueJS, NextJS, and AI",
  summary: `I’m a frontend developer with over ${incrementedDate} of hands-on experience in web development. 
  I specialize in ReactJS, NextJS, VueJS, and modern UI design while currently expanding my skills in the MERN stack. 
  I enjoy building clean, responsive, and high-performing web applications that deliver great user experiences. 
  My focus is on learning new technologies, improving my code quality, and developing real-world projects that solve practical problems.`,
  
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
          </div>
      - Technologies: <br/>
          <div class="ml-5">
            • React, Vue, Next.js, Live_view, Tailwind, PrimeVue <br/>
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
            • Social Media Marketing:
            </div>
            - Technologies: <br/>
            <div class="ml-5">
            • HTML, CSS, JavaScript, Facebook ads<br/> 
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
    "React/ Vue/ Next.js/ Astro.js",
    "Redux/ ReduxToolkit /Pinia",
    "PrimeVue",
    "Tailwind/ Bootstrap/ CSS/ SCSS /LESS",
    "Clerk",
    "Firebase",
  ],
  projects: [
    {
      title: "AST",
      techStack: [
        "React.js",
        "TailwindCSS",
        "Dashboard",
        "SEO",
        "Vue.js",
      ],
      description: "ASTELECOM is a leading electrical company in Pakistan. ",
      keywords: ["ASTELECOM", "Electrical", "Company", "Pakistan"],
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
      title: "Ledgeron",
      techStack: [
        "Mobile-first",
        "React",
        "PWA",
        "HTML5",
        "Tailwind",
      ],
      description: "Offline-first daily expense recorder.",
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
      title: "Project Archive",
      techStack: [
        "React",
        "Vue",
        "API",
        "Express",
        "Phoenix",
        "DBMS",
        "MERN/PERN",
      ],
      description: "A centralized archive of my side projects and experiments with detailed tech stacks.",
      link: {
        label: "Project Archive",
        href: "https://projects.imabdulrehman.site/",
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
        end: "10mar 2026 ",
        description: "Coming Soon",
      },
    },
  ],
} as const;
