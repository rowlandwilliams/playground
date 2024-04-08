import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import { Providers } from "./providers";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const haas = localFont({
  src: "../fonts/NeueHaasDisplayRoman.ttf",
  display: "swap",
  variable: "--font-haas",
});

export const metadata: Metadata = {
  title: "Rowland Williams",
  description: "Design Technologist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.variable,
          haas.variable,
          "bg-gradient-tp-  dark:bg-zinc-950 font-inter min-h-screen flex flex-col text-body text-xs"
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
