import { useState } from 'react'
import './App.css'
import { GiCheckMark } from "react-icons/gi";

function App() {

  const [tasks, setTasks] = useState([
    {id: 1, description: 'Task 1', isCompleted: true},
    {id: 2, description: 'Task 2', isCompleted: false},
    {id: 3, description: 'Task 3', isCompleted: false},
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? {...t, isCompleted: !t.isCompleted} : t)))
  }
  

  return (
    <div className='bg-gradient-to-br from-[#1A1F2C] to-[#0e1524] min-h-screen flex justify-center items-center'>
     <div className='w-[450px] bg-glass backdrop-blur-2xl p-8 rounded-2xl shadow-[0px_4px_30px_rgba(0,0,0,0.3)]'>


      {/* Header */}
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-semibold text-primary'>Simple Todo</h1>
        <div className='text-xs text-gray-400'>
          <p>0xabcd...1234</p>
        </div>
      </div>

      {/* Task List */}

      <div className='space-y-3'>
        <h2 className='text-gray-300 text-sm mb-2'>Tasks</h2>
        {
          tasks.map((task) => (
            <div key={task.id} 
            className= {`flex items-center justify-between px-4 py-3 rounded-xl ${task.isCompleted ? 'bg-green-500/10 border border-green-500/30' : 'bg-white/5'}`}>
              <div className='flex items-center gap-3 cursor-pointer' onClick={() => toggleTask(task.id)}>
              <div className={`w-5 h-5 border-2 flex items-center justify-center ${task.isCompleted ? 'border-green-400 bg-green-500/20' : 'border-gray-500'}`}>
              
              <div className='w-4 h-4 text-green-400'> 
               { task.isCompleted ? <GiCheckMark /> : ''}
              </div>
            
            </div>
            <span className={`text-sm ${task.isCompleted ? 'line-through text-gray-400' : 'text-gray-200'}`}>{task.description}</span>
              </div>
            </div>
          ))
        }
      </div>

     </div>
    </div>
  )
}

export default App
