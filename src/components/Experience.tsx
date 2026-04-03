// components/Experience.jsx

import SectionLabel from './SectionLabel';

const experiences = [
  {
    role: 'Frontend Development',
    company: 'BluePeak Technologies',
    location: 'Remote (Abuja, FCT)',
    period: 'Mar 2025 – Dec 2025',
    type: 'Frontend Developer',
    color: '#7fff6e',
    highlights: [
      {
        area: null,
        items: [
          'Spearheaded UI development for an invoicing mobile app, redesigning complex form flows with reusable UI modules.',
          'Implemented document creation logic (items / customers / taxes / discounts) with strong validation and UX feedback.',
          'Built authentication and session management flows with clear user states.',
          'Delivered core modules of a football pitch booking app — from authentication through full booking flows.',
          'Collaborated with backend engineers to align API contracts and shared component patterns.',
        ],
      },
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Cypher Crescent Limited',
    location: 'Remote (Port Harcourt, Rivers State)',
    period: 'Mar 2025 – Dec 2025',
    type: 'Frontend Developer',
    color: '#6eb8ff',
    highlights: [
      {
        area: null,
        items: [
          'Integrated backend APIs into a client-facing company application by building reusable service layers and handling asynchronous data flows.',
          'Implemented data fetching and state updates using mutations, ensuring seamless synchronization between UI and backend systems.',
          'Transformed static UI components into dynamic, data-driven interfaces based on real-time API responses.',
          'Managed error handling, loading states, and user feedback to improve overall user experience.',
          'Collaborated with backend developers to align API structures and ensure efficient data exchange.',
        ],
      },
    ],
  },
  {
    role: 'Frontend Development',
    company: 'MyMeTickets',
    location: 'Remote (Abeokuta, Ogun State)',
    period: 'Mar 2025 – Dec 2025',
    type: 'Frontend Developer',
    color: '#c084fc',
    highlights: [
      {
        area: null,
        items: [
          'Built and maintained an admin user management dashboard in Vue with analytics and advanced filtering.',
          'Developed a paginated users table across personal, bank, wallet, and verification data.',
          'Implemented KYC review flows, verification badges, and moderation tools.',
          'Built email verification, OTP/2FA, forgot-password flows, and admin-triggered messaging systems.',
          'Contributed to user-facing web apps including authentication screens, dashboards, and event creation flows.',
        ],
      },
    ],
  },
  {
    role: 'Graduate Trainee — Frontend Development',
    company: 'Whitehat Academy',
    location: 'Port Harcourt, Rivers State',
    period: 'Apr 2024 – Jun 2024',
    type: 'Graduate Trainee',
    color: '#f97316',
    highlights: [
      {
        area: null,
        items: [
          'Learned and applied core frontend technologies including HTML, CSS, and JavaScript.',
          'Built responsive web pages with a focus on usability and accessibility.',
          'Translated design concepts into functional and user-friendly web interfaces.',
        ],
      },
    ],
  },
  {
    role: 'Student Intern — Software Development',
    company: 'Cypher Crescent Limited',
    location: 'Port Harcourt, Rivers State',
    period: 'Aug 2022 – Jan 2023',
    type: 'Student Intern',
    color: '#fb7185',
    highlights: [
      {
        area: null,
        items: [
          'Gained foundational experience in software development principles.',
          'Worked with C# to understand programming fundamentals and control structures.',
          'Assisted in debugging, testing, and maintaining application codebases.',
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id='experience' className='relative z-10 py-28 px-8'>
      <div className='max-w-4xl mx-auto'>
        <div data-aos='fade-right'>
          <SectionLabel number='03' title='Experience' />
        </div>

        <h2
          className='font-display font-bold tracking-[-0.03em] text-text-primary mb-16'
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          data-aos='fade-up'
        >
          Where I've Worked
        </h2>

        <div className='flex flex-col'>
          {experiences.map((exp, i) => (
            <div
              key={i}
              className='grid gap-8 pb-14 last:pb-0'
              style={{ gridTemplateColumns: '32px 1fr' }}
              data-aos='fade-up'
              data-aos-delay={i * 100}
            >
              {/* Timeline left */}
              <div className='flex flex-col items-center pt-1.5'>
                <div
                  className='w-3.5 h-3.5 rounded-full border-2 bg-bg z-10 flex-shrink-0 transition-transform duration-300 hover:scale-125'
                  style={{
                    borderColor: exp.color,
                    boxShadow: `0 0 15px ${exp.color}`,
                  }}
                />
                {i < experiences.length - 1 && (
                  <div className='flex-1 w-px bg-border mt-1.5' />
                )}
              </div>

              {/* Content */}
              <div>
                {/* Meta row */}
                <div className='flex items-center gap-4 flex-wrap mb-3'>
                  <span
                    className='font-mono text-[0.68rem] uppercase tracking-widest px-3 py-1 rounded-full border'
                    style={{
                      color: exp.color,
                      borderColor: exp.color,
                      background: `${exp.color}15`,
                    }}
                  >
                    {exp.type}
                  </span>
                  <span className='font-mono text-xs text-text-muted'>
                    {exp.period}
                  </span>
                </div>

                <h3 className='font-display font-bold text-xl tracking-[-0.02em] mb-1 text-text-primary'>
                  {exp.role}
                </h3>
                <p className='text-[0.875rem] text-text-secondary mb-6 flex items-center gap-2 flex-wrap'>
                  {exp.company}
                  <span className='text-text-muted'>·</span>
                  {exp.location}
                </p>

                <div className='flex flex-col gap-4'>
                  {exp.highlights.map((group, gi) => (
                    <div
                      key={gi}
                      className='bg-bg-card border border-border rounded-md px-6 py-5 transition-all duration-300 hover:border-border-bright'
                    >
                      {group.area && (
                        <p
                          className='font-mono text-[0.68rem] uppercase tracking-[0.12em] mb-3'
                          style={{ color: exp.color }}
                        >
                          {group.area}
                        </p>
                      )}
                      <ul className='flex flex-col gap-2.5'>
                        {group.items.map((item, ii) => (
                          <li
                            key={ii}
                            className='flex items-start gap-3 text-[0.875rem] text-text-secondary leading-[1.6]'
                          >
                            <span
                              className='w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[0.5em]'
                              style={{ background: exp.color }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
