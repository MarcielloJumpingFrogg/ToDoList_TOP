import {reloadButton, addToListOfProjects} from "././PageInteraction";
import { findProjectInStorageById } from "./storageManag";
import { Project } from "./Project";

const projectListContainer = document.getElementById('listOfProjects')


function buttonCreator (text, className)
{
    const button = document.createElement('button')
    button.textContent = text 
    button.classList.add(className)

    return button
}

function inputCreator(placeholder, className, container)
{
    const input = document.createElement('input')
    input.placeholder = placeholder
    input.classList.add(className)

    return input
}


function buttonsOfProject(title, container){
    container.appendChild(buttonCreator(title, 'projectFilterButton'))
    container.appendChild(buttonCreator('del', 'projectDeleteButton'))
    container.appendChild(buttonCreator('edit', 'toggleInterfaceChangeTitle'))
}


function editNameInput(container, originalContainer)
{
    container.appendChild(inputCreator(originalContainer.children[0].textContent, 'inputEditProjectName'))
    container.appendChild(buttonCreator('Submit', 'submitNewNameBtn'))
}


function editNamePopUp(container)
{
    const newNamePopUp = document.createElement('div')
    newNamePopUp.classList.add('newTitleInterface')
    newNamePopUp.classList.add('hidden')
    editNameInput(newNamePopUp, container)

    container.appendChild( newNamePopUp)
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
    addToListOfProjects(containerForEverything)

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

    div.appendChild(upperSection)

    div.appendChild(createDropDownSection(task.description))

    return div
}



function createTaskMenu(projectId) {
    const taskContainer = document.createElement('div')
    const newTask = buttonCreator('New Task', 'newTaskButton')
    taskContainer.appendChild(newTask)
    taskContainer.classList.add('taskContainer')
    const project = findProjectInStorageById(projectId)

    for(let i = 0; i < project.tasks.length; i++)
    {
        taskContainer.appendChild( createTaskElement(project.tasks[i]))
    }
    return taskContainer
}



function addProjectToTaskSelection(title, id)
{
    const projectSelector = document.getElementById('projectDestination')

    const newOption = document.createElement('option')

    newOption.textContent = title

    newOption.dataset.id = id

    

    projectSelector.appendChild(newOption) 
}



function createProjectButtons (title, id) {
    const div = document.createElement('div')
    div.classList.add('buttonContainer')
    div.dataset.id = id

    buttonsOfProject(title, div)
    editNamePopUp(div)

    return div
}




function createProjectInPage(title, id, container)
{
    const div = createProjectButtons(title, id) 
    addGroupToPage(div.cloneNode(true), id)
    
    container.appendChild(div) 
    
    
    
    addProjectToTaskSelection(title, id)


    reloadButton()
}

export {createProjectInPage, createTaskElement}