import projectManager from "./projectManager";
import buttonHandler from "./buttonHandler";

const page = document.getElementById('list')

function createButton(title, id)
{
    const div = document.createElement('div') 
    div.dataset.id = id

    const buttonNav = document.createElement('button')
    buttonNav.textContent = title 
    buttonNav.classList.add('projectFilterButton')
    
    div.appendChild(buttonNav)

    const buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'del';
    buttonDelete.classList.add('projectDeleteButton')

    div.appendChild(buttonDelete)

    const buttonEditName = document.createElement('button')
    buttonEditName.textContent = 'ed'
    buttonEditName.classList.add('editProjectName') 

    div.appendChild(buttonEditName)


    const divNewInput = document.createElement('div')
    
    divNewInput.classList.add('hidden')
    
    
    const inputEditName = document.createElement('input')
    inputEditName.placeholder = 'New Project Name'
    inputEditName.classList.add('inputEditProjectName')

    divNewInput.appendChild(inputEditName); 

    const submitNewName = document.createElement('button');
    submitNewName.textContent = 'submit'
    submitNewName.classList.add('submitNewNameBtn')
    
    divNewInput.appendChild(submitNewName)
    
    div.appendChild(divNewInput)

    page.appendChild(div)

}


function clearPage()
{ 
    while((page.childNodes).length > 0)
    { 
        let child = page.lastChild 
        page.removeChild(child)
    }
}

export default function()
{ 
    clearPage();
    (projectManager.projects).forEach(e=>
    { 
        if(projectManager.projects.indexOf(e) > 0)
        {
            createButton(e.name, e.id) 
        }
    }
    ) 

    buttonHandler()
}