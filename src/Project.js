import {removeProjectFromStorage, changeTitleInMemory} from './storageManag'
import Tasks from './task'; 
import { createProjectInPage } from './DOMcreateElement';


let storage = [];



class Project{
    constructor(title) {
        this.title = title,
        this.id = crypto.randomUUID()
        this.tasks = []
    }

    addTask(task)
    {
        //const restoredTask = Tasks.taskMethodRestore(task)
        //this.tasks.push(restoredTask)
    }

    removeTask(taskId)
    {
        const taskInStorage = this.findTask(taskId)
    }

    findTask(taskId)
    {
        return this.tasks.find(task => task.id === taskId)
    }

    //see toggleTaskListVisibility

    //see newTask

    /* 
    toggleTaskListVisibility() {
        visibilityTaskList(this.container)
    }

    newTask() {
        toggleVisibility(newTaskInterface)
        changeProjectDestination(this.id)
    }
    */


    // THIS is because i am not sure how to implement interface interaction like PopUps 


    createDomElement() 
    {
        createProjectInPage(this.title, this.id)
        
    }


    deleteSelf()
    { 
        removeProjectFromStorage(this.id)
        deleteFromPageWithId(this.id)
    }

    changeTitle(newTitle)
    { 
        this.title = newTitle 
        changeTitleInMemory(this.id, newTitle)
        //changeInMemory(newTitle)
    }

    static restoreProjectMethods(item)
    {
        return Object.assign(new Project, item) //+ chiarezza //maybe??
    }

}


function getContainer(id)
{ 
    const page = document.querySelector(`[data-id="${id}"]`)
}

function findInStorage(id)
{
    const thing = storage.find(project => project.id === id)
    console.log(thing)
    return thing
}

function findIdInPage(id) {
    const allIdInstance = document.querySelectorAll(`[data-id="${id}"]`)
    return allIdInstance
}


function deleteFromPageWithId(id) {
    const idInstance = findIdInPage(id)

    idInstance.forEach(element => {
        element.parentElement.removeChild(element)
    });
}


export { Project, storage , findInStorage}