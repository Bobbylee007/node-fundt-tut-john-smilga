const http = require('http')



const server = http.createServer((req,res)=>{
 console.log(req.url)

const url = req.url;
console.log(url)

// home page
if(url ==="/"){
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>homePage</h1>')
    res.end()
}
 // about page
else if(url ==="/about"){
res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>About page</h1>')
    res.end()
}

 


//404
else{
res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>page not found</h1>')
    res.end()
}
})

server.listen(5000)