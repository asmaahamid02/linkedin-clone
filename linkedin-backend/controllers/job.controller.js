const Job = require('../models/job.model')
const Company = require('../models/company.model')
const { request, response } = require('express')

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
    return response
      .status(200)
      .json({ data: job, message: 'Job added successfully' })
  } catch (error) {
    return response.status(400).json({ error: error.message })
  }
}

const getJobs = async (request, response) => {
  const company_id = request.user._id

  const jobs = await Job.find({ Company: company_id })

  if (!jobs) return response.status(400).json({ message: 'No jobs found' })
  return response.status(200).json({ data: jobs })
}

const getAppliedUsersByJob = async (request, response) => {
  const job_id = request.params.id

  const jobs = await Job.findById(job_id).populate('applicants')

  if (!jobs) return response.status(400).json({ message: 'No jobs found' })
  return response.status(200).json({ data: jobs })
}
module.exports = { createJob, getJobs, getAppliedUsersByJob }
