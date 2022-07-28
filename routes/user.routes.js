const router = require("express").Router();
const mongoose = require("mongoose");


// Require the User model in order to interact with the database
const User = require("../models/User.model");