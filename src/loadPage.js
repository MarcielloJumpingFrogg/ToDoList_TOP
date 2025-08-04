import Project from "./createProject"; 
import projectManager from "./projectManager";

export default function()
{
    for(let i = 0; i < (JSON.parse(localStorage.data)).length; i++)
    { 
        const strToObj = JSON.parse((localStorage.data))[i]
        projectManager.projects[i] = Project.restoreProjectMethods(strToObj) 

        console.log('s')
        //projectManager.projects = Project.restoreProjectMethods((JSON.parse(localStorage.getItem('data'))[0]))
    }
}