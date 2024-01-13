"use client"

import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {
  professions:string[]
}

export const TypeWriter = () => {

    const [text]=useTypewriter({
        words:["Consulting & Services","Cloud Computing Services","Hardware Support","Virtualization","Networking Solutions"],
        loop:true,
        delaySpeed:2000
    })

  return (
    <h1 className='text-3xl md:text-5xl font-extrabold text-center'>{text}</h1>
  )
}

