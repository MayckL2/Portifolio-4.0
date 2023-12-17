'use client'
import Image from "next/image"
import { useState, useEffect } from "react"

export default function CardProj(props) {
    const [hover, setHover] = useState(false)

    const listTec = props.tec.map((img, i) =>
        <Image key={i} title={img} src={`${img}.svg`} alt={'imagem tecnologia'} width={100} height={100}
            className='w-6 py-2 grayscale' />
    )

    return (
        <session className={`${props.animate} relative flex flex-col ${props.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-start rounded-lg overflow-hidden w-full lg:w-11/12 h-max lg:h-64`}>

            <a href={props.site ? props.site : props.repo} target="_blank" className="relative w-fit lg:w-2/3 flex"
            onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
                <Image src='link.svg' alt="link para o projeto" width={30} height={30}
                    className="absolute z-10 top-4 right-4 hover:scale-125 transition-all" />
                <Image src={`${props.projeto}.png`} alt={props.projeto} width={1000} height={1000}
                    className={`w-full object-fill rounded-2xl cursor-pointer hover:opacity-50 transition-all`} />
                {/* <p className={`w-full text-center self-center absolute ${hover ? '' : 'hidden'}`}>Visite o projeto {props.titulo}</p> */}
            </a>

            <div className="flex flex-col mx-4 justify-between items-end gap-2 pt-2">
                <h4 className={`w-max opacity-40 self-start ${props.reverse ? 'lg:self-end' : 'lg:self-start'}`}>{props.titulo}</h4>
                <p className={`max-h-1/3 text-start ${props.reverse ? 'lg:text-end' : 'lg:text-start'} text-2xl`}>{props.desc}</p>
                <div className={`flex w-max gap-2 self-start ${props.reverse ? 'lg:self-end' : 'lg:self-start'}`}>{listTec}</div>

                <div className={`w-max flex gap-4 self-start ${props.reverse ? 'lg:self-end' : 'lg:self-start'}`}>
                    <a href={props.repo} target="_blank" className="px-4 py-2 w-max rounded-3xl border-4 border-amber-500 border-solid text-amber-500 hover:bg-amber-500 hover:text-slate-800 transition-all">
                        Repositorio
                    </a>
                    <a href={props.site} target="_blank" className={`${props.site ? '' : 'hidden'} px-4 py-2 w-max rounded-3xl border-4 border-blue-500 border-solid text-blue-500 hover:bg-blue-500 hover:text-slate-800 transition-all`}>
                        Web Site
                    </a>
                </div>
            </div>
        </session>
    )
}