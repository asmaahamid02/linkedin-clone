const { Router } = require('express')
const {
  updateProfile,
  applyForJob,
  followCompany,
} = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const userMiddleware = require('../middlewares/user.middleware')
const router = Router()

router.put('/', authMiddleware, updateProfile)
router.get('/job/apply/:id', authMiddleware, userMiddleware, applyForJob)
router.get('/company/follow/:id', authMiddleware, userMiddleware, followCompany)
module.exports = router
