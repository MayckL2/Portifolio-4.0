'use client'

import Image from "next/image"

export default function SideBar(props) {

     const copiaEmail = ()=>{
        navigator.clipboard.writeText('MayckLuciano2@gmail.com');
        document.querySelector('#emailBar').innerHTML = 'Email copiado!'

        setTimeout(()=> {
            document.querySelector('#emailBar').innerHTML = 'MayckLuciano2@gmail.com'
        }, 2000)
    }

    return (
        <aside className={`bg-slate-900 fixed bottom-0 ${props.abreMenu} w-full h-screen z-30 flex justify-end items-center px-8 transition-all`}>
            <Image src={'/menu2.svg'} alt="botão para fechar menu lateral" width={50} height={50}
                className="absolute right-4 top-4 cursor-pointer" onClick={props.fechaMenu}/>

            <div className="flex flex-col justify-around items-end h-1/2">
                <a href="#" className="flex items-center gap-4" onClick={()=> copiaEmail()}>
                    <p className='w-max' id="emailBar">Mayckluciano2@gmail.com</p>
                    <Image src="/email-white.svg" alt="Menu lateral" width={40} height={40}
                        className='' />
                </a>
                <a href="#" className="flex items-center gap-4">
                    <p className='w-max'>Front-end-Mentor</p>
                    <Image src="/frontendMentor.svg" alt="Menu lateral" width={40} height={40}
                        className='' />
                </a>
                <a href="#" className="flex items-center gap-4">
                    <p className='w-max'>Github</p>
                    <Image src="/github-white.svg" alt="Menu lateral" width={40} height={40}
                        className='' />
                </a>
                <a href="#" className="flex items-center gap-4">
                    <p className='w-max'>Linkedin</p>
                    <Image src="/linkedin.svg" alt="Menu lateral" width={40} height={40}
                        className='' />
                </a>
            </div>
        </aside>
    )
}