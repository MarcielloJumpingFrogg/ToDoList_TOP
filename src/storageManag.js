import createProject from "./createProject";
import loadPage from "./loadPage";
import projectManager from "./projectManager"; 

const page = document.getElementById('list')

function removeProjectFromStorage(projectId)
{
    localStorage.removeItem(projectId)
    /* for(let i = 0; i < (projectManager.projects).length; i++)
    {
        if((projectManager.projects)[i].id === projectId)
        {
            projectManager.projects.splice(i , 1)
            localStorage.setItem('data' , JSON.stringify(projectManager.projects))
        }
    } */
    const foundProjToRemove = projectManager.projects.find(o => o.id === projectId)
    projectManager.projects.slice(projectManager.projects.indexOf(foundProjToRemove), 1)
    const elementOnPageToRemove = document.querySelector('[data-id = "' + projectId + '"') 
    page.removeChild(elementOnPageToRemove)
    
    
    //loadPage()

    //remove project using find id from localstorage
}

function createProjectInStorage(name)
{
    /* localStorage.setItem()

    for(let i = 0; i < (projectManager.projects).length; i++)
    { 
        projectManager.createProject(name) 
        console.log(projectManager.projects)
        localStorage.setItem(projectManager.projects[i].id, JSON.stringify(projectManager.projects[i]))
        
    } */

    const newProject = new createProject(name)

    localStorage.setItem(newProject.id , JSON.stringify(newProject)) 
    loadPage()

    
} 



export {removeProjectFromStorage, createProjectInStorage}