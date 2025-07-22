const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')


const getAllTasks = asyncWrapper(async (req, res)=>{
         const tasks = await Task.find({})
        // res.status(200).json({tasks})
        // res.status(200).json({tasks, amount:tasks.lenght})
         res
         .status(200)
         .json({ success: true, data: { tasks, nbHits: tasks.lenght } })
})

//use for testing Api in postman
const createTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
})


const getTask = asyncWrapper( async (req, res, next)=>{
           const { id :taskID } = req.params
        const task = await Task.findOne({ _id:taskID });
        if(!task){
            return next(createCustomError(`No task with id ${taskID}`, 404))
        }

        res.status(200).json({ task })
 
})

const deleteTask = asyncWrapper ( async (req, res)=>{
         const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task) {
             return next(createCustomError(`No task with id ${taskID}`, 404))

        }
        res.status(200).json({task})
        // res.status(200).send()  any of this will work
        // res.status(200).json({ task: null, status: 'sucess' })
        
   
})

const updateTask = asyncWrapper( async (req, res)=>{

   
        const {id: taskID} = req.params
        
        // res.status(200).json({ id:taskID,data:req.body}) just for checking
        const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
            new:true,
            runValidators:true,
        })
          if(!task) {
             return next(createCustomError(`No task with id ${taskID}`, 404))

        }
        res.status(200).json({ task })
})

const editTask =  asyncWrapper( async (req, res)=>{

   
        const {id: taskID} = req.params
        
        // res.status(200).json({ id:taskID,data:req.body}) just for checking
        const task = await Task.findOneAndUpdate({_id:taskID},req.body, {
            new:true,
            runValidators:true,
            overwrite:true,
        })
          if(!task) {
             return next(createCustomError(`No task with id ${taskID}`, 404))

        }
        res.status(200).json({ task })  
})
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