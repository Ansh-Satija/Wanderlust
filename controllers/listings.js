const Listing = require("../models/listing")
const axios = require('axios')
const mapToken = process.env.MAP_TOKEN;


//INDEX ROUTE
module.exports.index = async (req,res) => {
    const allListings = await Listing.find({}); 
    res.render("listings/index.ejs", {allListings})
}

//NEW ROUTE
module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs")
}

//SHOW ROUTE
module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({path:"reviews", populate: {path: "author"}})
    .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist!")
        res.redirect("/listings")
    }
    console.log(listing);    
    res.render("listings/show.ejs", {listing})
}

//CREATE ROUTE
module.exports.createListing = async (req,res,next) => {

    //<----- GEOCODING CODE ----->

    // Extract location from request body
    const location = req.body.listing.location;
        
    if (!location) {
        req.flash("error", "Location field is required");
        return res.redirect("/listings/new");
    }

    // Forward geocoding request
    const geocodeResponse = await axios.get('https://us1.locationiq.com/v1/search', {
        params: {
            key: mapToken,
            q: location,
            format: 'json',
            limit: 1,
            normalizeaddress: 1
        }
    });

    // Handle no results
    if (!geocodeResponse.data || geocodeResponse.data.length === 0) {
        req.flash("error", "Could not find coordinates for the provided location");
        return res.redirect("/listings/new");
    }

    // Extract coordinates
    const { lat, lon, display_name } = geocodeResponse.data[0];

    //<----- CODE TO CREATE THE NEW LISTING DOCUMENT WITH ALL THE INFO FROM FORM AND SAVE IT TO DB ----->

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing)
    newListing.owner = req.user._id;
    newListing.image = {url, filename}
    
    newListing.geometry = {
        type: 'Point',
        coordinates: [lon, lat]
    }

    let savedListing = await newListing.save();
    console.log(savedListing);
    
    req.flash("success", "New Listing Created!")
    res.redirect("/listings")
}


//EDIT ROUTE
module.exports.renderEditForm = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not Exist!")
        res.redirect("/listings")
    }
    //<----- TO GIVE A PREVIEW OF EXISTING LISTING IMAGE IN THE UPDATE FORM ----->
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_150,h_100")
    res.render("listings/edit.ejs", {listing, originalImageUrl});
}

//UPDATE ROUTE
module.exports.updateListing = async (req,res) => {
    let {id} = req.params;

    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing})

    //<----- FUNCTIONALITY TO UPDATE THE IMAGE FIELD OF FORM THAT ACCEPTS FILE AS INPUT ----->
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename }
        await listing.save();
    }

    req.flash("success", "Listing Updated!")
    res.redirect(`/listings/${id}`)
}

//DELETE ROUTE
module.exports.destroyListing = async (req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing deleted!")
    res.redirect("/listings")
}

//SEARCH ROUTE FOR SEARCH BAR
module.exports.search = async (req, res) => {
  let input = req.query.q.trim().replace(/\s+/g, " ");

  if (input == "" || input == " " || !input || input == undefined) {
    req.flash("error", "Please enter search query!");
    res.redirect("/listings");
  }

  let data = input.split("");
  let element = "";
  let flag = false;
  for (let index = 0; index < data.length; index++) {
    if (index == 0 || flag) {
      element = element + data[index].toUpperCase();
    } else {
      element = element + data[index].toLowerCase();
    }
    flag = data[index] == " ";
  }

  let allListings = await Listing.find({
    title: { $regex: element, $options: "i" },
  });
  if (allListings.length != 0) {
    res.locals.success = "Listings searched by Title!";
    res.render("listings/index.ejs", { allListings });
    return;
  }

  if (allListings.length == 0) {
    allListings = await Listing.find({
      category: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (allListings.length != 0) {
      res.locals.success = "Listings searched by Category!";
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }
  if (allListings.length == 0) {
    allListings = await Listing.find({
      country: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (allListings.length != 0) {
      res.locals.success = "Listings searched by Country!";
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }

  if (allListings.length == 0) {
    allListings = await Listing.find({
      location: { $regex: element, $options: "i" },
    }).sort({ _id: -1 });
    if (allListings.length != 0) {
      res.locals.success = "Listings searched by Location!";
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }

  const intValue = parseInt(element, 10);
  const intDec = Number.isInteger(intValue);

  if (allListings.length == 0 && intDec) {
    allListings = await Listing.find({ price: { $lte: element } }).sort({
      price: 1,
    });
    if (allListings.length != 0) {
      res.locals.success = `Listings searched by price less than Rs ${element}!`;
      res.render("listings/index.ejs", { allListings });
      return;
    }
  }
  if (allListings.length == 0) {
    req.flash("error", "No listings found based on your search!");
    res.redirect("/listings");
  }
};

//RESERVE ROUTE FOR RESERVE BTN IN SHOW.EJS
module.exports.reserveListing = async (req, res) => {
  let { id } = req.params;
  req.flash("success", "Reservation Details sent to your Email!");
  res.redirect(`/listings/${id}`);
};

//FILTER ROUTE - FOR FILTER ICONS
module.exports.filter = async (req, res, next) => {
  let { id } = req.params;
  let allListings = await Listing.find({ category: { $all: [id] } });
  if (allListings.length != 0) {
    res.locals.success = `Listings Filtered by ${id}!`;
    res.render("listings/index.ejs", { allListings });
  } else {
    req.flash("error", `There is no Listing for ${id}!`);
    res.redirect("/listings");
  }
};