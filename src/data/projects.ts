import rupenetImg from "@/assets/rupenet.jpg";
import collectiImg from "@/assets/collecti.jpg";
import switsImg from "@/assets/swits.jpg";
import payrupeImg from "@/assets/payrupe-ba.jpg";
import finxImg from "@/assets/finx-ba.jpg";
import finxGoldImg from "@/assets/finxgold-ba.jpg";

export type Project = {
  slug: string;
  title: string;
  type: string;
  tagline: string;
  role: string;
  year: string;
  liveUrl?: string;
  secondaryUrl?: { label: string; href: string };
  image: string;
  beforeAfter?: boolean;
  accent: "cyan" | "violet" | "electric";

  overview: string;
  problem: string;
  challenges: string[];
  research: string;
  decisions: string[];
  learnings: string;

  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "payrupe",
    title: "Enterprise Fintech App",
    type: "FINTECH • MOBILE APP REDESIGN • UX IMPROVEMENT",
    tagline: "A user-centered redesign focused on simplifying financial transactions, improving task efficiency, and enhancing the overall experience for retail agents.",
    role: "UI/UX Designer",
    year: "2026",
    liveUrl: "https://www.rupenet.com/payrupe",
    secondaryUrl: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.solution.rupenetpaymentbox&hl=en_IN",
    },
    image: payrupeImg,
    // beforeAfter: true,
    accent: "electric",
    overview:
      "This project involved redesigning a fintech mobile application used by retail agents to perform digital financial services including BBPS, AEPS, DMT, mobile recharge, and utility payments.As new services were added over time, the application became increasingly complex, making it difficult for agents to quickly access frequently used features. The redesign focused on improving usability, reducing navigation effort, and creating a faster transaction experience for day-to-day financial operations.",
    problem:
      "The application had evolved through multiple feature additions without a unified experience strategy. Critical services were distributed across multiple screens and menus, increasing the number of steps required to complete common tasks.Agents frequently switched between features throughout the day, leading to slower transaction completion, increased cognitive load, and reduced operational efficiency.",
    challenges: [
      "Simplify navigation across multiple financial services while maintaining familiarity for existing users.",
      "Improve transaction speed and accessibility for high-frequency agent workflows.",
      "Build trust and confidence during financial transactions through clearer information hierarchy and transaction visibility.",
    ],
    research:
      "Conducted user interviews and workflow analysis with active retail agents to understand transaction behavior, pain points, and frequently used services. Reviewed transaction journeys across key services including money transfer, bill payments, AEPS, and recharge workflows.Insights were translated into user flows, navigation improvements, and dashboard prioritization strategies.",
    decisions: [
      "Redesigned the home dashboard around the most frequently used financial services to reduce navigation effort.",
      "Introduced a simplified service architecture that groups related transaction types into intuitive categories.",
      "Enhanced transaction visibility through improved balance presentation, activity tracking, and status indicators.",
      "Streamlined onboarding and registration flows to reduce friction and improve first-time user experience.",
    ],
    learnings:
      "The redesign demonstrated that efficiency is often more valuable than additional functionality in transaction-heavy financial applications. Agents prioritize speed, familiarity, and clarity when performing daily operations.By simplifying navigation, surfacing high- priority actions, and reducing unnecessary interaction steps, the application became easier to use without disrupting established user habits.",
    metrics: [
      { label: "User engagement", value: "+30%" },
      { label: "Session Efficiency", value: "+20%" },
      { label: "User friction", value: "−15%" },
    ],
  },
  {
    slug: "collecti",
    title: "Collection Platform",
    type: "SaaS · Web + Mobile",
    tagline: "A Collection Management Platform that helps recovery agents prioritize accounts, streamline follow-ups, and improve collection efficiency without increasing operational workload.",
    role: "UI/UX Designer",
    year: "2026",
    liveUrl: "https://www.rupenet.com/finx-collecti",
    secondaryUrl: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.rupenet.paywithus&hl=en_IN",
    },
    image: collectiImg,
    beforeAfter: false,
    accent: "cyan",
    overview:
      "Finx Collecti is a Collection Management Platform built for financial institutions, lending companies, and recovery teams. The platform provides a complete ecosystem consisting of an Agent Mobile Application, Supervisor Dashboard, and Borrower Management Portal.The product helps organizations manage collection activities, track repayments, prioritize high-risk accounts, monitor recovery performance, and improve operational efficiency through data-driven workflows.",
    problem:
      "Collection teams were managing thousands of borrower accounts using fragmented tools, manual spreadsheets, and disconnected follow-up processes. Supervisors lacked visibility into daily recovery performance, while agents spent significant time identifying which accounts required immediate attention.The result was lower recovery efficiency, delayed follow-ups, and increased operational effort across collection teams.",
    challenges: [
      "Help agents quickly identify high-priority borrower accounts from large collections datasets.",
      "Create a fast and intuitive mobile workflow that supports field agents operating in time-sensitive recovery environments.",
      "Provide supervisors with actionable recovery insights without overwhelming them with excessive dashboards and reports.",
    ],
    research:
      "Conducted stakeholder interviews with collection managers, supervisors, and recovery agents to understand daily workflows and operational bottlenecks.Analyzed collection lifecycle stages including account allocation, borrower follow-ups, payment tracking, escalation management, and recovery reporting. User research findings were translated into journey maps, workflow diagrams, and prioritized product requirements.",
    decisions: [
      "Introduced intelligent account prioritization based on recovery probability, outstanding amount, and repayment behavior.",
      "Designed a mobile-first agent experience with one-handed navigation and quick-access actions for calls, follow-ups, and borrower communication.",
      "Created a supervisor dashboard focused on actionable KPIs, recovery trends, team performance, and daily collection targets.",
      "Implemented a unified design system across web and mobile platforms to ensure consistency and accelerate future product development.",
    ],
    learnings:
      "The project reinforced that collection teams value clarity and prioritization more than feature complexity. By reducing cognitive load and surfacing the most important borrower accounts at the right time, agents were able to make faster decisions and maintain more consistent recovery workflows.The biggest impact came from simplifying task prioritization rather than introducing additional functionality.",
    // metrics: [
    //   { label: "Recovery Efficiency", value: "+35%" },
    //   { label: "Agent Productivity", value: "+22%" },
    //   { label: "Follow-up Delays", value: "−18%" },
    // ],
  },
  {
    slug: "rupenet",
    title: "Fintech Website",
    type: "FINTECH • WEBSITE • LANDING PAGE",
    tagline: "A conversion-focused website designed to communicate financial products, build trust, and generate qualified business inquiries for a fintech platform.",
    role: "UI/UX Designer",
    year: "2026",
    liveUrl: "https://www.rupenet.com/",
    image: rupenetImg,
    beforeAfter: false,
    accent: "electric",
    overview:
      "This project involved designing a modern corporate website for a fintech company offering digital payments, collections, merchant onboarding, and financial technology solutions.The objective was to create a professional online presence that clearly communicates the company’s offerings, establishes credibility, and converts visitors into qualified business leads. The website was designed to serve financial institutions, enterprise clients, merchants, and business partners through a structured, trust-driven user experience.",
    problem:
      "The existing website presented multiple products and services without a clear hierarchy, making it difficult for potential customers to quickly understand the company’s value proposition. Users struggled to identify key offerings, trust indicators, and next- step actions, resulting in lower engagement and missed business opportunities.The challenge was to transform complex fintech services into a clear, conversion - focused digital experience.",
    challenges: [
      "Communicate multiple fintech products and services within a single cohesive user journey.",
      "Build credibility and trust for enterprise clients evaluating financial technology partners.",
      "Increase demo requests and business enquiries without overwhelming visitors with excessive information.",
    ],
    research:
      "Conducted stakeholder discussions to understand business goals, target audiences, and product positioning. Analyzed competitor websites across fintech, payments, and enterprise SaaS sectors to identify common trust patterns, content structures, and conversion strategies. Mapped user journeys for prospective merchants, enterprise clients, and business partners to determine the most effective information architecture and content hierarchy.",
    decisions: [
      "Prioritized business outcomes and customer benefits over technical feature descriptions throughout the website.",
      "Created a simplified navigation structure that allows visitors to discover products, services, and company information with minimal effort.",
      "Introduced trust-building elements including compliance highlights, business credentials, security messaging, and partner-focused content.",
      "Designed modular content sections and reusable UI components to support future scalability and content expansion.",
    ],
    learnings:
      "Designing for fintech audiences requires balancing credibility, clarity, and conversion. Users make decisions quickly based on trust signals, product understanding, and perceived business value.The project demonstrated that simplifying complex service offerings and prioritizing customer outcomes creates a stronger user experience than presenting extensive technical information.",
    metrics: [
      { label: "User Engagement", value: "+15%" },
      { label: "Qualified Enquiries", value: "+22%" },
      { label: "Value Proposition Clarity", value: "<8s" },
    ],
  },
  {
    slug: "swits-digital",
    title: "Corporate IT Website",
    type: "ENTERPRISE • WEBSITE • LANDING PAGE",
    tagline: "A trust-focused corporate website designed to communicate enterprise capabilities, showcase expertise, and generate qualified business enquiries.",
    role: "UI/UX Designer",
    year: "2024",
    liveUrl: "https://www.smartworkitservices.com/services",
    image: switsImg,
    beforeAfter: false,
    accent: "violet",
    overview:
      "This project involved designing a modern corporate website for an IT services company offering software development, enterprise solutions, digital transformation, and technology consulting services.The objective was to create a professional digital presence that clearly communicates service offerings, strengthens credibility, and helps prospective clients understand the company’s expertise through a structured and trust- driven user experience.",
    problem:
      "The existing website contained multiple service offerings spread across disconnected pages, making it difficult for potential clients to understand the company’s capabilities and business value.Important trust signals such as project experience, expertise, and service strengths were not clearly communicated, resulting in lower engagement and missed lead-generation opportunities.",
    challenges: [
      "Organize multiple IT services into a simple and intuitive information architecture.",
      "Build credibility and trust for enterprise decision-makers evaluating technology partners.",
      "Present technical expertise and service capabilities without overwhelming visitors with excessive information.",
    ],
    research:
      "Conducted stakeholder discussions to understand business goals, target customers, and service positioning. Reviewed competitor websites across enterprise technology, consulting, and digital transformation industries to identify effective content structures and trust-building patterns. Mapped user journeys for business owners, enterprise buyers, and decision- makers to establish a clear content hierarchy and navigation framework.",
    decisions: [
      "Simplified the navigation structure by grouping services into clearly defined categories that improve discoverability and reduce cognitive load.",
      "Prioritized trust-building content including company expertise, service capabilities, project highlights, and client-focused messaging.",
      "Created modular page sections and reusable UI components to support scalability and future content expansion.",
      "Applied a clean enterprise-focused visual language that balances professionalism, readability, and modern design aesthetics.",
    ],
    learnings:
      "Enterprise audiences prioritize clarity, credibility, and business outcomes over visual complexity. Simplifying service communication and strengthening trust signals had a greater impact on engagement than adding additional content or design elements.The project reinforced the importance of presenting expertise through clear messaging, structured information architecture, and user- focused storytelling.",
    metrics: [
      { label: "Inbound leads", value: "+20%" },
      { label: "Average Session Duration", value: "+1m 12s" },
      { label: "Pages Per visit", value: "2.4×" },
    ],
  },
  {
    slug: "finx",
    title: "Digital Payments Mobile App",
    type: "FINTECH • MOBILE APP • DIGITAL PAYMENTS",
    tagline: "A consumer fintech application designed for money transfers, bill payments, wallet services, and everyday digital transactions. ",
    role: "UI/UX Designer",
    year: "2026",
    liveUrl: "https://www.rupenet.com/finx",
    secondaryUrl: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.rupenet.payrupe&hl=en_IN",
    },
    image: finxImg,
    // beforeAfter: true,
    accent: "cyan",
    overview:
      "This project involved designing a consumer fintech mobile application that enables users to perform digital payments, money transfers, bill payments, mobile recharges, wallet transactions, and card-based payments from a single platform.The goal was to simplify everyday financial activities by providing faster access to frequently used services, improving transaction visibility, and creating a seamless digital payments experience similar to leading consumer finance applications.",
    problem:
      "As additional financial services were introduced, the application became increasingly feature-heavy, making it difficult for users to quickly access their most important actions. Core tasks such as checking balances, sending money, paying bills, and accessing payment services required unnecessary navigation, reducing efficiency and negatively impacting overall user experience.",
    challenges: [
      "Improve access to high-frequency financial actions without overwhelming users with excessive navigation options.",
      "Increase discoverability of wallet, payments, and value-added financial services within a growing ecosystem.",
      "Create a familiar and intuitive experience that encourages repeated usage and long-term engagement.",
    ],
    research:
      "Conducted user journey analysis, usability reviews, and workflow evaluations focused on common financial activities including money transfer, bill payments, wallet management, and transaction tracking.Studied interaction patterns used by leading consumer fintech applications to identify opportunities for improving navigation, service discovery, and transaction efficiency.",
    decisions: [
      "Prioritized account balance, recent activity, and primary payment actions on the home screen to reduce interaction effort.",
      "Introduced a simplified navigation structure that groups related financial services into intuitive categories.",
      "Enhanced service discoverability through dedicated shortcuts, quick actions, and contextual recommendations.",
      "Created a consistent visual hierarchy across the application to improve readability, trust, and transaction confidence.",
    ],
    learnings:
      "Consumer fintech users prioritize speed, familiarity, and confidence when performing financial transactions. Simplifying navigation and surfacing the most relevant actions had a greater impact on usability than introducing additional features. The project reinforced the importance of reducing friction around everyday financial tasks while maintaining visibility of the broader product ecosystem.",
    // metrics: [
    //   { label: "User Engagement", value: "+45%" },
    //   { label: "User Retention", value: "+35%" },
    //   { label: "Feature Discoverability", value: "+50%" },
    // ],
  },
  {
    slug: "finx-gold",
    title: "Digi Gold Investment Platform",
    type: "Investing • GoldSaving • Web & Mobile",
    tagline: "A fintech platform that connects gold merchants and customers through digital gold savings and purchasing experiences.",
    role: "UI/UX Designer",
    year: "2026",
    liveUrl: "https://play.google.com/store/apps/details?id=com.rupenet.finx_gold&hl=en_IN",
    secondaryUrl: {
      label: "Google Play",
      href: "https://play.google.com/store/apps/details?id=com.rupenet.finx_gold&hl=en_IN",
    },
    image: finxGoldImg,
    // beforeAfter: true,
    accent: "violet",
    overview:
      "This project involved designing a digital gold investment platform that enables customers to buy, save, accumulate, and invest in gold directly through a mobile-first experience.The platform acts as a bridge between gold merchants and consumers, allowing users to start small investments, create gold savings plans, track portfolio growth, and eventually convert their accumulated digital gold into jewellery purchases or physical gold ownership.The goal was to make gold investing more accessible, transparent, and trustworthy while helping gold businesses expand their customer reach through digital channels.",
    problem:
      "Traditional gold purchasing experiences often require customers to visit physical stores, while digital investment platforms frequently struggle to build trust among first-time investors.Customers were hesitant to invest due to concerns around gold purity, storage, security, and ownership transparency. Gold merchants also lacked effective digital channels to engage customers beyond in-store purchases. The challenge was to create a platform that simplifies digital gold investing while establishing credibility and encouraging long-term customer participation.",
    challenges: [
      "Communicate gold ownership, purity, storage, and security information in a simple and trustworthy manner.",
      "Reduce hesitation during gold purchases and recurring investment journeys.",
      "Create a seamless experience that supports both one-time purchases and long-term gold savings plans.",
    ],
    research:
      "Conducted user interviews with potential investors, jewellery customers, and first-time digital gold buyers to understand concerns around trust, ownership, and investment behavior. Reviewed leading gold investment, wealth management, and SIP platforms to identify successful onboarding patterns, trust-building mechanisms, and investment workflows. Mapped customer journeys covering gold discovery, purchase, SIP creation, portfolio tracking, and gold redemption processes.",
    decisions: [
      "Prioritized transparency by prominently displaying gold purity, secure storage details, ownership information, and real-time gold pricing.",
      "Simplified investment journeys by reducing purchase friction and creating clear step-by-step gold buying workflows.",
      "Designed intuitive SIP experiences that encourage recurring investments through simple goal-based savings plans.",
      "Created portfolio dashboards that help users track investments, accumulated gold value, and long-term financial growth.",
    ],
    learnings:
      "Trust plays a critical role in financial and investment products. Users are more likely to invest when ownership, security, pricing, and redemption processes are clearly communicated throughout the experience.The project demonstrated that transparency and simplicity have a greater impact on investment adoption than adding advanced financial features.Building confidence at every stage of the journey was key to increasing user participation and long- term engagement.",
  //   metrics: [
  //   { label: "User Engagement", value: "+55%" },
  //   { label: "Task Completion", value: "+32%" },
  //   { label: "Investment Conversion", value: "+28%" },
  // ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
