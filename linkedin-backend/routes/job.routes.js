const { Router } = require('express')
const { createJob } = require('../controllers/job.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const companyMiddleware = require('../middlewares/company.middleware')
const router = Router()

router.post('/', authMiddleware, companyMiddleware, createJob)

module.exports = router
