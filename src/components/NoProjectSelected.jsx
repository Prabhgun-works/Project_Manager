import React from 'react'

import noProjectImg from '../assets/no-projects.png';

export default function NoProjectSelected({Change}) {
  return (
    <div className='mt-24 text-center w-2/3 '>
        <img className='w-16 h-16 object-contain mx-auto' src={noProjectImg}/>
        <h2 className='text-xl font-bold text-stone-600 my-4 '>No Project was Selected</h2>
        <p className='text-stone-400 mb-4'>Select a Project or Start a new one.</p>
        <p className='mt-8'>
        <button onClick={Change} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bd-stone-600 hover:text-stone-100'>
           Create a new Project.
        </button>
         
        </p>
    </div>
)
}
