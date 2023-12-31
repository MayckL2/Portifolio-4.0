

export default function Progresso(props){

    return(
        <aside className={`flex-col fixed top-1/4 right-4 w-10 z-50 renderiza hidden sm:${props.block ? 'flex' : 'hidden'}`}>

            <a href="#tecnologias" className={`border-2 border-amber-500 rounded-full w-5 h-5 absolute top-0 ${props.tec ? 'bg-amber-500' : null} transition-all`}>
                <p className={`absolute right-7 -top-[6px] cursor-pointer underline-offset-1 hover:underline ${props.tec ? 'text-amber-500' : null}`}>Tecnologias</p>
            </a>
            <p className="bg-amber-500 p-[2px] h-10 absolute top-5 left-[8px]"></p>
            
            <a href="#projetos" className={`border-2 border-amber-500 rounded-full w-5 h-5 absolute top-[60px] ${props.proj ? 'bg-amber-500' : null} transition-all`}>
                <p className={`absolute right-7 -top-[6px] cursor-pointer underline-offset-1 hover:underline ${props.proj ? 'text-amber-500' : null}`}>Projeto</p>
            </a>
            <p className="bg-amber-500 p-[2px] h-10 absolute top-[80px] left-[8px]"></p>

            <a href="#formacao" className={`border-2 border-amber-500 rounded-full w-5 h-5 absolute top-[118px] ${props.form ? 'bg-amber-500' : null} transition-all`}>
                <p className={`absolute right-7 -top-[6px] cursor-pointer underline-offset-1 hover:underline ${props.form ? 'text-amber-500' : null}`}>Formação</p>
            </a>
            <p className="bg-amber-500 p-[2px] h-10 absolute top-[138px] left-[8px]"></p>

            <a href="#sobre" className={`border-2 border-amber-500 rounded-full w-5 h-5 absolute top-[176px] ${props.sobre ? 'bg-amber-500' : null} transition-all`}>
                <p className={`absolute right-7 -top-[6px] cursor-pointer underline-offset-1 hover:underline ${props.sobre ? 'text-amber-500' : null}`}>Sobre</p>
            </a>
            <p className="bg-amber-500 p-[2px] h-10 absolute top-[194px] left-[8px]"></p>

            <a href="#footer" className={`border-2 border-amber-500 rounded-full w-5 h-5 absolute top-[232px] ${props.cont ? 'bg-amber-500' : null} transition-all`}>
                <p className={`absolute right-7 -top-[6px] cursor-pointer underline-offset-1 hover:underline ${props.cont ? 'text-amber-500' : null}`}>Contato</p>
            </a>


        </aside>
    )
}