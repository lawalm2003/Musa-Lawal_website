// app/loading.tsx
// Place this file at: app/loading.tsx
// Next.js automatically shows this while any page in the app is loading.
// You can also create route-specific loaders e.g. app/projects/[slug]/loading.tsx

export default function Loading() {
  return (
    <div className='min-h-screen bg-bg flex items-center justify-center px-6 relative overflow-hidden'>
      {/* Grid background */}
      <div
        className='fixed inset-0 pointer-events-none z-0'
        style={{
          backgroundImage:
            'linear-gradient(rgba(127,255,110,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(127,255,110,0.02) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <div
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(127,255,110,0.06) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      <div className='relative z-10 flex flex-col items-center gap-10 w-full max-w-xs'>
        {/* ── Logo mark ── */}
        <div className='flex flex-col items-center gap-6'>
          <div className='relative'>
            {/* Outer rotating ring */}
            <svg
              className='absolute inset-0'
              width='72'
              height='72'
              viewBox='0 0 72 72'
              style={{ animation: 'spin 3s linear infinite' }}
            >
              <circle
                cx='36'
                cy='36'
                r='32'
                fill='none'
                stroke='rgba(127,255,110,0.15)'
                strokeWidth='1'
              />
              <circle
                cx='36'
                cy='36'
                r='32'
                fill='none'
                stroke='#7fff6e'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeDasharray='20 180'
              />
            </svg>

            {/* Inner counter-rotating ring */}
            <svg
              className='absolute inset-[8px]'
              width='56'
              height='56'
              viewBox='0 0 56 56'
              style={{ animation: 'spin 2s linear infinite reverse' }}
            >
              <circle
                cx='28'
                cy='28'
                r='24'
                fill='none'
                stroke='rgba(110,184,255,0.2)'
                strokeWidth='1'
                strokeDasharray='8 12'
              />
            </svg>

            {/* Logo center */}
            <div className='w-[72px] h-[72px] flex items-center justify-center'>
              <span
                className='font-display font-black text-lg tracking-tight'
                style={{ color: '#7fff6e' }}
              >
                ML
              </span>
            </div>
          </div>

          {/* Label */}
          <div className='flex items-center gap-2'>
            <span
              className='font-mono text-[0.7rem] uppercase tracking-[0.2em] text-text-muted'
              style={{ animation: 'fadeInOut 1.5s ease-in-out infinite' }}
            >
              Loading
            </span>
            <span className='flex gap-1'>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className='w-1 h-1 rounded-full bg-accent'
                  style={{
                    animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
                  }}
                />
              ))}
            </span>
          </div>
        </div>

        {/* ── Progress bar ── */}
        <div className='w-full'>
          <div className='w-full h-px bg-border rounded-full overflow-hidden'>
            <div
              className='h-full rounded-full'
              style={{
                background:
                  'linear-gradient(90deg, transparent, #7fff6e, transparent)',
                animation: 'shimmer 1.8s ease-in-out infinite',
                width: '40%',
              }}
            />
          </div>
        </div>
      </div>

      {/* Keyframes injected inline — no extra CSS file needed */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0);    opacity: 0.4; }
          40%            { transform: translateY(-5px); opacity: 1;   }
        }
        @keyframes shimmer {
          0%   { transform: translateX(-200%); }
          100% { transform: translateX(400%);  }
        }
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1;   }
        }
      `}</style>
    </div>
  );
}
