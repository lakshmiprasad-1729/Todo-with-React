import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';


export default function AddTodo() {

    const [input,setInput]=useState('');
    const dispatch = useDispatch();

    const handleClick=()=>{
      dispatch(addTodo(input))
      setInput('')
    }

  return (
    <div>
        <div className='flex'>
          <input type="text" placeholder='enter todo task for ex:Complete writting assignment' 
          className='w-[50dvw] h-[3rem]  ml-[25dvw] mt-[15dvh] rounded-xl outline-none'
          value={input} 
          onChange={(e)=>setInput(e.target.value)}
           />
          <button
          className='bg-blue-500 w-[7rem] h-[3rem] mt-[15dvh] ml-[3rem] rounded-xl text-white'
          onClick={handleClick}
          >AddTodo</button>
        </div>
    </div>
  )
}
