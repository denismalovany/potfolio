export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  product: string;
  platform: string;
  role: string;
  timeframe: string;
  impactTeaser: string;
  thumbnail: string; // Placeholder image path
  tldr: string;
  problem: string;
  context: string;
  businessGoal: string;
  myRole: string;
  team: string;
  constraints: string;
  process: string;
  researchInsights: string;
  keyDecisions: string;
  solution: string;
  screens: string[]; // Array of image paths
  outcomes: string;
  learnings: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-dashboard-redesign",
    title: "Fintech Dashboard Redesign",
    summary: "Redesigned a complex financial dashboard to improve user efficiency and reduce errors. Led from research to launch with measurable impact on productivity.",
    product: "Investment Management Platform",
    platform: "Web (Desktop)",
    role: "Lead Product Designer",
    timeframe: "6 months (Jan–Jun 2023)",
    impactTeaser: "30% reduction in task completion time, 25% fewer user errors.",
    thumbnail: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    tldr: "Redesigned the primary dashboard for a B2B fintech platform used by 2,000+ investment advisors. The original interface was cluttered and inefficient, requiring 15+ clicks to access key metrics. Our redesign reduced task completion time by 30%, cut user errors by 25%, and improved Net Promoter Score by 18 points. Led cross-functional effort with engineers, product, and research.",
    problem: "Investment advisors using the platform reported frustration with finding critical portfolio metrics. The dashboard displayed 50+ data points without clear hierarchy or filtering. Users frequently made incorrect decisions due to misreading data or missing important signals. Support tickets related to dashboard navigation were the highest category, costing the company ~$50K annually. Advisors were considering switching to competitors with simpler interfaces.",
    context: "A B2B SaaS platform serving wealth management firms with 2,000+ active advisors managing $500B+ in assets. The platform provided portfolio analytics, client communication tools, and compliance tracking. The dashboard was the primary entry point, but it hadn't been significantly updated in 3+ years.",
    businessGoal: "Reduce support costs by 20%, increase user satisfaction (NPS) by 15 points, and improve feature adoption by showing relevant data proactively. Avoid forced feature discovery that would slow down power users.",
    myRole: "Led the entire design process from research to high-fidelity prototypes. Conducted user interviews and usability testing. Advocated for data prioritization and simplified information architecture. Collaborated closely with engineering on feasibility and implementation.",
    team: "1 Product Manager, 2 Full-stack Engineers, 1 UX Researcher, Me (Lead Designer), 1 QA Engineer",
    constraints: "Legacy backend limited real-time data updates; had to work with 15-30 second refresh rates. Couldn't break existing API contracts. Some advisors had complex workflows requiring advanced filters that shouldn't clutter the default view. Browser compatibility required IE11 support.",
    process: "Conducted 12 user interviews with advisors at 4 different firms. Observed 3 full-day shadowing sessions. Analyzed support tickets (200+ from past year). Reviewed competitor dashboards (Bloomberg, E*TRADE, Schwab). Created user journey maps and pain point diagrams. Iterated on wireframes with PM and research. Built interactive prototypes in Figma. Conducted 2 rounds of unmoderated usability tests (8 participants each) and incorporated feedback. Created design system tokens and component library.",
    researchInsights: "Users prioritized the top 5 metrics (portfolio value, performance vs. benchmark, allocation by asset class, cash position, and risk metrics). Everything else was 'nice to have.' Many advisors had custom workflows unique to their firm. Power users wanted keyboard shortcuts and advanced filtering, but 70% of users just needed the defaults. Cognitive load was the biggest pain point; users got overwhelmed by too many options. Most users worked from memory on what they needed, not by exploring the interface.",
    keyDecisions: "Created 2 views: 'Overview' (simple, 5 key metrics, fast) and 'Advanced' (full analytics, filters). Defaulted everyone to Overview. Used progressive disclosure for less common metrics. Implemented a search bar to replace deep navigation. Organized metrics by user workflow (Income, Growth, Risk, Compliance) instead of data type. Added inline sparklines to show trends without leaving the dashboard. Built watchlists feature so users could save custom views.",
    solution: "Redesigned the dashboard into a modular, role-based interface. The Overview tab shows the 5 essential metrics with large, color-coded visualizations. Advanced tab provides access to 25+ metrics with flexible filtering and sorting. Added a global search to quickly jump to any portfolio or metric. Implemented saved views/watchlists so each advisor could customize without cluttering the default. Used consistent color coding across all metrics for pattern recognition. Added contextual help on hover for less experienced advisors. Mobile-responsive design allows advisors to check key metrics on the go.",
    screens: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    ],
    outcomes: "30% faster task completion (15 clicks → 2-3 clicks for common tasks). 25% reduction in errors (tracked via support tickets about incorrect data entry). NPS increased from 42 to 60 (18-point gain). Feature adoption of advanced filters went from 5% to 35%. Support tickets related to dashboard navigation dropped 60%. 92% of users preferred the new design in post-launch survey. The redesign became a model for other dashboard improvements in the product.",
    learnings: "Prioritization is powerful—removing complexity is often more valuable than adding features. Early prototyping with real users caught issues that would have been expensive to fix in code. Power users and novices have very different needs; progressive disclosure and modes were better than a single 'medium' design. Cross-functional trust was critical; the engineering team's early input on feasibility shaped better decisions. We should have measured current baseline task time earlier to create more credible before/after comparisons.",
  },
  {
    slug: "saas-onboarding-flow",
    title: "SaaS Onboarding Flow Optimization",
    summary: "Reimagined the new user onboarding experience for a project management tool, reducing drop-off by 50% and improving 30-day retention by 40%.",
    product: "Project Management SaaS (Freemium Model)",
    platform: "Web & Mobile",
    role: "Product Designer",
    timeframe: "4 months (Feb–May 2023)",
    impactTeaser: "40% increase in 30-day retention, 50% reduction in onboarding drop-off, 35% faster time-to-first-action.",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    tldr: "Redesigned the onboarding experience for a freemium project management tool with 10,000+ new signups monthly. Only 35% of users completed the original flow or created a first project. We identified that 4+ setup screens and jargon-heavy language were the main barriers. Our streamlined, task-based onboarding got users to 'first action' in under 2 minutes, improved 30-day retention by 40%, and increased trial-to-paid conversion by 12%.",
    problem: "New users were overwhelmed by setup complexity. The original flow required users to configure workspace settings, invite teammates, and choose workflow templates before being allowed to create a task. 65% of users dropped off before completing onboarding. Of those who did complete it, only 40% returned after 3 days. Churn analysis showed the strongest predictor of retention was 'user completed first task within Day 1.' Our product was feature-rich but felt inaccessible to beginners.",
    context: "A SaaS project management tool competing with Asana, Monday.com, and Notion. Freemium model with 10,000+ signups monthly. Average contract value for paid accounts was $500/month, but churn was high (6% MoM). The product was powerful for small teams but had a steep learning curve. Market research showed competitors had better onboarding experiences.",
    businessGoal: "Reduce user churn by 25%. Increase trial-to-paid conversion from 8% to 15%. Get more users to first value (creating a task) on Day 1. Reduce support burden of onboarding questions by making the experience self-explanatory.",
    myRole: "Designed the new onboarding experience and conducted all user research and testing. Created wireframes, prototypes, and micro-interactions. Iterated based on feedback. Worked with product and analytics to define success metrics.",
    team: "1 Product Manager, 2 Engineers, Me (Designer), 1 Product Analyst",
    constraints: "Had to maintain backwards compatibility for existing workspaces. Couldn't require email verification (would add friction). Mobile had significantly different constraints (screen space, no multi-window workflows). International users had different expectations for onboarding flow. A/B tests had to be careful not to disrupt power users or existing feature adoption.",
    process: "Conducted 15 user interviews with new signups within 24 hours of joining. Watched unmoderated session recordings of 50 users trying to set up projects. Surveyed 200 churned users. Analyzed in-app behavior data (drop-off points, time-on-step). Reviewed competitor onboarding experiences. Identified that users wanted to 'try first, configure later.' Created a task-based flow: 'Create your first project → invite teammates (optional) → customize settings (if interested).' Built interactive prototypes and tested with 2 rounds of 6 participants each. Ran A/B tests in production with 30% of traffic.",
    researchInsights: "Users wanted to experience the product's value before committing to setup. Asking for configuration early felt like 'homework.' Users didn't need all features explained; they wanted to jump in and learn by doing. The strongest users (most likely to retain) were those who had created 3+ items by Day 1. Template selection was a huge distraction; most users wanted a blank canvas. Mobile users had even lower patience for setup screens—they wanted a minimal path to value.",
    keyDecisions: "Made onboarding task-focused instead of configuration-focused. First screen: create a project and add 1 task. Second screen: optionally invite teammates. Later screens: optional feature tours and settings. Reduced copy on each screen by 60%; focused on micro-copy and inline tooltips. Used progressive disclosure—advanced options hidden in modals, not in the main flow. Showed social proof early (e.g., 'Join 50,000+ teams using [Product]'). Added a 'Skip' button on each screen to remove friction.",
    solution: "Created a 3-screen 'Fast Track' onboarding: (1) Create project + add first task (2 minutes), (2) Invite team (optional, 1 minute), (3) Brief feature intro (1 minute, skip-able). Removed all configuration screens from the main flow; moved to a 'Settings' area with smart defaults. Added a sidebar progress indicator and celebration animation when completing first task. Built in-app onboarding tips triggered by user behavior (e.g., show 'Comment' tip when user hovers over comment button). Mobile version simplified to 2 screens. Built an 'Invite team' modal that could be triggered anytime, not just onboarding.",
    screens: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    ],
    outcomes: "40% increase in 30-day retention (35% → 49% of new users active at Day 30). 50% reduction in drop-off (65% → 32.5% of users completing onboarding). 35% faster time-to-first-action (5 minutes → 1.8 minutes average). 12% increase in trial-to-paid conversion (8% → 8.96%). 60% reduction in 'How do I...?' support tickets. Mobile onboarding improved the most (65% → 38% drop-off). Users who completed fast-track onboarding had 3x higher 30-day retention than those who saw the old flow.",
    learnings: "Onboarding is not about teaching the product; it's about getting users to first value quickly. Removing complexity is more effective than trying to explain it. Social proof and gamification (celebration animations) work even with power users. Users on mobile have completely different needs; we shouldn't force the same flow. Measuring 'time to first action' was critical; it became a leading indicator of retention, letting us iterate quickly.",
  },
  {
    slug: "mobile-app-redesign",
    title: "Mobile App Redesign",
    summary: "Redesigned a consumer fitness app to improve engagement, modernize the visual design, and reduce cognitive load. Increased DAU by 20% and improved app store rating to 4.7 stars.",
    product: "Fitness Tracking & Workout App",
    platform: "Mobile (iOS & Android)",
    role: "Senior Product Designer",
    timeframe: "5 months (Aug–Dec 2023)",
    impactTeaser: "20% increase in daily active users, 35% improvement in session duration, 4.7-star app store rating (was 3.2).",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    tldr: "The app had 2M+ downloads but suffered from low engagement and poor reviews (3.2 stars). Users complained about clunky navigation, outdated design, and overwhelming feature clutter. Redesigned the information architecture, modernized the visual language, and simplified the home screen. Result: 20% increase in daily active users, 35% longer session duration, improved ratings to 4.7 stars, and 25% increase in premium subscription conversions.",
    problem: "App ratings dropped from 4.1 to 3.2 stars over 18 months. User reviews cited 'outdated design,' 'hard to find features,' 'too many tabs and options,' and 'confusing navigation.' Daily active users were declining 2-3% per month. The app had 8 bottom-tab options, making it impossible to find anything. The home screen showed irrelevant data without personalization. Users couldn't quickly start a workout or log food without navigating through 4+ screens.",
    context: "A consumer fitness app in a competitive market (Apple Health, Fitbit, Strava, MyFitnessPal). The app tracked workouts, nutrition, sleep, and social features. Original design was from 2018 and felt dated. Competitors had modernized their designs and improved UX. The user base was aging but new users expected modern, clean mobile experiences.",
    businessGoal: "Improve app store rating by at least 1 point (from 3.2 to 4.2+). Increase daily active users by 15%+. Reduce churn by 20%. Increase premium subscription conversion by 10%.",
    myRole: "Led the entire redesign project. Conducted user research and competitive analysis. Created information architecture and wireframes. Designed high-fidelity mockups and animations. Worked closely with iOS and Android teams to ensure platform consistency. Iterated based on beta user feedback.",
    team: "1 Product Manager, 1 iOS Engineer, 1 Android Engineer, 1 Backend Engineer, Me (Senior Designer), 1 Design QA",
    constraints: "Had to maintain backwards compatibility with user data. Couldn't remove features (needed to archive unused ones in secondary menus). Had to maintain feature parity between iOS and Android (harder due to platform differences). Performance was critical on low-end Android devices. Beta testing with 5,000 users revealed preference for feature-rich options even if hidden.",
    process: "Interviewed 20 current users (why they stay, what frustrates them). Interviewed 15 lapsed users (why they left). Analyzed in-app behavior heatmaps. Reviewed 500 recent reviews on app stores to identify pain points. Competitive analysis of 5 similar apps. Created user personas for casual vs. serious fitness enthusiasts. Built wireframes for multiple information architecture options. Prototyped and tested 3 different approaches with 8 users each. Conducted 2-week closed beta with 5,000 users; iterated based on feedback.",
    researchInsights: "Users wanted the app to feel 'alive' and motivating, not clinical. Casual users wanted to start a workout in 1 tap; serious users wanted granular tracking options. Social/competition features were underutilized due to poor discoverability. The 'Trends' tab was rarely used but high-intent users loved it. Users found personalized recommendations more valuable than generic content. Workout history was more useful than templates for beginners. Dark mode was strongly requested.",
    keyDecisions: "Reduced bottom tabs from 8 to 5 (Home, Workouts, Nutrition, Social, Profile). Made the home screen personalized and glanceable (show today's progress, recommended workout, upcoming event). Created a primary CTA to 'Start Workout' that's always 1 tap away. Moved less-used features to the Profile menu without removing them. Added a new 'Explore' section for personalized recommendations. Designed a modern, cleaner visual language (rounded corners, modern typography, simplified icons). Added dark mode support.",
    solution: "Restructured the information architecture from 8 tabs to 5 core areas. Home screen shows a daily summary, quick-start workout button, and personalized recommendations. Workout tab is simplified with a 'Start' button, recent workouts, and saved routines. Nutrition tab uses a simpler logging interface with voice and photo options. Social tab highlights friends, challenges, and leaderboards. Profile consolidates all user-specific features and settings. Modernized the visual design with updated colors, typography, and icons. Added smooth animations and transitions. Built dark mode support throughout.",
    screens: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    ],
    outcomes: "20% increase in daily active users (2.4M → 2.9M over 4 months). 35% improvement in average session duration (4.2 minutes → 5.7 minutes). App store rating improved from 3.2 to 4.7 stars. Premium subscription conversions increased 25% (7% → 8.75% of DAU). User reviews shifted dramatically positive; 'design' is no longer mentioned as a complaint. Churn improved by 18% (Month 2 retention went from 28% to 33%). The redesign became a case study in the company's investor updates and was featured in product blogs.",
    learnings: "Modernizing design matters—users notice when an app feels dated. Simplification is a feature, not a limitation. Users prefer one powerful primary action over many options for the same task. Dark mode should be planned from the start, not added as an afterthought. Lapsed users are a goldmine of insights; talking to them revealed pain points current users had learned to live with. A phased rollout (beta → staged release) was crucial for confidence and catching issues early.",
  },
];