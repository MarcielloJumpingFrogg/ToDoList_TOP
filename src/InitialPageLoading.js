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
    for(let i = 1; i < localStorage.length; i++)
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

/* 
    onNewTask   carico i possibli projects sulle options 
        i projects sono la destinazione 

        mi serve un  nuovo pulsante sui progetti che mi permetta di:
            creare nuove task
            espandere il menu 
        
        mettere immagini al posto di 'del' e 'edit'

        filter/sortBy
        date


        GENERATE DEFAULT CONTENT MADONNA    

*/