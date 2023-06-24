import React, { useState } from "react"
import { MdOutlineModeEditOutline } from "react-icons/md"
import { BiSolidTrashAlt } from "react-icons/bi"
import { useAppDispatch } from "../redux/hooks"
import { removeTodo } from "../redux/todoSlice"

interface Props {
  name: string
  desc: string
  id: number
  opentModal: ({
    name,
    desc,
    id,
  }: {
    name: string
    desc: string
    id: number
  }) => void
}

function Todo({ name, desc, id, opentModal }: Props) {
  const dispatch = useAppDispatch()
  return (
    <>
      <div className="w-32 h-52 flex flex-col items-center justify-center bg-stone-900 relative rounded-lg">
        <h1 className="absolute top-0 left-0 m-5 text-white opacity-90 text-xl">
          {name}
        </h1>

        <button
          className="absolute top-0 right-0 m-5 text-white text-xl opacity-90 hover:opacity-100 transition-3 hover:text-teal-500"
          onClick={() => opentModal({ name, desc, id })}
        >
          <MdOutlineModeEditOutline />
        </button>

        <p className="text-white opacity-75 text-center text-sm">{desc}</p>

        <button
          className="absolute text-white opacity-80 hover:opacity-100 hover:text-rose-500 transition-3 bottom-0 left-0 m-4"
          type="button"
          onClick={() => dispatch(removeTodo(id))}
        >
          <BiSolidTrashAlt />
        </button>
      </div>
    </>
  )
}

export default Todo
