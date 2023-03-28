import "@/styles/globals.css";

export const metadata = {
  title: "H-Commerce",
  description: "Welcome to HBO E-Commerec Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
