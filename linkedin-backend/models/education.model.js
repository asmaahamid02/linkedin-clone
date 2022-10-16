const mongoose = require('mongoose')

const educationSchema = new mongoose.Schema(
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
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const Education = mongoose.model('Education', educationSchema)

module.exports = Education
