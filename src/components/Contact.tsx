// components/Contact.jsx

import Link from 'next/link';
import SectionLabel from './SectionLabel';

const socials = [
  {
    label: 'Email',
    value: 'lawalm891@gmail.com',
    href: 'mailto:lawalm891@gmail.com',
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <rect x='2' y='4' width='20' height='16' rx='2' />
        <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/lawal-musa-72a972',
    href: 'https://linkedin.com/in/lawal-musa-72a972',
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
        <rect x='2' y='9' width='4' height='12' />
        <circle cx='4' cy='4' r='2' />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+234 816 842 3713',
    href: 'tel:+2348168423713',
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 5.5 5.5l.79-1.89a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z' />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/lawalm2003',
    href: 'https://github.com/lawalm2003',
    icon: (
      <svg
        width='20'
        height='20'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.66-.22.66-.48 0-.24-.01-1.02-.02-1.85-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.84c.82 0 1.65.11 2.42.32 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.16.59.67.48A10.03 10.03 0 0 0 22 12.26C22 6.58 17.52 2 12 2z' />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id='contact' className='relative z-10 py-28 px-8 pb-20'>
      <div className='max-w-6xl mx-auto'>
        <div data-aos='fade-right'>
          <SectionLabel number='05' title='Contact' />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          {/* Left */}
          <div>
            <h2
              className='font-display font-bold tracking-[-0.03em] leading-[1.1] text-text-primary mb-5'
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              data-aos='fade-up'
            >
              Let's build something{' '}
              <span className='font-serif italic font-normal text-accent'>
                great together.
              </span>
            </h2>

            <p
              className='text-[0.95rem] text-text-secondary leading-[1.8] mb-10'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              I'm currently open to new frontend and mobile engineering
              opportunities. Whether you have a full role, a freelance project,
              or just want to connect — my inbox is always open.
            </p>

            {/* Socials */}
            <div
              className='flex flex-col gap-3'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel='noopener noreferrer'
                  className='flex items-center gap-4 bg-bg-card border border-border rounded-md px-5 py-4 transition-all duration-200 group hover:border-accent hover:bg-accent-dim hover:translate-x-1'
                >
                  <span className='text-text-muted group-hover:text-accent transition-colors duration-200 flex-shrink-0'>
                    {s.icon}
                  </span>
                  <div className='flex flex-col gap-0.5 flex-1'>
                    <span className='font-mono text-[0.65rem] uppercase tracking-widest text-text-muted'>
                      {s.label}
                    </span>
                    <span className='text-[0.875rem] text-text-primary'>
                      {s.value}
                    </span>
                  </div>
                  <svg
                    className='text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent -translate-x-1 group-hover:translate-x-0 transition-all duration-200'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      d='M3 8h10M9 4l4 4-4 4'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <div data-aos='fade-left' data-aos-delay='150'>
            <div className='relative bg-bg-card border border-border rounded-xl px-10 py-14 text-center overflow-hidden transition-all duration-300 hover:border-accent/30'>
              {/* Glow */}
              <div
                className='absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none'
                style={{
                  background:
                    'radial-gradient(circle, rgba(127,255,110,0.4) 0%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
              />

              <p className='relative font-mono text-[0.7rem] uppercase tracking-[0.12em] text-accent mb-4'>
                Currently available
              </p>
              <h3 className='relative font-display font-bold text-2xl tracking-[-0.02em] text-text-primary mb-3'>
                Ready to contribute to your team
              </h3>
              <p className='relative font-mono text-[0.78rem] text-text-secondary leading-[1.6] mb-8'>
                Frontend & Mobile Engineering · Vue.js · React.js · React Native
              </p>
              <Link
                href='mailto:lawalm891@gmail.com?subject=Let’s%20Work%20Together'
                className='relative inline-flex items-center gap-2 bg-accent text-bg font-display font-bold text-sm uppercase tracking-widest px-8 py-3.5 rounded-sm transition-all duration-200 hover:bg-[#a8ffaa] hover:shadow-[0_0_40px_rgba(127,255,110,0.4)] hover:-translate-y-0.5'
              >
                Send me an email
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M3 8h10M9 4l4 4-4 4'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
