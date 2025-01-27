const { Router } = require("express");
const projectRouter = Router();

projectRouter.get('/',(req,res) => { 
    res.sendFile(__dirname +'/projects.html')
    
 })
 projectRouter.get('/:projectId',(req,res) => { 
    const {projectId} = req.params;
    res.send(`Project id: ${projectId}`)
  })

 module.exports = projectRouter