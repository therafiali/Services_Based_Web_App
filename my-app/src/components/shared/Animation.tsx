"use client"

import {motion,useAnimation,useInView} from 'framer-motion'
import {useEffect,useRef} from 'react'

type Props = {
    children:React.ReactNode,
    delay:number,
    direction:string
}

const Animation = ({children,delay,direction}: Props) => {

    const ref=useRef(null)
    const isInView=useInView(ref, {once:false})
    const controls=useAnimation()

    useEffect(()=>{
        if(isInView){
            controls.start("visible")
        }else{
            controls.set("hidden")
        }
    },[isInView,controls])


  return (
    <div ref={ref} className='flex items-center justify-center'>
        <motion.div 
        variants={{
            hidden:{
                opacity:0,
                x:direction==="right"?100:direction=="left"?-100:0,
                y:direction==="up"?100:direction==="down"?-100:0,
            },
            visible:{
                opacity:1,
                x:0,
                y:0
            }
        }}
        initial="hidden"
        animate={controls}
        transition={{
            duration:1.5,
            type:"tween",
            delay:delay,
            ease:"easeOut"
        }}
        >
           {children}
        </motion.div>
    </div>
  )
}

export default Animation