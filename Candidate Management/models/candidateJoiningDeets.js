const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const candidateJoiningDeetsSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  DOJ: {
    type: Date,
    required: true
  },
  joiningSalary: {
    type: Number,
    required: true
  },
  candidateDeets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Candidate'
    }
  ]
});

module.exports = mongoose.model('CandidateJoiningDeets', candidateJoiningDeetsSchema);

