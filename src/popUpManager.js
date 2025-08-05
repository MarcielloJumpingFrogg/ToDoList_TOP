import { createProjectInStorage } from "./storageManag";

const newProjectButton = document.getElementById('newProject')
const newProjectPopUp = document.getElementById('popUpScreenNewProject')

const changeProjectName = document.querySelectorAll('.editProjectName')

newProjectButton.onclick = function()
{
    newProjectPopUp.classList.toggle('hidden')
    newProjectPopUp.classList.toggle('show')
}

changeProjectName.forEach(e => {
    console.log(e.parentNode)
})