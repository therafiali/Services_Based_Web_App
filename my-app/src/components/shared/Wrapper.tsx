import React from 'react'
import { FC } from 'react'

const Wrapper :FC<{children:React.ReactNode}>= ({children}) => {
  return (
    <div className=' md:max-w-screen-xl mx-auto px-4'>{children}</div>
  )
}

export default Wrapper