const mongoose = require("mongoose");

module.exports = (req, res, next) => {

    const { campaignId, userId } = req.params

    if(campaignId){
        if (!mongoose.Types.ObjectId.isValid(campaignId)) {
            res.status(400).json({ message: 'Specified id is not valid' });
            return;
        }
    } else if (userId){
        if(!mongoose.Types.ObjectId.isValid(userId)) {
            res.status(400).json({ message: 'Specified id is not valid' });
            return;
        }
    }
        next();

 };
