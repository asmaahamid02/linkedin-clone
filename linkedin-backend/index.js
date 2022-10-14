const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT

//creating the serevr
app.listen(port, (error) => {
  if (error) console.log(error)
  console.log(`Server running on port ${port}`)
})
