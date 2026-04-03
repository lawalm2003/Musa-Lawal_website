// components/Skills.jsx

import SectionLabel from './SectionLabel';

const skillGroups = [
  {
    category: 'Core Languages',
    icon: '{ }',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Ecosystem',
    icon: '⚡',
    skills: ['React.js', 'Next.js', 'Vue.js', 'React Native'],
  },
  {
    category: 'Frontend Engineering',
    icon: '⚙',
    skills: [
      'Scalable Component Architecture',
      'State Management & Data Flow',
      'Responsive & Accessible UI Systems',
      'Performance Optimization',
    ],
  },
  {
    category: 'Backend Integration',
    icon: '🔗',
    skills: [
      'RESTful API Integration',
      'Authentication & Authorization Flows',
      'Firebase (Auth, Firestore)',
      'API Error Handling & Data Validation',
    ],
  },
  {
    category: 'Tooling & Workflow',
    icon: '🛠',
    skills: [
      'Git & GitHub (Version Control)',
      'Debugging & Performance Profiling',
      'Code Structuring & Best Practices',
      'Cross-Team Collaboration',
    ],
  },
];

const techTags = [
  'React.js',
  'Next.js',
  'Vue.js',
  'React Native',
  'TypeScript',
  'JavaScript',
  'Tailwind CSS',
  'Firebase',
  'REST APIs',
  'State Management',
  'Component Architecture',
  'Responsive Design',
  'Performance Optimization',
  'Mobile UI',
];

export default function Skills() {
  return (
    <section id='skills' className='relative z-10 py-28 px-8'>
      <div className='max-w-6xl mx-auto'>
        <div data-aos='fade-right'>
          <SectionLabel number='02' title='Expertise' />
        </div>

        <h2
          className='font-display font-bold tracking-[-0.03em] text-text-primary mb-14'
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          data-aos='fade-up'
        >
          Technical Expertise & Capabilities
        </h2>

        {/* Cards grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16'>
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className='relative bg-bg-card border border-border rounded-md p-7 transition-all duration-300 overflow-hidden group hover:border-border-bright hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)]'
              data-aos='fade-up'
              data-aos-delay={i * 80}
            >
              {/* Top accent line */}
              <div className='absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

              <div className='flex items-center gap-3 mb-5'>
                <span className='text-accent font-mono text-base leading-none'>
                  {group.icon}
                </span>
                <h3 className='font-mono text-[0.78rem] font-semibold uppercase tracking-widest text-text-secondary'>
                  {group.category}
                </h3>
              </div>

              <ul className='flex flex-col gap-2.5'>
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className='flex items-center gap-2.5 text-[0.875rem] text-text-primary'
                  >
                    <span className='w-1 h-1 rounded-full bg-accent flex-shrink-0' />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tag cloud */}
        <div
          className='border-t border-border pt-12'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <p className='font-mono text-[0.7rem] uppercase tracking-[0.15em] text-text-muted mb-5'>
            Core Technologies
          </p>
          <div className='flex flex-wrap gap-2.5'>
            {techTags.map((tag) => (
              <span
                key={tag}
                className='font-mono text-xs text-text-secondary border border-border px-3 py-1.5 rounded-full cursor-default transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent-dim'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
