'use client'

import Image from 'next/image'
import Header from './comp/header'
import Apresentacao from './comp/apresentacao'
import Tecnologias from './comp/tecnologias'
import Projetos from './comp/projetos'
import { useEffect, useState } from 'react'
import { useCallback } from 'react'


export default function Home() {

  const [mostraTec, setMostraTec] = useState(false)
  const [mostraProj, setMostraProj] = useState(false)

// CALCULA SE O ELEMENTO APARECEU NA ROLAGEM DA TELA
  const onScroll = useCallback(event => {
    const tec = document.getElementById("tecnologias").getBoundingClientRect();
    const proj = document.getElementById('projetos').getBoundingClientRect();
    // console.log(proj.top.toFixed())

    // rederiza tecnologias quando aparecer na tela
    if(tec.top.toFixed() <= 500){
      setMostraTec(true)
    }else{
      setMostraTec(false)
    }
    
    if(proj.top.toFixed() <= 500){
      console.log('achou!')
      setMostraProj(true)
    }else{
      setMostraProj(false)
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
      <Apresentacao />
      <p id='found'></p>
      <Tecnologias block={mostraTec}/>
      <Projetos block={mostraProj}/>
    </main>
  )
}
