const express = require("express")
const router = express.Router()
const axios = require('axios')

const wrapAsync = require("../utils/wrapAsync.js")
const Listing = require("../models/listing.js")
const listingSchema = require("../schema.js")
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js")

//<----- MIDDLEWARE TO PARSE THE DATA SENT BY FORM OF TYPE = MULTIPART/FORM-DATA (USED TO SEND FILES) ----->
const multer = require('multer')
const {storage} = require("../cloudConfig.js")
const upload = multer({ storage })

//<----- IMPORT CONTROLLERS ----->
const listingController = require("../controllers/listings.js")


//<----- SHIFTED ALL THE CODE/ FUNCTIONALITY OF ALL THE CALLBACK FUNCTIONS IN THIS FILE TO CONTROLLERS -> LISTINGS.JS ----->

//<----- USING ROUTER.ROUTE() TO GROUP/ COMBINE DIFFERENT TYPES OF REQUESTS AT SAME PATH ----->

//<----- FOR SAME PATH = "/" ----->
router.route("/")  
.get( wrapAsync(listingController.index))   //INDEX ROUTE
.post(                                      //CREATE ROUTE
    isLoggedIn,
    upload.single('listing[image]'),
    // validateListing,
    wrapAsync(listingController.createListing)
)  


//NEW ROUTE
router.get("/new", isLoggedIn, listingController.renderNewForm)

//<----- FOR SAME PATH = "/:id" ----->
router.route("/:id")
.get( wrapAsync(listingController.showListing))  //SHOW ROUTE
.put(                                            //UPDATE ROUTE
    isLoggedIn, 
    isOwner, 
    upload.single("listing[image]"), 
    validateListing, 
    wrapAsync(listingController.updateListing)
) 
.delete( isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))  //DELETE ROUTE


//EDIT ROUTE
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm))

module.exports = router;