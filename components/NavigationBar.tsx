"use client"
import {useState} from 'react'

type Props = {
  pages: string[]
}
export default function NavigationBar(props: Props) {
  const [selectPosition, setSelectPosition] =useState<number>(0)
  return (
    <nav className={"flex items-center h-[54px]  w-[914px] mx-auto "}>
      {props.pages.map((page, index) => (
          <div
              onClick={() => setSelectPosition(index)}
              key={index}
              className={`w-[200px] text-center font-bold ${selectPosition === index ? "text-black border-b-[2px] border-black flex items-center justify-center h-[54px]" : "text-[#788898] cursor-pointer"}`}
          >
            {page}
          </div>
      ))}

    </nav>
  )
}
