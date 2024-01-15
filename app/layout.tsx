import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@/styles/globals.css'
import { Providers } from "./providers"
import Nav from "@/components/Nav/Nav"

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Taylor Burrows',
  description: 'A Personal Website About me',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="light">
      <body className={montserrat.className}>
            <Providers>
                <Nav />
               {children}  
            </Providers>
        </body>
    </html>
  )
}
