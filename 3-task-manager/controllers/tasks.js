const getAllTasks = (req, res)=>{
    res.send('get all tasks')
}

const createTasks =  (req, res)=>{
    res.send('create tasks')
}
const getTasks =  (req, res)=>{
    res.send('get single task')
}
const updateTasks =  (req, res)=>{
    res.send('update tasks')
}
const deleteTasks =  (req, res)=>{
    res.send('delete tasks')
}


module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}