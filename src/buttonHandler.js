import { removeProjectFromStorage } from "./storageManag"
import projectManager from "./projectManager"
import loadPage from "./loadPage"

export default function()
{
    const deleteButton = document.querySelectorAll('.projectDeleteButton')
    
    deleteButton.forEach(button => {
        button.addEventListener('click', function(){
    
            removeProjectFromStorage((button.parentNode).dataset.id)
        }) 
    })

    const editNameButton = document.querySelectorAll('.editProjectName')

    editNameButton.forEach(button => {
        button.addEventListener('click', function(){
            
            const parentId = (button.parentNode).dataset.id
            const item = (projectManager.projects.find(o => o.id === parentId))
            item.changeName('paolo')
            localStorage.setItem(parentId, JSON.stringify(item))
            loadPage()
            console.log(item)
        })
    })

} 
