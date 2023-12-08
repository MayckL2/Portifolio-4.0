'use client'

import Image from "next/image"

export default function SideBar(props) {
    // const Curriculo = require('./Currículo.pdf')
    
     const copiaEmail = ()=>{
        navigator.clipboard.writeText('MayckLuciano2@gmail.com');
        document.querySelector('#emailBar').innerHTML = 'Email copiado!'

        setTimeout(()=> {
            document.querySelector('#emailBar').innerHTML = 'MayckLuciano2@gmail.com'
        }, 2000)
    }

    return (
        <aside className={`bg-slate-800 rounded-es-3xl fixed top-0 ${props.abreMenu} w-max h-max pt-28 z-30 overflow-hidden flex justify-end items-center transition-all`}>
            <Image src={'/menu2.svg'} alt="botão para fechar menu lateral" width={50} height={50}
                className="absolute right-4 top-4 cursor-pointer" onClick={props.fechaMenu}/>

            <div className="flex flex-col justify-around items-end h-1/2">
                <a href="https://www.frontendmentor.io/profile/MayckL2" target="_blank" className="flex items-center gap-4 hover:bg-slate-700 px-8 py-4 w-full justify-end">
                    <p className='w-max'>Front-end-Mentor</p>
                    <Image src="/frontendMentor.svg" alt="Menu lateral" width={40} height={40}
                        className='' />
                </a>
                <a href="https://github.com/MayckL2" target="_blank" className="flex items-center gap-4 hover:bg-slate-700 px-8 py-4 w-full justify-end">
                    <p className='w-max'>Github</p>
                    <Image src="/github-white.svg" alt="Menu lateral" width={40} height={40}
                        className='' />
                </a>
                <a href="https://www.linkedin.com/in/mayck-luciano/" target="_black" className="flex items-center gap-4 hover:bg-slate-700 px-8 py-4 w-full justify-end">
                    <p className='w-max'>Linkedin</p>
                    <Image src="/linkedin.svg" alt="Menu lateral" width={40} height={40}
                        className='' />
                </a>
                <a href="https://docs.google.com/document/d/1AONMons8xwX9WKmi39offtLmroDaLg2KnEz8phBBink/edit" target="_black" className="flex items-center gap-4 hover:bg-slate-700 px-8 py-4 w-full justify-end">
                    <p className='w-max'>Baixar curriculo</p>
                    <Image src="/cv.svg" alt="Menu lateral" width={40} height={40}
                        className='' />
                </a>
            </div>
        </aside>
    )
}