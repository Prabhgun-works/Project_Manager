import {useState} from 'react'

import Sidebar from './components/Sidebar';
import SelectedProject from './components/SelectedProject';
import NoProjectSelected from './components/NoProjectSelected';
import NewProject from './components/NewProject';
export default function App() {
    const[ projectsState ,setProjectsState] = useState({
      selectedProjectId: undefined,
      projects : []
    });

    function handleSelectProject(id){
      setProjectsState((prevState) =>{
        return{
          ...prevState,
          selectedProjectId : id,
        } 
      })
    }

    function handleSideAddProject(){
      setProjectsState(prevState =>{
        return{
          ...prevState,
          selectedProjectId: null ,
        };
      });}
      function handleMainAddproject(projectData){
        const projectId =  Math.random()

        setProjectsState(prevState =>{
          const newProject ={
            ...projectData, 
            id : projectId, 
          }
          return {
            ...prevState, 
            selectedProjectId : undefined, 
            projects : [...prevState.projects , newProject], 
          }
        })
      }
    

    console.log(projectsState);
    const selectedProjectId = projectsState.selectedProjectId;
     let content = <SelectedProject project={selectedProjectId}/>; 

     if(projectsState.selectedProjectId === null){
        content = <NewProject onAdd={handleMainAddproject}/>
     }   else if(projectsState.selectedProjectId === undefined){
        content = <NoProjectSelected onChange = {handleSideAddProject}/>;

     }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <Sidebar 
        Change={handleSideAddProject}  
        projects = {projectsState.projects}

        onSelectProject = {handleSelectProject}/>
          {content}
    </main>
  )
}
