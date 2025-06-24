const Listing = require("../models/listing")
const Review = require("../models/review")


//POST REVIEW ROUTE
module.exports.createrReview = async(req,res) => {
    let listing = await Listing.findById(req.params.id)
    let newReview = new Review(req.body.review);

    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    console.log("NEW REVIEW SAVED AND LISTING DOC FOR IT ALSO UPDATED");

    req.flash("success", "New Review Created!")
    res.redirect(`/listings/${listing._id}`) 
    
}

//DELETE REVIEW ROUTE
module.exports.destroyReview = async (req,res) => {
    let {id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!")
    res.redirect(`/listings/${id}`); 
}