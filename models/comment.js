const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Comment Schema
const CommentSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
		// required: true
	},
	body: {
		type: String
		// required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const Comment = module.exports = mongoose.model('Comment', CommentSchema);
