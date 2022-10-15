const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
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
    education: [
      {
        degree: String,
        institute: {
          type: String,
          required: true,
        },
        start_date: Date,
        end_date: Date,
        description: String,
        grade: mongoose.Types.Decimal128,
      },
    ],
    experience: [
      {
        title: String,
        employment_type: String,
        company_name: String,
        start_date: Date,
        end_date: Date,
        industry: String,
      },
    ],
    skills: [String],
    phone_number: String,
    date_of_birth: Date,
    resume: String,
    visible: {
      type: Boolean,
      default: true,
    },
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
    founded: Integer,
    user_type: {
      type: String,
      enum: ['user', 'company'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
