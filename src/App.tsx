import { useState } from "react"
import { useAppSelector } from "./redux/hooks"
import { MdAddCircle } from "react-icons/md"
import Todo from "./components/todo"
import Modal from "./components/modal"
function App() {
  const { todos } = useAppSelector(store => store.todos)
  const [modal, setModal] = useState(false)
  const [desc, setDesc] = useState("")
  const [name, setName] = useState("")
  const [id, setId] = useState<number>(-1)

  const close = () => setModal(false)
  const open = ({
    name,
    desc,
    id,
  }: {
    name: string
    desc: string
    id: number
  }) => {
    setDesc(desc)
    setName(name)
    setModal(true)
    setId(id)
  }

  return (
    <>
      <div className="flex m-10 gap-10">
        {todos.map(todo => (
          <Todo
            name={todo.name}
            desc={todo.desc}
            key={todo.id}
            id={todo.id}
            opentModal={open}
          />
        ))}
        <div
          className="w-32 h-52 rounded-xl flex justify-center items-center bg-stone-900 text-white text-4xl cursor-pointer text-opacity-80 hover:text-opacity-100 transition-3"
          onClick={() => setModal(true)}
        >
          <MdAddCircle />
        </div>
      </div>

      {modal && <Modal name={name} desc={desc} close={close} id={id} />}
    </>
  )
}

export default App
