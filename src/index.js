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



class users {
    constructor(userName, password) {
        this.userName = userName, 
        this.password = password,
        this.projects = [
            {
                id : "project1",
                title : "First Project",
                description : "This is the first default project, made to fill the blank space and show you the potential of these lists",
                dueDate : "Test",
                priority : 0,
                list : [
                {
                    id: "listItem_project1_1",
                    title: "First Task",
                    description: "Create a new task with the + button",
                    dueDate: "Test",
                    priority: 1,
                    checked: false,
                },
                {
                    id: "listItem_project1_2",
                    title: "Blank space",
                    description: "Blank description",
                    dueDate: "Test",
                    priority: 0,
                    checked: false,
                },
                ]
            }
            
        ]
        
        
    }
    
}

function toggleThis(item)
{
    item.classList.toggle('invisible')
    item.classList.toggle('interface')
}

function toggleInterfaces() {
    const loginInterface = document.getElementById("loginPage");
    const registerInterface = document.getElementById("registerPage");

    toggleThis(loginInterface)
    toggleThis(registerInterface)
}

function removeInterface(item)
{ 
    toggleThis(document.getElementById(item)); 
}

const switchToRegisterInterface = document.getElementById("switchToRegister");
const switchToLoginInterface = document.getElementById("switchToLogin");

const loginSubmitButton = document.getElementById('loginCredentials');
loginSubmitButton.addEventListener('click', function()
{

    const loginUserName = document.getElementById('loginUserName').value
    const loginPassword = document.getElementById('loginPassword').value

    attemptLogin(loginUserName, loginPassword)

    //load login info
    //attemptLogin()
})


switchToLoginInterface.onclick    = function () { toggleInterfaces(); };
switchToRegisterInterface.onclick = function () { toggleInterfaces(); };

/* console.log((localStorage.key))
console.log(JSON.parse(localStorage.getItem('test1')))

console.log(localStorage.length) */

function notFound()
{
    const h5NotFound = document.getElementById('notFound')
    h5NotFound.textContent = 'No user found with those credentials'
}

function objectToArray(obj)
{
    const keys = Object.keys(obj)
    const val = Object.values(obj)

    return [keys, val]
}

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

        //createTitle(valInArray[keysInArray.indexOf('title')])
        //make it in an array
        //save listOfKeys && listOfValue
        //generateProjectContainer(listOfKeys, listOfValues)
        //if listOfKeys[i] == 'list'
            //allora (ripeti?)
    }
}

function attemptLogin(inputUserName, inputPassword) {
    //check every localStorage.username e .pass until i find a match
    let success = false;
    for (let i = 0; i < localStorage.length; i++) 
    {
        const nameOfIndex = localStorage.key(i);
        const itemOfLocalStor = localStorage.getItem(nameOfIndex);
        const parsedLocalStor = JSON.parse(itemOfLocalStor);
        if ( parsedLocalStor.userName == inputUserName && parsedLocalStor.password == inputPassword )
        {
            loadItems(parsedLocalStor.projects)
            removeInterface('loginPage') 
            success = true;
        }
    }

    if (!success) {
        //noResultFound()
        notFound()
    }
}


function checkAvailable(item)
{
    for(let i = 0; i < localStorage.length; i++)
    {
        if((JSON.parse(localStorage.getItem(localStorage.key(i))).userName == (item)))
        { 
            return false
        }
        
    }
    return true
}


function createUser(inputUserName, inputPassword)
{
    //check availabile
    
    if(checkAvailable(inputUserName))
    { 
        const nameOfNewItem = "item" +  (localStorage.length + 1) 

        const newItem = new users(inputUserName, inputPassword)

        localStorage.setItem(nameOfNewItem, JSON.stringify(newItem))
        console.log(localStorage)
    } 
    else{
        alert('the username is already used')
    }
}

localStorage.clear()
createUser('user1111', 'pass')
attemptLogin('user1111', 'pass')

///////////createUser('user1243','pass3')



//////////attemptLogin("user1", "pass");

/* 
    registerNewUser()
    {
        check If already presetn

        => effettua il login con queste info

            new user(name, password)
                generate default text()
    }

    login()
    {
        handle:
            if credentials wrong
            password forgotten (per ragioni di chiarezza usero un ripristino da admin (esempio inserire la password da admin e far ri-impostare la password))
            log out

        load projects of the current account
        set current user = localStorage[n]

        
    }
*/


/* 
// 

    paolo.generateNewProject

    paolo.generateNewTask\


    mi serve il focus su project

    task (e project) deve avere tutte le sue info interne


    //

    const currentUser = localstorage[n] => username
        currentUser.newProject
*/



/* 
const defaultPlaceHolder = {
    id: "project1",
    title: "First Project",
    description:
        "This is the first default project, made to fill the blank space and show you the potential of these lists",
    dueDate: "Test",
    priority: 0,
    percentageOfTasksDone: "",
    list: [
        {
            listItemId: "listItem_project1_1",
            title: "First Task",
            description: "Create a new task with the + button",
            dueDate: "Test",
            priority: 1,
            checked: false,
        },
        {
            listItemId: "listItem_project1_2",
            title: "Blank space",
            description: "Blank description",
            dueDate: "Test",
            priority: 0,
            checked: false,
        },
    ],
}; */

/* 
localStorage.setItem('id1', JSON.stringify(defaultPlaceHolder))

localStorage.setItem("users", JSON.stringify(users))

const passaggioDiMezzo = JSON.parse(localStorage.users)
passaggioDiMezzo.push(user2) 
localStorage.setItem('users', JSON.stringify(passaggioDiMezzo)) 

const id1 = JSON.parse(localStorage.getItem('id1'))
const testUsers = JSON.parse(localStorage.getItem('users'))
 */
