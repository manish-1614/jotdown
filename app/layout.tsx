import { ClerkProvider } from "@clerk/nextjs";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "JotDown - A simple note taking app",
  description: "JotDown is a simple note taking app built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header/>

          <div className="flex min-h-screen">
            {/* Sidebar  */}
            <Sidebar/>

            <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide">
              {children}
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
