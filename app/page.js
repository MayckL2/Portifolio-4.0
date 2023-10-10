import Image from 'next/image'
import Header from './comp/header'
import Apresentacao from './comp/apresentacao'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white font-dosis">
      <Header/>
      <Apresentacao/>
    </main>
  )
}
