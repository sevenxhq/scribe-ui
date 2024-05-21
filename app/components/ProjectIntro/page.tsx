import React, { ReactNode } from 'react'

export default function ProjectIntroLayout({question, children}:{question:string;children:ReactNode}) {
  return (
    <main className="pt-14 w-[45%] mx-auto ">
    <p className="font-bold text-center text-5xl"><span className="text-zinc-50 ">Welcome to </span><span className="text-cyan-500">Scribe 3.0</span></p>
    <p className="text-cyan-300 text-center mt-5 tracking-wide text-xl leading-6 font-normal">Scripture editing made simple</p>
    <div className="space-y-8 flex flex-col w-full items-center justify-center">
      <p className="font-normal mt-20 text-zinc-50 tracking-wide text-sm text-center leading-4">{question}</p>
      <>{children}</>
 
    </div>
       </main>
  )
}
