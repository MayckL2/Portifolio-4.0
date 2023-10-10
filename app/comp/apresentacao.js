'use client'
import Image from "next/image"
import Contatos from './contatos'

export default function Apresentacao(){

    return(
        <session className="flex items-center justify-center relative w-full min-h-screen">
            <div className="flex flex-col items-center w-full z-10">
                <p className="text-center text-3xl">Ola, meu nome é Mayck Luciano e sou um</p>
                <h1 className="text-center text-4xl text-amber-400">Desenvolvedor Front-End</h1>
                <p className="text-center text-slate-500 w-2/4">Desenvolvo sites novos e aprimoro sites ja criados tornando a experiencia do usuario o mais prazerora possivel.</p>
            </div>
            
            <div className="relative bottom-10 right-40">
                <Image src="/backgroundPerfil.png" alt="background da foto de perfil" width={300} height={300}
                className='absolute left-8 animate-pulse'/>
                <Image src="/me.png" alt="imagem de perfil" width={500} height={500}
                className='cursor-pointer hidden sm:block'/>
            </div>

            <Contatos/>

            <div className="absolute bottom-5 w-full flex flex-col items-center">
                <a href="#tecnologias" className="bg-amber-400 px-6 py-1 text-lg rounded-lg text-slate-800 mb-4 hover:scale-110 transition-all">Veja Mais</a>
                <Image src={'/setas.svg'} alt="setas para baixo" width={30} height={30} className="animate-bounce"/>
            </div>
        </session>
    )
}