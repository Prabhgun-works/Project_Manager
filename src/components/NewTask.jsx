import { useState } from 'react';

export default function NewTask() {
  const [enteredTask, setEnteredTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleAddTask() {
    if (enteredTask.trim() !== '') {
      setTasks([...tasks, enteredTask]);
      setEnteredTask('');
    }
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-4'>
        <input
          className='w-64 border-stone-950 px-2 py-1 rounded-sm bg-sky-00'
          type="text"
          onChange={handleChange}
          value={enteredTask}
        />
        <button 
          className='text-sky-700 hover:text-sky-950'
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <ul className='list-disc'>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
