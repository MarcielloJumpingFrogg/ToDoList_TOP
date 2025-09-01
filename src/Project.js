import {removeProjectFromStorage, changeTitleInMemory} from './storageManag'
import Tasks from './task'; 
import { createProjectInPage } from './DOMcreateElement';


let storage = [];



class Project{
    constructor(title) {
        this.title = title,
        this.id = crypto.randomUUID()
        this.tasks = []
        this.container 
    }

    addTask(task)
    { 
        this.tasks.push(task)
        console.log(this.tasks)
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

    
    toggleTaskListVisibility() {
        visibilityTaskList(this.container)
    }

    newTask() {
        toggleVisibility(newTaskInterface)
        changeProjectDestination(this.id)
    }
    


    // THIS is because i am not sure how to implement interface interaction like PopUps 


    createDomElement() 
    {
        createProjectInPage(this.title, this.id)
        this.container = getContainer(this.id)
        console.log(this.container)
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


    toggleChangeNameVisibility() 
    { 
        toggleVisibility(editInterface(this.container))
    }
}


function getContainer(id)
{ 
    const projectContainer = document.getElementById('projectContainer') 

    const containerOnPage = projectContainer.querySelector(`[data-id="${id}"]`) 

    return containerOnPage
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



function eventListenerAdder(item){ 
    item.container.addEventListener('click', function(){ 
        //console.log(event.target.classList)
        activateCorrispondingFunctions(event.target, item)
    })
}


function editInterface(container) {
    console.log( container)
    return container.querySelector('.newTitleInterface')
}



function toggleVisibility(target){
    target.classList.toggle('hidden')
    target.classList.toggle('show')
}




function retrieveNewTitle(container) {
    return container.querySelector('.inputEditProjectName').value
}

function retrieveOldTitle(container) {
    return container.querySelector('.projectFilterButton')
}


/* function changeTitleInMemory(project, newTitle) {
    findProject(project).changeTitle(newTitle)
}
 */


export { Project, storage , findInStorage, toggleVisibility}