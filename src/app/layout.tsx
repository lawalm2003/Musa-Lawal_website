// app/layout.jsx
import './globals.css';
import 'aos/dist/aos.css';

import { Syne } from 'next/font/google';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], // match what you used before
});

export const metadata = {
  title: 'Musa Lawal Asemokhai | Frontend & Mobile Engineer',
  description:
    'Frontend and Mobile Engineer specializing in Vue.js, React.js, and React Native. Based in Port Harcourt, Nigeria.',
  keywords: [
    'Frontend Engineer',
    'Mobile Engineer',
    'Vue.js',
    'React',
    'React Native',
    'Nigeria',
  ],
  openGraph: {
    title: 'Musa Lawal Asemokhai | Frontend & Mobile Engineer',
    description:
      'Crafting performant, user-focused web and mobile experiences.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
      </head>
      <body className={syne.className}>{children}</body>
    </html>
  );
}
