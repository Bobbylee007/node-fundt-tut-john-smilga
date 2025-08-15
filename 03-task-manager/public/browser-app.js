const tasksDOM = document.querySelector('.tasks')
const loadingDOM = document.querySelector('.loading-text')
const formDOM = document.querySelector('.form-control')
const taskInputDOM = document.querySelector('.task-input')
const formAlertDOM = document.querySelector('.form-alert')

// Load task from /api/task
const showTasks = async () => { 
    loadingDOM.style.visiblity = 'visible'
    try {
       const {
         data: { data: {tasks} },
         } = await axios.get('/api/v1/tasks')
       if (tasks.lenght < 1){
        tasksDOM.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
        loadingDOM.style.visiblity = 'hidden'
        return
       }
       const allTasks = tasks
       .map((task) => {
        const { completed, _id: taskID, name} = task
        return `<div class="single-task ${completed && 'task-completed'}">
            <p><span><i class="fa-regular fa-circle-check"></i></span>${name}</p>
            <div class ="task-links"> 

            <!-- edit link -->
            <a href="task.html?id=${taskID}" class="edit-link">
            <i class="fa-regular fa-pen-to-square"></i>
            </a>
            
            <!-- delete btn -->
            <button type="button" class="delete-btn" data-id="${taskID}">
            <i class="fa-solid fa-trash-xmark"></i>
            </button>

            </div>
            </div>`
       })
       .join('')
       tasksDOM.innerHTML = allTasks
    } catch (error) {
       tasksDOM.innerHTML = '<h5 class ="empty-list"> there waas an eeror, please try later... </h5>' 
    }
     setTimeout(() => {
        loadingDOM.style.display = 'none'
    }, 2000)
}

showTasks()

// delete task   /api/tasks/:id

tasksDOM.addEventListener('click', async (e) => {
    const el = e.target
    if(el.parentElement.classList.contains('.delete-btn')) {
        loadingDOM.style.display = 'visible'
        const id = el.parentElement.dataset.id
        try {
            await axios.delete(`/api/v1/tasks/${id}`)
            showTasks()
        } catch (error) {
            console.log(error)
        }
    }
})

// form

formDOM.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = taskInputDOM.value

    try{
        await axios.post('/api/v1/tasks', { name })
        showTasks()
        taskInputDOM.value = ''
        formAert.style.display = 'block'
        formAert.textContent = `success, task added`
        formAert.classlisst.add('text-success')
    
    }catch(error){
        console.error('error')
        formAert.style.display ='block'
        formAert.innerHTML = `error, please try again`
    }
    setTimeout(() => {
        formAert.style.display = 'hidden'
        formAert.classList.remove('text-success')
        loadingDOM.style.display = 'none'
    }, 2000)
})
