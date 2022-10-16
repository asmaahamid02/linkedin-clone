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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Education',
      },
    ],
    experience: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Experience',
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
    bio: String,
    profile_image: String,
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
      },
    ],
    jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
