import "./globals.css";

export const metadata = {
  title: "Partiq | Precision Parts Sourcing",
  description: "Smart sourcing for precision CNC turning and VMC milling operations.",
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