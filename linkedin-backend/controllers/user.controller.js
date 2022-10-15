const User = require('../models/user.model')

const updateProfile = async (request, response) => {
  const { id, ...data } = request.body
  const user = request.user
  return response.json({ data, user })
}

module.exports = {
  updateProfile,
}
