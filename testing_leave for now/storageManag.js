import createProject from "./createProject";
import projectManager from "./projectManager";


function removeProjectFromStorage(projectId)
{
    localStorage.removeItem(projectId)

    //remove project using find id from localstorage
}

function createProjectInStorage(name)
{
    
    projectManager.createProject(name) 
    localStorage.setItem('test', JSON.stringify(projectManager.projects))
    
} 

function loadPage()
{
    
    const item = createProject.restoreProjectMethods((JSON.parse(localStorage.getItem('test'))[0]))
    
    
}

export {removeProjectFromStorage, createProjectInStorage, loadPage}