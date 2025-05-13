const http = require('http');

// const server = http.createServer((req, res)=>{
//  res.end('Welcom')
// })


// user Event Emitter API
const server = http.createServer()
// emits requst event
// subribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    res.end('Welcom')
})

server.listen(5000)