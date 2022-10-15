const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true
  return false
}

const login = async (request, response) => {
  const { email, password } = request.body

  if (!email || !password)
    return response
      .status(404)
      .json({ message: 'Email and Password are required' })
  const user = await User.findOne({ email }).select('+password')

  if (!user)
    return response.status(404).json({ message: 'Invalid Credentials' })

  const isMatch = bcrypt.compare(password, user.password)

  if (!isMatch)
    return response.status(404).json({ message: 'Invalid Credentials' })

  const token = jwt.sign(
    { email: user.email, name: user.name },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '24h',
    }
  )
  response.status(200).json({ message: 'Successfully logged in', data: token })
}

module.exports = {
  login,
  signup,
}
