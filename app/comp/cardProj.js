'use client'
import Image from "next/image"
import { useState, useEffect } from "react"

export default function CardProj(props) {


    const listTec = props.tec.map((img, i) =>
        <Image key={i} title={img} src={`${img}.svg`} alt={img} width={100} height={100}
            className='w-10' />
    )

    return (
        <session className={`relative flex flex-col sm:flex-row justify-center bg-slate-800 rounded-lg overflow-hidden w-full sm:w-[500px]`}>
            <a href='#' className="w-full sm:w-1/2">
                <Image src='link.svg' alt="link para o projeto" width={30} height={30}
                    className="absolute top-2 right-2 hover:scale-125 transition-all" />

                <Image src={`${props.projeto}.png`} alt={props.projeto} width={1000} height={1000}
                    className="w-full h-full object-fill"/>
            </a>

            <div className="px-4 flex flex-col justify-between w-full sm:w-1/2 h-max gap-2">
                <h4 className="text-xl">{props.titulo}</h4>

                <p className="text-sm leading-4">{props.desc}</p>

                <div className="flex flex-row justify-around flex-wrap gap-1">
                    {listTec}
                </div>

                <a href={props.repo} target="_blank" className="mb-4 flex gap-4 justify-start w-max bg-[#0D1117] rounded-full pl-2 pr-4 py-2 hover:bg-[#0D1117]/50 transition-all self-center">
                    <Image src='./github-white.svg' alt="icone do github" width={30} height={30} />
                    Repositorio
                </a>
            </div>
        </session>
    )
}