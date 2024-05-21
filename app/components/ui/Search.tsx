import { IconSearch } from '@tabler/icons-react'
import { cn } from '@utils/clsx'
import React from 'react'

export default function Search({className}:{className:string}) {
  return (
    <div className="relative text-zinc-50 text-xs">
          {" "}
          <span className="pointer-events-none absolute inset-y-0 left-[38%] flex items-center">
            <IconSearch
              size={16}
              stroke={1.5}
              strokeLinejoin="miter"
            />
          </span>
          <input
            placeholder="Search"
   
            className={cn(className, "rounded-full bg-zinc-900  h-10 text-center border focus:border-transparent focus:outline-none focus:ring-[.5px] focus:ring-zinc-700 border-zinc-800")}
          />
        </div>
  )
}
