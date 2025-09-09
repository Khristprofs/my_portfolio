// data/skills.js

export const skills = {
  'Languages': [
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
    { name: 'Rust', category: 'Languages', logoKey: 'rust' },
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
    { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Express.js', category: 'Frameworks/Libraries', logoKey: 'express' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
    { name: 'Vue.js', category: 'Frameworks/Libraries', logoKey: 'vuejs' },
    { name: 'Angular', category: 'Frameworks/Libraries', logoKey: 'angularjs' },
  ],
  'Virtual Assistance/Tools': [
    { name: 'Google Workspaces', category: 'Virtual Assistance/Tools', logoKey: 'google' },
    { name: 'MS Workspaces', category: 'Virtual Assistance/Tools', logoKey: 'ms' },
    { name: 'Zoom', category: 'Virtual Assistance/Tools', logoKey: 'zoom' },
    { name: 'Trello', category: 'Virtual Assistance/Tools', logoKey: 'trello' },
    { name: 'Asana', category: 'Virtual Assistance/Tools', logoKey: 'asana' },
  ],
  'Tools': [
    { name: 'Postbird', category: 'Tools', logoKey: 'postgres' },
    { name: 'MongoDB Compass', category: 'Tools', logoKey: 'mongodb' },
    { name: 'VS Code', category: 'Tools', logoKey: 'vscode' },
    { name: 'Draw.io', category: 'Tools', logoKey: 'draw.io' },
    { name: 'Figma', category: 'Tools', logoKey: 'figma' },
    { name: 'Notion', category: 'Tools', logoKey: 'notion' },
    { name: 'Postman', category: 'Tools', logoKey: 'postman' },
  ],
  'Cloud/DevOps': [
    { name: 'AWS', category: 'Cloud/DevOps', logoKey: 'amazonwebservices' },
    { name: 'Firebase', category: 'Cloud/DevOps', logoKey: 'firebase' },
    { name: 'MongoDB', category: 'Cloud/DevOps', logoKey: 'mongodb' },
    { name: 'PostgreSQL', category: 'Cloud/DevOps', logoKey: 'postgresql' },
    { name: 'Google Cloud', category: 'Cloud/DevOps', logoKey: 'googlecloud' },
  ],
  'Concepts': [
    { name: 'System Design', category: 'Concepts', logoKey: 'github' },
    { name: 'Data Structures & Algorithms', category: 'Concepts', logoKey: 'github' },
    { name: 'Distributed Systems', category: 'Concepts', logoKey: 'github' },
    { name: 'API Design', category: 'Concepts', logoKey: 'swagger' },
    { name: 'Microservices', category: 'Concepts', logoKey: 'docker' },
    { name: 'Security', category: 'Concepts', logoKey: 'github' },
  ],
};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills);
};