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
      <head>
      </head>
        <body className='square-bg min-w-screen min-h-screen flex flex-col'>
          <Theme>
            <Header />  
            {children} 
          </Theme>
        </body>
    </html>
  )
}
