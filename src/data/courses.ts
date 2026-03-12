export type Lesson = {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  rating: number;
  ratingCount: number;
  students: number;
  price: number;
  thumbnail: string;
  heroVideoUrl: string;
  description: string;
  whatYouWillLearn: string[];
  curriculum: Lesson[];
};

export const courses: Course[] = [
  {
    id: "nextjs-complete-bootcamp",
    slug: "nextjs-complete-bootcamp",
    title: "Next.js 14 & React Complete Bootcamp",
    subtitle:
      "Build and deploy real-world fullstack apps with the App Router, Server Actions, and modern tooling.",
    level: "Beginner",
    category: "Web Development",
    rating: 4.8,
    ratingCount: 21894,
    students: 105372,
    price: 449,
    thumbnail:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Learn modern fullstack development with Next.js 14, TypeScript, Tailwind CSS, and the App Router. We start from the absolute basics and finish by deploying a production-ready app.",
    whatYouWillLearn: [
      "Build fullstack apps with Next.js 14 App Router",
      "Use Server Actions, dynamic routes, and data fetching",
      "Style premium interfaces with Tailwind CSS",
      "Deploy a production app to Vercel",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "Welcome & Course Overview",
        duration: "06:21",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-2",
        title: "Setting up the Next.js Project",
        duration: "12:09",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-3",
        title: "App Router Deep Dive",
        duration: "18:47",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "react-mastery",
    slug: "react-mastery",
    title: "React & TypeScript Mastery",
    subtitle:
      "Master modern React patterns, hooks, and TypeScript for scalable frontends.",
    level: "Intermediate",
    category: "Web Development",
    rating: 4.7,
    ratingCount: 15432,
    students: 82341,
    price: 399,
    thumbnail:
      "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Deep dive into React and TypeScript with real-world patterns. Understand complex hooks, state management, performance, and testing.",
    whatYouWillLearn: [
      "Use advanced React hooks effectively",
      "Model complex UIs with TypeScript",
      "Optimize React performance",
      "Test React apps with confidence",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "React & TypeScript – The Big Picture",
        duration: "08:32",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-2",
        title: "Strongly Typed Components",
        duration: "16:12",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-3",
        title: "Advanced Hooks & Custom Hooks",
        duration: "19:44",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "nodejs-api-design",
    slug: "nodejs-api-design",
    title: "Node.js & REST API Design",
    subtitle:
      "Design and build robust REST APIs with Node.js, Express, and best practices.",
    level: "Intermediate",
    category: "Backend Development",
    rating: 4.6,
    ratingCount: 9874,
    students: 56410,
    price: 379,
    thumbnail:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Learn how to structure, secure, and document REST APIs using Node.js and Express. Understand authentication, pagination, validation, and error handling.",
    whatYouWillLearn: [
      "Design clean and versioned REST APIs",
      "Implement authentication and authorization",
      "Handle validation, errors, and logging",
      "Document APIs and prepare them for production",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "API Design Fundamentals",
        duration: "11:03",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-2",
        title: "Building Your First Express Endpoint",
        duration: "15:27",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-3",
        title: "Authentication & Authorization",
        duration: "21:19",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "python-data-science",
    slug: "python-data-science",
    title: "Python for Data Science & ML",
    subtitle:
      "Get started with data analysis, visualization, and machine learning using Python.",
    level: "Beginner",
    category: "Data Science",
    rating: 4.7,
    ratingCount: 20341,
    students: 112034,
    price: 429,
    thumbnail:
      "https://images.pexels.com/photos/3862610/pexels-photo-3862610.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Use Python, NumPy, pandas, and scikit-learn to clean data, visualize insights, and train simple machine learning models.",
    whatYouWillLearn: [
      "Write clean Python for analysis",
      "Use NumPy and pandas to work with data",
      "Visualize data with popular plotting libraries",
      "Train and evaluate basic ML models",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "Python & Data Science Overview",
        duration: "09:55",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-2",
        title: "Working with DataFrames",
        duration: "17:42",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-3",
        title: "Your First ML Model",
        duration: "20:03",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "ui-ux-design-fundamentals",
    slug: "ui-ux-design-fundamentals",
    title: "UI/UX Design Fundamentals",
    subtitle:
      "Learn modern product design, from wireframes to polished UI in Figma.",
    level: "Beginner",
    category: "Design",
    rating: 4.5,
    ratingCount: 8421,
    students: 45567,
    price: 349,
    thumbnail:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Understand UX principles, information architecture, and visual design. Practice building real interfaces using Figma.",
    whatYouWillLearn: [
      "Apply core UX principles to any product",
      "Create wireframes and user flows",
      "Design pixel-perfect interfaces in Figma",
      "Prepare handoff for developers",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "Introduction to UX Thinking",
        duration: "07:31",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-2",
        title: "Wireframes & User Flows",
        duration: "14:08",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-3",
        title: "High-Fidelity UI in Figma",
        duration: "18:22",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "cyber-security-bootcamp",
    slug: "cyber-security-bootcamp",
    title: "Cyber Security Elite Bootcamp",
    subtitle:
      "Master ethical hacking, network security, and defense strategies.",
    level: "Intermediate",
    category: "Cyber Security",
    rating: 4.9,
    ratingCount: 12450,
    students: 65000,
    price: 499,
    thumbnail:
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Go from zero to security pro. Learn to protect networks, perform penetration tests, and understand the core principles of modern cybersecurity.",
    whatYouWillLearn: [
      "Master Linux for security professionals",
      "Perform vulnerability assessments",
      "Understand encryption and cryptography",
      "Secure cloud and local networks",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "The Security Mindset",
        duration: "10:15",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
      {
        id: "lesson-2",
        title: "Network Fundamentals & Scanning",
        duration: "25:40",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "devops-engineering",
    slug: "devops-engineering",
    title: "Fullstack DevOps Engineering",
    subtitle: "Automate, scale, and manage modern cloud infrastructure.",
    level: "Advanced",
    category: "Cloud",
    rating: 4.8,
    ratingCount: 8900,
    students: 42000,
    price: 449,
    thumbnail:
      "https://images.pexels.com/photos/11035293/pexels-photo-11035293.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Master Docker, Kubernetes, CI/CD with GitHub Actions, and Infrastructure as Code using Terraform.",
    whatYouWillLearn: [
      "Containerize apps with Docker",
      "Orchestrate with Kubernetes",
      "Build robust CI/CD pipelines",
      "Automate infrastructure with Terraform",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "Introduction to DevOps Culture",
        duration: "09:44",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "flutter-mobile-dev",
    slug: "flutter-mobile-dev",
    title: "iOS & Android Dev with Flutter",
    subtitle: "Build premium cross-platform apps with a single codebase.",
    level: "Beginner",
    category: "Mobile",
    rating: 4.7,
    ratingCount: 18200,
    students: 78000,
    price: 399,
    thumbnail:
      "https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Learn Google's Flutter framework and the Dart language to create beautiful, natively compiled applications for mobile, web, and desktop.",
    whatYouWillLearn: [
      "Master Dart programming language",
      "Build stunning UIs with Flutter widgets",
      "Manage app state efficiently",
      "Deploy to App Store and Google Play",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "Dart Basics for Flutter",
        duration: "15:10",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "cloud-mastery",
    slug: "cloud-mastery",
    title: "Cloud Mastery: AWS & Azure",
    subtitle: "Architect and deploy scalable solutions on the world's leading clouds.",
    level: "Intermediate",
    category: "Cloud",
    rating: 4.6,
    ratingCount: 5600,
    students: 31000,
    price: 429,
    thumbnail:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "A complete guide to cloud architecture. Learn computing, storage, networking, and serverless on AWS and Azure.",
    whatYouWillLearn: [
      "Design highly available cloud systems",
      "Master AWS EC2, S3, and Lambda",
      "Learn Azure Fundamentals",
      "Optimize cloud costs and security",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "Cloud Computing Fundamentals",
        duration: "12:30",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "ai-llm-mastery",
    slug: "ai-llm-mastery",
    title: "AI & LLM Masterclass",
    subtitle: "Build intelligent applications with OpenAI, LangChain, and Llama 3.",
    level: "Advanced",
    category: "AI",
    rating: 4.9,
    ratingCount: 15600,
    students: 89000,
    price: 499,
    thumbnail:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Master the world of Generative AI. Learn to build RAG systems, fine-tune models, and deploy production-grade AI agents.",
    whatYouWillLearn: [
      "Build RAG systems with Vector Databases",
      "Master LangChain and OpenAI API",
      "Prompt Engineering at scale",
      "Deploy AI models to production",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "Intro to Generative AI",
        duration: "14:20",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "dsa-ultimate-guide",
    slug: "dsa-ultimate-guide",
    title: "DSA Ultimate Interview Guide",
    subtitle: "Crack coding interviews at FAANG with mastery of patterns and complexity.",
    level: "Intermediate",
    category: "Programming",
    rating: 4.8,
    ratingCount: 25000,
    students: 150000,
    price: 349,
    thumbnail:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Solve 300+ LeetCode problems. Master Arrays, Linked Lists, Trees, Graphs, and Dynamic Programming with visual explanations.",
    whatYouWillLearn: [
      "Master Time & Space Complexity",
      "Solve advanced DP problems",
      "Graph algorithms and traversals",
      "Interview-ready coding patterns",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "Big O Notation Deep Dive",
        duration: "18:45",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "blockchain-development",
    slug: "blockchain-development",
    title: "Web3 & Blockchain Dev",
    subtitle: "Build decentralized apps with Ethereum, Solidity, and Smart Contracts.",
    level: "Advanced",
    category: "Programming",
    rating: 4.7,
    ratingCount: 7800,
    students: 34000,
    price: 449,
    thumbnail:
      "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Become a Web3 developer. Learn to write secure Solidity code, deploy DApps, and understand the Ethereum ecosystem.",
    whatYouWillLearn: [
      "Write secure Smart Contracts",
      "Master Solidity syntax",
      "Integrate with Ethers.js",
      "Deploy to Ethereum Mainnet",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "Introduction to Web3",
        duration: "12:15",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
  {
    id: "digital-marketing-growth",
    slug: "digital-marketing-growth",
    title: "Digital Marketing & Growth",
    subtitle: "Master SEO, SEM, and modern performance marketing for business.",
    level: "Beginner",
    category: "Marketing",
    rating: 4.5,
    ratingCount: 10200,
    students: 58000,
    price: 349,
    thumbnail:
      "https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1200",
    heroVideoUrl:
      "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
    description:
      "Learn to drive traffic and conversion. From SEO audits to Google Ads and Social Media strategies.",
    whatYouWillLearn: [
      "Master Technical SEO",
      "Run profitable Google Ads",
      "Content Marketing strategy",
      "Analytics and ROAS tracking",
    ],
    curriculum: [
      {
        id: "lesson-1",
        title: "The Marketing Funnel",
        duration: "08:50",
        videoUrl:
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
      },
    ],
  },
];

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((course) => course.slug === slug);

