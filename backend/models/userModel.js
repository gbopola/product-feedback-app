const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
    },
    avatar: {
      type: String,
      required: [true, "Please add an avatar"],
    },
    email: {
      type: String,
      required: [true, "Please add an email address"],
      unique: true,
    },
    username: {
      type: String,
      required: [true, "Please add a username"],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: 6,
      maxLength: 64,
      validate: {
        validator: function containsSpecialChars(password) {
          const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
          return specialChars.test(password);
        },
        message: "Password must contain a special character",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
