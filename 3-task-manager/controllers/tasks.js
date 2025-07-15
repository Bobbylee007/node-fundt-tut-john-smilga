const Task = require('../models/Task');

const getAllTasks = async (req, res)=>{
    try{
        const tasks = await Task.find({})

        // res.status(200).json({tasks})
        // res.status(200).json({tasks, amount:tasks.lenght})
         res
         .status(200)
         .json({ success: true, data:{tasks, nbHHits: tasks.lenght } })
    }catch(error){
        res.status(500).json({ msg: error })
    }
}

//use for testing Api in postman
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
        
    } catch (error) {
        res.status(500).json({msg: error })
    }
}

const getTask = async (req, res)=>{
    try {
        const {id:taskID} =req.params
        const task = await Task.findOne({_id:taskID});

        if(!task){
            return res.status(404).json({msg:`No task with id ${taskID}`})
        }

        res.status(200).json({task})
    }catch(error){
        res.status(500).json({msg: error })

    }
}

const deleteTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}`})
        }
        res.status(200).json({task})
        // res.status(200).send()  any of this will work
        // res.status(200).json({ task: null, status: 'sucess' })
        
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTask = async (req, res)=>{

    try {
        const {id: taskID} = req.params
        
        // res.status(200).json({ id:taskID,data:req.body}) just for checking
        const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
            new:true,
            runValidators:true,
        })
          if(!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}`})
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error})
    }}

const editTask =  async (req, res)=>{

    try {
        const {id: taskID} = req.params
        
        // res.status(200).json({ id:taskID,data:req.body}) just for checking
        const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
            new:true,
            runValidators:true,
            overwrite:true,
        })
          if(!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}`})
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error})
    }}







  //previously use
// const createTasks =  (req, res)=>{
//     res.json(req.body)
// }
// const getTask =  (req, res)=>{
//     res.send('get single task')
// }
// const updateTask =  (req, res)=>{
//     res.send('update tasks')
// }
// const deleteTask =  (req, res)=>{
//     res.send('delete tasks')
// }

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}