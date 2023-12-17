import Image from "next/image"
import { useEffect, useState } from "react"
import CardForm from "../ui/cardForm"
import { listFormacoes } from "../listaFormacoes"
import DescForm from "../ui/descForm"

export default function Formacao(props) {
    const [select, setSelect] = useState(0)

    return (
        <section id='formacao' className='p-4 w-full h-fit sm:h-[40rem] relative flex items-center'>

            <div className={`container mx-auto z-20 renderiza ${props.block ? 'block' : 'hidden'}`}>
                <h2 className="text-3xl w-fit">
                    FORMAÇÕES
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinha' : null}`}></p>
                </h2>

                <section className="mt-12 rounded-lg mr-20 flex flex-col md:flex-row gap-2">
                    <ul className="w-full md:w-1/4 flex flex-col gap-2">
                        <CardForm
                        nome={listFormacoes[0].nome}
                        formacao={listFormacoes[0].formacao}
                        ano={listFormacoes[0].ano}
                        select={()=> setSelect(0)}
                        />
                        <CardForm
                        nome={listFormacoes[1].nome}
                        formacao={listFormacoes[1].formacao}
                        ano={listFormacoes[1].ano}
                        select={()=> setSelect(1)}
                        />
                    </ul>
                    
                    <DescForm
                        nome={listFormacoes[select].nome}
                        formacao={listFormacoes[select].formacao}
                        duracao={listFormacoes[select].duracao}
                        logo={listFormacoes[select].logo}
                        descricao={listFormacoes[select].descricao}
                    />

                </section>

            </div>

        </section>
    )
}