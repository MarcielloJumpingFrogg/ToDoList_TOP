import {removeProjectFromStorage} from './storageManag'

class Project{
    constructor(name) {
        this.name = name,
        this.id = crypto.randomUUID()
        this.tasks = []
    }

    addTask()
    {
        console.log('add')
        //tasks.js
    }

    deleteSelf()
    {
        removeProjectFromStorage(this.id)
    }

    changeName(newName)
    {
        console.log(this.name)
        this.name = newName
        console.log(this.name)
    }

    static restoreProjectMethods(item)
    {
        return Object.assign(new Project, item)
    }

}

export default Project