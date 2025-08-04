import projectManager from "./projectManager";

const page = document.body

function createButton(title, id)
{
    const button = document.createElement('button')
    button.textContent = title
    button.dataset.id = id
    button.classList.add('ProjectButtons')

    page.appendChild(button)
}


export default function()
{
    (projectManager.projects).forEach(e=>
    {
        console.log(e)
        createButton(e.name, e.id)
    }
    )
}