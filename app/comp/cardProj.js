'use client'
import Image from "next/image"
import { useState, useEffect } from "react"

export default function CardProj(props) {


    const listTec = props.tec.map((img, i) =>
        <Image key={i} title={img} src={`${img}.svg`} alt={img} width={100} height={100}
            className='w-6 py-2 grayscale' />
    )

    return (
        <session className={`relative flex flex-col ${props.reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} justify-start rounded-lg overflow-hidden w-full sm:w-11/12 h-max sm:h-64`}>
            {/* <a href='#' className="w-full sm:w-1/2">
                <Image src='link.svg' alt="link para o projeto" width={30} height={30}
                    className="absolute top-2 right-2 hover:scale-125 transition-all" />

                <Image src={`${props.projeto}.png`} alt={props.projeto} width={1000} height={1000}
                    className="w-full h-52 object-fill"/>
            </a>

            <div className="px-4 pt-4 flex flex-col justify-between w-full sm:w-1/2  gap-2">
                <h4 className="text-xl">{props.titulo}</h4>

                <p className="text-sm leading-4 text-slate-600 text-center">{props.desc}</p>

                <div className="flex flex-row justify-around flex-wrap gap-1 bg-slate-700 rounded">
                    {listTec}
                </div>

                <a href={props.repo} target="_blank" className="mb-4 flex gap-4 justify-start w-max bg-[#0D1117] rounded-full pl-2 pr-4 py-2 hover:bg-[#0D1117]/50 transition-all self-center">
                    <Image src='./github-white.svg' alt="icone do github" width={30} height={30} />
                    Repositorio
                </a>
            </div> */}

            <Image src={`${props.projeto}.png`} alt={props.projeto} width={1000} height={1000}
                className="w-full sm:w-[400px]" />

            <div className="flex flex-col mx-4 justify-between items-end gap-2">
                <h4 className={`w-max opacity-40 ${props.reverse ? 'self-end' : 'self-start'}`}>{props.titulo}</h4>
                <p className={`max-h-1/3 ${props.reverse ? 'text-end' : 'text-start'} text-xl`}>{props.desc}</p>
                <div className={`flex w-max gap-2 ${props.reverse ? 'self-end' : 'self-start'}`}>{listTec}</div>

                <div className={`w-max flex gap-4 ${props.reverse ? 'self-end' : 'self-start'}`}>
                    <a href={props.repo} target="_blank" className="px-4 py-2 w-max rounded-3xl border-4 border-amber-500 border-solid text-amber-500 hover:bg-amber-500 hover:text-slate-800 transition-all">
                        Repositorio
                    </a>
                    <a href={props.site} target="_blank" className="px-4 py-2 w-max rounded-3xl border-4 border-blue-500 border-solid text-blue-500 hover:bg-blue-500 hover:text-slate-800 transition-all">
                        Web Site
                    </a>
                </div>
            </div>
        </session>
    )
}