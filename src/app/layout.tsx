import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { ThemeProvider } from "./_providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kier Hagos",
    template: "%s | Kier Hagos",
  },
  description:
    "Personal web portfolio showcasing projects, blog posts, and ways to get in touch.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={firaCode.className}>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
