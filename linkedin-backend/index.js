const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
require('./config/db.config')

const port = process.env.PORT

const authRoutes = require('./routes/auth.routes')
app.use('/auth', authRoutes)

const userRoutes = require('./routes/user.routes')
app.use('/users', userRoutes)

const jobRoutes = require('./routes/job.routes')
app.use('/jobs', jobRoutes)

//creating the serevr
app.listen(port, (error) => {
  if (error) console.log(error)
  console.log(`Server running on port ${port}`)
})
