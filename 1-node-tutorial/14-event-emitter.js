// get back the class
// if want custom extend from class
// otherwise just emitting and handling events create instance
const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the other
// additional arguments
// built-in module utilize it
customEmitter.on('response', (name,id)=>{
    console.log(`data recieved user  ${name} with id ${id} `)
})
customEmitter.on('response', ()=>{
    console.log(`some other logic here `)    
})

customEmitter.emit('response', 'john', 34)