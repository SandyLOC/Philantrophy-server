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
      enum: ["animals", "beautify", "forestry", "people"]
    },
    address: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      default:"https://i0.wp.com/wausaupilotandreview.com/wp-content/uploads/2021/01/volunteers-3874924_1920.png?fit=1200%2C848&ssl=1",
    },
    date: Date,
    description: String,
    rating: String,
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