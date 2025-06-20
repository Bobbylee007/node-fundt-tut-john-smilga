const express = require("express");
const app = express();
let { people } = require('./data')


app.use(express.json())


app.post('/api/postman/people', (req, res)=>{
  const {name} = req.body
  if (!name) {
    return res
    .status(400)
    .json({success: false, msg: 'please provide name valule'})
  }
  res.status(200).send({ success: true, data: [...people, name] })
})

app.put('/api/people/:id', (req, res)=>{
  const { id } = req.params
  const { name } = req.body
  // console.log(id, name); or remove both parmanetly
  // res.send('hello world')
  
  const person = people.find((person)=>person.id === Number(id))

  if(!person){
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}`})
  }
  const newPeople = people.map((person)=>{
    if(person.id === Number(id)){
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data:newPeople })
})

app.delete('/api/people/:id', (req,res) => {
    const person = people.find((person)=>person.id === Number(req.params.id))

  if(!person){
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}`})
  }
  const newPeople = people.filter((person)=> person.id !== Number(req.params.id));
  return res.status(200).json({success: true, data:newPeople})
})

app.listen(5000, () => {
  console.log("server is listening on PORT 5000...");
});
