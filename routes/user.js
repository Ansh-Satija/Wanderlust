const express = require("express")
const router = express.Router()
const User = require("../models/user.js")
const wrapAsync = require("../utils/wrapAsync.js")
const passport = require("passport")
const { saveRedirectUrl } = require("../middleware.js")

//<----- IMPORT CONTROLLER FILE ----->
const userController = require("../controllers/users.js")

//<----- USING ROUTER.ROUTE() TO GROUP/ COMBINE DIFFERENT TYPES OF REQUESTS AT SAME PATH ----->

//<----- FOR SAME PATH = "/signup" ----->
//SIGNUP ROUTE - 2 STEPS: FIRST RENDER THE FORM USING GET/SIGNUP THEN CREATE AND SAVE THE USER DOC IN DB USING POST/SIGNUP

router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

//<----- FOR SAME PATH = "/login" ----->
//LOGIN ROUTE
router.route("/login")
.get(userController.renderLoginForm)  //1. RENDER THE LOGIN FORM
.post(                                //2. AUTHENTICATE THE USER, (EXTRA OPTIONS PASSED IN THE PASSPORT MIDDLEWARE)
    saveRedirectUrl,
    passport.authenticate("local",
    {failureRedirect: "/login", failureFlash: true }),
    userController.login
);                               


//LOGOUT USER
router.get("/logout", userController.logout);

module.exports = router