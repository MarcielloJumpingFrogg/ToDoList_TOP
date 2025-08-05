/* 

{
                "listItemId" : "",
                "title" : "",
                "description" : "",
                "dueDate" : "",
                "priority": 0,
                "checked" : false
            }

*/ 


import "./style.css"; 
import { removeProjectFromStorage , createProjectInStorage } from "./storageManag";
import loadPage from "./loadPage";

import './popUpManager'

import createDOMElements from "./createDOMElements";

const submitNewProject = document.getElementById('submitNewProject')
loadPage()
submitNewProject.onclick = function()
{
    const newProjectName = document.getElementById('newProjectName').value
    console.log(newProjectName)
    createProjectInStorage(newProjectName)
} 








//((test.projects[0]).changeName('waa'))

//createProjectInStorage('test2')

/* for(let i = 0; i < localStorage.length; i++)
{
    JSON.parse(localStorage.getItem(localStorage.key(i))).id
} */

//removeProjectFromStorage('ccee06bd-a2c9-4f8c-b152-75faa829d61b')

//console.log(typeof(JSON.parse(localStorage.getItem('96d03d12-4275-4061-a011-b0f08192228d'))))


/* 

function objectToArray(obj)
{
    const keys = Object.keys(obj)
    const val = Object.values(obj)

    return [keys, val]
}
 */


/* 

function addToContainer(key, val, dest)
{   
    const div = document.createElement('div')
    div.id = val[key.indexOf('id')]

    const title = document.createElement('h1') 
    title.textContent = val[key.indexOf('title')]
    div.appendChild(title)

    const description = document.createElement('p')
    description.textContent = val[key.indexOf('description')]
    div.appendChild(description)

    const priority = document.createElement('p')
    priority.textContent = 'Priority: ' + val[key.indexOf('priority')]
    div.appendChild(priority)

    dest.appendChild(div)
}
 */


/* 

function loadItems(projects)
{
    const container = document.getElementById('list')


    for(let project = 0; project < projects.length ; project++)
    {   
        const arrayOfObject = objectToArray(projects[project])

        const keysInArray = arrayOfObject[0]
        const valInArray = arrayOfObject[1]

        if(keysInArray.includes('list'))
        {
            addToContainer(keysInArray, valInArray, container)
            //generaListaDiItem(keys, vals, container)
        }
        sd(valInArray[keysInArray.indexOf('list')])

        //createTitle(valInArray[keysInArray.indexOf('title')])
        //make it in an array
        //save listOfKeys && listOfValue
        //generateProjectContainer(listOfKeys, listOfValues)
        //if listOfKeys[i] == 'list'
            //allora (ripeti?)
    }
}

 */
