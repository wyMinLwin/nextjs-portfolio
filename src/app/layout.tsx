import Header from '@/components/Header'
import './globals.css'
import { Inconsolata } from 'next/font/google'
import Theme from './Theme'
import { Metadata } from 'next'

const inconsolata = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata= {
  title: "Wai Yan Min Lwin",
  description: "A Software Engineer who interested in open-source projects.",
  keywords: ["Wai Yan Min Lwin","Wai Yan","Min Lwin","Software Engineer"],  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inconsolata.className} light`}  style={{colorScheme:'light'}}>
      <body>
          <Theme>
            <main className='square-bg w-screen h-screen overflow-x-hidden overflow-y-scroll'>
              <Header />  
              {children} 
            </main>
          </Theme>
        </body>
    </html>
  )
}
