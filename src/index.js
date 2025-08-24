import './PageInteraction'
import "./style.css"; 
import {Project, storage} from "./Project"; 
import { createProjectInPage } from "./DOMcreateElement";

const page = document.getElementById('listOfProjects') 


initialPageLoading()



function initialPageLoading()
{ 
    if(IsEmptyLocalStorage())
    {
        //generateDefaultContent()        //missing
    }
    else{
        loadSavedContentIntoMemory()
    } 
    
    initialLoadDom()       //fixing
}



function IsEmptyLocalStorage()
{ 
    if (localStorage.length == 0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}




function loadSavedContentIntoMemory()
{
    for(let i = 1; i < localStorage.length; i++)
    {
        const convertToObject = JSON.parse(eachLocalStorageItem(i))
        addToProjectsArray(convertToObject)
    }
}


function eachLocalStorageItem(index)
{   
    return localStorage.getItem(localStorage.key(index))
}

function addToProjectsArray(item)
{
    const restoredWithMethod = Project.restoreProjectMethods(item)
    console.log(restoredWithMethod.tasks)
    storage.push(restoredWithMethod)
}


function initialLoadDom()
{ 
    for(let i = 0; i < storage.length; i++)
    { 
        if (localStorage.getItem('general') != localStorage.key(i))
        {
            createProjectInPage(storage[i].title, storage[i].id, page)
            for(let j = 0; j < storage[i].tasks.length; j++) 
            {
                //console.log(storage[i].tasks[j])
            }
            
        }
    }
} 