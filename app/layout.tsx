import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 min-h-screen">
            <ClerkLoading>
              <div className="text-3xl">Loading...</div>
            </ClerkLoading>
            <ClerkLoaded>
              <Header />
              <div className="container px-8 py-4 mx-auto max-w-[5000px]">
                {children}
              </div>
            </ClerkLoaded>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
