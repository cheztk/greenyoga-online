import { ClerkProvider,SignedOut,SignedIn,SignInButton,UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Yoga Online Courses-dev",
  description: "An e-learning platform for yoga enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <header>
           
            
          </header>
          <main>
          {children}
          </main>  
        
      </body>
    </html>
    </ClerkProvider>
  );
}
