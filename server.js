const express = require('express')
const app = express()
const userRouter = require('./routes/users')

app.set('view engine', 'ejs')
// app.use(logger)

// app.get('/', logger, (req, res) => {
// console.log('oi')
// res.download('server.js')
// res.send('<h1>olá mundo</>')
// res.render('index.ejs', { texaaat: 'world' })
// })

app.use(express.static('public'))
app.use('/users', userRouter)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

function logger(req, res, next) {
	console.log(req.originalUrl)
	next()
}

app.listen(3000) 