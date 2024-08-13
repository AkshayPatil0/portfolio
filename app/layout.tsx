import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/src/lib/utils";

const sora = Sora({ subsets: ["latin"] });

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
    <html lang="en" className="bg-primary">
      <head>
        <title>Akshay Patil | Full Stack Web Developer</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, 
      shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Full stack web developer. ❤️ Building Applications"
        />
        <meta
          name="keyword"
          content="portfolio, reactjs, nodejs, nextjs, web, javascript, developer"
        />

        <meta
          property="og:title"
          content="Akshay Patil | Full Stack Web Developer"
        />
        <meta
          property="og:description"
          content="Full stack web developer. ❤️ Building Applications"
        />
        <meta property="og:image" content={`${process.env.WEBSITE}/logo.png`} />
        <meta property="og:url" content={process.env.WEBSITE} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Akshay Patil | Full Stack Web Developer"
        />
        <meta
          name="twitter:description"
          content="Full stack web developer. ❤️ Building Applications"
        />
        <meta
          name="twitter:image"
          content={`${process.env.WEBSITE}/logo.png`}
        />
      </head>
      <body className={cn(sora.className, "m-auto max-w-screen-2xl")}>
        {children}
      </body>
    </html>
  );
}
