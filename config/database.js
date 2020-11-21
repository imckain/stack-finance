const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || '', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Mongoose connected to ${db.host}:${db.port}`);
});

db.on('error', function(error) {
    console.log(`Encountered and error: ${error.message}`);
});