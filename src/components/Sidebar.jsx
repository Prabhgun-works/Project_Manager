import React from 'react';
export default function Sidebar({ Change, projects , onSelectProject ,selectProjectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-sky-950 text-sky-50 md:w-72 rounded-r-3xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-sky-50">Your Projects</h2>
      <div>
        <button
          onClick={Change}
          className="px-4 py-2 text-xs md:text-base rounded-md bg-sky-950  text-sky-50  hover:text-sky-700 rounded-l"
        >
          + Add Project
        </button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-2  text-sky-50 bg- hover:text-sky-200";
          if (project.id === selectProjectId) {
            cssClasses += " bg-sky-900 test-sky-100 bg-color: var(--color-black)";
          }else{
            cssClasses += " text-l text-sky-100 bg-sky-900 hover:bg-sky-700 rounded-xl";
          }
        return (
          <li key={project.id}>

          <button 
          onClick={() => onSelectProject(project.id)}
          className={cssClasses}>
          {project.title}
          </button>

        </li>
        )
        })}
          
      </ul>
    </aside>
  );
}
