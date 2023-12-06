import Image from "next/image"
import { useEffect, useState } from "react"

export default function Sobre(props) {

    const [img, setImg] = useState('/backgroundSobre.png')

    useEffect(() => {
        if (window.innerWidth >= 640) {
            setImg('/backgroundSobre.png')
        } else {
            setImg('/sobreMobile.png')
        }
    }, [])

    return (
        <session id='sobre' className='p-4 w-full h-fit sm:h-[40rem] relative flex items-center'>
            {/* <Image src={img} alt="imagens de fundo" width={1000} height={1000}
                className="w-full h-screen absolute top-0 left-0 object-contain z-10" /> */}

            <div className={`container mx-auto w-[90%] z-20 renderiza ${props.block ? 'block' : 'hidden'}`}>
                <h2 className="text-3xl w-fit">
                    Sobre
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinha' : null}`}></p>
                </h2>

                <div className="mt-8 text-xl w-full sm:w-2/3">
                    
                    <p>Meu nome é Mayck Luciano, trabalho com <span className="text-amber-500">Front-end</span> e atualmente estudo <span className="text-teal-500">Back-end</span>.
                        Gosto de construir web-sites bonitos e atraentes seguindo os constumes de UI  e UX, e busco estudar tecnologias sobre back-end para ter mais visibilidade pelo mercado em ambas áreas.</p>

                    <br></br>

                    <p className="flex flex-wrap">Quando não estou estudando e trabalhando, gosto de jogar/assistir basquete e assistir hora de aventura.<Image src={'/caracol.png'} alt="caracol" width={25} height={25} className="mx-2 object-contain" /></p>
                </div>
            </div>

            <Image src={'/sobreMim.png'} alt="Imagens sobre mim" width={1000} height={1000}
                className="w-1/4 absolute right-40 hidden md:block" />
        </session>
    )
}