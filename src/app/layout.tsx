import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import localFont from 'next/font/local';
import './globals.css';
import Footer from '@/components/footer';

const fontArticulatCF = localFont({
  src: [
    { path: '../styles/fonts/ArticulatCF-Normal.woff2', weight: '400' },
    { path: '../styles/fonts/ArticulatCF-Medium.woff2', weight: '500' },
    { path: '../styles/fonts/ArticulatCF-DemiBold.woff2', weight: '600' },
    { path: '../styles/fonts/ArticulatCF-Bold.woff2', weight: '700' },
    { path: '../styles/fonts/ArticulatCF-ExtraBold.woff2', weight: '800' },
  ],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Bitcoin Singapore 2024',
  description:
    'a one-day conference focused on the latest developments in the Bitcoin community and dispel the myths that Ethereum had imposed on us in the past.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontArticulatCF.className}>
        <main className="bg-black text-white min-h-screen">
          <div className="max-w-[1440px] mx-auto pt-[38px]">
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
