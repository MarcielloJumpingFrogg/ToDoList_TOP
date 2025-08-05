import createDOMElements from "./createDOMElements";
import Project from "./createProject"; 
import projectManager from "./projectManager";

export default function()
{
    const test = localStorage 

    if(test.length > 0)
    {
        projectManager.projects = []
        for(let i = 0; i < localStorage.length; i++)
        { 
            const strToObj = JSON.parse(localStorage.getItem(localStorage.key(i)))
            projectManager.projects[i] = Project.restoreProjectMethods(strToObj) 

            
            //projectManager.projects = Project.restoreProjectMethods((JSON.parse(localStorage.getItem('data'))[0]))
        } 
        createDOMElements()
    }
    
}