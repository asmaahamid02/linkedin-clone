const companyMiddleware = async (request, response, next) => {
  const role = request.user.role

  if (role !== 'company')
    return response.status(401).json({ message: 'Unauthorized' })

  next()
}

module.exports = companyMiddleware
