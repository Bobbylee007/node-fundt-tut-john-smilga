// const axios = require('axios')
const formDom = document.querySelector('.form-container')
const usernameInputDom = document.querySelector('.username')
const passwordInputDom = document.querySelector('.password')
const formAlertDom = document.querySelector('.form-alert')
const resultDom = document.querySelector('.result')
const btnDom = document.querySelector('#data')
const tokenDom = document.querySelector('.token')


formDom.addEventListener('submit', async (e) => {
    formAlertDom.classList.remove('text-success')
    tokenDom.classList.remove('text-success')

    e.preventDefault()
    const username = usernameInputDom.value
    const password = passwordInputDom.value

    try {        
        const { data } = await axios.post('/api/v1/login', { username, password })

        formAlertDom.style.display = 'block'
        formAlertDom.textContent = data.msg

        formAlertDom.classList.add('text-success')
        usernameInputDom.value = ''
        passwordInputDom.value = ''

        localStorage.setItem('token', data.token)
        resultDom.innerHTML= ''
        tokenDom.textContent = 'token present'
    } catch (error) {
        formAlertDom.style.display = 'block'
        formAlertDom.textContent = error.response.data.msg
        localStorage.removeItem('token')
        resultDom.innerHTML = ''
        tokenDom.textContent = 'No Token Present'
        tokenDom.classList.remove('text-success')
        
    }
    setTimeout(()=>{
        formAlertDom.style.display = 'none'
    }, 2000)    
})

btnDom.addEventListener('click', async() => {
    const token = localStorage.getItem('token')
    try {
        const { data } = await axios.get('/api/v1/dashboard', {
            headers: {
                Authorization: `Bearer ${token}`,
            }, 
        })
        resultDom.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`
        data.secret
    } catch (error) {
        localStorage.removeItem('token')
    }

})
