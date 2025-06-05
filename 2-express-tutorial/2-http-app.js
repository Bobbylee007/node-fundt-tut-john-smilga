const http = require('http')
const {readFileSync} = require('fs')

//get all file
const homePage = readFileSync('navbar-app/index.html')
const homeCss = readFileSync('navbar-app/style.css')
const homeJs = readFileSync('navbar-app/broswer-app.js')
const homeMenu = readFileSync('navbar-app/asset/mdi-light_menu.svg')
const homeIconHtml = readFileSync('navbar-app/asset/skill-icons_html.svg')
const homeIconCss = readFileSync('navbar-app/asset/skill-icons_css.svg')
const homeIconJs = readFileSync('navbar-app/asset/skill-icons_javascript.svg')
const homeIconGit = readFileSync('navbar-app/asset/skill-icons_git.svg')
const homeIconNode = readFileSync('navbar-app/asset/skill-icons_nodejs-light.svg')


const server = http.createServer((req,res)=>{
// console.log(req.url)

const url = req.url;
console.log(url)

// home page
if(url ==="/"){
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homePage)
    res.end()
}
 // about page
else if(url ==="/about"){
res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>About page</h1>')
    res.end()
}

 // server SVG & external file
else if(url === '/style.css'){
res.writeHead(200,{'content-type':'text/css'})
    res.write(homeCss)
    res.end()
}

else if(url === '/broswer-app.js'){
res.writeHead(200,{'content-type':'text/js'})
    res.write(homeJs)
    res.end()
}

else if(url === '/asset/mdi-light_menu.svg'){
res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeMenu)
    res.end()
}
else if(url === '/asset/skill-icons_html.svg'){
res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeIconHtml)
    res.end()
}

else if(url === '/asset/skill-icons_css.svg'){
res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeIconCss)
    res.end()
}

else if(url === '/asset/skill-icons_javascript.svg'){
res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeIconJs)
    res.end()
}

else if(url === '/asset/skill-icons_nodejs-light.svg'){
res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeIconNode)
    res.end()
}

else if(url === '/asset/skill-icons_git.svg'){
res.writeHead(200,{'content-type':'image/svg+xml'})
    res.write(homeIconGit)
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