import {removeProjectFromStorage} from './storageManag'

class Project{
    constructor(name) {
        this.name = name,
        this.id = crypto.randomUUID()
        this.tasks = []
    }

    addTask()
    {
        console.log(this.name)
        //tasks.js
    }

    deleteSelf()
    {
        removeProjectFromStorage(this.id)
    }

    changeName(newName)
    { 
        this.name = newName 
    }

    static restoreProjectMethods(item)
    {
        return Object.assign(new Project, item)
    }

}

export default Project