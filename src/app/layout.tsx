import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

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

const title = 'Bitcoin Singapore 2024';
const description =
  'A one-day conference focused on the latest developments in the Bitcoin community and dispel the myths that Ethereum had imposed on us in the past.';

export const metadata: Metadata = {
  title,
  description,
  icons: ['/favicon.jpg'],
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: title,
    url: 'https://btc-singapore.com',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-black">
      <body className={fontArticulatCF.className}>
        <main className="bg-black text-white min-h-screen selection:bg-[#FF9900]">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
