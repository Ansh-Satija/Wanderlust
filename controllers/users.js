const User = require("../models/user")

//SIGNUP ROUTES - 2 STEPS: FIRST RENDER THE FORM USING GET/SIGNUP THEN CREATE AND SAVE THE USER DOC IN DB USING POST/SIGNUP
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs")
}

module.exports.signup = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({
            email: email,
            username: username
        })

        const registeredUser = await User.register(newUser, password)
        console.log(registeredUser);
        req.login(registeredUser, (err) => { //<--- TO AUTO LOGIN THE USER ALSO AFTER SIGNUP --->
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to Wanderlust!")
            res.redirect("/listings")
        });
    }
    catch (e) {
        req.flash("error", e.message); //<--- WE WANT THAT IF ANY ERROR OCCURS DURING SIGNUP THEN DISPLAY IT AS A 
        // FLASH MESSAGE INSTEAD OF GOING TO THE ERROR.EJS PAGE --->
        res.redirect("/signup")
    }
}


//LOGIN ROUTE

//1. RENDER THE LOGIN FORM
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs")
}

//2. AUTHENTICATE THE USER AND LOGIN
module.exports.login = async (req, res) => {
    req.flash("success", "Welcome to Wanderlust!")
    let redirectUrl = res.locals.redirectUrl || "/listings"
    res.redirect(redirectUrl);
}

//LOGOUT USER
module.exports.logout = (req,res,next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "Logged out successfully!")
        res.redirect("/listings")
    });
}
