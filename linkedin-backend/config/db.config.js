const mongoose = require('mongoose')

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Database connected')
  })
  .catch((error) => {
    console.log('Database error: ', error)
  })
