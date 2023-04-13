const Project_Details = require("../model/projectInfo");

const projectController = async(req,res) =>{
    try{
        const {projectName,taskList,teamMembersList,maxTeamCount,currentTeamCount} = req.body;

        const newProject = Project_Details({
            projectName,
            // noOfTasks,
            taskList,
            teamMembersList,
            maxTeamCount,
            currentTeamCount
        })

        console.log(newProject);
        newProject.save((error,project) =>{
            if(error){
                res.send(error);
                console.log(error);
            }
            else{
                console.log('Project Created');
                res.json(newProject);
            }
        });
    }catch(error){
        res.send(error);
        console.log('Error in data creation')
    }
}

module.exports = projectController;