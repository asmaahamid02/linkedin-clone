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

const signup = async (request, response) => {
  const { name, email, password, role } = request.body
  const errors = []
  if (!name) errors.push({ name: 'Name is required' })
  else if (name.length < 5)
    errors.push({ name: 'Name should be at least 5 characters' })

  if (!email) errors.push({ email: 'E-mail is required' })
  else if (!validateEmail(email)) errors.push({ email: 'Email is not valid' })

  if (!password) errors.push({ password: 'Password is required' })
  else if (password.length < 5)
    errors.push({ password: 'Password should be at least 5 characters' })

  if (!role) errors.push({ role: 'Role is required' })

  if (errors.length > 0) return response.status(404).json(errors)

  try {
    const user = new User()
    user.name = name
    user.email = email
    user.password = await bcrypt.hash(password, 10)

    await user.save()

    response
      .status(200)
      .json({ message: 'Registered Successfully', data: user })
  } catch (error) {
    response.status(500).json({ message: error.message })
  }
}

module.exports = {
  login,
  signup,
}
