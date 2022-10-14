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
    description: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    work_time: {
      type: string,
      required: true,
    },
    application_questions: [
      {
        question: {
          type: String,
          required: true,
        },
      },
    ],
    Company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Company',
    },
    applicant_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const job = mongoose.model('Job', jobSchema)

module.exports = job
