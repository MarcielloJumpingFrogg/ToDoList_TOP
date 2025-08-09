import {Project, storageProject} from "./Project";

const page = document.getElementById('listOfProjects')

function removeProjectFromStorage(projectId)
{
    localStorage.removeItem(projectId)
    
    const foundProjToRemove = storageProject.find(o => o.id === projectId)
    storageProject.slice(storageProject.indexOf(foundProjToRemove), 1) 

}

function createProjectInStorage(name)
{
    
    const newProject = new Project(name)

    localStorage.setItem(newProject.id , JSON.stringify(newProject)) 
    storageProject.push(newProject)

    return newProject.id
    //loadPage()

    
} 

function changeTitleInMemory( id , newTitle) {
    const foundProjToRename = storageProject.find(o => o.id === id)
    foundProjToRename.title = newTitle
    localStorage.setItem(id, JSON.stringify(foundProjToRename))
}



export {removeProjectFromStorage, createProjectInStorage, changeTitleInMemory}