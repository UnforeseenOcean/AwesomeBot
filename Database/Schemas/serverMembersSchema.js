const mongoose = require("mongoose");

// Server's member data (activity, rank, etc.)
module.exports = new mongoose.Schema({
	_id: {type: String, required: true},
	messages: {type: Number, default: 0, min: 0},
	voice: {type: Number, default: 0, min: 0},
	rank: {type: String, default: 0, min: 0},
	rank_score: {type: Number, default: 0, min: 0},
	afk_message: String,
	last_active: Date,
	cannotAutokick: {type: Boolean, default: false},
	strikes: [new mongoose.Schema({
		_id: {type: String, required: true},
		reason: {type: String, required: true},
		timestamp: {type: Date, default: Date.now}
	})],
	isPointsCooldownOngoing: {type: Boolean, default: false},
	profile_fields: mongoose.Schema.Types.Mixed
});