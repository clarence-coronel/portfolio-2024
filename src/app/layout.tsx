import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/navigation/navigation";
import "./globals.css";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Clarence Coronel",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-full">
          <ThemeProvider>
            <Navigation />

            <div className="max-w-[1400px] relative mx-auto w-full">
              {children}
            </div>

            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
