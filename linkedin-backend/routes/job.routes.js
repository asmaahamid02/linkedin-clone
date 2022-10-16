const { Router } = require('express')
const {
  createJob,
  getJobs,
  getAppliedUsersByJob,
} = require('../controllers/job.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const companyMiddleware = require('../middlewares/company.middleware')
const router = Router()

router.post('/', authMiddleware, companyMiddleware, createJob)
router.get('/', authMiddleware, companyMiddleware, getJobs)
router.get('/:id', authMiddleware, companyMiddleware, getAppliedUsersByJob)

module.exports = router
