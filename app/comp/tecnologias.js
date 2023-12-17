'use client'
import CardTec from "../ui/cardTec"


export default function Tecnologias(props){

    return(
        <session id='tecnologias' className='min-h-screen w-full flex items-center px-4'>
            
            <div className={`container mx-auto mt-20 renderiza ${props.block ? 'block' : 'hidden'}`}>
                <h2 className="text-3xl w-fit">
                    Tecnologias
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinha' : null}`}></p>
                </h2>

                <div className="flex justify-center items-center flex-wrap gap-4 m-8 sm:pr-16">
                    <CardTec tecnologia='html' style='border-amber-400/20 animaTec'/>
                    <CardTec tecnologia='css' style='border-cyan-400/20 animaTec2'/>
                    <CardTec tecnologia='canva' style='border-cyan-200/20 animaTec3'/>
                    <CardTec tecnologia='js' style='border-yellow-400/20 animaTec4'/>
                    <CardTec tecnologia='node' style='border-green-500/20 animaTec5'/>
                    <CardTec tecnologia='react' style='border-teal-400/20 animaTec6'/>
                    <CardTec tecnologia='next' style='border-black/20 animaTec7'/>
                    <CardTec tecnologia='react native' style='border-teal-400/20 animaTec8'/>
                    <CardTec tecnologia='tailwind' style='border-teal-500/20 animaTec9'/>
                    <CardTec tecnologia='figma' style='border-amber-600/20 animaTec10'/>
                    <CardTec tecnologia='bootstrap' style='border-indigo-600/20 animaTec11'/>
                    <CardTec tecnologia='php' style='border-indigo-400/20 animaTec12'/>
                    <CardTec tecnologia='sass' style='border-pink-400/20 animaTec13'/>
                    <CardTec tecnologia='git' style='border-orange-400/20 animaTec14'/>
                    <CardTec tecnologia='mongo' style='border-green-400/20 animaTec15'/>
                    <CardTec tecnologia='sql' style='border-blue-400/20 animaTec16'/>
                    <CardTec tecnologia='typescript' style='border-cyan-400/20 animaTec17'/>
                    <CardTec tecnologia='expo' style='border-cyan-400/20 animaTec17'/>
                </div>
            </div>

        </session>
    )
}