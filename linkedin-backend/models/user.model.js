const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Name is required',
    },
    email: {
      type: String,
      required: 'Email is required',
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: 'Password is required',
      select: false,
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
        grade: Double,
      },
    ],
    current_position: {
      type: String,
      reuired: 'Current position name is required',
    },
    headline: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    phone_number: String,
    date_of_birth: Date,
    visible: Boolean,
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
