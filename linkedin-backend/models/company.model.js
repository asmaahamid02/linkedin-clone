const mongoose = require('mongoose')

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    location: {
      type: {
        country: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
      },
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    bio: String,
    website: String,
    founded: Integer,
  },
  {
    timestamps: true,
  }
)

const Company = mongoose.model('Company', companySchema)

module.exports = Company
