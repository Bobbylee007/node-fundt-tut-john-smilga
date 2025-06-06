const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('user hit the resouse')
    res.status(200).send('Home Page')
})
app.get('/about',  (req, res) =>{
    res.status(200).send('About page')
})

// app.all('*', callbackFn) doesnt work in v5
// make use of app.use(callbackFn) - your res.status().send()
app.all('/*', (req, res) => {
    res.status(404).send('<h1>resource not found<h1>')
})

app.listen(5000, ()=> {
    console.log('server is listen on poirt 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all - uses all express method mention above
// app.use - uses middlewares
// app.listen - practicaly to port