import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: 'Água Mel — Doçaria tradicional em Alte',
  description: 'Uma casa com história e sabores com lugar, entre os quatro cerros de Alte.',
  openGraph: {
    title: 'Água Mel',
    description: 'Uma casa com história. Sabores com lugar.',
    type: 'website',
    locale: 'pt_PT',
    images: [{ url: '/og.png', width: 1792, height: 935, alt: 'Água Mel — Uma casa com história. Sabores com lugar.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Água Mel',
    description: 'Uma casa com história. Sabores com lugar.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt"><body>{children}</body></html>;
}
