import { IconCubePlus } from '@tabler/icons-react'
import React, { ReactNode } from 'react'
import { Badge } from './ui/Badge';

export default function ProjectSelector({title, icon}:{title:string; icon:ReactNode}) {
  return (
    <div className='rounded-3xl border cursor-pointer text-zinc-50 group hover:border-cyan-500 transition-all duration-200 hover:text-cyan-500 w-full uppercase font-semibold  border-zinc-800 h-40 bg-zinc-900 flex flex-col items-center justify-center gap-5'>
      <span className='tracking-wide leading-4  text-xs'>{title}</span>
      <span className='bg-zinc-800 h-12 rounded-full w-12 flex items-center justify-center group-hover:stroke-cyan-500 stroke-zinc-50'>{icon}</span>
{ title==="Open project" &&     <Badge className='mr-auto ml-[14px]'>12 projects</Badge>
}
    </div>
  )
}
