const getAllTasks = (req, res)=>{
    res.send('get all tasks')
}

//use for testing Api in postman
const createTasks =  (req, res)=>{
    res.json(req.body)
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