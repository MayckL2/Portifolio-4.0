import Image from "next/image"

export default function Sobre(props) {

    return (
        <session id='sobre' className='p-4 w-full min-h-screen relative'>
            <Image src={'/backgroundSobre.png'} alt="imagens de fundo" width={1000} height={1000}
                className="w-full h-screen absolute top-0 left-0 object-contain z-10" />

            <div className={`container mx-auto mt-20 z-20 renderiza ${props.block ? 'block' : 'hidden'}`}>
                <h2 className="text-3xl w-fit">
                    Sobre
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinha' : null}`}></p>
                </h2>

                <div className="mt-8 text-xl w-3/4">
                    <p>Meu nome é Mayck Luciano, trabalho com <span className="text-amber-500">Front-end</span> e atualmente estudo <span className="text-teal-500">Back-end</span>.
                    Gosto de construir web-sites bonitos e atraentes seguindo os constumes de UI  e UX, e busco estudar tecnologias sobre back-end para ter mais visibilidade pelo mercado em ambas áreas.</p>
                    
                    <br></br>
                    
                    <p className="flex flex-wrap">Quando não estou estudando e trabalhando, gosto de jogar/assistir basquete e assistir <div className="flex ">hora de aventura.<Image src={'/caracol.png'} width={25} height={25} className="mx-2 object-contain"/></div></p>
                </div>
            </div>
        </session>
    )
}