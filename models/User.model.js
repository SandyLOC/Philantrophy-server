const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minLength: 8
    },
    picture: {
      type: String,
      default: "https://www.pngkit.com/png/full/281-2812821_user-account-management-logo-user-icon-png.png"
    },
    role : {
      type: String,
      default: "user",
      enum: ["user", "admin"]
    }, 
    achievements: [String],
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Campaign' }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
