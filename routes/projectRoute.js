const projectRoute = require("express").Router();
const projectController = require('../controller/projectController')

projectRoute.route('/').post(projectController);


module.exports = projectRoute;