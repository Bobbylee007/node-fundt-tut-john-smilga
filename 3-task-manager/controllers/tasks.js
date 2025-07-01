const Task = require('../models/task');

const getAllTasks = async (req, res)=>{
    try{
        const tasks = await Task.find({})
        res.status(200).josn({ tasks})
    }catch(error){
        res.status(500).json({ msg: error })
    }
}

//use for testing Api in postman
const createTasks = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
        
    } catch (error) {
        res.status(500).json({msg: error })
    }
}
const getTasks =  (req, res)=>{
    res.json({id:req.params.id})
}
const updateTasks =  (req, res)=>{
    res.send('update tasks')
}
const deleteTasks =  (req, res)=>{
    res.send('delete tasks')
}

  //previously use
// const createTasks =  (req, res)=>{
//     res.json(req.body)
// }
// const getTasks =  (req, res)=>{
//     res.send('get single task')
// }
// const updateTasks =  (req, res)=>{
//     res.send('update tasks')
// }
// const deleteTasks =  (req, res)=>{
//     res.send('delete tasks')
// }

module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}