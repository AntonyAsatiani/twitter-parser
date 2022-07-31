const mongoose = require('mongoose');
const { mongoConnectionString } = require('../config');

mongoose.connect(mongoConnectionString);
const connection = mongoose.connection;
mongoose.Promise = global.Promise;
connection.on('error', console.error.bind(console, 'connection error:'));