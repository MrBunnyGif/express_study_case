const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log("🚀 ~ file: users.js ~ line 6 ~ router.get ~ req.query.name", req.query.name)
	res.send('User List')
})

router.get('/new', (req, res) => {
	// res.send('User New Form')
	res.render('users/new', { firstname: 'Test' })
})

router.post('/', (req, res) => {
	const isValid = true
	if (isValid) {
		users.push({ firstname: 'req.body.firstname' })
		res.redirect(`/users/${users.length - 1}`)
	}
	else {
		console.log('error')
		res.render('users/new', { firstname: 'req.body.firstname' })
	}
	res.send('Create user')
})

router.route('/:id')
	.get((req, res) => {
		res.send(`User Detail for id ${req.params.id} is: ${req.user.name}`)
	})
	.post((req, res) => {
		res.send('create user')
	})
	.put((req, res) => {
		res.send(`User Detail for id ${req.params.id}`)
	})
	.delete((req, res) => {
		res.send(`User Detail for id ${req.params.id}`)
	})

const users = [{ name: 'alberto' }, { name: 'bruna' }, { name: 'caio' }]
router.param('id', (req, res, next, id) => {
	console.log(id)
	req.user = users[id]
	next()
})

module.exports = router