const tasksDom = document.querySelector('.tasks')
const loadingDom = document.querySelector('.loading-text')
const formDom = document.querySelector('.task-form')
const taskInputDom = document.querySelector('.task-input')
const formAlertDom = document.querySelector('.form-alert')



// Load task from /api/task
const showTasks = async () => { 
    loadingDom.style.visiblity = 'visible'
    try {
       const { data: { tasks }, } = await axios.get('/api/v1/tasks')
       if(tasks.lenght < 1){
        tasksDom.innerHTML = '<h5 class="empty-list">No tasks in your list</h5>'
        loadingDom.style.visiblity = 'hidden'
        return
       }
       const allTasks = tasks.map((task) => {
        const { completed, _id: taskID, name} = task
        return `
            <div class="single-task ${completed && 'task-compled'}">
            <h5><span><i class="far fa-check-circle"></i></span>${name}</h5>
             
            <!-- edit link -->

            <a href="task.html?id=${taskID}" class="edit-link">
            <i class="fas fa-edit"></i>
            </a>
            
            <!-- delete btn -->
            <button type="button" class="delete-btn" data-id="${taskID}">
            <i class="fas fa-trash"></i>
            </button>
            
            </div>`
       })
       .join('')
       tasksDom.innerHTML= allTasks
    } catch (error) {
       tasksDom.innerHTML = '<h5 class ="empty-list">there waas an eeror, please try later...</h5>' 
    }
}

showTasks()

// delete task   /api/tasks/:id

tasksDom.addEventListener( 'click', async (e) => {
    const el = e.target
    if(el.parentElement.classList.contains('.delete-btn')) {
        loadingDom.style.visiblity = 'visible'
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

formDom.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = taskInputDom.value
    try{
        await axios.post('/api/v1/tasks', { name })
        showTasks()
        taskInputDom.value = ''
        formAert.style.display = 'block'
        formAert.textContent = `success, task added`
        formAert.classlisst.add('text-success')
    
    }catch(error){
        console.error('error')
        formAert.style.display ='block'
        formAert.innerHTML = `error, please try again`
    }
    setTimeout(() => {
        formAert.style.display = 'none'
        formAert.classList.remove('text-success')
    }, 3000)
})
