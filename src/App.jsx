import {useState} from 'react'

import Sidebar from './components/Sidebar';
import NoProjectSelected from './components/NoProjectSelected';
import NewProject from './components/NewProject';
export default function App() {
    const[ projectsState ,setProjectsState] = useState({
      selectedProjectId: undefined,
      projects : []
    });

    function handleAddProject(projectData){
      setProjectsState(prevState =>{
        return{
          ...prevState,
          selectedProjectId: null ,
        };
      });
      function handleAddproject(projectData){
        setProjectsState(prevState =>{
          const newProject ={
            ...projectData, 
            id : Math.random()
          }
          return {
            ...prevState, 
            projects : [...prevState.projects , newProject], 
          }
        })
      }
    }
    console.log(projectsState);
     let content; 
     if(projectsState.selectedProjectId === null){
      content = <NewProject onAdd={handleAddProject}/>
     }   else if(projectsState.selectedProjectId === undefined){
        content = <NoProjectSelected Change = {handleAddProject}/>;

     }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar Change={handleAddProject}/>
      {content}
    </main>
  )
}
