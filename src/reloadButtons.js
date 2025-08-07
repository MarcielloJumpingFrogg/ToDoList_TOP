import { removeProjectFromStorage } from "./storageManag"
import { storageProject } from "./Project"
import loadPage from "./InitialPageLoading"

//domManagement


function a()
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

            const item = (storageProject.find(o => o.id === parentId))

            item.changeName('paolo')

            localStorage.setItem(parentId, JSON.stringify(item))


        })
    })

} 
