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
        const taskContainer = this.container.querySelector('.taskContainer') 
        taskContainer.classList.toggle('taskListHidden')
    }

    newTask() {
        toggleVisibility(newTaskInterface)
        changeDestinationForNewTask(this.id)
    }
    


    // THIS is because i am not sure how to implement interface interaction like PopUps 


    createDomElement() 
    {
        createProjectInPage(this.title, this.id)
        this.container = getContainer(this.id)
    }


    deleteSelf()
    { 
        removeProjectFromStorage(this.id)
        deleteFromPageWithId(this.id)
    }

    changeTitle()
    { 
        this.title = retrieveNewTitle(this.container) 
        changeTitleInMemory(this.id, this.title)
        changeTitleInPage(this.id, this.title)
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
    //console.log(thing)
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



function editInterface(container) {
    return container.querySelector('.newTitleInterface')
}



function toggleVisibility(target){
    target.classList.toggle('hidden')
    target.classList.toggle('show')
}




function retrieveNewTitle(container) {
    return container.querySelector('.inputEditProjectName').value
}


function changeTitleInPage(id, newTitle) {
    const elements = findIdInPage(id)
    

    elements.forEach(element => {
        const oldTitleFilter = element.querySelector('.titleFilter')
        const oldTitleText = element.querySelector('.title')

        let oldTitleOption = checkIfOption(element)
        
        if(oldTitleFilter)
        { 
            oldTitleFilter.textContent = newTitle
        }

        if(oldTitleText)
        {
            oldTitleText.textContent = newTitle
        }

        if(oldTitleOption)
        {
            element.textContent = newTitle
            oldTitleOption = ''
        }
    });


        
        
    function checkIfOption(element)
    {
        if(element.nodeName == 'OPTION')
        {   
            return true
        }
        else
        {
            return false
        } 
    }
}

/* function changeTitleInMemory(project, newTitle) {
    findProject(project).changeTitle(newTitle)
}
 */


export { Project, storage , findInStorage, toggleVisibility}