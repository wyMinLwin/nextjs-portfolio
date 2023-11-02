import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DesktopNavbar from './Navigation/DesktopNavbar'
const Header = () => {
  return (
    <header className='px-3 sm:px-6 md:px-10 lg:px-32 py-2 md:py-2 flex justify-between items-center gap-x-4' style={{backdropFilter: 'blur(1px)'}}>
        <Link className='grow-0' href={'/'}>
            <Image priority src={'/images/code.svg'} alt='home svg' height={44} width={44} />
        </Link>
        <div className='grow'>
          <DesktopNavbar />
        </div>  
    </header>
  )
}

export default Header