export interface Job {
  id: string;
  title: string;
  location: string;
  type: string;
  tags: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary?: string;
  posted: string;
}

export const jobs: Job[] = [
  {
    id: 'fullstack-node-senior',
    title: 'Senior Full Stack Developer (Node.js)',
    location: 'Remote',
    type: 'Full-time',
    tags: ['Remote', 'Full Stack', 'Node.js', 'React', 'Mobile', 'Senior Level'],
    description: 'We are seeking an experienced Full Stack Developer to own web platforms and companion React Native apps for clients generating $100M+ in revenue.',
    requirements: [
      '5+ years of professional experience in full-stack development',
      'Strong expertise in Node.js and Express.js',
      'Proficiency in React for web and React Native for mobile',
      'Experience with TypeScript',
      'Solid understanding of MySQL/PostgreSQL databases',
      'Experience with AWS or cloud platforms',
      'Knowledge of RESTful API design and GraphQL',
      'Strong problem-solving and debugging skills',
      'Excellent communication skills for remote collaboration'
    ],
    responsibilities: [
      'Design and develop scalable web applications and React Native experiences',
      'Build and maintain RESTful APIs and GraphQL endpoints',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable, and well-documented code',
      'Participate in code reviews and mentor junior developers',
      'Optimize performance across web and mobile clients',
      'Ensure data security and confidentiality best practices'
    ],
    salary: 'Competitive — aligned with senior experience and geography',
    posted: '2025-10-10'
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Full-time',
    tags: ['Remote', 'Design', 'UI/UX', 'Figma', 'User Research'],
    description: 'We are looking for a creative UI/UX Designer to create exceptional user experiences for web and mobile applications.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma, Sketch, or Adobe XD',
      'Strong portfolio demonstrating web and mobile design',
      'Understanding of user-centered design principles',
      'Experience with user research and usability testing',
      'Knowledge of responsive and mobile-first design',
      'Familiarity with design systems and component libraries',
      'Basic understanding of HTML/CSS is a plus'
    ],
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Design intuitive user interfaces for web and mobile',
      'Develop and maintain design systems',
      'Collaborate with developers on implementation',
      'Present design concepts to stakeholders',
      'Iterate designs based on user feedback and analytics'
    ],
    salary: 'Competitive — reflective of portfolio and impact',
    posted: '2025-10-09'
  },
  {
    id: 'ai-agent-engineer',
    title: 'AI Agent Engineer (MCP + TypeScript)',
    location: 'Remote',
    type: 'Full-time',
    tags: ['Remote', 'AI/ML', 'Agents', 'TypeScript', 'MCP'],
    description: 'Help us build custom Model Context Protocol (MCP) agents that let non-technical stakeholders converse with live databases, CRMs, and codebases.',
    requirements: [
      '4+ years of backend or full-stack experience with TypeScript/Node.js',
      'Hands-on experience integrating LLMs (OpenAI, Anthropic, etc.)',
      'Familiarity with MCP or comparable agent frameworks',
      'Ability to design secure data adapters for enterprise systems',
      'Understanding of prompt engineering and function calling best practices',
      'Comfort shipping production services with observability and testing'
    ],
    responsibilities: [
      'Design and implement AI agents that orchestrate MCP tools and workflows',
      'Collaborate with product teams to translate use cases into agent capabilities',
      'Instrument evaluation pipelines for accuracy, latency, and safety',
      'Work with security teams to manage secrets, permissions, and audit logging',
      'Document internal SDKs and enable partner teams to extend agent behaviors'
    ],
    salary: 'Competitive — tailored to AI skill set and region',
    posted: '2025-10-15'
  },
  {
    id: 'rag-platform-engineer',
    title: 'RAG Platform Engineer',
    location: 'Remote',
    type: 'Full-time',
    tags: ['Remote', 'AI/ML', 'RAG', 'Data', 'Python'],
    description: 'Own the retrieval-augmented generation stack that powers our knowledge copilots for enterprise clients.',
    requirements: [
      '5+ years of experience with data engineering or search infrastructure',
      'Proficiency with Python or TypeScript services and vector databases (Pinecone, Weaviate, pgvector)',
      'Experience building ingestion pipelines for unstructured data',
      'Knowledge of embedding strategies, chunking, and evaluation methodologies',
      'Understanding of access controls, PII redaction, and compliance requirements',
      'Comfort deploying workloads on AWS, GCP, or Azure'
    ],
    responsibilities: [
      'Design ingestion pipelines that keep client knowledge bases fresh',
      'Tune retrieval quality through evaluation suites and feedback loops',
      'Work with frontend teams to expose reliable, real-time answers',
      'Implement monitoring, analytics, and guardrails for RAG workloads',
      'Collaborate with DevOps on scalable, cost-aware deployments'
    ],
    salary: 'Competitive — reflective of applied AI experience',
    posted: '2025-10-16'
  },
  {
    id: 'ai-product-strategist',
    title: 'AI Product Strategist',
    location: 'Remote',
    type: 'Contract-to-hire',
    tags: ['Remote', 'AI/ML', 'Product', 'Strategy', 'Client-Facing'],
    description: 'Partner with executives to uncover high-ROI automation opportunities and shape the roadmap for agents, analytics, and product modernization.',
    requirements: [
      '7+ years leading product discovery or innovation initiatives',
      'Strong grasp of LLM capabilities, limitations, and responsible AI practices',
      'Ability to run workshops with both technical and business stakeholders',
      'Experience translating qualitative research into prioritized roadmaps',
      'Excellent communication skills with C-level stakeholders'
    ],
    responsibilities: [
      'Lead discovery sprints to identify impactful AI use cases',
      'Define success metrics and validation plans alongside engineering leads',
      'Create GTM briefs and executive-ready artifacts for internal and client teams',
      'Partner with delivery squads through pilot, launch, and adoption phases',
      'Share learnings that refine our internal playbooks and accelerators'
    ],
    salary: 'Competitive — combination of retainer plus success incentives',
    posted: '2025-10-16'
  }
];

export const jobTags = [
  'All',
  'Remote',
  'Full Stack',
  'Node.js',
  'React',
  'Mobile',
  'Design',
  'UI/UX',
  'AI/ML',
  'Agents',
  'RAG',
  'MCP',
  'Product'
];
