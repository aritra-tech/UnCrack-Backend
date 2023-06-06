const mongoose = require("mongoose");

const backupSchema = new mongoose.Schema({

    data: {
        type: String,
        required: true
      },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const Backup = mongoose.model("Backup",backupSchema)
module.exports = Backup;