import {Project, storageProject} from "./Project";

const page = document.getElementById('listOfProjects')

function removeProjectFromStorage(projectId)
{
    localStorage.removeItem(projectId)
    /* 
    for(let i = 0; i < (storageProject).length; i++)
    {
        if((storageProject)[i].id === projectId)
        {
            storageProject.splice(i , 1)
            localStorage.setItem('data' , JSON.stringify(storageProject))
        }
    } */
    const foundProjToRemove = storageProject.find(o => o.id === projectId)
    storageProject.slice(storageProject.indexOf(foundProjToRemove), 1)
    const elementOnPageToRemove = document.querySelector('[data-id = "' + projectId + '"')
    console.log(elementOnPageToRemove) 
    page.removeChild(elementOnPageToRemove)

    //remove project using find id from localstorage
}

function createProjectInStorage(name)
{
    /* 
    localStorage.setItem()

    for(let i = 0; i < (storageProject).length; i++)
    { 
        projectManager.createProject(name) 
        console.log(storageProject)
        localStorage.setItem(storageProject[i].id, JSON.stringify(storageProject[i]))
        
    } */

    const newProject = new Project(name)

    localStorage.setItem(newProject.id , JSON.stringify(newProject)) 
    //loadPage()

    
} 



export {removeProjectFromStorage, createProjectInStorage}