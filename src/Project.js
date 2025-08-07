import {removeProjectFromStorage} from './storageManag'


let storageProject = [];



class Project{
    constructor(title) {
        this.title = title,
        this.id = crypto.randomUUID()
        this.tasks = []
    }

    addTask()
    {
        console.log(this.title)
        //tasks.js
    }

    deleteSelf()
    {
        console.log(this.id)
        removeProjectFromStorage(this.id)
    }

    changeTitle(newTitle)
    { 
        this.title = newTitle 
    }

    static restoreProjectMethods(item)
    {
        return Object.assign(new Project, item) //+ chiarezza //maybe??
    }

}



export { Project, storageProject }