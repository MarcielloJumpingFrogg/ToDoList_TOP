import {removeProjectFromStorage, changeTitleInMemory} from './storageManag'


let storageProject = [];



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

    deleteSelf()
    { 
        removeProjectFromStorage(this.id)
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



export { Project, storageProject }