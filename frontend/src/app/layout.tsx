// frontend/src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Sidebar from '../components/Sidebar'; // Left Sidebar
import Header from '../components/Header'; // Import the Header component

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MentorConnect Dashboard',
  description: 'A comprehensive dashboard for mentor-mentee connections.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen bg-gray-100 font-sans text-gray-800`}>
        {/* Fixed Left Sidebar */}
        <Sidebar />

        {/* This is the main content area that will change with navigation. */}
        <main className="flex-1 p-8">
          {/* The Header component, now fixed on every page */}
          <Header />
          {children} {/* This placeholder will be filled by the actual page content */}
        </main>
      </body>
    </html>
  );
}
