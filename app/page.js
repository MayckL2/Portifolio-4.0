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
import SideBar from './comp/sideBar'

export default function Home() {

  const [mostraTec, setMostraTec] = useState(false)
  const [mostraProj, setMostraProj] = useState(false)
  const [mostraSobre, setMostraSobre] = useState(false)
  const [mostraBarra, setMostraBarra] = useState(false)
  const [mostraFooter, setMostraFooter] = useState(false)
  const [menu, setMenu] = useState('-right-[150%]')

  // CALCULA SE O ELEMENTO APARECEU NA ROLAGEM DA TELA
  const onScroll = useCallback(event => {
    const tec = document.getElementById("tecnologias").getBoundingClientRect();
    const proj = document.getElementById('projetos').getBoundingClientRect();
    const sobre = document.getElementById('sobre').getBoundingClientRect();
    const footer = document.getElementById('footer').getBoundingClientRect();
    // console.log(proj.top.toFixed())

    // rederiza tecnologias quando aparecer na tela
    if (tec.top.toFixed() <= 500) {
      setMostraTec(true)
      setMostraBarra(true)
    } else {
      setMostraTec(false)
    }

    if (tec.top.toFixed() >= 100) {
      setMostraBarra(false)
    }

    if (proj.top.toFixed() <= 500) {
      setMostraProj(true)
    } else {
      setMostraProj(false)
    }

    if (sobre.top.toFixed() <= 500) {
      setMostraSobre(true)
    } else {
      setMostraSobre(false)
    }

    if (footer.top.toFixed() <= 600) {
      setMostraFooter(true)
    } else {
      setMostraFooter(false)
    }

  }, []);

  // chama função para habilitar scroll
  useEffect(() => {
    habilitarScroll()
    
    window.addEventListener('resize', ()=>{
      habilitarScroll()
    })

    window.location.href = '#'
  }, []);


  // habilida scroll fora do mobile
  function habilitarScroll(){
    //add eventlistener to window
    if (window.innerWidth >= 640) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }else{
      // remove event on unmount to prevent a memory leak with the cleanup
      window.removeEventListener("scroll", onScroll, { passive: true });
      setMostraTec(true)
      setMostraProj(true)
      setMostraSobre(true)
      setMostraFooter(true)
    }
  }

  useEffect(()=>{
    if(menu == 'right-[0%]'){
      document.querySelector('body').classList.add('overflow-y-hidden')
    }else{
      document.querySelector('body').classList.remove('overflow-y-hidden')
    }
  }, [menu])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white font-dosis overflow-x-hidden"
      onScroll={() => scroll()}>
      <Header abreMenu={()=> setMenu('right-[0%]')}/>
      <SideBar abreMenu={menu} fechaMenu={()=> setMenu('-right-[150%]')}/>
      <Progresso block={mostraBarra} tec={mostraTec} proj={mostraProj} sobre={mostraSobre} cont={mostraFooter} />
      <Apresentacao />
      <p id='found'></p>
      <Tecnologias block={mostraTec} />
      <Projetos block={mostraProj} />
      <Sobre block={mostraSobre} />
      <Footer block={mostraFooter} />

      <footer className="bg-black w-full mt-16 p-4">
        <p>
          &copy; Mayck Luciano 2023
        </p>
      </footer>
    </main>
  )
}
