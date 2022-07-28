const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const Campaign = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    },
    location: {
       type: String,
       enum: ["USA", "CAN", "MEX"]
    },
    category: {
      type: String,
      required: true,
      enum: ["animals", "cleaning", "forestry", "people"]
    },
    picture: String,
    achievement : Object,
    iceBreak: String,
    expiration: Date
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

module.exports = model("Campaign", Campaign);