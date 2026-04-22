export const site = {
  name: "Prajwal Basnet",
  fullName: "Prajwal Bikram Basnet",
  role: "Full-stack & Cloud Engineer",
  tagline:
    "I design and build software systems that stay reliable in production, clean as they scale, and safe to change — from architecture through to deployment.",
  bio: "Software engineer based in Kathmandu. I build full-stack products and platform services across TypeScript/Node and Python — designing systems that are maintainable in the long run and resilient in production. I currently work at SkillsDB on platform software, and previously led backend, data, and DevOps work at Series Code.",
  url: "https://www.prajwalbikrambasnet.com.np",
  email: "prajwal.basnet.asdf@gmail.com",
  location: "Kathmandu, Nepal",
  socials: {
    github: "https://github.com/prajwalbasnet4400",
    linkedin: "https://www.linkedin.com/in/prajwalbasnet4400/",
    email: "mailto:prajwal.basnet.asdf@gmail.com",
  },
  web3formsKey: "ac386ad7-0e7b-42d0-ad69-4a663d051259",
} as const;

export const stats = [
  { k: "4+", v: "years engineering in production" },
  { k: "AWS", v: "cloud infrastructure & DevOps" },
  { k: "0", v: "downtime deploys, by design" },
] as const;

export const skills = [
  {
    name: "TypeScript & Node.js",
    icon: "code",
    blurb:
      "API and service work in modern TypeScript — REST, GraphQL, async workers, and end-to-end type safety.",
  },
  {
    name: "Next.js & React",
    icon: "layers",
    blurb:
      "Production Next.js apps with the App Router, server components, accessibility, and real attention to polish.",
  },
  {
    name: "NestJS",
    icon: "sparkles",
    blurb:
      "Modular services with DI, typed boundaries, and layered architecture that scales beyond the MVP.",
  },
  {
    name: "Python & Django",
    icon: "python",
    blurb:
      "API design, ORM modeling, async tasks, auth, and ETL/background workers built to last.",
  },
  {
    name: "AWS & Cloud",
    icon: "cloud",
    blurb:
      "EC2, RDS, S3, Lambda, VPC, IAM — provisioning, networking, and cost-aware topology.",
  },
  {
    name: "DevOps & CI/CD",
    icon: "git",
    blurb:
      "Zero-downtime releases, blue/green rollouts, automated pipelines, infra as code, and observability.",
  },
  {
    name: "Databases",
    icon: "database",
    blurb:
      "PostgreSQL schema design, query tuning, and safe migrations on live systems.",
  },
  {
    name: "Docker & Containers",
    icon: "docker",
    blurb:
      "Multi-stage builds, container orchestration, and local/prod parity via Compose.",
  },
] as const;

export const experiences = [
  {
    company: "SkillsDB",
    role: "Software Engineer",
    period: "2024 — Present",
    location: "Remote",
    summary:
      "Building platform software across the stack — backend services, GraphQL APIs, and product surfaces — with an emphasis on clean architecture and reliable cloud operations.",
    bullets: [
      "Shipping full-stack features across Next.js, NestJS, and GraphQL with a focus on correctness and long-term maintainability.",
      "Contributing to system-level decisions around data modeling, API design, service boundaries, and deployment pipelines.",
    ],
  },
  {
    company: "Series Code",
    role: "Python Developer",
    period: "Apr 2022 — Jul 2024",
    location: "Remote",
    summary:
      "Owned backend, data, and DevOps work across multiple Python/Flask applications serving production workloads.",
    bullets: [
      "Designed and maintained Python/Flask ETL services generating scheduled statistics and reports.",
      "Drove extensive DevOps work on AWS to reach zero-downtime deployments with automated rollouts.",
      "Built scraping and web-automation systems using BeautifulSoup and Selenium for large-scale data ingestion.",
      "Integrated centralized logging and error management across multiple services for observability.",
    ],
  },
  {
    company: "Upwork",
    role: "Freelance Developer",
    period: "Feb 2021 — Apr 2021",
    location: "Remote",
    summary:
      "Delivered two end-to-end web products for independent clients, from data modeling through deployment.",
    bullets: [
      "Built a complete e-commerce platform with social authentication, transactional email, and product recommendations.",
      "Developed a statistics panel integrating third-party data sources and Khalti payments for premium subscriptions.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Academy Gaming Stats Panel",
    description:
      "Live statistics platform for CS:GO game servers. Real-time server queries, historical match data, and Khalti-integrated premium subscriptions for the community.",
    image: "/images/pic02.png",
    tags: ["Django", "Real-time", "Khalti"],
  },
  {
    title: "CS:GO Skin Marketplace",
    description:
      "Marketplace for trading and selling CS:GO skins, integrated with Steam APIs.",
    image: "/images/pic03.png",
    tags: ["Marketplace", "Steam API"],
  },
] as const;
