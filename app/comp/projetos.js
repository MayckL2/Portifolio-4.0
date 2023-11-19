"use client";
import CardProj from "./cardProj";
import Image from "next/image";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    FreeMode,
    Mousewheel,
    EffectCoverflow,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";

export default function Projetos(props) {
    const [preview, setPreview] = useState(2)

    if (typeof window !== 'undefined') {

        useEffect(() => {
            if (window.innerWidth <= 950) {
                setPreview(1)
            } else {
                setPreview(2)
            }
        }, [])

        window.onresize = () => {
            if (window.innerWidth <= 950) {
                setPreview(1)
            } else {
                setPreview(2)
            }
        }
    }

    return (
        <session
            id="projetos"
            className="h-fit sm:min-h-screen w-full flex items-center px-4"
        >
            {/* <div className={`container mx-auto mt-20 renderiza ${props.block ? 'block' : 'hidden'}`}>
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
            </div> */}

            <div className={`container mx-auto mt-20 renderiza ${props.block ? 'block' : 'hidden'}`}>
                <h2 className="text-3xl w-fit">
                    Projetos
                    <p className={`p-[2px] bg-amber-400 rounded-lg w-[240px] ${props.block ? 'animaLinha' : null}`}></p>
                </h2>

                <Swiper
                    className={`${preview == 1 ? 'w-2/3' : 'w-full'} mt-8`}
                    modules={[Pagination, A11y, Mousewheel, Autoplay]}
                    loop={true}
                    pagination={{ clickable: false }}
                    grabCursor={true}
                    mousewheel={true}
                    slidesPerView={preview}
                    spaceBetween={5}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                >
                    <SwiperSlide>
                        <CardProj
                            projeto="/pokedex2"
                            titulo="Pokedex"
                            desc="Pokedex listando todos os pokemons junto com caracteristicas de cada um."
                            tec={["html", "css", "js"]}
                            repo="https://tailwindcss.com/docs/animation"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProj
                            projeto="/contries"
                            titulo="Contries React"
                            desc="Site informativo sobre diversos paises ao redor do mundo."
                            tec={["html", "css", "js", "react"]}
                            repo="https://tailwindcss.com/docs/animation"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardProj
                            projeto="/jokempo"
                            titulo="Jokempo"
                            desc="Jogo de jokempo com pontuação de vitorias."
                            tec={["html", "css", "js"]}
                            repo="https://tailwindcss.com/docs/animation"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </session>
    );
}
