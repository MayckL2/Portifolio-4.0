import Image from 'next/image'
import Header from './comp/header'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900">
      <Header/>
    </main>
  )
}
