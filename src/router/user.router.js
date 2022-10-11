const router = require('express').Router()
const userController = require('../controller/user.controller')

router.post('/login', userController.login)
router.get('/getProfile', userController.get)

module.exports = router
