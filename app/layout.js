import "./globals.css";
import { Inter } from "next/font/google";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <SupabaseProvider>
          <UserProvider>
            <Navbar />
            {children}
            <Toaster />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}