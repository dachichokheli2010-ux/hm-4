const { Router } = require("express")
const UsersController = require('../controllers/users.controller')
const validateUserMiddleware = require('../middlewares/validate-user.middleware')

const usersRouter = new Router()

usersRouter.get('/', UsersController.getAllUsers)
usersRouter.post('/', validateUserMiddleware, UsersController.createUser)
usersRouter.get('/:id', UsersController.getUserById)
usersRouter.delete('/:id', UsersController.deleteUserById)
usersRouter.put('/:id', UsersController.updateUserById)

module.exports = usersRouter
