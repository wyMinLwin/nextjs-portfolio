"use client"
import React from 'react'

const DirectMailButton = () => {
  return (
    <button className='font-bold' onClick={() => window.location.href = `mailto:${'waiyanminlwin421@gmail.com'}`}>waiyanminlwin421@gmail.com</button>
  )
}

export default DirectMailButton