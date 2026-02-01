import "./globals.css";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Partiq | Precision Parts Sourcing",
  description: "Smart sourcing for precision CNC turning and VMC milling operations.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      
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
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
