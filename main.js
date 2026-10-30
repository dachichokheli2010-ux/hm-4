
const express = require('express')
const usersRouter = require('./routes/users.route')
const workingHoursMiddleware = require('./middlewares/working-hours.middleware')
const loggerMiddleware = require('./middlewares/logger.middleware')
const app = express()

app.use(express.json())

app.use(workingHoursMiddleware)

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/info', loggerMiddleware, (req, res) => {
    res.json({
        message: 'request logged in console'
    })
})

app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log('server running on http://localhost:3000')
})
