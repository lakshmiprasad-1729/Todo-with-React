import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="ml-[49dvw] my-[1rem]">Todo</div>
      {todos.map((todo) => (
        // eslint-
      <>
      <div  id={todo.id} className="flex ml-[25dvw]">
      <div className="w-[4dvw] h-[3rem] bg-black  flex justify-center items-center ">
        <button className='w-[1.2rem] h-[1.2rem] rounded-xl'></button>
      </div>
      <input type="text" placeholder='' 
      className='w-[50dvw] h-[3rem]  outline-none bg-black text-white ' value={todo.text}  disabled={true} />
      <button className="w-[4rem] h-[3rem] bg-red-500 rounded ml-[1rem]" onClick={()=>dispatch(removeTodo(todo.id))}></button>
      <button className="w-[4rem] h-[3rem] bg-pink-500 rounded ml-[1rem] mr-[0.5rem]"></button>
      </div>
      </>
      ))}
    </>
  );
}
