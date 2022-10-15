const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

const authMiddleware = async (request, response, next) => {
  const token = request.headers.authorization.split(' ')[1]

  //if no token
  if (!token) return response.status(401).json({ message: 'Unauthorized' })

  try {
    const decode_jwt = jwt.verify(token, process.env.JWT_SECRET_KEY)
    const user = await User.findOne({ email: decode_jwt.email }).lean()
    request.user = { ...user }
    next()
  } catch (error) {
    return response.status(500).json({ message: error.message })
  }
}

module.exports = authMiddleware
