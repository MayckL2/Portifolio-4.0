'use client'
import Image from "next/image"
import { useState } from "react"

export default function Contatos() {
    const [txtCv, setTxtCv] = useState('')

    return (
        <aside className="sm:flex flex-row gap-8 justify-center mt-4 relative z-30 h-full mr-8 hidden">
            <a href="/Currículo.pdf" target="_blank" className="relative z-40">
                <p className="flex gap-1 text-center justify-center text-xl bg-amber-500 rounded-3xl hover:rounded  px-2 py-1 whitespace-nowrap overflow-x-hidden w-16 hover:w-32 transition-all"
                    onMouseEnter={() => setTxtCv('Baixar')}
                    onMouseLeave={() => setTxtCv('')}>{txtCv} CV
                    <Image src="/cv.svg" alt="Menu lateral" width={20} height={20}
                        className='' />
                </p>
            </a>
            <a href="#" className="relative">
                <p className='absolute top-[0.3rem] right-[3rem] transition-all opacity-0 w-max msg'>Front-end-Mentor</p>
                <Image src="/frontendMentor.svg" alt="Menu lateral" width={30} height={30}
                    className='' />
            </a>
            <a href="#" className="relative">
                <p className='absolute top-[0.3rem] right-[3rem] transition-all opacity-0 w-max msg'>Github</p>
                <Image src="/github-white.svg" alt="Menu lateral" width={30} height={30}
                    className='' />
            </a>
            <a href="#" className="relative">
                <p className='absolute top-[0.3rem] right-[3rem] transition-all opacity-0 w-max msg'>Linkedin</p>
                <Image src="/linkedin.svg" alt="Menu lateral" width={30} height={30}
                    className='' />
            </a>
        </aside>
    )
}