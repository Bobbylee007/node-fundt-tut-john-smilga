const {createReadStream} = require('fs')

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8' })

// default 64kb
// lastbuffer - remainder
// highWaterMark - control size
// const stream = createREadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createREadStream('../content/big.txt', {encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err)=> console.log(err))