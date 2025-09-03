import { changeTitleInMemory } from "./storageManag"


class Container {
    constructor(container)
    {
        this.container = container
        this.id = this.container.dataset.id
        this.loaded = false 
        this.taskList = []
    } 



    addTaskToProject(newTask) { 
        this.taskList.push(newTask)
        //pass task through task.taskMethodLoader (from task.js)
    }

    removeTask(taskId) {
        console.log(taskId)
        console.log(this.taskList)
        const taskInStorage = this.findTask(taskId)
        console.log(taskInStorage)
        //i am not sure if this is supposed to stay here, BUUUUUT per ora lo lascio, se non altro per avere un punto di riferimento per cosa mi manca i guess? idk im tired
    }

    findTask(taskId) {
        return this.taskList.find(task => task.id === taskId)
    }

    toggleTaskListVisibility() {
        visibilityTaskList(this.container)
    }

    newTask() {
        toggleVisibility(newTaskInterface)
        changeDestinationForNewTask(this.id)
    }





    deleteSelf()
    { 
        deleteFromPageWithId(this.id)
        deleteFromStorage(this.id)
    }

    toggleChangeNameVisibility() 
    {
        toggleVisibility(editInterface(this.container))
    }

    changeTitle()
    {
        const newTitle = retrieveNewTitle(this.container)
        const oldTitle = retrieveOldTitle(this.container)
        oldTitle.textContent = newTitle
        changeTitleInMemory(this.id, newTitle)
    }

    filter()
    {
        //to do
        console.log('filtering')
    }

    

    loadEventListener()
    {
        if(!this.loaded)
        {
            eventListenerAdder(this) 
            this.loaded = true
        }
    }
} 


