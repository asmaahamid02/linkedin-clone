const { Router } = require('express')
const { createJob, getJobs } = require('../controllers/job.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const companyMiddleware = require('../middlewares/company.middleware')
const router = Router()

router.post('/', authMiddleware, companyMiddleware, createJob)
router.get('/', authMiddleware, companyMiddleware, getJobs)

module.exports = router
