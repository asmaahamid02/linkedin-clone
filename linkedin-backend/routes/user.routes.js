const { Router } = require('express')
const { updateProfile, applyForJob } = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const userMiddleware = require('../middlewares/user.middleware')
const router = Router()

router.put('/', authMiddleware, updateProfile)
router.get('/job/apply/:id', authMiddleware, userMiddleware, applyForJob)
module.exports = router
