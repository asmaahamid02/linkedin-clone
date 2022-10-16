const userMiddleware = async (request, response, next) => {
  const role = request.user.role

  if (role !== 'user')
    return response.status(401).json({ message: 'Unauthorized' })

  next()
}

module.exports = userMiddleware
