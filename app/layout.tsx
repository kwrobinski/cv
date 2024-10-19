import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import "./globals.css"

import RESUME_DATA from "@/data/cv-data"

import { cn } from "@/lib/utils"
import NavBar from "@/components/nav-bar"
import ProfileHeader from "@/components/profile-header"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: RESUME_DATA.siteMetadata.title,
  description: RESUME_DATA.siteMetadata.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <main className="container relative mx-auto scroll-my-12 p-4 md:p-16">
          <section className="md:mx-auto w-full max-w-3xl">
            <ProfileHeader />
            <NavBar />

            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
