import { storageProject } from "./Project"; 
import { createProjectInList } from "./DOMcreateElement";

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
        console.log(page)
        createProjectInList(storageProject[i].title, storageProject[i].id, page)
    }
}