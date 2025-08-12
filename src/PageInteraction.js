import { Project, storageProject } from "./Project";
import { createProjectInStorage , addTaskToProject} from "./storageManag";
import { createProjectInPage } from "./DOMcreateElement";
import Tasks from "./task";



const newProjectButtonInterface = document.getElementById('newProject')
const newProjectPopUp = document.getElementById('popUpScreenNewProject')


const list = document.getElementById('listOfProjects')

const newTask = document.getElementById('newTask')
const newTaskInterface = document.getElementById('newTaskForGeneralPopUp')

const submitNewTask = document.getElementById('submitNewTask')

const optionList = document.getElementById('projectDestination') 






const fullList = [] 


class Container {
    constructor(container)
    {
        this.container = container
        this.id = this.container.dataset.id
        this.loaded = false
    }

    addToList()
    {
        fullList.push(this.container)
    }

    deleteSelf()
    {
        list.removeChild(this.container)
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


function eventListenerAdder(item){
    item.container.addEventListener('click', function(){
        activateCorrispondingFunctions(event.target.classList, item)
    })
}


function activateCorrispondingFunctions(element, parent)
{ 

    if(element == 'projectFilterButton')
    {
        parent.filter()
    }
    else if( element == 'projectDeleteButton')
    {
        parent.deleteSelf()
    }
    else if( element == 'toggleInterfaceChangeTitle')
    {
        parent.toggleChangeNameVisibility()
    }
    else if( element == 'submitNewNameBtn')
    {
        parent.changeTitle()
    }
}





function foundId(fullList, target)
{
    for (let i = 0; i < fullList.length;i++)
    {
        if(fullList[i].id == target)
        {
            return true
        }
    }
    return false
}


function findProject(project) {
    return storageProject.find(name => name.id === project)
}



function deleteFromStorage(project) {
    findProject(project).deleteSelf()
}



function loadDivs()
{
    const list = document.getElementById('listOfProjects') 
    
    const div = list.querySelectorAll('[data-id]') 
    div.forEach(element => {
        const targetToFind = element.dataset.id
        if(!foundId(fullList, targetToFind))
        {
            fullList.push(new Container(element))
        } 
    });

    fullList.forEach(div => {
        if(!div.loaded)
        {
            div.loadEventListener()
        }
    
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

function retrieveOldTitle(container) {
    return container.querySelector('.projectFilterButton')
}


function changeTitleInMemory(project, newTitle) {
    findProject(project).changeTitle(newTitle)
}










const submitNewProject = document.getElementById('submitNewProject')

submitNewProject.onclick = function()
{
    const newProjectName = document.getElementById('newProjectName').value
    const id = createProjectInStorage(newProjectName)

    const obj = findItemInObject(id)
    
    createProjectInPage(obj.title, obj.id, list)
    
    
    

    loadDivs()
} 




newProjectButtonInterface.onclick = function() {
    toggleVisibility(newProjectPopUp)
}


function findItemInObject(parentId) {
    return storageProject.find(names => names.id === parentId)
} 



newTask.onclick = function () {
    toggleVisibility(newTaskInterface)
} 



function getAllNewTaskData() {
    const getDestination = getDestinationProject()

    const taskTitle = getTaskTitle()

    const dueDateNewTask = getDueDate()

    const priority = getPriority()

    const description = getDescription()

    const newTask = new Tasks(taskTitle, description, dueDateNewTask, priority)

    addTaskToProject(newTask, getDestination)
}




function getDestinationProject()
{
    return optionList[optionList.selectedIndex].dataset.id
}

function getTaskTitle() {
    return document.getElementById('titleNewTask').value
}


function getDueDate() {
    return document.getElementById('dateNewTask').value
}

function getPriority() {
    const priority = document.getElementById('priorityNewTask')
    const val = priority[priority.selectedIndex].value

    return val
}

function getDescription() {
    return document.getElementById('descriptionNewTask').value
}



submitNewTask.onclick = function() {
    
    getAllNewTaskData()
    

    //getAllNewTaskData
    
    //getTitle

    //getDueDate

    //getPriority

    //get Description

    //send All to project
}



function reloadButton()
{ 
    
    loadDivs()
}





export {reloadButton}