import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './index.css'

function App() {

  return (
    
    <div className='bg-gray-600 w-[100dvw] h-[100dvh]'>
    <AddTodo/>
    <Todos/>
    </div>
  )
}

export default App
