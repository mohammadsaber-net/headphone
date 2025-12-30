import React, { useEffect, useRef, useState } from 'react'

export default function useScrollAnimation() {
    const ref=useRef(null)
    const [show, setShow]=useState<boolean>(false)
    useEffect(()=>{
        const observer=new IntersectionObserver(
        ([entry])=>{
            if(entry.isIntersecting){
                setShow(true)
            }
        },{threshold:0.2}
        )
        if(ref.current) observer.observe(ref.current)
        return ()=>observer.disconnect()
    },[])
  return {ref,show}
}
