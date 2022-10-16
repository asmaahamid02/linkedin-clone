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
    industry: String,
    about: String,
    bio: String,
    website: String,
    founded: Number,
  },
  {
    timestamps: true,
  }
)

const Company = mongoose.model('Company', companySchema)

module.exports = Company
