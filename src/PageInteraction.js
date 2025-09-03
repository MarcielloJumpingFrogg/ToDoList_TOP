import { Project, storage , findInStorage, toggleVisibility} from "./Project";
import { insertProjectInStorage , addTaskToProject} from "./storageManag";
import { createProjectInPage } from "./DOMcreateElement";
import Tasks from "./task";



const newProjectButtonInterface = document.getElementById('newProject')
const newProjectPopUp = document.getElementById('popUpScreenNewProject')


const list = document.getElementById('listOfProjects')
const proj = document.getElementById('projectContainer')

const newTask = document.getElementById('newTask')
const newTaskInterface = document.getElementById('newTaskPopUp')

const submitNewTask = document.getElementById('submitNewTask')

const optionList = document.getElementById('projectDestination') 


const closePopUp = document.getElementById('closePopUp')





const fullList = []        
const listOfProjects = [] 
//if i find in fullList the id of the parent of the task, then i can append the task to the .taskList element and make it deletable togheter with the actual project






function addToListOfProjects(project) {

    listOfProjects.push(new Project(project))
    
    for(let i = 1; i < localStorage.length; i++) 
    {
        //listOfProjects[i].addTaskToProject((retrieveAllTasks(i)))
    }

    listOfProjects.forEach( element => {
        if(!element.loaded) 
        {
            element.loadEventListener()
        }
    })
}


function retrieveAllTasks(i) {
    //console.log(localStorage.getItem(localStorage.key(i)))
}


function eventListenerAdder(item){ 
    item.container.addEventListener('click', function(){ 
        //console.log(event.target.classList)
        activateCorrispondingFunctions(event.target, item)
    })
}







function activateCorrispondingFunctions(target)
{ 
    const targetClass = target.classList

    const parent = findInStorage(target.parentNode.parentNode.dataset.id)

    const container = findInStorage(target.parentElement.parentElement.parentElement.dataset.id)

    if(targetClass == 'projectFilterButton')
    {
        parent.filter()
    }
    else if( targetClass == 'projectDeleteButton')
    {
        parent.deleteSelf()
    }
    else if( targetClass == 'toggleInterfaceChangeTitle')
    {
        parent.toggleChangeNameVisibility()
    }
    else if( targetClass == 'submitNewNameBtn')
    {
        container.changeTitle()
    }
    else if( targetClass == 'newTaskButton') 
    {
        newTaskInterfaceToggle(target)
    }
    else if (targetClass == 'openTask') 
    { 
        toggleDropDownVisibility(target)
    }
    else if ( targetClass == 'toggleTaskVisibility')
    {
        parent.toggleTaskListVisibility()
    } 
    else if( targetClass == 'deleteTask')
    {
        parent.removeTask(target.parentNode.parentNode.dataset.id)
    }
}


function changeDestinationForNewTask(project) {
    const projectDestination = document.getElementById('projectDestination')
    const test = projectDestination.querySelector(`[data-id="${project}"`)
    test.selected = true;
}


function toggleDropDownVisibility(item) {
    console.log(item)
    const container = item.parentElement.parentElement
    const dropDownMenu = container.querySelector('.dropDownMenu')
    
    
    dropDownMenu.classList.toggle('dropDownMenuOpen')
} 


function findProject(project) {
    return storage.find(name => name.id === project)
} 












const submitNewProject = document.getElementById('submitNewProject')

submitNewProject.onclick = function()
{
    const newProjectName = document.getElementById('newProjectName').value
    const newProject = new Project(newProjectName)
    insertProjectInStorage(newProject) 
    
    newProject.createDomElement()

    //createProjectInPage(newProject.title, newProject.id, list) 
} 




newProjectButtonInterface.onclick = function() {
    toggleVisibility(newProjectPopUp)
}


function findItemInObject(parentId) {
    return storage.find(names => names.id === parentId)
} 



newTask.onclick = function () {
    toggleVisibility(newTaskInterface)
    changeDestinationForNewTask(1)
} 


function newTaskInterfaceToggle(target)
{
    const id = target.parentElement.parentElement.dataset.id
    toggleVisibility(newTaskInterface)
    changeDestinationForNewTask(id)
}


function getAllNewTaskData() {
    const getDestination = getDestinationProject()

    const taskTitle = getTaskTitle()

    const dueDateNewTask = getDueDate()

    const priority = getPriority()

    const description = getDescription()

    const newTask = new Tasks(taskTitle, description, dueDateNewTask, priority) 


    const project = findProject(getDestination)
    project.addTask(newTask)
    console.log(project)
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
}





closePopUp.addEventListener('click', function() {
    toggleVisibility(closePopUp.parentNode.parentNode)
    
})


export {addToListOfProjects, activateCorrispondingFunctions}