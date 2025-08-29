import {Project, storage} from "./Project";
import { createTaskElement } from "./DOMcreateElement";
import Tasks from "./task";


const page = document.getElementById('listOfProjects')



/* 
class Container {
    constructor(container)
    {
        this.container = container
        this.id = this.container.dataset.id
        this.loaded = false 
        this.taskList = []
    } 



    addTaskToProject(newTask) { 
        this.taskList.push(newTask)
        //pass task through task.taskMethodLoader (from task.js)
    }

    removeTask(taskId) {
        console.log(taskId)
        console.log(this.taskList)
        const taskInStorage = this.findTask(taskId)
        console.log(taskInStorage)
        //i am not sure if this is supposed to stay here, BUUUUUT per ora lo lascio, se non altro per avere un punto di riferimento per cosa mi manca i guess? idk im tired
    }

    findTask(taskId) {
        return this.taskList.find(task => task.id === taskId)
    }

    toggleTaskListVisibility() {
        visibilityTaskList(this.container)
    }

    newTask() {
        toggleVisibility(newTaskInterface)
        changeProjectDestination(this.id)
    }





    deleteSelf()
    { 
        deleteFromPageWithId(this.id)
        deleteFromStorage(this.id)
    }

    toggleChangeNameVisibility() 
    {
        toggleVisibility(editInterface(this.container))
    }

    changeTitle()
    {
        const newTitle = retrieveNewTitle(this.container)
        const oldTitle = retrieveOldTitle(this.container)
        oldTitle.textContent = newTitle
        changeTitleInMemory(this.id, newTitle)
    }

    filter()
    {
        //to do
        console.log('filtering')
    }

    

    loadEventListener()
    {
        if(!this.loaded)
        {
            eventListenerAdder(this) 
            this.loaded = true
        }
    }
} 
 */





function findProjectInStorageById(id) { 
    return storage.find(project => project.id === id)
    
}


function removeProjectFromStorage(projectId)
{
    localStorage.removeItem(projectId)
    
    const foundProjToRemove = findProjectInStorageById(projectId)
    storage.slice(storage.indexOf(foundProjToRemove), 1) 

}

function createProjectInStorage(name)
{
    
    const newProject = new Project(name)

    localStorage.setItem(newProject.id , JSON.stringify(newProject)) 
    storage.push(newProject)

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
        const taskContainerOfProjectById = projectById.querySelector('.taskContainer')

        taskContainerOfProjectById.appendChild(createTaskElement(task))

        //add to the dom element (project with the id)
    }
}


function findProjectWithId(id) {
    const projectContainer = document.getElementById('projectContainer')

    return projectContainer.querySelector(`[data-id="${id}"]`)
}


export {removeProjectFromStorage, createProjectInStorage, changeTitleInMemory, addTaskToProject, findProjectInStorageById}