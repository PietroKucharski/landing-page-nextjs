import { Layout } from '@/components/layout/layout';
import '@/styles/globals.css';

export const metadata = {
  title: 'Site.Set',
  description: 'Venda seus produtos como afiliado em um único lugar',
   openGraph: {
    title: "Site.Set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://landing-page-nextjs-lake-omega.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://landing-page-nextjs-lake-omega.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}