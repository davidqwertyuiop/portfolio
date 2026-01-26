import { 
  SiSolana, SiRust, SiTypescript, SiNextdotjs, SiReact, SiNodedotjs, 
  SiPostgresql, SiTailwindcss, SiFirebase, SiCplusplus, SiArduino,
  SiVercel, SiGithub, SiIota
} from "react-icons/si";

export const portfolioData = {
  personal: {
    name: "Sijibomi Fadeyibi",
    email: "sijibomi@example.com", 
    phone: "+1 234 567 890",
    github: "https://github.com/davidqwertyuiop",
    linkedin: "https://www.linkedin.com/in/sijibomi-fadeyibi/",
    roles: ["Software Engineer", "Electrical Engineer"],
    cvPath: "/sijibomi-cv.pdf"
  },
  software: {
    title: "Lead Software & Blockchain Engineer",
    description:
      "Architecting high-performance decentralized systems. Expert in Solana Core, Rust programs, and full-stack Web3 integration with a focus on security and scalability.",
    skills: [
      { name: "Rust", icon: SiRust, color: "#dea584" },
      { name: "Solana", icon: SiSolana, color: "#14F195" },
      { name: "Anchor", icon: SiSolana, color: "#3B82F6" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Metaplex", icon: SiSolana, color: "#FF5252" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" }
    ],
    experience: [
      {
        role: "Senior Blockchain Developer",
        company: "Independent / Freelance",
        period: "2023 - Present",
        description:
          "Designing complex on-chain logic for Solana protocols. Specialized in PDA-based state management, instruction optimization, and Cross-Program Invocations (CPI)."
      },
      {
        role: "Full Stack Developer",
        company: "Open Source Contributor",
        period: "2021 - 2023",
        description: "Contributed to various Web3 tooling and DeFi interfaces, improving UX and transaction efficiency."
      }
    ],
    projects: [
      {
        title: "On-Chain Journal Protocol",
        description:
          "An immutable journaling system on Solana. Built with Anchor, featuring secure PDA-derived storage and localized on-chain data retrieval.",
        tags: ["Solana", "Rust", "Anchor", "Next.js"],
        link: "https://journal-rho.vercel.app/",
        github: "https://github.com/davidqwertyuiop/journal-dapp",
      },
      {
        title: "Advanced SPL Token Manager",
        description:
          "A comprehensive suite for Solana token operations. Supports minting, authority delegation, and metadata management with a focus on ease of use.",
        tags: ["Solana", "SPL Token", "TypeScript", "Tailwind"],
        link: "https://spl-token-manager.vercel.app/",
        github: "https://github.com/davidqwertyuiop/spl-token-manager",
      },
      {
        title: "NFT Minting Infrastructure",
        description:
          "Built using Metaplex standards. Features a custom dashboard for real-time minting, royalty configuration, and collection verification.",
        tags: ["Metaplex", "NFT", "React", "Web3.js"],
        link: "https://nft-minter-eta.vercel.app/",
        github: "https://github.com/davidqwertyuiop/nft-minter",
      },
      {
        title: "Decentralized Voting Engine",
        description:
          "A secure, transparent voting application. Implements robust PDA structures to prevent double-voting and ensure cryptographic integrity.",
        tags: ["Rust", "Anchor", "Solana-Wallet-Adapter"],
        link: "https://voting-dapp-green.vercel.app/",
        github: "https://github.com/davidqwertyuiop/voting-dapp",
      },
    ],
  },
  electrical: {
    title: "Senior Electrical & Control Systems Engineer",
    description:
      "Designing the future of industrial automation. Specialist in High Voltage power distribution, PLC-based control logic, and IoT-integrated industrial monitoring.",
    skills: [
      { name: "PLC Programming", icon: SiIota, color: "#991b1b" },
      { name: "Ladder Logic", icon: SiIota, color: "#F7DF1E" },
      { name: "IoT Systems", icon: SiIota, color: "#991b1b" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Embedded Systems", icon: SiArduino, color: "#00979D" },
      { name: "Firebase IoT", icon: SiFirebase, color: "#FFCA28" },
      { name: "AutoCAD Electrical", icon: SiGithub, color: "#FFFFFF" }, 
      { name: "High Voltage Dist.", icon: SiIota, color: "#FFD700" }
    ],
    experience: [
      {
        role: "Electrical Systems Engineer",
        company: "NNPC (Industrial Placement)",
        period: "2022",
        description:
          "Oversaw critical electrical infrastructure maintenance and optimized network troubleshooting protocols for petroleum refinery automation."
      },
      {
        role: "Electrical Installation Lead",
        company: "Infrastructure Projects",
        period: "2020 - 2021",
        description: "Managed full-scale electrical wiring and load balancing for commercial complexes, ensuring compliance with international safety standards."
      }
    ],
    projects: [
      {
        title: "Multilingual Smart Irrigation IoT",
        description:
          "A global-ready irrigation solution. Integrates soil sensors with Firebase for real-time monitoring and multilingual voice alerts via mobile application.",
        tags: ["IoT", "C++", "Firebase", "Sensors"],
        link: "#",
        github: undefined,
      },
      {
        title: "Industrial PLC Automation Suite",
        description:
          "Custom Ladder Logic design for a manufacturing plant. Optimized production speed by 25% through refined control loops and sensor feedback.",
        tags: ["PLC", "Ladder Logic", "Automation"],
        link: "#",
        github: undefined,
      },
      {
        title: "Commercial Load Management System",
        description:
          "Engineered the electrical backbone for MURG Plaza. Implemented advanced load balancing to prevent grid overloads and local outages.",
        tags: ["Power Engineering", "AutoCAD", "Safety"],
        link: "#",
        github: undefined,
      },
      {
        title: "Refinery Network Infrastructure",
        description:
          "Diagnostic and maintenance work on NNPC's telecommunications and low-voltage control circuits, improving system uptime significantly.",
        tags: ["Industrial Networking", "Troubleshooting", "NNPC"],
        link: "#",
        github: undefined,
      },
    ],
  },
};
