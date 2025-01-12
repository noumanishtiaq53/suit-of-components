import type { Metadata } from "next";
import { Geist, Geist_Mono, Rajdhani } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { SnackBarProvider } from "@/providers/snackbar.provider";
import { MuiThemeProvider } from "@/providers/mui-theme.provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZoomVerse",
  description: "it is time to revive the flash era",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MuiThemeProvider>
          <SnackBarProvider>
            {children}
            </SnackBarProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
