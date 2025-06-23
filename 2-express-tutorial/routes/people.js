const express = require('express')
const router = express.Router();

const {getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson } = require('../controllers/people')

//now remove '/api/people for the base app to work on get().req and other method
//also slitting functions has controllers in a seperate file

// *1 flavous
// router.get('/', getPeople )
// router.post('/', createPerson )
// router.post('/postman', createPersonPostman )
// router.put('/:id', updatePerson )
// router.delete('/:id', deletePerson)

// *2 flavous
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);


module.exports = router