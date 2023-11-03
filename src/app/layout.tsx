import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import Theme from './Theme'
export const metadata: Metadata = {
  title: 'Wai Yan Min Lwin',
  description: 'Wai Yan Min Lwin - Software Engineer',
}
const inconsolata = Inconsolata({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inconsolata.className} dark`}  style={{colorScheme:'dark'}}>
      <head>
      </head>
        <body className='square-bg overflow-hidden'>
          <Theme>
            <Header />  
            {children}  
          </Theme>
        </body>
    </html>
  )
}
