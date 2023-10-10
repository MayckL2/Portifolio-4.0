'use client'
import Image from "next/image"

export default function Contatos() {

    const mensagem = (e) =>{
        document.querySelector('#email').innerHTML = 'MayckLuciano2@gmail.com'
        let msg = document.querySelectorAll('.msg')
        msg[e].classList.toggle('opacity-0')
    }

    const copiaEmail = ()=>{
        navigator.clipboard.writeText('MayckLuciano2@gmail.com');
        document.querySelector('#email').innerHTML = 'Email copiado!'
    }

    return (
        <aside className="sm:flex flex-col gap-8 justify-center absolute right-0 z-20 h-full mr-8 hidden">
            <a href="#" className="relative">
                <p className='absolute top-[0.3rem] right-[3rem] transition-all opacity-0 w-max msg' id="email">Mayckluciano2@gmail.com</p>
                <Image src="/email-white.svg" alt="Menu lateral" width={40} height={40}
                    className='' onMouseEnter={()=> mensagem(0)} onMouseLeave={()=> mensagem(0)} onClick={()=> copiaEmail()}/>
            </a>
            <a href="#" className="relative">
                <p className='absolute top-[0.3rem] right-[3rem] transition-all opacity-0 w-max msg'>Front-end-Mentor</p>
                <Image src="/frontendMentor.svg" alt="Menu lateral" width={40} height={40}
                    className='' onMouseEnter={()=> mensagem(1)} onMouseLeave={()=> mensagem(1)}/>
            </a>
            <a href="#" className="relative">
            <p className='absolute top-[0.3rem] right-[3rem] transition-all opacity-0 w-max msg'>Github</p>
                <Image src="/github-white.svg" alt="Menu lateral" width={40} height={40}
                    className='' onMouseEnter={()=> mensagem(2)} onMouseLeave={()=> mensagem(2)}/>
            </a>
            <a href="#" className="relative">
            <p className='absolute top-[0.3rem] right-[3rem] transition-all opacity-0 w-max msg'>Linkedin</p>
                <Image src="/linkedin.svg" alt="Menu lateral" width={40} height={40}
                    className='' onMouseEnter={()=> mensagem(3)} onMouseLeave={()=> mensagem(3)}/>
            </a>
            <a href="#" className="relative">
            <p className='absolute top-[0.3rem] right-[3rem] transition-all opacity-0 w-max msg'>Baixar curriculo</p>
                <Image src="/pdf.svg" alt="Menu lateral" width={40} height={40}
                    className='' onMouseEnter={()=> mensagem(4)} onMouseLeave={()=> mensagem(4)}/>
            </a>
        </aside>
    )
}