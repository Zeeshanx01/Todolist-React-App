import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

function App() {

  //? input text:
  const [todo, setTodo] = useState("")
  //? Holds our all the todos:
  const [todos, setTodos] = useState([])
  const [showFinished, setShowFinished] = useState(true)

  //? saving your data to local storage, (keeps your todos even after refresh)
  useEffect(() => {
    let todosString = localStorage.getItem("todos")
    //? checking weather todosString is null or not. 
    if (todosString) {
      let todos = JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)
    }
  }, [])

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setShowFinished(!showFinished)
  }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) => {
    let newTodos = todos.filter(item => {
      return item.id !== id
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    saveToLS()
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item => {
      return item.id === id
    })
    //! let newTodos = todos
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
    saveToLS()
  }



  return (
    <>
      <div className='min-h-screen bg-cyan-950'>
        <NavBar />

        <div className="container mx-auto my-5 p-5 rounded-xl bg-cyan-900 opacity-85 min-h-[80vh] drop-shadow-2xl">

          <div className="addTodo  text-cyan-100">

            <h1 className=' m-4 font-bold text-2xl max-sm:m-0 font-serif text-center'>ZenTasks - Manage your tasks at one place</h1>

            <div className="flex justify-center m-4 max-sm:mx-0 max-sm:my-2">
              <h2 className='text-xl font-bold mx-2 max-sm:text-base max-sm:mx-1 max-sm:hidden'>Add a Todo</h2>

              <input value={todo} onChange={handleChange} className='w-[62%] max-md:w-[80%] rounded-md px-2 text-cyan-950 font-bold bg-gray-400 opacity-70 text-lg ' type="text" />

              <button onClick={handleAdd} disabled={todo.length < 1} className='bg-cyan-600 text-cyan-200 text-xl drop-shadow-4xl font-bold rounded-md mx-2 px-1 py-1 transition-all duration-400 disabled:opacity-30 hover:bg-cyan-300 hover:text-cyan-800  '><FaPlus /></button>
            </div>

          </div>

          <div className='bg-cyan-400 opacity-60 mx-auto my-3 rounded-full w-[90%] h-[1px]'></div>
          <div className="text-cyan-100 text-lg">
            <input onClick={toggleFinished} type="checkbox" value={showFinished} /> Show Finished
          </div>
          <div className='flex justify-center'>
            <h2 className="text-3xl font-bold text-cyan-100">Your Tasks</h2>
          </div>
          <div className="todos bg-blackk max-h-[65vh] overflow-auto">

            {todos.length === 0 && <div className='text-cyan-200 opacity-50 m-4 y text-2xl flex justify-center items-center'>No Todos to display</div>}

            {todos.map(item => {

              return (showFinished || !item.isCompleted) && < div key={item.id} className="todo my-2 px-2 flex justify-between text-cyan-50 font-thin items-center rounded-md bg-cyan-600 hover:bg-cyan-700 opacity-80 text-lg transition-all duration-300 drop-shadow-2xl hover:drop-shadow-4xl" >

                <div className='flex max-w-[55vw] overflow-hidden'>
                  <input name={item.id} onChange={handleCheckbox} className='mx-2' type="checkbox" checked={item.isCompleted} />
                  <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
                </div>

                <div className="button  drop-shadow-4xl">
                  <button onClick={(e) => handleEdit(e, item.id)} className='bg-slate-400 text-slate-700 text-xl font-bold rounded-md mx-1 my-2 px-1 py-1 transition-all duration-400 hover:text-slate-300 hover:bg-slate-600 '><FaEdit /></button>
                  <button onClick={(e) => handleDelete(e, item.id)} className='bg-red-400 text-red-700 text-xl font-bold rounded-md mx-1 my-2 px-1 py-1 transition-all duration-400 hover:text-red-300 hover:bg-red-600 '><MdDeleteForever /></button>
                </div>

              </div>

            })}
          </div>

        </div >
      </div>
    </>
  )
}
export default App