const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('knex')({
	client: 'sqlite3',
	connection: 'dev.sqlite3',
})

app.use(bodyParser.urlencoded({extened: true}))

app.post('/api/students', (req,res) => {
    const student = {
        FirstName: req.body.firstname,
        LastName: req.body.lastname,
        Cohort: req.body.cohort
    }
    knex('Students').insert(student)
    .then(results => console.log(results))
    res.end()
	
})

app.get('/api/students', (req,res) => {
    knex('Students').select('Students.*')
    .then(users => res.json(users))
})

app.listen(3000, () => {
    console.log('listening on PORT 3000')
})