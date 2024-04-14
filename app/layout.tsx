import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
<<<<<<< HEAD

=======
>>>>>>> 0003d40 (edit todo)
export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App in NextJs and React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
