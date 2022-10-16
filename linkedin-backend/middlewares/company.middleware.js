const jwt = require('jsonwebtoken')
const Company = require('../models/company.model')

const companyMiddleware = async (request, response, next) => {
  const role = request.user.role

  //if no token
  if (role !== 'company')
    return response.status(401).json({ message: 'Unauthorized' })

  next()
}

module.exports = companyMiddleware
