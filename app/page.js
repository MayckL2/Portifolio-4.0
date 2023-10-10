'use client'

import Image from 'next/image'
import Header from './comp/header'
import Apresentacao from './comp/apresentacao'
import Tecnologias from './comp/tecnologias'
import { useEffect, useState } from 'react'
import { useCallback } from 'react'


export default function Home() {

// CALCULA SE O ELEMENTO APARECEU NA ROLAGEM DA TELA
  const onScroll = useCallback(event => {
    const element = document.getElementById("found");
    const rect = element.getBoundingClientRect();
    console.log(rect.top.toFixed())

    if(rect.top.toFixed() <= 0){
      console.log('achou!')
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
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white font-dosis"
      onScroll={() => scroll()}>
      <Header />
      <Apresentacao />
      <h1 id='found'>açlskdjf</h1>
      <Tecnologias />
    </main>
  )
}
