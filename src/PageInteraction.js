import { Project, storage , findInStorage} from "./Project";
import { createProjectInStorage , addTaskToProject, Container} from "./storageManag";
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

    listOfProjects.push(new Container(project))
    
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
        parent.changeTitle()
    }
    else if( targetClass == 'newTaskButton') 
    {
        parent.newTask()
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


function changeProjectDestination(project) {
    const projectDestination = document.getElementById('projectDestination')
    const test = projectDestination.querySelector(`[data-id="${project}"`)
    test.selected = true;
}


function toggleDropDownVisibility(item) {
    const container = item.parentElement.parentElement
    const dropDownMenu = container.querySelector('.dropDownMenu')
    
    
    dropDownMenu.classList.toggle('dropDownMenuOpen')
}


function visibilityTaskList(item) {
    const taskContainer = item.querySelector('.taskContainer')
    console.log(taskContainer)
    taskContainer.classList.toggle('taskListHidden')
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
    return storage.find(name => name.id === project)
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


function loadProjects() {
    
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
    return storage.find(names => names.id === parentId)
} 



newTask.onclick = function () {
    toggleVisibility(newTaskInterface)
    changeProjectDestination(1)
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
}



function reloadButton()
{ 
    loadDivs()
}



function loadTaskButtons() {

}


closePopUp.addEventListener('click', function() {
    toggleVisibility(closePopUp.parentNode.parentNode)
    
})



export {reloadButton, addToListOfProjects, activateCorrispondingFunctions}