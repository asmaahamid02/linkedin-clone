const User = require('../models/user.model')
const Company = require('../models/company.model')

const updateProfile = async (request, response) => {
  const data = request.body
  const user = request.user
  const role = user.role

  if (role == 'user') {
    //update user profile
    User.findByIdAndUpdate(
      user._id,
      {
        $set: {},
      },
      { upsert: true }
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

module.exports = {
  updateProfile,
}
