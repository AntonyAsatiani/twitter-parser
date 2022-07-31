const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
	{   twitterId: {type: String, required: true},
		name: { type: String, required: true },
		username: { type: String, required: true },
	},
	{ collection: 'user' }
);
if (mongoose.connection.models['user']) {
	delete mongoose.connection.models['user'];
}

const User = model('user', userSchema);

module.exports = mongoose.models.User || User;
