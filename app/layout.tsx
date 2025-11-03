import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Wolfron Technologies LLP | Mobility-Tech & SaaS Innovation",
  description: "Building India's digital backbone for mobility — empowering taxi vendors, drivers, and fleet owners through technology.",
  keywords: "TaxiWale Partners, Mobility Tech India, Taxi Lead Network, Wolfron Technologies, Orions Tech Elite, Taxi Website Packages",
  authors: [{ name: "Wolfron Technologies LLP" }],
  openGraph: {
    title: "Wolfron Technologies LLP | Mobility-Tech & SaaS Innovation",
    description: "Building India's digital backbone for mobility — empowering taxi vendors, drivers, and fleet owners through technology.",
    type: "website",
    locale: "en_IN",
    siteName: "Wolfron Technologies LLP",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

