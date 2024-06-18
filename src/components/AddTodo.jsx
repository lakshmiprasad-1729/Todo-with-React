import {useState} from 'react'

export default function AddTodo() {
  return (
    <div>
        <div className='flex'>
          <input type="text" placeholder='enter todo task for ex:Complete writting assignment' 
          className='w-[50dvw] h-[3rem]  ml-[25dvw] mt-[15dvh] rounded-xl outline-none'  />
          <button className='bg-blue-500 w-[7rem] h-[3rem] mt-[15dvh] ml-[3rem] rounded-xl text-white'>AddTodo</button>
        </div>
    </div>
  )
}
