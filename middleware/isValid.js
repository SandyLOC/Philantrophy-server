const mongoose = require("mongoose");

module.exports = (req, res, next) => {

    const { campaignId } = req.params

    if (!mongoose.Types.ObjectId.isValid(campaignId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }
        next();

 };
