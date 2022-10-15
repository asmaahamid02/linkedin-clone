const { Router } = require('express')
const { updateProfile } = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = Router()

router.put('/', authMiddleware, updateProfile)

module.exports = router
