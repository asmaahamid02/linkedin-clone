const User = require('../models/user.model')
const Company = require('../models/company.model')
const Job = require('../models/job.model')

const updateProfile = async (request, response) => {
  const data = request.body
  const user = request.user
  const role = user.role

  if (role == 'user') {
    //update user profile
    User.findByIdAndUpdate(
      user._id,
      {
        $set: {
          name: data.name ? data.name : user.name,
          address: {
            country: data.country ? data.country : user.address.country,
            city: data.city ? data.city : user.address.city,
          },
          phone_number: data.phone_number
            ? data.phone_number
            : user.phone_number,
          date_of_birth: data.date_of_birth
            ? data.date_of_birth
            : user.date_of_birth,
          bio: data.bio ? data.bio : user.bio,
        },
        $addToSet: {
          skills: data.skills && data.skills,
        },
      },
      { new: true, upsert: true }
    )
      .then((result) =>
        response
          .status(200)
          .json({ data: result, message: 'Profile Updated Successfully' })
      )
      .catch((error) => response.status(400).json({ error: error.message }))
  } else if (role == 'company') {
    //update company profile
    Company.findByIdAndUpdate(
      user._id,
      {
        $set: {
          name: data.name ? data.name : user.name,
          address: {
            country: data.country ? data.country : user.address.country,
            city: data.city ? data.city : user.address.city,
          },
          phone_number: data.phone_number
            ? data.phone_number
            : user.phone_number,
          industry: data.industry ? data.industry : user.industry,
          about: data.about ? data.about : user.about,
          bio: data.bio ? data.bio : user.bio,
          website: data.website ? data.website : user.website,
          founded: data.founded ? data.founded : user.founded,
        },
      },
      { new: true, upsert: true }
    )
      .then((result) =>
        response
          .status(200)
          .json({ data: result, message: 'Profile Updated Successfully' })
      )
      .catch((error) => response.status(400).json({ error: error.message }))
  }
  //   return response.json({ data, user })
}

const applyForJob = async (request, response) => {
  const user_id = request.user._id
  const job_id = request.params.id

  const job = await Job.findByIdAndUpdate(
    job_id,
    {
      $addToSet: {
        applicants: user_id,
      },
    },
    { new: true, upsert: true }
  )

  const user = await User.findByIdAndUpdate(
    user_id,
    {
      $addToSet: {
        jobs: job_id,
      },
    },
    { new: true, upsert: true }
  )

  Promise.all([user, job])
    .then((result) =>
      response
        .status(200)
        .json({ data: result, message: 'Application sent succesfully' })
    )
    .catch((error) => response.status(400).json({ error: error.message }))
}

const followCompany = async (request, response) => {
  const user_id = request.user._id
  const company_id = request.params.id

  const user = User.findByIdAndUpdate(
    user_id,
    {
      $addToSet: {
        following: company_id,
      },
    },
    { new: true, upsert: true }
  )

  const company = Company.findByIdAndUpdate(
    user_id,
    {
      $addToSet: {
        followers: user_id,
      },
    },
    { new: true, upsert: true }
  )

  Promise.all([user, company])
    .then((result) =>
      response.status(200).json({ data: result, message: 'Followed' })
    )
    .catch((error) => response.status(400).json({ error: error.message }))
}

module.exports = {
  updateProfile,
  applyForJob,
  followCompany,
}
