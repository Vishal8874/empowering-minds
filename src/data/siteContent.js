import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Compass,
  GraduationCap,
  Handshake,
  HeartHandshake,
  Lightbulb,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";

export const navLinks = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Programs", to: "/programs" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
];

export const trustedPartners = [
  "Future Leaders Institute",
  "Northstar Campus Network",
  "Catalyst HR Forum",
  "Apex Education Group",
  "Thrive Corporate Academy",
  "BridgePoint Learning",
];

export const trainerProfile = {
  name: "Dr. Ritu Sharma",
  role: "Founder, Trainer & Human Capital Strategist",
  image:
    "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  intro:
    "With two decades of hands-on corporate and institutional experience, Dr. Ritu Sharma helps leaders, faculty, students, and people teams move from potential to practical transformation.",
  bio: "Her work blends leadership development, facilitation, coaching, and capability building into learning journeys.",
  highlights: [
    "20+ years across education, HR, and capability-building ecosystems",
    "Designed high-impact interventions for corporate teams and academic institutions",
    "Known for practical frameworks that build confidence, ownership, and visible outcomes",
  ],
};

export const homepageSections = {
  whoWeAre:
    "Empowering Minds is a Human Capital Development initiative focused on strengthening institutions and organisations through structured behavioural, emotional and mind-based transformation.",
  intersectionIntro: "We operate at the intersection of",
  intersectionAreas: [
    {
      title: "Human Capital Development",
      description:
        "Capability-building journeys that align learning, performance, and people growth.",
      icon: BriefcaseBusiness,
    },
    {
      title: "Leadership Development",
      description:
        "Leadership experiences that help emerging and senior leaders create momentum.",
      icon: Trophy,
    },
    {
      title: "Student Development",
      description:
        "Future-readiness programs that build communication, confidence, and employability.",
      icon: GraduationCap,
    },
    {
      title: "Institutional Growth",
      description:
        "Strategic interventions for faculty, academic leaders, and growing institutions.",
      icon: Building2,
    },
    {
      title: "Hands-on Corporate Experience",
      description:
        "Practical, business-grounded perspectives shaped by real workplace challenges.",
      icon: Handshake,
    },
  ],
  approachIntro:
    "Our approach is designed to move participants from insight to action. Every engagement begins with context, builds capability through application, and stays focused on what shifts behavior in the real world.",
  approachPillars: [
    {
      title: "Awareness",
      description: "Build clarity around mindset, context, and the patterns shaping growth.",
      icon: Compass,
    },
    {
      title: "Capability",
      description: "Develop skills through frameworks, tools, and guided practice.",
      icon: Lightbulb,
    },
    {
      title: "Confidence",
      description: "Create the assurance to apply new learning in visible, meaningful ways.",
      icon: ShieldCheck,
    },
    {
      title: "Impact",
      description: "Translate development into stronger performance, leadership, and outcomes.",
      icon: LineChart,
    },
    {
      title: "Sustainability",
      description: "Embed habits and systems that help transformation last beyond the workshop.",
      icon: Target,
    },
  ],
};

export const testimonials = [
  {
    quote:
      "The sessions were practical, energizing, and immediately useful for our leadership pipeline. We saw stronger collaboration within weeks.",
    name: "Ananya Mehta",
    role: "HR Head, Apex Education Group",
  },
  {
    quote:
      "Our students responded brilliantly to the confidence-building modules. The delivery felt modern, personal, and deeply relevant.",
    name: "Rahul Menon",
    role: "Dean, Northstar Business School",
  },
  {
    quote:
      "Empowering Minds helped our managers lead more intentionally. The frameworks were simple to adopt and strong in impact.",
    name: "Shweta Kapoor",
    role: "L&D Lead, Thrive Corporate Academy",
  },
];

export const impactStats = [
  { value: "12K+", label: "Learners reached across programs" },
  { value: "150+", label: "Workshops and interventions delivered" },
  { value: "40+", label: "Institutional and corporate partners" },
  { value: "92%", label: "Participants reporting improved confidence" },
];

export const caseStudies = [
  {
    title: "Turning Faculty Development Into Institutional Momentum",
    summary:
      "A higher education group reimagined faculty capability-building with a blended development series focused on facilitation, leadership, and student engagement.",
    outcome: "37% improvement in faculty engagement scores in one semester",
    tags: ["Institutional Growth", "Faculty Development"],
  },
  {
    title: "Building a Confident First-Time Manager Pipeline",
    summary:
      "A services organization launched a leadership lab for high-potential team leads transitioning into people management roles.",
    outcome: "85% of participants reported stronger feedback and delegation skills",
    tags: ["Leadership Programs", "Capability Building"],
  },
  {
    title: "Career Readiness for Final-Year Students",
    summary:
      "A campus-to-career bootcamp focused on communication, employability, interviews, and professional presence.",
    outcome: "2.1x increase in mock interview success rates",
    tags: ["Student Development", "Career Readiness"],
  },
];

export const resources = [
  {
    title: "Designing Learning That Sticks",
    type: "Article",
    description:
      "A practical read on how reflection, relevance, and repetition improve learning transfer.",
  },
  {
    title: "Leadership Conversation Toolkit",
    type: "Download",
    description:
      "Conversation prompts and coaching questions for managers leading growth discussions.",
  },
  {
    title: "Student Confidence Playbook",
    type: "Learning Guide",
    description:
      "A structured guide to building confidence, communication, and readiness in learners.",
  },
  {
    title: "Insight Note: Human-Centered Capability Building",
    type: "Insight",
    description:
      "An executive snapshot of what modern organizations expect from development initiatives.",
  },
];

export const serviceGroups = [
  {
    id: "human-capital-development",
    title: "Human Capital Development",
    description:
      "People-first interventions that strengthen capability, performance, and long-term workforce growth.",
    icon: Users,
    services: ["Employee Development", "Capability Building", "Performance Enhancement"],
  },
  {
    id: "leadership-programs",
    title: "Leadership Programs",
    description:
      "Development pathways for leaders at every stage of influence and organizational responsibility.",
    icon: Trophy,
    services: ["Emerging Leaders", "Mid-Level Managers", "Senior Leadership"],
  },
  {
    id: "student-development",
    title: "Student Development",
    description:
      "Future-focused learning experiences that help students communicate, compete, and thrive.",
    icon: GraduationCap,
    services: [
      "Communication Skills",
      "Employability Skills",
      "Career Readiness",
      "Confidence Building",
    ],
  },
  {
    id: "institutional-development",
    title: "Institutional Development",
    description:
      "Strategic programs for faculty, academic leaders, and institutions navigating growth.",
    icon: Building2,
    services: ["Faculty Development", "Academic Leadership", "Organizational Growth"],
  },
];

export const programs = [
  {
    id: "human-capital-development-lab",
    category: "Human Capital Development",
    cardCategory: "LONG TERM",
    emoji: "🪪",
    title: "Fellowship in L&D & OD (Updated with AI Tools)",
    description:
      "A strategic capability-building program for people professionals driving workforce growth.",
    shortDescription:
      "Transform into a high-impact L&D and OD leader with advanced strategic capabilities.",
    audience: "HR teams and L&D professionals",
    duration: "24 weeks blended",
    format: "Live + cohort-based",
    price: "₹89,250",
    priceLine: "₹89,250 · 24 Weeks Program ·",
    startDate: "13 June 2026",
    durationLine: "Starting 13 June 2026",
    footerDate: "24 weeks",
    ctaLabel: "View Fellowship",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: BriefcaseBusiness,
    outcomes: [
      "Design development pathways linked to performance",
      "Build learning strategies aligned to business goals",
      "Lead capability interventions with measurable outcomes",
    ],
  },
  {
    id: "leadership-excellence-sprint",
    category: "Leadership Programs",
    cardCategory: "STRATEGIC",
    emoji: "🪪",
    title: "MEHR's Annual Strategic membership for Evolution & Renewal (MASER)",
    description:
      "A practical leadership sprint for managers building influence, alignment, and team confidence.",
    shortDescription:
      "Build strategic renewal capacity through a focused annual membership experience.",
    audience: "Emerging and mid-level leaders",
    duration: "12 weeks",
    format: "Workshop series",
    price: "₹12,000",
    priceLine: "₹12,000 · 24 Weeks Program ·",
    startDate: "13 June 2026",
    durationLine: "Starting 13 June 2026",
    footerDate: "24 weeks",
    ctaLabel: "View Maser",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: Trophy,
    outcomes: [
      "Improve feedback and communication rhythms",
      "Lead through change with more clarity",
      "Strengthen accountability within teams",
    ],
  },
  {
    id: "faculty-development-for-impact",
    category: "Institutional Development",
    cardCategory: "SPECIALIST",
    emoji: "🤝",
    title: "Certified Learning & Development Manager (Updated with AI Tools)",
    description:
      "A blended program to help faculty elevate facilitation, student engagement, and academic leadership.",
    shortDescription:
      "Master modern learning strategies with AI-powered L&D expertise",
    audience: "Faculty and academic leaders",
    duration: "6 weeks",
    format: "Hybrid delivery",
    price: "₹29,500",
    priceLine: "₹29,500 + 18% GST ·",
    startDate: "13 June 2026",
    durationLine: "04 Weeks Live · 06 Weeks Blended",
    footerDate: "13 June 2026",
    ctaLabel: "View Certification",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: Building2,
    outcomes: [
      "Refresh learner-centered teaching practices",
      "Strengthen classroom and institutional leadership",
      "Create action plans for improved student outcomes",
    ],
  },
  {
    id: "career-readiness-bootcamp",
    category: "Student Development",
    cardCategory: "SPECIALIST",
    emoji: "🤝",
    title: "Certified HR Business Partnering (Updated with AI Tools)",
    description:
      "An immersive journey covering communication, interviews, employability, and workplace presence.",
    shortDescription:
      "Become a strategic HR partner who drives real business impact",
    audience: "College students and final-year cohorts",
    duration: "6 weeks",
    format: "Bootcamp",
    price: "₹29,500",
    priceLine: "₹29,500 + 18% GST ·",
    startDate: "13 June 2026",
    durationLine: "04 Weeks Live · 06 Weeks Blended",
    footerDate: "13 June 2026",
    ctaLabel: "View Certification",
    topAccent: "bg-gradient-to-r from-[var(--color-muted)] via-[var(--color-secondary)] to-[var(--color-secondary)]",
    icon: GraduationCap,
    outcomes: [
      "Build interview and workplace communication confidence",
      "Improve presentation and collaboration skills",
      "Prepare for placements with stronger self-awareness",
    ],
  },
  {
    id: "emerging-leaders-lab",
    category: "Leadership Programs",
    cardCategory: "STRATEGIC",
    emoji: "🧭",
    title: "Emerging Leaders Lab",
    description:
      "A focused pathway for high-potential professionals stepping into leadership responsibility.",
    shortDescription:
      "Develop executive presence, decision-making, and people leadership in a guided lab.",
    audience: "First-time and future managers",
    duration: "8 weeks",
    format: "Live cohort",
    price: "₹18,500",
    priceLine: "₹18,500 · 08 Weeks Program ·",
    startDate: "15 September 2026",
    durationLine: "Starting 15 September 2026",
    footerDate: "8 weeks",
    ctaLabel: "View Program",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: Sparkles,
    outcomes: [
      "Develop executive presence",
      "Practice coaching conversations",
      "Set team priorities with more confidence",
    ],
  },
  {
    id: "institutional-growth-forum",
    category: "Institutional Development",
    cardCategory: "SPECIALIST",
    emoji: "🏛️",
    title: "Institutional Growth Forum",
    description:
      "A strategic forum to help institutions strengthen leadership, culture, and development systems.",
    shortDescription:
      "Help institutional leaders align strategy, culture, and development systems for growth.",
    audience: "Directors, deans, and institutional leaders",
    duration: "10 weeks",
    format: "Facilitated roundtable",
    price: "₹39,500",
    priceLine: "₹39,500 · 10 Weeks Program ·",
    startDate: "01 October 2026",
    durationLine: "Starting 01 October 2026",
    footerDate: "10 weeks",
    ctaLabel: "View Program",
    topAccent: "bg-gradient-to-r from-[var(--color-muted)] via-[var(--color-secondary)] to-[var(--color-secondary)]",
    icon: ArrowUpRight,
    outcomes: [
      "Align people development with institutional strategy",
      "Improve collaboration across leadership functions",
      "Prioritize sustainable growth initiatives",
    ],
  },
  {
    id: "performance-enhancement-studio",
    category: "Human Capital Development",
    cardCategory: "LONG TERM",
    emoji: "📈",
    title: "Performance Enhancement Studio",
    description:
      "A results-focused engagement to improve productivity, ownership, and performance conversations.",
    shortDescription:
      "Improve productivity, ownership, and coaching conversations across teams.",
    audience: "People managers and team leads",
    duration: "8 weeks",
    format: "Onsite or virtual",
    price: "₹24,000",
    priceLine: "₹24,000 · 08 Weeks Program ·",
    startDate: "22 October 2026",
    durationLine: "Starting 22 October 2026",
    footerDate: "8 weeks",
    ctaLabel: "View Program",
    topAccent: "bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-muted)] to-[var(--color-secondary)]",
    icon: LineChart,
    outcomes: [
      "Run sharper goal-setting conversations",
      "Build stronger review and coaching habits",
      "Create visible performance improvement plans",
    ],
  },
  {
    id: "confidence-and-communication-clinic",
    category: "Student Development",
    cardCategory: "SPECIALIST",
    emoji: "🎤",
    title: "Confidence and Communication Clinic",
    description:
      "A high-energy clinic designed to help learners speak with confidence and show up with clarity.",
    shortDescription:
      "Help learners communicate clearly, reduce hesitation, and present with confidence.",
    audience: "Students and early-career talent",
    duration: "4 weeks",
    format: "Interactive workshop",
    price: "₹7,500",
    priceLine: "₹7,500 · 04 Weeks Program ·",
    startDate: "05 November 2026",
    durationLine: "Starting 05 November 2026",
    footerDate: "4 weeks",
    ctaLabel: "View Program",
    topAccent: "bg-gradient-to-r from-[var(--color-muted)] via-[var(--color-secondary)] to-[var(--color-secondary)]",
    icon: HeartHandshake,
    outcomes: [
      "Speak more clearly in formal settings",
      "Reduce hesitation and self-doubt",
      "Project confidence during presentations",
    ],
  },
];

export const categories = [
  "All",
  "Human Capital Development",
  "Leadership Programs",
  "Student Development",
  "Institutional Development",
];

export const aboutContent = {
  heroTitle: "Learning experiences that move people and institutions forward.",
  heroText:
    "Empowering Minds partners with organizations, campuses, and leaders to create transformation that is thoughtful, practical, and measurable.",
  mission:
    "To design development experiences that unlock confidence, capability, and sustainable impact.",
  vision:
    "To be a trusted growth partner for institutions and teams building a stronger future through people development.",
  story:
    "Empowering Minds was created to bridge a gap often felt in learning and development: the gap between inspiring ideas and real-world application. Our journey began with a simple commitment to create development experiences that are grounded, action-oriented, and deeply human.",
  values: [
    "Human-centered growth",
    "Practical transformation",
    "Integrity in facilitation",
    "Partnership over prescription",
    "Sustainable impact",
  ],
  reasons: [
    "Programs built for real-world behavior change",
    "Strong mix of corporate and academic understanding",
    "Flexible formats across workshops, cohorts, and strategic interventions",
  ],
};

export const contactDetails = {
  phone: "+91 9794278786",
  email: "contact@empoweringminds.in",
  address: "Empowering Minds, 86 VIP Road, Yamuna Apartment, Kolkata 700048, India",
};

export const faqs = [
  {
    question: "Do you offer customized programs?",
    answer:
      "Yes. We tailor engagements based on your audience, business or institutional context, and desired outcomes.",
  },
  {
    question: "Can sessions be delivered virtually?",
    answer:
      "Absolutely. We support onsite, virtual, and blended formats depending on the program design.",
  },
  {
    question: "Who are your programs designed for?",
    answer:
      "Our programs support students, faculty, academic leaders, HR teams, managers, and senior leadership groups.",
  },
];

export const featuredResource = {
  title: "The Empowering Minds Learning Journal",
  description:
    "A featured reflection resource for participants to translate workshop insight into practical weekly action.",
  icon: BookOpen,
};
