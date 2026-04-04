// components/Navbar.jsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-bg/85 backdrop-blur-xl border-b border-border'
          : 'py-6'
      }`}
    >
      <div className='max-w-6xl mx-auto px-8 flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='#hero'
          className='flex items-center gap-0.5 font-display font-black text-xl tracking-tight text-text-primary'
        >
          <span className='text-accent font-mono font-light'>&lt;</span>
          ML
          <span className='text-accent font-mono font-light'>/&gt;</span>
        </Link>

        {/* Desktop Links */}
        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className='relative text-xs font-medium text-text-secondary uppercase tracking-widest transition-colors duration-200 hover:text-text-primary group'
              >
                {link.label}
                <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full' />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href='mailto:lawalm891@gmail.com'
              className='text-xs font-bold uppercase tracking-widest bg-accent text-bg px-5 py-2 rounded-sm transition-all duration-200 hover:bg-text-primary hover:shadow-[0_0_20px_rgba(127,255,110,0.4)]'
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* Mobile Burger */}
        <button
          className='md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 origin-center ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-text-primary transition-all duration-300 origin-center ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden fixed inset-0 top-[70px] bg-bg/97 backdrop-blur-3xl flex flex-col items-center justify-center gap-10 animate-slideIn z-40'>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className='text-xl font-medium uppercase tracking-widest text-text-secondary hover:text-text-primary transition-colors'
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href='mailto:lawalm891@gmail.com'
            className='text-base font-bold uppercase tracking-widest bg-accent text-bg px-8 py-3 rounded-sm'
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  );
}
