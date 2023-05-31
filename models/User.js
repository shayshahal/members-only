const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
	membershipStatus: { type: Boolean, required: true },
	isAdmin: { type: Boolean, required: true },
});

UserSchema.virtual('fullName', function () {
	return this.firstName + ' ' + this.lastName;
});

module.exports = mongoose.model('UserSchema', UserSchema);
