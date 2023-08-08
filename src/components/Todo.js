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
    setTodos([...todos,{list : input, id : Date.now() }])
    console.log(todos)
    setInput('')
  }

  const inputref = useRef('null')

  useEffect(()=>{
    inputref.current.focus();
  })

  const onDelete = (id) =>{
    setTodos(todos.filter((to)=> to.id !== id))
  }

  return (
    <div className='container'>
        <h2>TODO APP</h2>
        <form className='form-group' onSubmit={handleSubmit}>
            <input type='text' value={input} ref={inputref} placeholder='Enter the todo' className='form-control' onChange={(event)=>setInput(event.target.value)} />
            <button onClick={addTodo}>ADD</button>
        </form>
        <div className='list'>
            <ul>
                {todos.map((to)=>(
                    <li className='list-items'>
                      <div className='list-item-list'>{to.list}</div>
                    <span>
                      <IoMdDoneAll className='list-item-icons' id='complete' title='Complete'/>
                      <FiEdit className='list-item-icons' id='edit' title='Edit'/>
                      <MdDelete className='list-item-icons' id='delete' title='Delete' onClick={()=>onDelete(to.id)}/>
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