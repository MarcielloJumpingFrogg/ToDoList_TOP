import {reloadButton} from "././PageInteraction";
import { findProjectInStorageById } from "./storageManag";
import { Project } from "./Project";

const projectListContainer = document.getElementById('listOfProjects')


function buttonCreator (text, className, container)
{
    const button = document.createElement('button')
    button.textContent = text 
    button.classList.add(className)

    container.appendChild(button)
}

function inputCreator(placeholder, className, container)
{
    const input = document.createElement('input')
    input.placeholder = placeholder
    input.classList.add(className)

    container.appendChild(input)
}


function buttonsOfProject(title, container){
    buttonCreator(title, 'projectFilterButton', container)
    buttonCreator('del', 'projectDeleteButton', container)
    buttonCreator('edit', 'toggleInterfaceChangeTitle', container)
}


function editNameInput(container, originalContainer)
{
    inputCreator(originalContainer.children[0].textContent, 'inputEditProjectName', container)
    buttonCreator('Submit', 'submitNewNameBtn', container)
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

    
    
    const page = document.getElementById('projectContainer')
    containerForEverything.appendChild(div)

    
    containerForEverything.appendChild(createTaskMenu(id))
    
    page.appendChild(containerForEverything)

}

function createText(content) {
    const text = document.createElement('p')
    text.textContent = content
    return text
}


function createCheckBox () {
    const checkBox = document.createElement('checkbox')
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

    div.appendChild(createDescription(description))

    return div
}


function createTaskElement(task) {
    const div = document.createElement('div')
    div.dataset.id = task.id;

    div.appendChild(createText(task.title))
    div.appendChild(createText(task.dueDate))
    div.appendChild(createText(task.priority))
    div.appendChild(createCheckBox())
    //div.appendChild(createDeleteElementTask())
    div.appendChild(openTask())

    div.appendChild(createDropDownSection(task.description))

    return div
}



function createTaskMenu(projectId) {
    const taskContainer = document.createElement('div')
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





function createProjectInList(title, id, container)
{
    const div = document.createElement('div') 
    div.classList.add('buttonContainer')
    div.dataset.id = id 
    
    buttonsOfProject(title, div)
    editNamePopUp(div) 
    
    
//addTasks to this 
    container.appendChild(createTaskMenu(id))
    //newOption.appendChild(createTaskMenu(id))
    
    
    
    container.appendChild(div) 
    
    addGroupToPage(div.cloneNode(true), id)
    
    
    addProjectToTaskSelection(title, id)


    reloadButton()
}

export {createProjectInList}