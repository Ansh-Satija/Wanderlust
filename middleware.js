const Listing = require("./models/listing")
const Review = require("./models/review")
const ExpressError = require("./utils/ExpressError.js")
const { listingSchema, reviewSchema } = require("./schema.js")



// <----- BEFORE RENDERING THE FORM TO CREATE A NEW LISTING, CHECK IF USER IN THE CURRENT SESSION IS LOGGED IN OR NOT ----->
module.exports.isLoggedIn = (req,res,next) => {
    console.log(req.user);
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl
        req.flash("error", "You must be logged in to create a listing!")
        return res.redirect("/login"); //<--- IF USER HAS NOT LOGGED IN AND CLICKS ADDNEWLISTING THEN REDIRECT TO LOGIN PAGE --->
    }
    next();
}

//<----- ANOTHER MIDD TO STORE THE VALUE OF REDIRECT URL FROM REQ.SESSION TO RES.LOCALS ----->
module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

//<----- AUTHORIZATION MIDDLEWARE FOR LISTINGS  (TO CHECK IF THE USER IN CURRENT SESSION IS THE OWNER OF LISTING HE IS
// TRYING TO EDIT/DELETE) ----->
module.exports.isOwner = async (req,res,next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "You are not the owner of this listing!")
        return res.redirect(`/listings/${id}`)
    }
    next();
}

//<----- LISTING SCHEMA VALIDATION MIDDLEWARE ----->
module.exports.validateListing = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
    
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400, errMsg)
    }
    else{
        next();
    }
}

//<----- REVIEW SCHEMA VALIDATION MIDDLEWARE ----->
module.exports.validateReview = (req,res,next) => {
    let {id} = req.params;
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        // throw new ExpressError(400, errMsg);
        req.flash("error", errMsg);
        return res.redirect(`/listings/${id}`)
    }
    else{
        next();
    }
}

//<----- AUTHORIZATION MIDDLEWARE FOR REVIEWS (TO CHECK IF THE USER TRYING TO DELETE THE REVIEW IS THE AUTHOR OF
//  REVIEW OR NOT, AS ONLY THE AUTHOR CAN DELETE HIS REVIEW) ----->
module.exports.isReviewAuthor = async (req,res,next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error", "You are not the author of this review")
        return res.redirect(`/listings/${id}`)
    }
    next();
}
