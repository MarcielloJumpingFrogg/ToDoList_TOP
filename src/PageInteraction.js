import { Project, storageProject } from "./Project";
import { createProjectInStorage , addTaskToProject} from "./storageManag";
import { createProjectInPage } from "./DOMcreateElement";
import Tasks from "./task";



const newProjectButtonInterface = document.getElementById('newProject')
const newProjectPopUp = document.getElementById('popUpScreenNewProject')


const list = document.getElementById('listOfProjects')
const proj = document.getElementById('projectContainer')

const newTask = document.getElementById('newTask')
const newTaskInterface = document.getElementById('newTaskForGeneralPopUp')

const submitNewTask = document.getElementById('submitNewTask')

const optionList = document.getElementById('projectDestination') 






const fullList = []        
const listOfProjects = [] 
//if i find in fullList the id of the parent of the task, then i can append the task to the .taskList element and make it deletable togheter with the actual project


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

class ProjectOnPage extends Container {
    constructor (container) {
        super(container) ;
        this.taskList = []
    }

    addTaskToProject(newTask) {
        this.taskList.push(newTask)
        //pass task through task.taskMethodLoader (from task.js)
    }

    removeTaskFromProject() {
        //i am not sure if this is supposed to stay here, BUUUUUT per ora lo lascio, se non altro per avere un punto di riferimento per cosa mi manca i guess? idk im tired
    }

    toggleDropDownMenu() {
        toggleDropDownVisibility(this.container)
    }

    newTask() {
        toggleVisibility(newTaskInterface)
        changeProjectDestination(this.id)
    }
}


function addToListOfProjects(project) {

    listOfProjects.push(new ProjectOnPage(project))
    listOfProjects.forEach( element => {
        if(!element.loaded) 
        {
            element.loadEventListener()
        }
    })
}



function eventListenerAdder(item){ 
    item.container.addEventListener('click', function(){ 
        console.log(event.target.classList)
        activateCorrispondingFunctions(event.target.classList, item)
    })
}


function deleteFromPageWithId(id) {
    const idInstance = findIdInPage(id)

    idInstance.forEach(element => {
        element.parentElement.removeChild(element)
    });
}

function findIdInPage(id) {
    const allIdInstance = document.querySelectorAll(`[data-id="${id}"]`)
    console.log(allIdInstance)
    return allIdInstance
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
    else if( element == 'newTaskButton') 
    {
        parent.newTask()
    }
    else if (element == 'openTask') 
    {
        toggleDropDownVisibility(element, parent) 
        //dovrebbe essere un metodo della task, non del parent
        //se io dico al parent di attivarla non sa quale task in particolare mi sto riferendo
        //posso usarlo per aprire il menu con tutte le tasks
    }
}


function changeProjectDestination(project) {
    const projectDestination = document.getElementById('projectDestination')
    const test = projectDestination.querySelector(`[data-id="${project}"`)
    test.selected = true;
}


function toggleDropDownVisibility(item, parent) {
    console.log(item)
    //item.classList.toggle('dropDownMenuOpen')
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
    return storageProject.find(names => names.id === parentId)
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




export {reloadButton, addToListOfProjects}