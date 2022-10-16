const mongoose = require('mongoose')

const experienceSchema = new mongoose.Schema(
  {
    title: String,
    employment_type: String,
    company_name: String,
    start_date: Date,
    end_date: Date,
    industry: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Experience = mongoose.model('Experience', experienceSchema)

module.exports = Experience
