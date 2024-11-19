import './globals.css';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'CloudNest',
  description: 'CloudNest - Store, Share and Sync your files',
  keywords: [
    'cloud',
    'nest',
    'cloudnest',
    'cloudnest keep',
    'cloudnest storage',
    'CloudNest',
    'CloudNest keep',
    'CloudNest storage',
  ],
  authors: [{ name: 'Abiola Malik', url: 'https://cloudnest.vercel.app' }],
  creator: 'Abiola Malik',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
