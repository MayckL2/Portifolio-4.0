'use client'

import Image from 'next/image'


export default function Header(){

    const souEu = (e)=>{
        let eu = document.querySelector('#eu').classList
        eu.toggle('opacity-0')
    }

    return(
        <header className='flex justify-between px-8 py-4 fixed top-0 w-full'>
            <h1 className='text-2xl' onMouseEnter={()=> souEu()} onMouseLeave={()=> souEu()}>Mayck Luciano</h1>
            <p className='absolute top-[3rem] left-[3rem] transition-all opacity-0 ' id='eu'>Esse sou eu!</p>

            <Image src="menu.svg" alt="Menu lateral" width={50} height={50}
            className='sm:hidden cursor-pointer hover:scale-125 transition-all'/>
        </header>
        )
}