'use client'
import Image from "next/image"
import { useState, useEffect } from "react"

export default function CardTec(props) {

    return (
        <div className={`border-4 ${props.border} h-36 px-4 flex flex-col justify-center`}>
            <h3 className="uppercase text-center text-xl">{props.tecnologia}</h3>
            <Image src={`${props.tecnologia}.svg`} alt={props.tecnologia} width={100} height={100}
                className='' />
        </div>
    )
}