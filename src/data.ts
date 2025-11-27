import { Code2, Database, Trophy, Brain, Layout, Users, Compass, Target, Zap, RefreshCw, Sparkles, Award } from 'lucide-react';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'My Story', href: '#duality' },
  { label: 'Contact', href: '#contact' },
];

export const HERO = {
  headline: 'Full-Stack Engineer shipping resilient .NET, React, and ML products.',
  subheadline:
    'I build cross-platform experiences and data products that boost release speed, observability, and decision-making.',
  stats: [
    { label: 'Full-Stack & ML', icon: Code2 },
    { label: 'Production Ready', icon: Brain },
    { label: 'High Performance', icon: Trophy },
  ],
};

export const HIGHLIGHTS = [
  {
    label: 'Cut test time by 40%',
    detail: 'Python automation + telemetry-first approach.',
    icon: Sparkles,
  },
  {
    label: 'Shipped cross-platform MAUI apps',
    detail: 'Shared libraries, MVVM, and offline-first sync.',
    icon: Award,
  },
  {
    label: 'Data-driven decisions',
    detail: 'ML + analytics pipelines for roster and sentiment insights.',
    icon: Database,
  },
];

export const SKILLS = [
  {
    title: 'Production Engineering',
    tags: ['C#', 'React', '.NET MAUI', 'Clean Architecture', 'CI/CD'],
    copy: 'Building scalable, cross-platform tools. Focused on clean architecture, automated pipelines, and maintainable codebases.',
    icon: Layout,
  },
  {
    title: 'Data & ML Intelligence',
    tags: ['Python', 'PyTorch', 'Pandas', 'XGBoost', 'NLP'],
    copy: 'Transforming raw data into actionable insights. From Moneyball-style analytics to transformer-based sentiment analysis.',
    icon: Database,
  },
  {
    title: 'Leadership & Strategy',
    tags: ['Agile', 'Communication', 'Team Strategy'],
    copy: 'Translating athletic discipline into development velocity. Bridging the gap between complex technical logic and business goals.',
    icon: Users,
  },
];

export const SCOUTING_REPORT = [
  { axis: 'Frontend', value: 0.9, fullMark: 1 },
  { axis: 'Backend', value: 0.85, fullMark: 1 },
  { axis: 'ML / AI', value: 0.8, fullMark: 1 },
  { axis: 'Architecture', value: 0.85, fullMark: 1 },
  { axis: 'Leadership', value: 0.95, fullMark: 1 },
  { axis: 'Data Eng', value: 0.75, fullMark: 1 },
];

export const PROCESS = [
  {
    stage: 'Scout',
    mantra: 'Diagnose the field',
    description: 'Shadow stakeholders, inspect telemetry, and size the opportunity before writing code.',
    deliverable: 'Problem brief + success metrics',
    icon: Compass,
  },
  {
    stage: 'Strategy',
    mantra: 'Design the playbook',
    description: 'Translate scouting notes into a pragmatic technical plan with trade-offs surfaced early.',
    deliverable: 'Architecture sketch + decision log',
    icon: Target,
  },
  {
    stage: 'Execution',
    mantra: 'Ship with intent',
    description: 'Pair tight feedback loops with reliable automation so releases are calm, not chaotic.',
    deliverable: 'Incremental releases + telemetry hooks',
    icon: Zap,
  },
  {
    stage: 'Review',
    mantra: 'Measure and reinforce',
    description: 'Inspect outcomes, capture lessons, and feed insights back into the next scouting cycle.',
    deliverable: 'Post-launch scorecard + retro',
    icon: RefreshCw,
  },
];

export const LIVE_STATUS = [
  { label: 'Focus', value: 'React Native & GraphQL' },
  { label: 'Status', value: 'Working Hard' },
  { label: 'Location', value: 'London, ON' },
];

export const EXPERIENCE = [
  {
    company: 'OES Inc',
    location: 'London, ON',
    title: 'Full Stack Developer',
    period: 'Aug 2025 - Present',
    description: 'Building next-gen scoreboard control software.',
    bullets: [
      'Automated regression testing in Python, cutting validation time by 40% while improving defect catch rate.',
      'Modernizing legacy codebases into cross-platform .NET MAUI apps using MVVM and shared component libraries.',
      'Architecting REST APIs to sync scoreboard hardware, edge devices, and mobile clients in real time.',
    ],
  },
  {
    company: 'West Haven Golf & Country Club',
    location: 'London, ON',
    title: 'Bartender / Server',
    period: 'Nov 2024 - Present',
    description: 'Client Relations & Service.',
    bullets: [
      'Managed high-volume service in a fast-paced environment while maintaining excellent client relations.',
      'Collaborated with cross-functional teams to ensure seamless operations during peak hours.',
    ],
  },
];

export const EDUCATION = [
  {
    school: 'University of Western Ontario',
    degree: 'Bachelor of Computer Science',
    period: 'Sept 2020 - Jan 2025',
    bullets: ["Varsity Men's Basketball Athlete", 'Bob Gage Athletic Leadership Award Recipient'],
  },
  {
    school: 'Fanshawe College',
    degree: 'AI & Machine Learning Certificate',
    period: '2025',
    bullets: [],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Topspin360',
    category: 'Production',
    description:
      'iOS app migration and full development. Dedicated neck-strength training tool for athletes; shipped analytics and improved crash-free sessions.',
    tech: ['Swift', 'iOS', 'Mobile Architecture'],
    role: 'Mobile lead',
    metrics: ['Crash-free sessions +8%', 'Avg session length +12%', 'User NPS +0.6'],
    cta: { label: 'App Store', url: 'https://apps.apple.com/ca/app/topspin360/id1281507774' },
  },
  {
    id: 2,
    title: 'Score Controller',
    category: 'Production',
    description:
      'Real-time mobile control system for OES scoreboards, enabling remote game data management with offline-first sync.',
    tech: ['iOS', 'Bluetooth/WiFi', 'Real-time Systems'],
    role: 'Full stack / Mobile',
    metrics: ['Action latency -150ms', 'Crash-free sessions +8%', 'Onboarding time -30%'],
    cta: { label: 'App Store', url: 'https://apps.apple.com/us/app/score-controller/id1563410119' },
  },
  {
    id: 3,
    title: 'Player Performance Predictor',
    category: 'ML/AI',
    description:
      'Roster construction engine with WAR predictions (R^2 0.59) using XGBoost, feature engineering, and Optuna tuning.',
    tech: ['Python', 'XGBoost', 'Optuna', 'Pandas'],
    role: 'Data science',
    metrics: ['R^2 0.59 on WAR', 'Hyperparameter search via Optuna', '1k lineup sims/run'],
    cta: { label: 'View repo', url: 'https://github.com/peytoncampbell' },
  },
  {
    id: 4,
    title: 'Customer Sentiment Analyzer',
    category: 'ML/AI',
    description:
      'Multi-channel sentiment classifier fine-tuned on support tickets; delivered 85% accuracy and a real-time insights dashboard.',
    tech: ['Transformers', 'Python', 'TensorFlow', 'NLP'],
    role: 'ML engineer',
    metrics: ['Accuracy 85%', 'Latency <300ms p95', 'Coverage: email + chat + reviews'],
    cta: { label: 'View repo', url: 'https://github.com/peytoncampbell' },
  },
];
