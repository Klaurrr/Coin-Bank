"use client";
import type { Metadata } from "next";
import { usePathname } from "next/navigation";

import { Header } from "@/widgets/Header";

import "./_styles/globals.scss";

export const metadata: Metadata = {
      title: "Create Next App",
      description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
      const path = usePathname();

      return (
            <html lang="en">
                  <body>
                        {path !== "/Dashboard" && <Header />}
                        <div className={path !== "/Dashboard" ? "content__wrapper" : ""}>
                              {children}
                        </div>
                  </body>
            </html>
      );
}
