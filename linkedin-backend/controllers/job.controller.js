const Job = require('../models/job.model')
const Company = require('../models/company.model')

const createJob = async (request, response) => {
  const user = request.user
  const data = request.body

  try {
    const job = new Job()
    job.title = data.title
    job.position = data.position
    job.location.country = data.country
    job.location.city = data.city
    job.description = data.description
    job.requirements = data.requirements
    job.employment_time = data.employment_time
    job.Company = user._id

    await job.save()
    return response.json({ data: job, message: 'Job added successfully' })
  } catch (error) {
    return response.json({ error: error.message })
  }
}

module.exports = { createJob }
