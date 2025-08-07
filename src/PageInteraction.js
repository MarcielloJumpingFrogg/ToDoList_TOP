import { storageProject } from "./Project";
import { createProjectInStorage } from "./storageManag";        

const newProjectButtonInterface = document.getElementById('newProject')
const newProjectPopUp = document.getElementById('popUpScreenNewProject')

const changeProjectName = document.querySelectorAll('.editProjectName')



function toggleVisibility(target){
    target.classList.toggle('hidden')
    target.classList.toggle('show')
}



newProjectButtonInterface.onclick = function()
{
    toggleVisibility(newProjectPopUp)
}



changeProjectName.forEach(e => {
    console.log(e.parentNode)
    //this.parentNode
})



const submitNewProject = document.getElementById('submitNewProject')

submitNewProject.onclick = function()
{
    const newProjectName = document.getElementById('newProjectName').value
    createProjectInStorage(newProjectName)
} 


function findItemInObject(parentId) {
    return storageProject.find(names => names.id === parentId)
} 



function giveObj(pressed)
{
    const parentId = pressed.parentNode.dataset.id

    return findItemInObject(parentId)
}

function deleteItem(item)
{
    const thisItem = giveObj(item)
    thisItem.deleteSelf() 
}

function reloadDeleteButton()
{
    const deleteButton = document.querySelectorAll('.projectDeleteButton')

    
    deleteButton.forEach(button => {
        
        if(button.dataset.deleteButton !== "true")
        {
            console.log(typeof(button.dataset.deleteButton))
            button.dataset.deleteButton = true;
            button.addEventListener( 'click' ,function(){        
            deleteItem(this)
            
        })
        } 
    })
}


function reloadEditButton()
{
    const editButton = document.querySelectorAll('.editProjectName')

    editButton.forEach(button => {
        button.addEventListener('click', function(){
            
            const thisItem = giveObj(this)

            thisItem.changeTitle(newName)
            //function changeName
        })
    })
} 

function reloadButton()
{
    reloadDeleteButton()
    reloadEditButton()
}

export {reloadButton}