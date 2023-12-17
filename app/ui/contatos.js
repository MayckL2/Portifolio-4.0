'use client'
import Image from "next/image"
import { useState } from "react"

export default function Contatos() {
    const [txtCv, setTxtCv] = useState('')

    return (
        <aside className="sm:flex flex-row gap-8 justify-center relative z-30 h-full mr-8 hidden">
            <a href="/Currículo.pdf" target="_blank" className="relative z-40">
                <p className="flex gap-1 text-center justify-center text-xl bg-amber-500 rounded-3xl hover:rounded  px-2 py-1 whitespace-nowrap overflow-x-hidden w-16 hover:w-32 transition-all"
                    onMouseEnter={() => setTxtCv('Baixar')}
                    onMouseLeave={() => setTxtCv('')}>{txtCv} CV
                    <Image src="/cv.svg" alt="Menu lateral" width={20} height={20}
                        className='' />
                </p>
            </a>
            <a href="#" className="relative">
                <Image src="/frontendMentor.svg" alt="Menu lateral" width={30} height={30}
                    className='hover:scale-105 transition-all' />
            </a>
            <a href="#" className="relative">
                <Image src="/github-white.svg" alt="Menu lateral" width={30} height={30}
                    className='hover:scale-105 transition-all' />
            </a>
            <a href="#" className="relative">
                <Image src="/linkedin.svg" alt="Menu lateral" width={30} height={30}
                    className='hover:scale-105 transition-all' />
            </a>
        </aside>
    )
}