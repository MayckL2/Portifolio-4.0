import Image from "next/image"
import { Input } from "postcss";
import { useState } from "react";

export default function Footer(props) {

    const [imgCopy, setImgCopy] = useState('/copy.svg')

    const copiaEmail = () => {
        navigator.clipboard.writeText('MayckLuciano2@gmail.com');
        setImgCopy('./paste.svg')
        setTimeout(() => setImgCopy('./copy.svg'), 2000)
    }

    return (
        <session id="footer" className="min-h-[30rem] relative">
            <div className={`container mx-auto mt-20 renderiza ${props.block ? 'block' : 'hidden'} flex flex-col items-center gap-12`}>

                <h3 className="text-lg sm:text-3xl w-fit flex flex-col justify-center items-center text-center">
                    <p>ENTRE EM CONTATO COMIGO VIA OPÇÕES ABAIXO</p>
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinhaFooter' : null}`}></p>
                </h3>

                <div className="flex w-3/4 justify-around">
                    <a href="#" className="">
                        <Image src="/github-white.svg" alt="Menu lateral" width={40} height={40}
                            className='' />
                    </a>
                    <a href="#" className="">
                        <Image src="/linkedin.svg" alt="Menu lateral" width={40} height={40}
                            className='' />
                    </a>
                    <a href="#" className="">
                        <Image src="/frontendMentor.svg" alt="Menu lateral" width={40} height={40}
                            className='' />
                    </a>
                </div>

                {/* <div className="w-full flex items-center justify-center gap-2 flex-wrap">
                    <p>Ou mande um email para</p>
                    <div className="bg-slate-800 p-2 rounded-lg flex justify-between w-3/4 sm:w-60">
                        <p>mayckluciano2@gmail.com</p>
                        <Image src={imgCopy} alt='copiar email' width={30} height={30} onClick={() => copiaEmail()}
                            className="cursor-pointer w-4 transition-all" />
                    </div>
                </div> */}

                <p>Ou me envie um E-mail</p>
                <form className="w-full flex flex-col justify-between gap-8">
                    <div className="flex gap-8">
                        <input type="email" required autoComplete="off"
                            className="bg-slate-700 rounded px-4 py-2 w-1/2 focus:outline-none focus:bg-slate-500 active:bg-slate-500" placeholder="Email"/>
                        <input type="text" required autoComplete="off"
                            className="bg-slate-700 rounded px-4 py-2 w-1/2 focus:outline-none" placeholder="Assunto"/>
                    </div>
                    <textarea type="text" required autoComplete="off" 
                        className="bg-slate-700 rounded px-4 py-2 w-full h-40 resize-none focus:outline-none" placeholder="Mensagem..."/>

                    <button className="bg-blue-500 text-slate-800 w-fit px-8 py-2 rounded-md text-xl self-end hover:outline-blue-500 hover:bg-transparent hover:text-blue-500 outline-3 outline transition-all">Enviar</button>
                </form>
            </div>

        </session>
    )
}