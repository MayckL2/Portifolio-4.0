'use client'
import CardProj from "./cardProj"

export default function Projetos(props) {
    let listTec = ['react', 'canva', 'css']

    return (
        <session id='projetos' className='min-h-screen w-full flex items-center px-4'>

            <div className={`container mx-auto mt-20 renderiza ${props.block ? 'block' : 'hidden'}`}>
                <h2 className="text-3xl w-fit">
                    Projetos
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinha' : null}`}></p>
                </h2>

                <div className="flex justify-center items-center flex-wrap gap-4 m-8">
                    <CardProj 
                    projeto='/project' 
                    titulo='Countries-React' 
                    desc='Descrição do projeto contries feito em react'
                    tec={listTec}
                    repo='https://tailwindcss.com/docs/animation'
                    />
                </div>
            </div>

        </session>
    )
}