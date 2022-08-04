const router = require("express").Router();
const mongoose = require("mongoose");

const logged = require("../middleware/logged");
const isValid = require("../middleware/isValid");

// Require the User model in order to interact with the database
const Session = require("../models/Session.model");
const User = require("../models/User.model");
const Campaign = require("../models/Campaign.model");

//Retrieves user info to show in profile
router.get('/profile', (req, res, next) => {
    const { user } = req.params
    User.find()
      .populate('favorites')
      .then(users => res.json(users))
      .catch(err => res.json(err));
  });

//GET - Retrieve specific user by Id
router.get('/profile/:userId', isValid, (req, res, next) => {
    const { userId } = req.params
    console.log(userId)
    User.findById(userId)
      .populate('favorites')
      .then(user => res.status(200).json(user))
      .catch(err => res.json(err));
  });

//PUT - Update specific user by Id
router.put('/profile/:userId', isValid, (req, res, next) => {
    const { userId } = req.params
    User.findByIdAndUpdate(userId, req.body, { new: true })
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.json(err))
})

//DELETE - Delete user account
router.delete('/profile/:userId', isValid, (req, res, next) => {
    const { userId } = req.params

    User.findByIdAndRemove(userId)
    .then(() => res.json({ message: `User with id ${userId} was successfully deleted.`}))
    .catch(err => res.json(err))
})

//PUT - Add favorites to the user
router.put('/favorite/:campaignId&:userId', (req, res, next) => {
    
    const { campaignId, userId } = req.params
    //const { userId } = req.user._id
    console.log(userId)

    User.findByIdAndUpdate(userId, {$push: {favorites: campaignId }})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
//PUT - Add favorites to the user
router.put('/favoriteRemove/:campaignId&:userId', (req, res, next) => {
    
    const { campaignId, userId } = req.params
    //const { userId } = req.user._id
    console.log(userId)

    User.findOneAndUpdate({ _id: userId }, { $pull: { favorites: campaignId  } },
        { safe: true, multi: false })
        .then(result => res.status(200).json(result))
        .catch(err => res.json(err))
})

module.exports = router