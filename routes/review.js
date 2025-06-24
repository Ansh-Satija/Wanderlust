const express = require("express");
const router = express.Router({mergeParams: true});

const wrapAsync = require("../utils/wrapAsync")
const ExpressError = require("../utils/ExpressError.js")
const Review = require("../models/review.js")
const Listing = require("../models/listing.js")

const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js")

//<----- IMPORT CONTROLLER FILE ----->
const reviewController = require("../controllers/reviews.js")


//POST REVIEW ROUTE
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createrReview))

//DELETE REVIEW ROUTE
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview))

module.exports = router