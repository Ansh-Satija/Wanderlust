const mongoose = require("mongoose")
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
})

//<----- THIS WILL AUTO DEFINE/ CREATE THE USERNAME AND PASSWORD FIELDS IN THE USERSCHEMA ----->
userSchema.plugin(passportLocalMongoose)

//<----- CREATE AND EXPORT THE MODEL ----->
module.exports = mongoose.model("User", userSchema)