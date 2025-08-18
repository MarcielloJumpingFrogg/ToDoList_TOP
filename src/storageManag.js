import {Project, storageProject} from "./Project";
import { createTaskElement } from "./DOMcreateElement";

const page = document.getElementById('listOfProjects')


function findProjectInStorageById(id) { 
    return storageProject.find(project => project.id === id)
    
}


function removeProjectFromStorage(projectId)
{
    localStorage.removeItem(projectId)
    
    const foundProjToRemove = findProjectInStorageById(projectId)
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
    const foundProjToRename = findProjectInStorageById(id)
    foundProjToRename.title = newTitle
    localStorage.setItem(id, JSON.stringify(foundProjToRename))
}


function addTaskToProject(task, projectId) {
    if(projectId !== '1')
    {
        const foundProject = findProjectInStorageById(projectId) 
        foundProject.addTask(task)
        
        localStorage.setItem(projectId, JSON.stringify(foundProject))

        const projectById = findProjectWithId(projectId)

        projectById.appendChild(createTaskElement(task))

        //add to the dom element (project with the id)
    }
}


function findProjectWithId(id) {
    const projectContainer = document.getElementById('projectContainer')

    return projectContainer.querySelector(`[data-id="${id}"]`)
}


export {removeProjectFromStorage, createProjectInStorage, changeTitleInMemory, addTaskToProject, findProjectInStorageById}