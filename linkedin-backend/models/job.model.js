const mongoose = require('mongoose')

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    location: {
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
    },
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    employment_time: {
      type: String,
      required: true,
    },
    Company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
)

const job = mongoose.model('Job', jobSchema)

module.exports = job
