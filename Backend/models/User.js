const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },

    timestamp: { type: Date, default: Date.now },

});

const Users = mongoose.model("Users", userSchema);
module.exports = Users;