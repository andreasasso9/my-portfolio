import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/page.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Andrea Sasso's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
		<header className="flex w-full justify-center sticky top-0">
			<Navbar />
		</header>
		
		<main className="flex-1">
			{children}
		</main>
        

		<footer className="w-full text-end p-5">
			<p>&copy; 2025 Andrea Sasso | Built with Next.js</p>
  		</footer>
      </body>
    </html>
  );
}
