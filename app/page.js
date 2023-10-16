'use client'

import Image from 'next/image'
import Header from './comp/header'
import Apresentacao from './comp/apresentacao'
import Tecnologias from './comp/tecnologias'
import Projetos from './comp/projetos'
import { useEffect, useState } from 'react'
import { useCallback } from 'react'
import Sobre from './comp/sobre'
import Progresso from './comp/progresso'
import Footer from './comp/footer'


export default function Home() {

  const [mostraTec, setMostraTec] = useState(false)
  const [mostraProj, setMostraProj] = useState(false)
  const [mostraSobre, setMostraSobre] = useState(false)
  const [mostraBarra, setMostraBarra] = useState(false)
  const [mostraFooter, setMostraFooter] = useState(false)

// CALCULA SE O ELEMENTO APARECEU NA ROLAGEM DA TELA
  const onScroll = useCallback(event => {
    const tec = document.getElementById("tecnologias").getBoundingClientRect();
    const proj = document.getElementById('projetos').getBoundingClientRect();
    const sobre = document.getElementById('sobre').getBoundingClientRect();
    const footer = document.getElementById('footer').getBoundingClientRect();
    // console.log(proj.top.toFixed())

    // rederiza tecnologias quando aparecer na tela
    if(tec.top.toFixed() <= 500){
      setMostraTec(true)
      setMostraBarra(true)
    }else{
      setMostraTec(false)
    }

    if(tec.top.toFixed() >= 100){
      setMostraBarra(false)
    }
    
    if(proj.top.toFixed() <= 500){
      setMostraProj(true)
    }else{
      setMostraProj(false)
    }

    if(sobre.top.toFixed() <= 500){
      setMostraSobre(true)
    }else{
      setMostraSobre(false)
    }
    
    if(footer.top.toFixed() <= 700){
      setMostraFooter(true)
      console.log('achou')
    }else{
      setMostraFooter(false)
    }

  }, []);

  // ADICIONA FUNÇÃO DE SCROLL NO WINDOW
  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white font-dosis overflow-x-hidden"
      onScroll={() => scroll()}>
      <Header />
      <Progresso block={mostraBarra} tec={mostraTec} proj={mostraProj} sobre={mostraSobre}/>
      <Apresentacao />
      <p id='found'></p>
      <Tecnologias block={mostraTec}/>
      <Projetos block={mostraProj}/>
      <Sobre block={mostraSobre}/>
      <Footer block={mostraFooter}/>
    </main>
  )
}
