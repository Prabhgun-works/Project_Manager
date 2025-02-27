import React from 'react'
import NewTask from './NewTask'

export default function Tasks() {
  return (
    <section>
        <h2 className='text-2xl font-bold text-sky-950 mb-4'>Tasks</h2>
            <NewTask />
        <p className='text-sky-950 my-4'>This project does not have a task yet!</p>
        <ul></ul>
    </section>
  )
}
