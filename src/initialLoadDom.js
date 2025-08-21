import { storageProject } from "./Project"; 
import { createProjectInPage } from "./DOMcreateElement";

const page = document.getElementById('listOfProjects')



/* 
function clearPage()
{ 
    while((page.childNodes).length > 0)
    { 
        let child = page.lastChild 
        page.removeChild(child)
    }
}
 */





export default function()
{ 
    for(let i = 1; i < storageProject.length; i++)
    { 
        createProjectInPage(storageProject[i].title, storageProject[i].id, page)
        for(let j = 0; j < storageProject[i].tasks.length; j++) 
        {
            //console.log(storageProject[i].tasks[j])
        }
    }
}