

export default function Progresso(props){

    return(
        <aside className={`flex-col fixed top-1/3 right-4 w-10 z-50 renderiza ${props.block ? 'flex' : 'hidden'}`}>

            <a href="#tecnologias" className={`border-2 border-amber-500 rounded-full w-5 h-5 absolute top-0 ${props.tec ? 'bg-amber-500' : null} transition-all`}>
                <p className="absolute right-7 -top-[6px] cursor-pointer underline-offset-1 hover:underline">Tecnologias</p>
            </a>
            <p className="bg-amber-500 p-[2px] h-20 absolute top-5 left-[8px]"></p>
            
            <a href="#projetos" className={`border-2 border-amber-500 rounded-full w-5 h-5 absolute top-[98px] ${props.proj ? 'bg-amber-500' : null} transition-all`}>
                <p className="absolute right-7 -top-[6px] cursor-pointer underline-offset-1 hover:underline">Projeto</p>
            </a>
            <p className="bg-amber-500 p-[2px] h-20 absolute top-[118px] left-[8px]"></p>

            <a href="#sobre" className={`border-2 border-amber-500 rounded-full w-5 h-5 absolute top-[196px] ${props.sobre ? 'bg-amber-500' : null} transition-all`}>
                <p className="absolute right-7 -top-[6px] cursor-pointer underline-offset-1 hover:underline">Sobre</p>
            </a>

        </aside>
    )
}