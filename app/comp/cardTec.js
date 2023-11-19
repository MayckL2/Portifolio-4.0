'use client'
import Image from "next/image"
import { useState, useEffect } from "react"

export default function CardTec(props) {
    const [hover, setHover] = useState(false)

    return (
        <div className={`border-4 ${props.border} w-36 h-36 px-4 flex flex-col justify-around items-center`}
        onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
            <h3 className={`uppercase text-center absolute text-xl ${hover ? '' : 'hidden'}`}>{props.tecnologia}</h3>
            <Image src={`${props.tecnologia}.svg`} alt={props.tecnologia} width={100} height={100}
                className={hover ? 'hidden' : ''} />
        </div>
    )
}