const User = require('../models/user.model')
const Company = require('../models/company.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const validateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true
  return false
}

const validateData = async (data) => {
  const errors = []
  //check name existed in request
  if (!data.name) errors.push({ name: 'Name is required' })
  //check name is greater than 5 chars
  else if (data.name.length < 5)
    errors.push({ name: 'Name should be at least 5 characters' })

  //check email existed in request
  if (!data.email) errors.push({ email: 'E-mail is required' })
  //check if email is valid
  else if (!validateEmail(data.email))
    errors.push({ email: 'Email is not valid' })

  //check password existed in request
  if (!data.password) errors.push({ password: 'Password is required' })
  //check password is greater than 5 chars
  else if (data.password.length < 5)
    errors.push({ password: 'Password should be at least 5 characters' })

  //check role existed in request
  //1-user / 2-company
  if (!data.role) errors.push({ role: 'Role is required' })
  else if (data.role != 'user' && data.role != 'company')
    errors.push({ role: 'Role is not valid' })
  else {
    //get the user who have same email as that in request
    const check_user_email = await User.findOne({ email: data.email })
    const check_company_email = await Company.findOne({ email: data.email })
    //check if email existed in db
    if (check_user_email || check_company_email)
      errors.push({ email: 'Email already existed' })
  }

  return errors
}

const login = async (request, response) => {
  const { email, password } = request.body
  let role = 'user'
  if (!email || !password)
    return response
      .status(404)
      .json({ message: 'Email and Password are required' })
  let user = await User.findOne({ email }).select('+password')

  if (!user) {
    user = await Company.findOne({ email }).select('+password')
    role = 'company'

    if (!user)
      return response.status(404).json({ message: 'Invalid Credentials' })
  }

  const isMatch = bcrypt.compare(password, user.password)

  if (!isMatch)
    return response.status(404).json({ message: 'Invalid Credentials' })

  const token = jwt.sign(
    { email: user.email, name: user.name, role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '24h',
    }
  )
  response.status(200).json({ message: 'Successfully logged in', data: token })
}

const signup = async (request, response) => {
  const data = request.body
  const errors = await validateData(data)

  //return errors if existed
  if (errors.length > 0) return response.status(404).json(errors)

  try {
    let user = new User()

    if (data.role == 'company') user = new Company()

    user.name = data.name
    user.email = data.email
    user.password = await bcrypt.hash(data.password, 10)

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
