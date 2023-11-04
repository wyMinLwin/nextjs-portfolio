import Header from '@/components/Header'
import './globals.css'
import { Inconsolata } from 'next/font/google'
import Theme from './Theme'

const inconsolata = Inconsolata({ subsets: ['latin'] })

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
