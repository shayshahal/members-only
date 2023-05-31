const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	title: { type: 'string', required: true },
	text: { type: 'string', required: true },
	timestamp: { type: Date, default: Date.now, required: true },
	author: { type: Schema.Types.ObjectId, required: true },
});

module.exports = mongoose.model('Message', MessageSchema);
