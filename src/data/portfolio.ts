import { IconType } from "react-icons";
import { 
  SiSolana, SiRust, SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, 
  SiPostgresql, SiTailwindcss, SiFirebase, SiCplusplus, SiArduino,
  SiVercel, SiGithub, SiIota, SiGooglecloud, SiFlutter, SiDart, SiVscodium
} from "react-icons/si";

export interface TechSkill {
  name: string;
  icon: IconType;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  github?: string;
  image?: string;
  video?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  location?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  highlights: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
}

export interface AwardItem {
  title: string;
  period: string;
}

export const portfolioData = {
  personal: {
    name: "Oluwasijibomi Fadeyibi",
    email: "ooluwasijibomi2406@gmail.com",
    phone: "+234 901-346-0799",
    github: "https://github.com/davidqwertyuiop",
    linkedin: "https://www.linkedin.com/in/oluwasijibomi-fadeyibi-238743258",
    roles: ["Software Engineer", "Electrical Engineer"],
    cvPath: "/cv/sijibomi-software-cv.pdf"
  },
  software: {
    profileImage: "/profile_software.jpg",
    title: "Full-Stack Developer & Blockchain Engineer",
    description:
      "Full-stack decentralized application architect specialized in Solana, Rust, and high-performance Web3 systems. Expert in software-hardware integration for automation.",
    skills: [
      { name: "Rust", icon: SiRust, color: "#dea584" },
      { name: "Solana", icon: SiSolana, color: "#14F195" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Azure (Fundamentals)", icon: SiVscodium, color: "#0078D4" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Git/GitHub", icon: SiGithub, color: "#FFFFFF" }
    ],
    education: [
      {
        school: "Elizade University, Ilara-Mokin",
        degree: "Bachelor of Engineering (B.Eng.) in Electrical & Electronics Engineering",
        period: "2019 – 2024",
        highlights: [
          "Second Class Upper Honours",
          "Top 10% performer in the department"
        ]
      }
    ],
    certifications: [
      { name: "Microsoft Azure Fundamentals", issuer: "Microsoft" },
      { name: "Rust Programming", issuer: "Cyfrin Updraft" }
    ],
    experience: [
      {
        role: "Blockchain Developer (Solana) & Mobile Engineer",
        company: "Freelance",
        period: "Oct 2023 – Present",
        description: "Built full-stack decentralized applications on Solana using Anchor & Rust. Integrated Next.js frontends with on-chain programs. Developed Flutter apps for IoT/Automation."
      },
      {
        role: "Application Development Intern",
        company: "NNPCL",
        period: "Apr – Sep 2023",
        location: "Abuja, Nigeria",
        description: "Developed web interfaces using HTML & CSS. Assisted in application development and automation projects."
      },
      {
        role: "Networking Department Intern",
        company: "NNPC",
        period: "Aug – Oct 2022",
        location: "Abuja, Nigeria",
        description: "Reconnected data cables for telephony/routing services. Troubleshot and maintained network infrastructure."
      }
    ],
    projects: [
      {
        title: "Full-Stack Token Vesting Platform",
        description: "A production-ready Solana vesting system. Allows projects to lock tokens and investors to claim based on schedules. Features real-time tracking and immutable logic.",
        tags: ["Solana", "Rust", "Anchor", "Next.js"],
        link: "#", // Hosting not yet done
        github: "https://github.com/davidqwertyuiop/token-vesting",
        image: "/projects/vesting.png"
      },
      {
        title: "On-Chain Voting Protocol",
        description: "Secure, transparent voting system on Solana. Implements PDA-based voter validation and anti-double-voting mechanisms.",
        tags: ["Solana", "Anchor", "TypeScript", "Next.js"],
        link: "#",
        github: "https://github.com/davidqwertyuiop/voting-dapp",
        image: "/projects/voting.png"
      },
      {
        title: "NFT Minting & Management",
        description: "Complete infrastructure for Metaplex-standard NFTs. Supports bulk minting, metadata updates, and royalty configuration.",
        tags: ["Metaplex", "NFT", "React", "Web3.js"],
        link: "#",
        github: "https://github.com/davidqwertyuiop/nft",
        image: "/projects/tokens.png"
      },
      {
        title: "SPL Token Suite",
        description: "Unified dashboard for Solana token operations. Simplifies minting, supply controls, and metadata injection for SPL tokens.",
        tags: ["Solana", "SPL", "TypeScript", "Tailwind"],
        link: "#",
        github: "https://github.com/davidqwertyuiop/token-demo",
        image: "/projects/tokens.png"
      },
      {
        title: "CRUD Journal dApp",
        description: "On-chain data storage with Solana & Anchor. An immutable journaling system featuring secure PDA-derived storage.",
        tags: ["Solana", "Anchor", "Rust", "Next.js"],
        link: "#",
        github: "https://github.com/davidqwertyuiop/CRUD-APP",
        image: "/projects/journal.png"
      }
    ]
  },
  electrical: {
    profileImage: "/profile_electrical.jpg",
    title: "Electrical & Control Systems Engineer",
    description:
      "Powering systems with precision. Expertise in High Voltage Distribution, PLC Automation (Ladder Logic), and IoT-integrated control systems.",
    skills: [
      { name: "PLC Programming", icon: SiIota, color: "#991b1b" },
      { name: "Ladder Logic", icon: SiIota, color: "#F7DF1E" },
      { name: "Solar Installation", icon: SiIota, color: "#FFD700" },
      { name: "Embedded Systems", icon: SiArduino, color: "#00979D" },
      { name: "C++ / IoT", icon: SiCplusplus, color: "#00599C" },
      { name: "Electrical Wiring", icon: SiIota, color: "#991b1b" }
    ],
    education: [
      {
        school: "Elizade University, Ilara-Mokin",
        degree: "B.Eng. in Electrical & Electronics Engineering",
        period: "2019 – 2024",
        highlights: [
          "4.01/5.0 CGPA (Second Class Upper Honours)",
          "Top 3% performer in the department"
        ]
      }
    ],
    experience: [
      {
        role: "NYSC Corp Member (Mini Grid Department)",
        company: "REA-NEP (Rural Electrification Agency)",
        period: "April 2025 – April 2026 (Expected)",
        location: "Abuja, Nigeria",
        description: "Evaluated minigrid developers across Nigeria. Conducted technical assessments and site visitations for rural electrification projects, including the UniAbuja 2MW solar farm."
      },
      {
        role: "Electrical Intern",
        company: "IBEDC (MURG Plaza Project)",
        period: "Aug – Oct 2020",
        location: "Abuja, Nigeria",
        description: "Conducted surface wiring, busbar installation, and prepaid meter connection for MURG Plaza. Skilled in Feeder Pillar troubleshooting."
      },
      {
        role: "Electrical Intern",
        company: "Dot Matrix Engineering Ltd",
        period: "July – Aug 2023",
        location: "Abuja, Nigeria",
        description: "Designed control systems using Ladder Logic for PLCs. Developed automatic changeover relay systems and home automation designs."
      },
      {
        role: "Electrical Department Intern",
        company: "NNPC Towers",
        period: "Aug – Oct 2023",
        location: "Abuja, Nigeria",
        description: "Analyzed Tower wiring diagrams, troubleshot power outages, and maintained gas-powered generators providing steady supply."
      }
    ],
    awards: [
      { title: "President, NUESA Elizade Chapter", period: "2023/2024" },
      { title: "President, IEEE Elizade Student Body", period: "2023/2024" },
      { title: "Graduate Member, NSE", period: "2024 - Present" }
    ],
    projects: [
      {
        title: "UniAbuja 2MW Solar Farm Visitation",
        description: "Site evaluation and technical inspection of the 2MW solar farm at the University of Abuja as part of the REA-NEP mini-grid development program.",
        tags: ["Solar Energy", "Mini Grid", "Site Evaluation"],
        link: "#",
        github: undefined,
        image: "/projects/uniabujavisit.jpg",
        video: "/videos/uniabujavisit.mp4"
      },
      {
        title: "Smart Irrigation & IoT Control",
        description: "Hardware-software integrated system using Flutter, Firebase, and sensors for real-time farm monitoring and automated irrigation.",
        tags: ["IoT", "Flutter", "Firebase", "C++"],
        link: "#",
        github: "https://github.com/davidqwertyuiop/smart_irrigation",
        image: "/projects/irrigation_hardware.jpg"
      },
      {
        title: "PLC Energy Management",
        description: "Ladder logic based automation for gas generator monitoring and automatic power supply-solar changeover.",
        tags: ["PLC", "Ladder Logic", "Automation"],
        link: "#",
        github: undefined,
        image: "/projects/plc_hardware.jpg",
        video: "/videos/plc_demo.mp4"
      },
      {
        title: "Commercial Plaza Wiring",
        description: "Surface wiring and load balancing for MURG Plaza. Designed to prevent revenue leakage and grid overloading.",
        tags: ["Power Dist.", "Wiring", "Metering"],
        link: "#",
        github: undefined,
        image: undefined
      },
      {
        title: "NNPC Network Infrastructure",
        description: "Troubleshooting and crimping Cat 6 network cables for telecommunications within the NNPC Towers facility.",
        tags: ["Networking", "Comm Systems", "Infrastructure"],
        link: "#",
        github: undefined,
        image: "/projects/plc.png"
      }
    ]
  }
};
