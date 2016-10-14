const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('knex')({
	client: 'sqlite3',
	connection: 'dev.sqlite3',
	useNullAsDefault: true
})

app.use(bodyParser.urlencoded({extened: true}))

// students
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

// projects
app.post('/api/projects', (req,res) => {
    const project = {
      ProjectName: req.body.projectname,
			StudentId: req.body.studentid
    }
    knex('Projects').insert(project)
    .then(results => console.log(results))
    res.end()
})

app.get('/api/projects', (req,res) => {
    knex('Projects').select('Projects.*')
    .then(projects => res.json(projects))
})

app.get('/api/projects/:id', (req, res) => {
	const id = req.params.id
	knex('Projects').select('Projects.*').where('Projects.StudentId', id).then(project => {
		res.json(project)
		res.end()
	})
})

app.listen(3000, () => {
    console.log('listening on PORT 3000')
})
