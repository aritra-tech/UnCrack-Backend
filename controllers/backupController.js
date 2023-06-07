const BackUp = require('../models/backup')

class BackUpController {

    static backupData = async (req,res) => {
        try {
            const data = req.body.data;
            const backup = new BackUp({data})
            await backup.save();
            res.status(200).json(backup);
        }
        catch(error) {
            res.status(500).json({ error: 'Failed to backup data'});
        }
    }

    static getbackupData = async (req,res) => {
        try {
            const backups = await BackUp.find();
            res.json(backups);
        }catch(error) {
            res.status(500).json({ error: 'Failed to retrieve DataBackUp'});
        }
    }
}

module.exports = BackUpController