'use client'
import Image from "next/image"

export default function Contatos(){

    return(
        <aside className="flex flex-col gap-8 absolute right-0">
            <Image src="/email-white.svg" alt="Menu lateral" width={40} height={40}
            className=''/>
            <Image src="/frontendMentor.svg" alt="Menu lateral" width={40} height={40}
            className=''/>
            <Image src="/github-white.svg" alt="Menu lateral" width={40} height={40}
            className=''/>
            <Image src="/linkedin.svg" alt="Menu lateral" width={40} height={40}
            className=''/>
            <Image src="/pdf.svg" alt="Menu lateral" width={40} height={40}
            className=''/>
        </aside>
    )
}