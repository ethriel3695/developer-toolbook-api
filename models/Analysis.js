const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema({
    question: String,
    answer: String,
    truth: String,
    commitment: String,
    archive: Boolean,
    userId: String
});

analysisSchema.set('timestamps', true);

module.exports = mongoose.model('Analysis', analysisSchema, 'analysis');