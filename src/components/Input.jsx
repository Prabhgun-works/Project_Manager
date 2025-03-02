import React from 'react'
import { forwardRef } from 'react';
const Input = forwardRef (function Input({ label , textarea , ...props}, ref) {
    const classes = "w-full p-1 border-b-2 rounded-sm  border-sky-300 bg-sky-100 text-sky-600 focus:outline-none focus:border-sky-600"
  return    (
     <p className='flex flex-col gap-1 my-4'>
    <label className='test-sm font-bold uppercase text-sky-500'>
      {label}</label>
    {textarea ? 
    <textarea  ref = {ref} className={classes} {...props}/> 
    : <input ref={ref} className={classes} {...props}/>}
    </p>
    );
})
export default Input ; 