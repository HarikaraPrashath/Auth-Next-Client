import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "../context/authContext";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Authentication App",
  description: "Developing an authentication app with Next.js",
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
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: "#1f2937", // Tailwind's gray-800
              color: "#f9fafb", // Tailwind's gray-50
              fontSize: "15px",
              fontWeight: 500,
              padding: "14px 20px",
              borderRadius: "12px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.25)",
              border: "1px solid #374151", // Tailwind's gray-700
            },
            success: {
              iconTheme: {
                primary: "#10B981", // emerald-500
                secondary: "#f0fdf4",
              },
            },
            error: {
              iconTheme: {
                primary: "#EF4444", // red-500
                secondary: "#fef2f2",
              },
            },
          }}
        />

        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
