// components/Footer.jsx

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='relative z-10 border-t border-border px-8 py-7'>
      <div className='max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4'>
        <div className='flex items-center gap-5 flex-wrap'>
          <span className='font-display font-black text-base text-text-primary flex items-center gap-0.5'>
            <span className='text-accent font-mono font-light'>&lt;</span>
            ML
            <span className='text-accent font-mono font-light'>/&gt;</span>
          </span>
          <span className='font-mono text-[0.75rem] text-text-muted'>
            © {year} Musa Lawal Asemokhai. All rights reserved.
          </span>
        </div>

        <span className='font-mono text-[0.75rem] text-text-muted'>
          Built with <span className='text-[#ff6b6b]'>♥</span> using Next.js
        </span>
      </div>
    </footer>
  );
}
