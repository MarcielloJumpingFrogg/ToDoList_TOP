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
    buttonCreator('edit', 'toggleInterfaceChangeTitle', container)
}


function editNameInput(container, originalContainer)
{
    console.log(originalContainer.children[0].textContent)
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

function addGroupToPage(aaa) {
    const containerForEverything = document.createElement('div')

    containerForEverything.classList.add('projectListContainer')

    const page = document.getElementById('projectContainer')
    containerForEverything.appendChild(aaa)

    page.appendChild(containerForEverything)

}


function createProjectInList(title, id, container)
{
    const div = document.createElement('div') 
    div.classList.add('buttonContainer')
    div.dataset.id = id 
    
    buttonsOfProject(title, div)
    editNamePopUp(div) 
    
    

    
    
    
    container.appendChild(div) 
    
    addGroupToPage(div.cloneNode(true))
    
    
    


    reloadButton()
}

export {createProjectInList}