import {reloadButton} from "././PageInteraction";

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
    buttonCreator('edit', 'editProjectName', container)
}


function editNameInput(container)
{
    buttonCreator('Submit', 'submitNewNameBtn', container)
    inputCreator('New Project Name', 'inputEditProjectName', container)
}


function editNamePopUp(container)
{
    const newNamePopUp = document.createElement('div')
    newNamePopUp.classList.add('hidden')
    editNameInput(newNamePopUp)

    container.appendChild( newNamePopUp)
} 



function createProjectInList(title, id, container)
{
    const div = document.createElement('div') 
    div.dataset.id = id 
    
    buttonsOfProject(title, div)

    editNamePopUp(div) 

    container.appendChild(div)
    reloadButton()
}

export {createProjectInList}