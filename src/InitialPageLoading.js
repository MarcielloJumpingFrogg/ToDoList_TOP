import initialLoadDom from "./initialLoadDom";
import {Project, storageProject} from "./Project"; 

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


/* 
    generate default content (manca task manager)
*/

function eachLocalStorageItem(index)
{   
    return localStorage.getItem(localStorage.key(index))
}

function addToProjectsArray(item)
{
    const restoredWithMethod = Project.restoreProjectMethods(item)
    storageProject.push(restoredWithMethod)
}


function loadSavedContentIntoMemory()
{
    for(let i = 0; i < localStorage.length; i++)
    {
        const convertToObject = JSON.parse(eachLocalStorageItem(i))
        addToProjectsArray(convertToObject)
    }
}


export default function()
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

