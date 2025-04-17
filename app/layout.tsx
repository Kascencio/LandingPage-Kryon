import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "KRYON - Centro de Tecnología Cuántica y Bienestar",
  description: "Transforma tu energía, transforma tu vida con tecnología cuántica avanzada para tu bienestar físico y mental.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.kryoncenter.com/",
    title: "KRYON - Centro de Tecnología Cuántica y Bienestar",
    description: "Transforma tu energía, transforma tu vida con tecnología cuántica avanzada para tu bienestar físico y mental.",
    images: [
      {
        url: "https://www.kryoncenter.com/Kryon-meta.webp", // Reemplazar con imagen real de la marca
        width: 1200,
        height: 630,
        alt: "KRYON - Tecnología Cuántica para el Bienestar",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <Analytics/>
          <SpeedInsights/> 
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
import { icons } from "lucide-react"
