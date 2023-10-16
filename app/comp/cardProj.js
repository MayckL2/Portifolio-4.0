'use client'
import Image from "next/image"
import { useState, useEffect } from "react"

export default function CardProj(props) {

    
    const listTec = props.tec.map((img, i)=>
        <Image src={`${img}.svg`} alt={img} width={100} height={100}
        className='w-10' />
    )

    return (
        <session className={`relative flex flex-col justify-center bg-slate-800 rounded-lg overflow-hidden w-60`}>
            
            <Image src='link.svg' width={30} height={30}
            className="absolute top-2 right-2"/>
            
            <Image src={`${props.projeto}.png`} alt={props.projeto} width={100} height={100}
                className="w-full h-36 object-cover" />

            <div className="px-4 flex flex-col justify-between h-max gap-2">
                <h4 className="text-xl">{props.titulo}</h4>

                <p className="text-sm leading-4">{props.desc}</p>

                <div className="flex flex-row justify-around">
                    {listTec}
                </div>

                <a href={props.repo} target="_blank" className="mb-4 flex gap-4 justify-start w-max bg-[#0D1117] rounded-full pl-2 pr-4 py-2 hover:bg-[#0D1117]/50 transition-all self-center">
                    <Image src='./github-white.svg' width={30} height={30}/> 
                    Repositorio
                </a>
            </div>
        </session>
    )
}