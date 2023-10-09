'use client'
import Image from "next/image"
import Contatos from './contatos'

export default function Apresentacao(){

    return(
        <session className="flex items-center justify-center relative w-full">
            <div className="flex flex-col items-center w-full">
                <p className="text-3xl">Ola, meu nome é Mayck Luciano e sou um</p>
                <h1 className="text-4xl text-amber-400">Desenvolvedor Front-End</h1>
                <p className="text-center text-slate-500">Desenvolvo sites novos e aprimoro sites ja criados tornando a experiencia do usuario o mais prazerora possivel.</p>
            </div>
            
            <div className="relative">
                <Image src="/backgroundPerfil.png" alt="Menu lateral" width={500} height={500}
                className='absolute'/>
                <Image src="/me.png" alt="Menu lateral" width={1000} height={1000}
                className='cursor-pointer'/>
            </div>

            <Contatos/>
        </session>
    )
}