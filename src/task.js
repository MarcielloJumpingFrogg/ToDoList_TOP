class Tasks {
    constructor(title, description, dueDate, priority, )
    {
        this.title = title
        this.id = crypto.randomUUID()
        this.description = description
        this.dueDate
        this.priority = priority
        this.checked = false
        this.open = false
    }

    check()
    {
        this.checked = !this.checked
    }

    open()
    {
        this.open = !(this.open)
    }

    changeTitle(newName)
    {
        this.name = newName
    }

    changeDescription(newDescription)
    {
        this.description = newDescription
    }

    changePriority(newPriority)
    {
        this.priority = newPriority
    }

    deleteTask()
    {
        //delete
    }

    taskMethodReloader(item)
    {
        return Object.assign(new Tasks, item)
    }
}

export default Tasks