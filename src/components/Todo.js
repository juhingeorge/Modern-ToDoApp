import React from 'react'
import './Todo.css'
import {useState, useRef, useEffect} from 'react'
import { IoMdDoneAll } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

function Todo() {
  const[input , setInput] = useState('')
  const[todos , setTodos] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const addTodo = () =>{
    setTodos([...todos,input])
    console.log(todos)
    setInput('')
  }

  const inputref = useRef('null')

  useEffect(()=>{
    inputref.current.focus();
  })



  return (
    <div className='container'>
        <h2>TODO APP</h2>
        <form className='form-group' onSubmit={handleSubmit}>
            <input type='text' value={input} ref={inputref} placeholder='Enter the todo' className='form-control' onChange={(event)=>setInput(event.target.value)} />
            <button onClick={addTodo}>ADD</button>
        </form>
        <div className='list'>
            <ul>
                {
                  todos.map((to)=>(
                    <li>{to}
                    <span>
                      <IoMdDoneAll />
                      <FiEdit />
                      <MdDelete />
                    </span>
                    </li>
                    
                  ))
                }
            </ul>
        </div>
    </div>
  )
}

export default Todo