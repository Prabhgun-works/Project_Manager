import React from 'react'

import noProjectImg from '../assets/no-projects.png';

export default function NoProjectSelected({onChange}) {
  return (
    <div className='mt-24 text-center w-2/3 '>
        <img className='w-16 h-16 object-contain mx-auto' src={noProjectImg}/>
        <h2 className='text-xl font-bold text-sky-900 my-4 '>No Project was Selected</h2>
        <p className='text-sky-900 mb-4'>Select a Project or Start a new one.</p>
        <p className='mt-8'>
        <button onClick={onChange} className='px-4 py-2 text-xs md:text-base rounded-md bg-sky-900 text-sky-50 hover:bg-sky-800 hover:text-sky-50'>
           Create a new Project.
        </button>
         
        </p>
    </div>
)
}
