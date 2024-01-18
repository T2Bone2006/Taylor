"use client"

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from "./providers"
import Nav from "@/components/Nav/Nav"
import { usePathname, useRouter } from "next/navigation"

const montserrat = Montserrat({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Taylor Burrows',
//   description: 'A Personal Website About me',
// }

export default function RootLayout({children}: {children: React.ReactNode}) {
  const router = useRouter()
  const isAdmin =  '/admin'
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
            <Providers>
               {isAdmin !== pathname && <Nav />}
               {children}  
            </Providers>
        </body>
    </html>
  )
}
