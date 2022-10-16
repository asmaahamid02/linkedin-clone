const mongoose = require('mongoose')

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    address: {
      country: String,
      city: String,
    },
    phone_number: String,
    industry: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    bio: String,
    website: String,
    founded: Number,
  },
  {
    timestamps: true,
  }
)

const Company = mongoose.model('Company', companySchema)

module.exports = User
