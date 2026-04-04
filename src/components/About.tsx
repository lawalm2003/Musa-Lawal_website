// components/About.jsx

import Link from 'next/link';
import SectionLabel from './SectionLabel';

export default function About() {
  return (
    <section id='about' className='relative z-10 py-28 px-8'>
      <div className='max-w-6xl mx-auto'>
        <div data-aos='fade-right'>
          <SectionLabel number='01' title='About' />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-start'>
          {/* Left */}
          <div>
            <h2
              className='font-display font-bold tracking-[-0.03em] leading-[1.1] mb-6 text-text-primary'
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              data-aos='fade-up'
            >
              Building the web,{' '}
              <span className='font-serif italic font-normal text-accent'>
                one pixel at a time.
              </span>
            </h2>

            <p
              className='text-text-secondary text-[0.95rem] leading-[1.8] mb-5'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              I am a Frontend and Mobile Engineer based in Port Harcourt, Rivers
              State, Nigeria, specializing in building responsive,
              high-performance applications for web and mobile platforms. I
              focus on translating design concepts into seamless,
              production-ready experiences that balance aesthetics with
              functionality. My work is driven by a strong attention to detail,
              ensuring that every interface is intuitive, accessible, and
              consistent across devices.
            </p>

            <p
              className='text-text-secondary text-[0.95rem] leading-[1.8] mb-5'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              From architecting scalable component structures to optimizing
              performance and state management, I approach development with a
              systems mindset. I prioritize clean, maintainable code and
              reusable patterns that support long-term growth and adaptability.
              Whether working with modern frameworks or integrating APIs, I aim
              to deliver solutions that are both efficient and easy to extend.
            </p>

            {/* <p
              className='text-text-secondary text-[0.95rem] leading-[1.8] mb-8'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              I am particularly interested in crafting user experiences that
              feel fluid and responsive, with thoughtful interactions and
              meaningful feedback at every touchpoint. My goal is to build
              products that not only meet functional requirements but also
              create a lasting impression through clarity, performance, and
              overall user satisfaction.
            </p> */}

            {/* Meta */}
            <div
              className='border-t border-border pt-6 flex flex-col gap-3'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              {[
                {
                  key: 'Education',
                  val: 'B.Sc. Computer Science — Rivers State University, 2023',
                },
                { key: 'Location', val: 'Port Harcourt, Rivers State 🇳🇬' },
                {
                  key: 'Email',
                  val: 'lawalm891@gmail.com',
                  href: 'mailto:lawalm891@gmail.com',
                },
                {
                  key: 'LinkedIn',
                  val: 'linkedin.com/in/lawal-musa-72a972',
                  href: 'https://linkedin.com/in/lawal-musa-72a972',
                },
              ].map(({ key, val, href }) => (
                <div
                  key={key}
                  className='grid gap-4'
                  style={{ gridTemplateColumns: '100px 1fr' }}
                >
                  <span className='font-mono text-[0.7rem] uppercase tracking-[0.1em] text-text-muted pt-0.5'>
                    {key}
                  </span>
                  {href ? (
                    <Link
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel='noopener noreferrer'
                      className='text-[0.875rem] text-accent hover:opacity-70 transition-opacity'
                    >
                      {val}
                    </Link>
                  ) : (
                    <span className='text-[0.875rem] text-text-secondary'>
                      {val}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right — code card */}
          <div data-aos='fade-left' data-aos-delay='150'>
            <div className='bg-bg-card border border-border rounded-lg overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] lg:sticky lg:top-24'>
              {/* Card header */}
              <div className='flex items-center gap-2 px-4 py-3 border-b border-border bg-white/[0.02]'>
                <span className='w-2.5 h-2.5 rounded-full bg-[#ff5f57]' />
                <span className='w-2.5 h-2.5 rounded-full bg-[#ffd700]' />
                <span className='w-2.5 h-2.5 rounded-full bg-accent' />
                <span className='font-mono text-[0.75rem] text-text-muted ml-2'>
                  profile.json
                </span>
              </div>
              {/* Code */}
              <pre className='p-6 font-mono text-[0.82rem] leading-[1.7] overflow-x-auto text-[#7dd3fc] whitespace-pre'>
                {`{
  "name": "Musa Lawal Asemokhai",
  "title": "Frontend & Mobile Engineer",
  "location": "Port Harcourt, Nigeria",
  "expertise": {
    "frontend": ["React.js", "Vue.js", "Next.js"],
    "mobile": ["React Native"],
    "backend_integration": ["REST APIs", "Firebase"]
  },
  "core_strengths": [
    "Scalable Component Architecture",
    "Responsive & Accessible UI Systems",
    "Authentication & State Management",
    "Performance Optimization",
    "Cross-Platform Development"
  ],
  "tooling": [
    "TypeScript",
    "Tailwind CSS",
    "Git",
    "Firebase"
  ],
 
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
