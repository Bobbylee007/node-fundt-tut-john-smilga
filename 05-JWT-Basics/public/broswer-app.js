// const axios = require('axios')
const formDom = document.querySelector('.btn')
const usernameInputDom = document.querySelector('.username-input')
const passwordInputDom = document.querySelector('.password-input')
const formAlertDom = document.querySelector('.form-alert')
const resultDom = document.querySelector('.result')
const btnDom = document.querySelector('#data')
const tokenDom = document.querySelector('.token')


formDom.addEventListener('submit', async(e)=>{
     console.log('i just click');

    formAlertDom.classList.remove('text-success')
    tokenDom.classList.remove('text-success')

    e.preventDefault()
    const username = usernameInputDom.value
    const password = passwordInputDom.value

    try {        
        const {data} = await axios.post('/api/v1/login', { username, password })

        formAlertDom.style.display = 'block'
        formAlertDom.textContent.display = data.msg

        formAlertDom.classList.add('text-success')
        usernameInputDom = ''
        passwordInputDom = ''

        localStorage.setItem('token', data.token)
        resultDom.innerHTML= ''
        tokenDom.textContent = 'token present'
    } catch (error) {
        formAlertDom.style.display = 'block'
        formAlertDom.textContent = error.response.data.msg
        localStorage.removeItem('token')
        resultDom.innerHTML = ''
        tokenDom.textContent = 'no token present'
        tokenDom.classList.remove('text-success')
        
    }
    setTimeout(()=>{
        formAlertDom.style.display = 'none'
    }, 2000)    
})

btnDom.addEventListener('click', async()=>{
    const token = localStorage.getItem('token')
    try {
        const { data } = await axios.get('/api/v1/dashboard', {
            Headers: {
                Authorization: `Beare ${token},`,
            }, 
        })
        resultDom.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`
        data.secret
    } catch (error) {
        localStorage.removeItem('token')
    }

})
