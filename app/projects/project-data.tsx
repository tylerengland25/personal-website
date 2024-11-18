export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  contributions: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  url: string;
  githubUrl?: string;
  technicalSheet: string[];
  resources?: {
    title: string;
    url: string;
  }[];
}

export const projectTags = [
  'Web Development',
  'Machine Learning',
  'Data Science',
  'UI/UX',
  'Frontend',
  'Backend',
  'Full Stack',
  'React',
  'Next.js',
  'Python',
] as const;

export const projects: Project[] = [
  {
    id: 'sports-analytics-dashboard',
    title: 'Sports Analytics Dashboard',
    shortDescription: 'Real-time sports analytics and visualization platform',
    fullDescription: `
      A comprehensive sports analytics platform that provides real-time insights into game
      statistics, player performance metrics, and predictive analytics. The dashboard features
      interactive visualizations, live data updates, and customizable reporting tools for
      sports analysts and decision makers.
    `,
    contributions: `
      Led the development of the frontend architecture using React and D3.js. Implemented
      real-time data visualization components, designed the WebSocket integration for live
      updates, and created a responsive, intuitive user interface that handles complex data
      representations.
    `,
    thumbnail: '/projects/sports-betting.png',
    images: [
      '/projects/sports-betting-1.png',
      '/projects/sports-betting-2.png',
      '/projects/sports-betting-3.png',
    ],
    tags: ['Web Development', 'Frontend', 'React', 'Data Science'],
    url: 'https://example.com/sports-dashboard',
    technicalSheet: [
      'React.js',
      'D3.js',
      'Node.js',
      'WebSocket',
      'MongoDB',
      'TypeScript',
      'TailwindCSS',
    ],
    resources: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/username/sports-analytics',
      },
    ],
  },
  {
    id: 'stock-price-prediction',
    title: 'Stock Price Prediction',
    shortDescription: 'Machine learning model for predicting stock prices',
    fullDescription: `
      An advanced machine learning system that analyzes historical stock data, market trends,
      and various economic indicators to predict future stock prices. The platform includes
      backtesting capabilities, risk assessment tools, and automated trading strategy
      simulation.
    `,
    contributions: `
      Developed and optimized machine learning models using PyTorch and scikit-learn.
      Implemented data preprocessing pipelines, feature engineering, and model evaluation
      frameworks. Created a REST API for model deployment and integration.
    `,
    thumbnail: '/projects/stock-analysis.jpeg',
    images: [
      '/projects/stock-analysis-1.png',
      '/projects/stock-analysis-2.png',
      '/projects/stock-analysis-3.png',
    ],
    tags: ['Machine Learning', 'Python', 'Data Science', 'Backend'],
    url: 'https://example.com/stock-prediction',
    technicalSheet: [
      'Python',
      'PyTorch',
      'scikit-learn',
      'FastAPI',
      'PostgreSQL',
      'Docker',
      'AWS',
    ],
    resources: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/username/stock-prediction',
      },
      {
        title: 'Technical Documentation',
        url: 'https://docs.example.com/stock-prediction',
      },
    ],
  },
  {
    id: 'performance-metrics-tool',
    title: 'Performance Metrics Tool',
    shortDescription: 'Comprehensive athlete performance tracking system',
    fullDescription: `
      A sophisticated analytics platform designed to track and analyze athlete performance
      metrics across multiple sports. The system incorporates machine learning algorithms
      for performance prediction, injury prevention, and training optimization, while
      providing coaches and athletes with actionable insights.
    `,
    contributions: `
      Architected the full-stack application using Next.js and Python. Implemented data
      collection systems, designed the database schema, and created interactive dashboards
      for performance visualization. Developed machine learning models for performance
      prediction and injury risk assessment.
    `,
    thumbnail: '/projects/discord-stock-thumbnail.png',
    images: [
      '/projects/metrics-tool-1.png',
      '/projects/metrics-tool-2.png',
      '/projects/metrics-tool-3.png',
    ],
    tags: ['Full Stack', 'Machine Learning', 'Next.js', 'Python'],
    url: 'https://example.com/metrics-tool',
    technicalSheet: [
      'Next.js',
      'Python',
      'TensorFlow',
      'PostgreSQL',
      'Redis',
      'GraphQL',
      'AWS',
    ],
    resources: [
      {
        title: 'GitHub Repository',
        url: 'https://github.com/username/performance-metrics',
      },
      {
        title: 'API Documentation',
        url: 'https://api.example.com/docs',
      },
      {
        title: 'Research Paper',
        url: 'https://example.com/research-paper.pdf',
      },
    ],
  },
];
