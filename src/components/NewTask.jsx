import {useState} from 'react'

export default function NewTask() {
    const [enteredTask, setenteredTask] = useState('');

    function handleChange(event) {
        setenteredTask(event.target.value);
    }
  return (
    <div className='flex items-center gap-4'>
        <input className ='w-64 border-color: var(--color-black); px-2 py-1 rounded-sm bg-sky-00'
         type="text"
         onChange={handleChange}
        value={enteredTask}
         />

        <button className='text-sky-700 hover:text-sky-950'
        > Add Task</button>

    </div>
  )
}
