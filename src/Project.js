import {removeProjectFromStorage, changeTitleInMemory} from './storageManag'


let storage = [];



class Project{
    constructor(title) {
        this.title = title,
        this.id = crypto.randomUUID()
        this.tasks = []
    }

    addTask(task)
    {
        this.tasks.push(task)
    }

    removeTask(taskId)
    {
        const taskInStorage = this.findTask(taskId)
    }

    findTask(taskId)
    {
        return this.tasks.find(task => task.id === taskId)
    }

    //see toggleTaskListVisibility

    //see newTask

    /* 
    toggleTaskListVisibility() {
        visibilityTaskList(this.container)
    }

    newTask() {
        toggleVisibility(newTaskInterface)
        changeProjectDestination(this.id)
    }
    */


    // THIS is because i am not sure how to implement interface interaction like PopUps 


    deleteSelf()
    { 
        removeProjectFromStorage(this.id)
        deleteFromPageWithId(this.id)
    }

    changeTitle(newTitle)
    { 
        this.title = newTitle 
        changeTitleInMemory(this.id, newTitle)
        //changeInMemory(newTitle)
    }

    static restoreProjectMethods(item)
    {
        return Object.assign(new Project, item) //+ chiarezza //maybe??
    }

}


function getContainer(id)
{ 
    
    const page = document.querySelector(`[data-id="${id}"]`)
}

function findInStorage(id)
{
    return storage.find(project => project.id === id)
}



export { Project, storage }