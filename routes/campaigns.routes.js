const router = require("express").Router();
const mongoose = require("mongoose");
const Campaign = require("../models/Campaign.model");

const isValid = require("../middleware/isValid");

//POST - Create new campaign
router.post('/new-campaign', (req, res, next) => {
  console.log(req.body)

  //Store in database
  Campaign.create(req.body)
  .then(newCampaign => {
    res.json(newCampaign)
  })
  .catch(err => res.json(err))

});

//GET - Retrieves all the existing campaigns
router.get('', (req, res, next) => {

  let admin = false
  Campaign.find()
  .then(campaigns => res.json(campaigns))
    .catch(err => res.json(err))
        
  });

// GET - Retrieves a spacific campaign by Id
router.get('/:campaignId', isValid, (req,res, next) => {
  const { campaignId } = req.params

  Campaign.findById(campaignId)
  .then(campaign => res.status(200).json(campaign))
  .catch(error => res.json(error))
})

//PUT - Updates a campaign by Id
router.put('/edit/:campaignId', isValid, (req,res, next) => {
  const { campaignId } = req.params

  Campaign.findByIdAndUpdate(campaignId, req.body)
  .then(updateCampaign => res.json(updateCampaign))
  .catch(err => res.json(err))

})

//DELETE - Deletes a capaign by Id
router.delete('/delete/:campaignId', isValid, (req, res, next) => {
  const { campaignId } = req.params

  Campaign.findByIdAndRemove(campaignId)
  .then(() => res.json({message: `Campaign with Id: ${campaignId} was removed successfully.`}))
  .catch(err => res.json(err))

})

  module.exports = router