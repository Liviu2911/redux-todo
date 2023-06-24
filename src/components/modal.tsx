import React, { useState } from "react"
import { GrClose } from "react-icons/gr"
import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { addTodo, modifyTodo } from "../redux/todoSlice"

interface Props {
  name: string
  desc: string
  id: number
  close: () => void
}

function Modal({ name, desc, id, close }: Props) {
  const [daName, setName] = useState(name)
  const [daDesc, setDesc] = useState(desc)
  const { todos } = useAppSelector(store => store.todos)
  const dispatch = useAppDispatch()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name === "") {
      dispatch(addTodo({ name: daName, desc: daDesc }))
    } else {
      dispatch(modifyTodo({ name: daName, desc: daDesc, id }))
    }
    close()
  }

  return (
    <div className="absolute top-0 left-0 w-full h-[100vh] bg-black bg-opacity-20 flex flex-col justify-center items-center">
      <form
        className="flex relative flex-col items-center gap-10 w-96 h-80 rounded-xl bg-white z-20"
        onSubmit={onSubmit}
      >
        <button
          type="button"
          className="text-black text-xl absolute top-0 right-0 m-4 opacity-80 hover:opacity-100 hover:text-rose-500 transition-3"
          onClick={() => close()}
        >
          <GrClose />
        </button>

        <div className="flex flex-col w-64 gap-2 mt-10">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="bg-stone-700 rounded w-64 text-white px-2"
            id="name"
            value={daName}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-64 gap-2">
          <label htmlFor="desc">Desc</label>
          <input
            type="text"
            className="bg-stone-700 rounded w-64 text-white px-2"
            id="desc"
            value={daDesc}
            onChange={e => setDesc(e.target.value)}
          />
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default Modal
