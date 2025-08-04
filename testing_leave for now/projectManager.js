import Project from './createProject'

class ProjectManager{
    constructor()
    {
        this.projects = []
    }

    createProject(title)
    {
        this.projects.push(new Project(title)) 
    }

    
}

const projectManager = new ProjectManager

export default projectManager