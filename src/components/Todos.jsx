// import React from 'react'

export default function Todos() {
  return (
    <span className="flex mt-[4rem] lg:w-[64rem]
      bg-black ml-[25dvw] ">
      <div className="w-[4dvw] h-[3rem] bg-black  flex justify-center items-center ">
        <button className="w-[1.2rem] h-[1.2rem] rounded-xl bg-neutral-300"></button>
      </div>
      <input type="text" placeholder='' 
      className='w-[50dvw] h-[3rem]  outline-none bg-black text-white ' value={"hello world"} />
      <button className="w-[4rem] h-[3rem] bg-red-500 rounded ml-[1rem]"></button>
      <button className="w-[4rem] h-[3rem] bg-pink-500 rounded ml-[1rem] mr-[0.5rem]"></button>
    </span>
  )
}
