import createProject from "./createProject";
import projectManager from "./projectManager";


function removeProjectFromStorage(projectId)
{
    //localStorage.removeItem(projectId)
    for(let i = 0; i < (projectManager.projects).length; i++)
    {
        if((projectManager.projects)[i].id === projectId)
        {
            projectManager.projects.splice(i , 1)
            localStorage.setItem('data' , JSON.stringify(projectManager.projects))
        }
    }

    //remove project using find id from localstorage
}

function createProjectInStorage(name)
{
    
    projectManager.createProject(name) 
    localStorage.setItem('data', JSON.stringify(projectManager.projects))
    
} 



export {removeProjectFromStorage, createProjectInStorage}