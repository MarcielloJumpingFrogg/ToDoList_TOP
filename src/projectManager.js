import Project from './createProject'   //not used currently

class ProjectManager{
    constructor()
    {
        this.projects = []
    }

    importProject(item)     //not used currently
    {
        this.projects.push(item) 
    }

    
}

const projectManager = new ProjectManager

export default projectManager