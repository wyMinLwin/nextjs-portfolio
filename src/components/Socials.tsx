import Image from 'next/image'
import React from 'react'
const socials = [
    {
        img: 'github.svg',
        url: 'https://github.com/wyMinLwin'
    },
    {
        img: 'instagram.svg',
        url: 'https://www.instagram.com/inverted_niwl/'
    },
    {
        img: 'linkedin.svg',
        url: 'https://www.linkedin.com/in/wyMinLwin'
    },
    {
        img: 'facebook.svg',
        url: 'https://www.facebook.com/waiyan.minlwin.161/'
    }
]
const Socials = () => {

  return (
    <div className='flex gap-x-10 py-2 items-center'>
        {
            socials.map(social => (
                <Image key={social.url} priority src={'/images/'+social.img} alt={social.url} width={20} height={20} />
            ))
        }
    </div>
  )
}

export default Socials