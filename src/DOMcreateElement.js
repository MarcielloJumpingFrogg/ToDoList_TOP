import {reloadButton, addToListOfProjects, activateCorrispondingFunctions} from "././PageInteraction";
import { findProjectInStorageById } from "./storageManag";
import { findInStorage, Project } from "./Project";

const projectListContainer = document.getElementById('listOfProjects')




function createProjectInPage(title, id)
{   
    //title on one side
    // the rest in another div
    //title is divided in: 
        // button for the filter section
        // and plain text for the project side

    const projectsOnFilter = document.getElementById('listOfProjects') 
    const projectOnList = document.getElementById('projectContainer') 

    //qua ho : crea pulsante per filtro
    //         e crea scritta per progetto
    //         + creo i pulsanti: delete, edit per entrambi (rinchiusi in un div)

    
    //addGroupToPage(div.cloneNode(true), id)

    const filterSideContainers = containerForFilterSection(title)

    const projectSectionContainers = containerForProjectSection(title)


    filterSideContainers.dataset.id = id
    projectSectionContainers.dataset.id = id



    projectsOnFilter.appendChild(filterSideContainers)
    projectOnList.appendChild(projectSectionContainers)

    projectSectionContainers.appendChild(createTaskMenu(id))

    //should not be using div.cloneNode
    // should make it a function that creates 2 diff sets of DOM elements
    
    
    filterSideContainers.addEventListener('click' , function () {
        console.log(event.target.parentElement.parentNode)
        activateCorrispondingFunctions(event.target), findInStorage(event.target.parentElement.parentNode.dataset.id)
        
    })

    projectSectionContainers.addEventListener('click' , function () {
        console.log(event.target.parentElement.parentNode)
        activateCorrispondingFunctions(event.target), findInStorage(event.target.parentElement.parentNode.dataset.id)
        
    })
    
    
    addProjectToTaskSelection(title, id)


    //reloadButton()
}





function buttonCreator (text, className)
{
    const button = document.createElement('button')
    button.textContent = text 
    button.classList.add(className)

    return button
} 


function containerForFilterSection(title)
{ 
    const container = document.createElement('div')

    container.appendChild(buttonCreator(title, 'titleFilter'))

    container.appendChild(createProjectButtons())

    return container
}


function containerForProjectSection(title)
{
    const fullContainer = document.createElement('div')

    fullContainer.classList.add('projectListContainer')

    fullContainer.appendChild(textSection(title))

    const buttonContainer = createProjectButtons()
    const toggleTaskListVisibility = buttonCreator('>', 'toggleTaskVisibility')
    buttonContainer.appendChild(toggleTaskListVisibility)



    fullContainer.appendChild(buttonContainer) 

    return fullContainer

}


function textSection(text)
{ 
    const p = document.createElement('p')
    p.textContent = text
    return p
} 


function createProjectButtons () {
    const div = document.createElement('div')
    div.classList.add('buttonContainer') 

    createButtonsOfProject(div)
    createEditNamePopUp(div)

    return div
}


function createEditNamePopUp(container)
{
    const newNamePopUp = document.createElement('div')
    newNamePopUp.classList.add('newTitleInterface')
    newNamePopUp.classList.add('hidden')
    editNameInput(newNamePopUp, container)

    container.appendChild( newNamePopUp)
} 


function editNameInput(container, originalContainer)
{
    container.appendChild(inputCreator(originalContainer.children[0].textContent, 'inputEditProjectName'))
    container.appendChild(buttonCreator('Submit', 'submitNewNameBtn'))
}


function inputCreator(placeholder, className)
{
    const input = document.createElement('input')
    input.placeholder = placeholder
    input.classList.add(className)

    return input
}

function createButtonsOfProject(container){ 
    container.appendChild(buttonCreator('del', 'projectDeleteButton'))
    container.appendChild(buttonCreator('edit', 'toggleInterfaceChangeTitle'))
}

function addProjectToTaskSelection(title, id)
{
    const projectSelector = document.getElementById('projectDestination')

    const newOption = document.createElement('option')

    newOption.textContent = title

    newOption.dataset.id = id

    

    projectSelector.appendChild(newOption) 
}









function addGroupToPage(div, id) {
    const containerForEverything = document.createElement('div')
    containerForEverything.dataset.id = id

    containerForEverything.classList.add('projectListContainer')

    
    const toggleTasksVisibility = buttonCreator('><', 'toggleTaskVisibility')
    div.appendChild(toggleTasksVisibility)
    

    const page = document.getElementById('projectContainer')
    containerForEverything.appendChild(div)

    

    
    div.after(createTaskMenu(id))
    
    page.appendChild(containerForEverything)
    
    //addToListOfProjects(containerForEverything) //wtf

}

function createText(content, className) {
    const text = document.createElement('p')
    text.classList.add(className)
    text.textContent = content
    return text
}


function createCheckBox () {
    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox';
    checkBox.name = 'taskCheck'
    return checkBox
}


function createDeleteElementTask() {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'del'
    deleteButton.classList.add('deleteTask') 
    return deleteButton
}

function openTask() {
    //da fare
    const openTaskButton = document.createElement('button')
    openTaskButton.textContent = '><'
    openTaskButton.classList.add('openTask')
    return openTaskButton
}


function createDescription(description) {
    const desc = document.createElement('p')
    desc.textContent =  description
    return desc
}


function createDropDownSection (description) {
    const div = document.createElement('div')
    div.classList.add('dropDownMenu')
    div.classList.add('dropDownMenuClosed') 

    div.appendChild(createDescription(description))

    return div
}


function createTaskElement(task) {
    const div = document.createElement('div')
    div.dataset.id = task.id;
    div.classList.add('task')

    const upperSection = document.createElement('div')
    upperSection.classList.add('upperContainer')


    upperSection.appendChild(createText(task.title, 'title'))
    upperSection.appendChild(createText(task.dueDate, 'dueDate'))
    upperSection.appendChild(createText(task.priority, 'dueDate'))
    upperSection.appendChild(createCheckBox())
    upperSection.appendChild(openTask())
    upperSection.appendChild(createDeleteElementTask())

    div.appendChild(upperSection)

    div.appendChild(createDropDownSection(task.description))

    return div
}



function createTaskMenu(projectId) {
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('taskListHidden')
    const newTaskButton = buttonCreator('New Task', 'newTaskButton')
    taskContainer.appendChild(newTaskButton)
    taskContainer.classList.add('taskContainer')
    const project = findProjectInStorageById(projectId)

    for(let i = 0; i < project.tasks.length; i++)
    {
        taskContainer.appendChild( createTaskElement(project.tasks[i]))
    }
    return taskContainer
}













export {createProjectInPage, createTaskElement}