import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId : undefined,
    projects: []
  })

  function handleStartAddProject () {
    setProjectState( prevState => {
      return {
        ...prevState,
        selectedProjectId:null
      }
    })
  }

  const handelProject = (projectData) => {
    setProjectState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  };

  let content;

  if (projectState.selectedProjectId === null)
    content = <NewProject onAdd={handelProject}/>
  else if (projectState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartAddProject = {handleStartAddProject}/>
  
  return (
    <main className="h-screen my-8 flex gap-8">
     <ProjectsSideBar onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
     {content}
    </main>
  );
}

export default App;
