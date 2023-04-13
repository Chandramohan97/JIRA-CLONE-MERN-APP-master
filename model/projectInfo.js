//Project Schema 

const mongoose = require('mongoose');

const projectCreation = new mongoose.Schema({
    projectName : {type:String,required:true},
    taskList : [String],
    teamMembersList : [String],
    maxTeamCount : {type:Number,default:1},
    currentTeamCount : {
        type : Number,
        default: function () {
            return this.teamMembersList.length;
        	},
        validate : {
            validator : function(value){
                return value <= this.currentTeamCount
            },
            message : "Max number of team members reacthed"
        }
    },
    Owner: {
        type : mongoose.Schema.Types.ObjectId,
        ref:"UserInfo",
        required : true
    }
})

const Project_Details = mongoose.model('Project Details',projectCreation);
module.exports = Project_Details;