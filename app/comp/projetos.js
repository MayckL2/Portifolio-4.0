'use client'
import CardProj from "./cardProj"

export default function Projetos(props) {

    return (
        <session id='projetos' className='h-fit sm:min-h-screen w-full flex items-center px-4'>

            <div className={`container mx-auto mt-20 renderiza ${props.block ? 'block' : 'hidden'}`}>
                <h2 className="text-3xl w-fit">
                    Projetos
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinha' : null}`}></p>
                </h2>

                <div className="flex justify-center items-center flex-wrap gap-4 m-8">
                    <CardProj 
                    projeto='/contries' 
                    titulo='Countries-React' 
                    desc='Site listando todos paises contando com algumas informaçoes de cada um junto de sua bandeira.'
                    tec={['react', 'html', 'css', 'tailwind', 'js']}
                    repo='https://tailwindcss.com/docs/animation'
                    />
                    <CardProj 
                    projeto='/pokedex2' 
                    titulo='Pokedex' 
                    desc='Pokedex listando todos os pokemons junto com caracteristicas de cada um.'
                    tec={['html', 'css', 'js']}
                    repo='https://tailwindcss.com/docs/animation'
                    />
                    <CardProj 
                    projeto='/jokempo' 
                    titulo='Jokempo' 
                    desc='Jogo de pedra, papel e tesoura, desafio do site front-end mentor.'
                    tec={['html', 'css', 'js']}
                    repo='https://tailwindcss.com/docs/animation'
                    />
                </div>
            </div>

        </session>
    )
}