const http = require('http')

const server = http.createServer((req,res)=>{
if (req.url=== '/') {
    res.end('welcome to our home page')
}   
if (req.url =='/about') {
        res.end('About us page')
}
res.end(`
    <h1>page not found</h1>
    <a href="/">Home Page</a>
    `)
})

server.listen(5000)