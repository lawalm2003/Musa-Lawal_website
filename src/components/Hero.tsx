// components/Hero.jsx
'use client';

import { tech } from '@/util/data';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const orbRef = useRef<HTMLDivElement | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePosition({ x, y });
      orbRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-8 pt-32 pb-32'
    >
      {/* Animated gradient background */}
      <div className='absolute inset-0 bg-gradient-to-br from-bg via-bg to-accent-dim/20' />

      {/* Enhanced ambient orb */}
      <div
        ref={orbRef}
        className='absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full pointer-events-none transition-transform duration-1000 ease-out will-change-transform'
        style={{
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle at center, rgba(127,255,110,0.12) 0%, rgba(110,184,255,0.06) 50%, transparent 80%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Floating particles */}
      <div className='absolute inset-0 pointer-events-none'>
        <div
          className='absolute top-[20%] left-[10%] w-1 h-1 bg-accent/30 rounded-full animate-pulse'
          style={{ animationDuration: '3s' }}
        />
        <div
          className='absolute top-[60%] right-[15%] w-2 h-2 bg-accent/20 rounded-full animate-pulse'
          style={{ animationDuration: '4s' }}
        />
        <div
          className='absolute bottom-[30%] left-[20%] w-1.5 h-1.5 bg-accent/25 rounded-full animate-pulse'
          style={{ animationDuration: '3.5s' }}
        />
        <div
          className='absolute top-[40%] right-[30%] w-1 h-1 bg-accent/20 rounded-full animate-pulse'
          style={{ animationDuration: '2.5s' }}
        />
      </div>

      <div className='relative z-10 max-w-5xl w-full mx-auto text-center'>
        {/* Professional Badge */}
        <div
          className='inline-flex items-center gap-2 border border-accent/20 bg-accent-dim/80 backdrop-blur-sm px-4 py-2 rounded-full font-mono text-accent text-xs uppercase tracking-wider mb-10 shadow-lg'
          data-aos='fade-down'
          data-aos-delay='100'
        >
          <span className='w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0' />
          <span className='font-medium'>OPEN FOR WORK</span>
          <span className='w-px h-3 bg-accent/30 mx-1' />
          <span>Remote · Worldwide</span>
        </div>

        {/* Main Heading with refined typography */}
        <div className='space-y-3 mb-8' data-aos='fade-up' data-aos-delay='200'>
          <h1 className='font-display font-black leading-[1.05] tracking-tighter'>
            <span className='block text-text-primary text-[clamp(3rem,8vw,7rem)]'>
              Musa Lawal
            </span>
            <span className='block text-[clamp(2rem,6vw,5rem)]'>
              <span className='text-text-primary'>Asemokhai</span>
              <span className='text-stroke-accent ml-3'>×</span>
            </span>
          </h1>
        </div>

        {/* Professional Role Line */}
        <div
          className='flex items-center justify-center gap-3 mb-8'
          data-aos='fade-up'
          data-aos-delay='300'
        >
          <span className='font-mono text-sm text-accent font-semibold tracking-wide'>
            FRONTEND
          </span>
          <span className='text-accent/50 text-lg font-light'>/</span>
          <span className='font-mono text-sm text-text-secondary tracking-wide'>
            MOBILE ENGINEER
          </span>
        </div>

        {/* Enhanced Bio with better hierarchy */}
        <div
          className='max-w-2xl mx-auto mb-12'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <p className='text-text-secondary text-lg md:text-xl leading-relaxed font-light'>
            Building exceptional digital experiences with a focus on
            <span className='block mt-2'>
              performance, accessibility, and pixel-perfect execution.
            </span>
          </p>

          {/* Tech stack pills */}
          <div className='flex flex-wrap items-center justify-center gap-3 mt-6'>
            {tech.map((t) => (
              <div
                key={t.name}
                className='group inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-bg-card border border-border transition-all duration-200 hover:border-accent hover:bg-bg-card-hover hover:scale-105'
              >
                <Image
                  src={t.logo}
                  alt={t.name}
                  width={20}
                  height={20}
                  className='transition-transform duration-200 group-hover:rotate-6'
                />
                <span className='text-sm text-text-primary font-medium'>
                  {t.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional CTA Buttons */}
        <div
          className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-20'
          data-aos='fade-up'
          data-aos-delay='500'
        >
          <a
            href='#experience'
            className='group relative inline-flex items-center justify-center gap-2 bg-accent text-bg font-display font-semibold text-sm uppercase tracking-wider px-8 py-3.5 rounded-md transition-all duration-300 hover:shadow-[0_0_30px_rgba(127,255,110,0.3)] hover:-translate-y-0.5 active:translate-y-0 overflow-hidden'
          >
            <span className='relative z-10'>View Portfolio</span>
            <svg
              className='relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1'
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
            <div className='absolute inset-0 bg-gradient-to-r from-accent to-[#9bff8a] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </a>

          <a
            href='#contact'
            className='inline-flex items-center gap-2 border border-border-bright bg-transparent text-text-primary font-display font-medium text-sm uppercase tracking-wider px-8 py-3.5 rounded-md transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent-dim/30 hover:-translate-y-0.5'
          >
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
            >
              <path
                d='M22 2L15 9M22 2l-7 20-4-9-9-4 20-7z'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Get In Touch
          </a>

          <a
            href='/musa-lawal-asemokhai-resume.pdf'
            target='_blank'
            className='inline-flex items-center gap-2 text-text-secondary font-mono text-sm tracking-wide transition-colors duration-200 hover:text-accent'
          >
            <svg
              width='14'
              height='14'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='1.5'
            >
              <path
                d='M12 5v14m-7-7h14'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Resume
          </a>
        </div>

        {/* Enhanced Stats Cards */}
        <div
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto'
          data-aos='fade-up'
          data-aos-delay='600'
        >
          <div className='group relative bg-gradient-to-br from-white/[0.03] to-transparent border border-border/50 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-accent-dim/10'>
            <div className='flex flex-col items-center gap-2'>
              <span className='font-display font-black text-4xl md:text-5xl text-accent tracking-tighter'>
                2+
              </span>
              <span className='font-mono text-xs text-text-muted uppercase tracking-wider'>
                Years Experience
              </span>
              <div className='w-8 h-px bg-accent/20 group-hover:w-12 transition-all duration-300' />
            </div>
          </div>

          <div className='group relative bg-gradient-to-br from-white/[0.03] to-transparent border border-border/50 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-accent-dim/10'>
            <div className='flex flex-col items-center gap-2'>
              <span className='font-display font-black text-4xl md:text-5xl text-accent tracking-tighter'>
                10+
              </span>
              <span className='font-mono text-xs text-text-muted uppercase tracking-wider'>
                Projects Completed
              </span>
              <div className='w-8 h-px bg-accent/20 group-hover:w-12 transition-all duration-300' />
            </div>
          </div>

          <div className='group relative bg-gradient-to-br from-white/[0.03] to-transparent border border-border/50 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-accent-dim/10'>
            <div className='flex flex-col items-center gap-2'>
              <span className='font-display font-black text-4xl md:text-5xl text-accent tracking-tighter'>
                100%
              </span>
              <span className='font-mono text-xs text-text-muted uppercase tracking-wider'>
                Client Satisfaction
              </span>
              <div className='w-8 h-px bg-accent/20 group-hover:w-12 transition-all duration-300' />
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div
        className='absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300'
        data-aos='fade-up'
        data-aos-delay='800'
      >
        <span className='font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.2em] font-medium'>
          Explore
        </span>
        <div className='w-5 h-8 border border-border/50 rounded-full flex justify-center pt-1.5'>
          <div className='w-0.5 h-2 bg-accent rounded-full animate-bounce' />
        </div>
      </div>
    </section>
  );
}
