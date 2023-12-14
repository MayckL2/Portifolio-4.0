'use client'
import Image from "next/image"
import Contatos from './contatos'
import Typewriter from 'typewriter-effect';


export default function Apresentacao() {

    return (
        <session className="flex items-center justify-center relative w-full px-4 h-[40rem] pt-40 pb-10 sm:pt-0 sm:min-h-screen ellipseMobile">


            <div className="flex">
                <div className="flex flex-col items-center w-full z-10">
                    <p className="text-center text-3xl">Ola, meu nome é Mayck Luciano e sou um</p>
                    <h1 className="text-center text-4xl text-amber-400 flex flex-col sm:flex-row gap-2">
                        Desenvolvedor <span>
                            <Typewriter
                                options={{
                                    strings: [' Front-end', ' Back-end'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </h1>
                    <p className="text-center text-slate-500 w-full sm:w-2/4">Desenvolvo sites novos e aprimoro sites ja criados tornando a experiencia do usuario o mais prazerora possivel.</p>
                </div>

                <div className="relative bottom-10 right-40 ellipse">
                    <Image src="/backgroundPerfil.png" alt="background da foto de perfil" width={300} height={300}
                        className='absolute left-8 animate-pulse z-10 hidden sm:block' />
                    <Image src="/me.png" alt="imagem de perfil" width={500} height={500}
                        className='cursor-pointer hidden md:block scale-[1.5]' />
                    {/* <Image src="/ellipse.png" alt="Ellipse" width={500} height={500}
                className='cursor-pointer hidden sm:block absolute top-0'/> */}
                </div>
            </div>


            <div className="absolute -bottom-20 sm:bottom-10 w-full flex flex-col items-center">
                {/* <a href="#tecnologias" className="bg-amber-400 px-6 py-1 text-lg rounded-lg text-slate-800 mb-4 hover:scale-110 transition-all">Veja Mais</a> */}
                <a href="#tecnologias"><Image src={'/setas.svg'} alt="setas para baixo" width={50} height={50} className="animate-bounce opacity-20" /></a>
            </div>
        </session>
    )
}