import type { Metadata } from 'next';
import './globals.css';
import { SITE_DESCRIPTION, SITE_URL } from './site';

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Bakery',
  name: 'Água Mel',
  url: SITE_URL,
  image: `${SITE_URL}/og.jpg`,
  description: SITE_DESCRIPTION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Largo José Cavaco Vieira',
    addressLocality: 'Alte',
    addressCountry: 'PT',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Água Mel',
  title: 'Água Mel — Doçaria tradicional em Alte',
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '512x512' }],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Água Mel',
    description: 'Uma casa com história. Sabores com lugar.',
    url: '/',
    siteName: 'Água Mel',
    type: 'website',
    locale: 'pt_PT',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Água Mel — Uma casa com história. Sabores com lugar.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Água Mel',
    description: 'Uma casa com história. Sabores com lugar.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body>
        {children}
        <script
          id="local-business-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, '\\u003c') }}
        />
      </body>
    </html>
  );
}
