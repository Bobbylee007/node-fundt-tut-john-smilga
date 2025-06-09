const express = require('express')
const path = require('path')
const app = express()

// steup static and middleware
app.use(express.static('./public'))  //using this middleware serves all statics assets


// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//     adding to static asset
//     SSR (using templet engines)
// })


app.use((req, res) => {
  res.status(404).send('Route not found');
});

app.listen(5000, () => (
    console.log('server is listening on port 5000...')
))