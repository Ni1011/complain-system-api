const mongoose = require("mongoose");

// user schema


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide an name!"],
    unique: [true, "Name Exist"],
  },
  username: {
    type: String,
    required: [true, "Please provide an username!"],
    unique: [true, "UserName Exist"],
  },
  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  //   password field
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },
  role: {
    type: String,
    required: [true, "Please provide a role!"],
    index: true, // add index on role field
    unique: false,
  },
});

// export UserSchema
// module.exports = mongoose.model.Users || mongoose.model("users", UserSchema);
const User = module.exports = mongoose.model.Users ||mongoose.model("Users", UserSchema);

module.exports.getEngineer = function(callback){
  const query = {role: "jeng"}
  User.find(query, callback);
}
