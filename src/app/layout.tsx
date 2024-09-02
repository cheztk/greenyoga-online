import { ClerkProvider,SignedOut,SignedIn,SignInButton,UserButton } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {AntdRegistry} from "@ant-design/nextjs-registry";
import ThemeProvider from "@/providers/theme-provider";
import { connectMongoDB } from "@/config/database-config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Green Yoga Online Courses-dev",
  description: "An e-learning platform for yoga enthusiasts.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connectMongoDB();
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        
          <AntdRegistry>
            <ThemeProvider>
              {children}
            </ThemeProvider>
            
          </AntdRegistry>
          
            
        
        
      </body>
    </html>
    </ClerkProvider>
  );
}
