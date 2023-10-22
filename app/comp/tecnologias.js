'use client'
import CardTec from "./cardTec"

export default function Tecnologias(props){

    return(
        <session id='tecnologias' className='min-h-screen w-full flex items-center px-4'>
            
            <div className={`container mx-auto mt-20 renderiza ${props.block ? 'block' : 'hidden'}`}>
                <h2 className="text-3xl w-fit">
                    Tecnologias
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinha' : null}`}></p>
                </h2>

                <div className="flex justify-center items-center flex-wrap gap-4 m-8 sm:pr-16">
                    <CardTec tecnologia='html' border='border-amber-400/20'/>
                    <CardTec tecnologia='css' border='border-cyan-400/20'/>
                    <CardTec tecnologia='canva' border='border-cyan-200/20'/>
                    <CardTec tecnologia='js' border='border-yellow-400/20'/>
                    <CardTec tecnologia='node' border='border-green-500/20'/>
                    <CardTec tecnologia='react' border='border-teal-400/20'/>
                    <CardTec tecnologia='next' border='border-black/20'/>
                    <CardTec tecnologia='react native' border='border-teal-400/20'/>
                    <CardTec tecnologia='tailwind' border='border-teal-500/20'/>
                    <CardTec tecnologia='figma' border='border-amber-600/20'/>
                    <CardTec tecnologia='bootstrap' border='border-indigo-600/20'/>
                    <CardTec tecnologia='php' border='border-indigo-400/20'/>
                </div>
            </div>

        </session>
    )
}