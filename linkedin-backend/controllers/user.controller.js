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
        response.json({ data: result, message: 'Profile Updated Successfully' })
      )
      .catch((error) => response.json(error))
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
        response.json({ data: result, message: 'Profile Updated Successfully' })
      )
      .catch((error) => response.json(error))
  }
  //   return response.json({ data, user })
}

const applyForJob = async (request, response) => {
  const user_id = request.user._id
  const job_id = request.params.id

  Job.findByIdAndUpdate(
    job_id,
    {
      $addToSet: {
        applicants: user_id,
      },
    },
    {
      new: true,
      upsert: true,
    }
  )
    .then((result) =>
      response.json({
        data: result,
        message: 'Application sent Successfully',
      })
    )
    .catch((error) => response.json(error))
}

module.exports = {
  updateProfile,
  applyForJob,
}
