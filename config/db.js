const mongoose = require('mongoose');

const DB = async (uri) => {
    console.log("Database Connected");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

module.exports = DB