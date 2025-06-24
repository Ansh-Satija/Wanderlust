//SO THAT THE SENSITIVE INFO IN .ENV FILE IS NOT ACCESSIBLE DURING PRODUCTION PHASE OF PROJECT.
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require("path")
const ejsMate = require("ejs-mate")
const ExpressError = require("./utils/ExpressError.js")

const session = require("express-session")

//<----- USE MONGO SESSION STORE TO STORE SESSION RELATED INFO IN PROD PHASE ----->
const MongoStore = require("connect-mongo")

//<----- TO FLASH MESSAGES FOR SUCCESS AND ERROR ----->
const flash = require("connect-flash")

//<----- FOR AUTHENTICATION ----->
const passport = require("passport")
const LocalStrategy = require("passport-local")
const User = require("./models/user.js")
const axios = require('axios')

//<----- NOW USE THE MONGO ATLAS LINK TO CONNECT TO DB IN CLOUD ----->
const dbUrl = process.env.ATLASDB_URL

//<----- WE ARE CREATING A MONGO STORE USING CONNECT-MONGO AND DEFINING ALL THE DETAILS FOR IT IN THE 'STORE' VAR,
// THEN PASS THIS STORE VAR INSIDE THE SESSIONOPTIONS OBJ SO THAT IS CAN BE USED IN THE SESSIONS MIDDLEWARE ----->
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600
})

store.on("error", ()=> {
    console.log('ERROR IN MONGO SESSION STORE', err);
})

//<----- OPTIONS THAT ARE REQUIRED TO BE PASSED WITH THE SESSION MIDDLEWARE ----->
const sessionOptions = {        
    store,                       //INFO OF THE MONGO STORE
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
}

//<----- MIDDLEWARES FOR SESSION, FLASH ----->
app.use(session(sessionOptions))
app.use(flash())


//<----- MIDDLEWARES FOR AUTHENTICATION USING PASSPORT PACKAGE ------>
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

//<----- MIDDLEWARE TO STORE THE VALUES IN RES.LOCALS VARIABLES SO THAT WE CAN ACCESS THEM IN ANY EJS FILES WITHOUT 
// RENDERING THEM REPEATEDLY ----->
app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})


// <----- USING EXPRESS.ROUTER() FOR CODE MODULARITY ----->
// <----- IMPORT THE FILES WHERE ALL THE ROUTE HANDLERS WITH ENTIRE FUNCTIONALITY ARE DEFINED ----->
const listingRouter = require("./routes/listing.js")
const reviewRouter = require("./routes/review.js")
const userRouter = require("./routes/user.js")

app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"))


app.use(express.urlencoded({extended: true}))
const methodOverride = require("method-override")
app.use(methodOverride("_method"))
app.engine('ejs', ejsMate)
app.use(express.static(path.join(__dirname, "/public")))

main().then(()=>{
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})

async function main(){
    await mongoose.connect(dbUrl)
}

//<--- MIDDLEWARE THAT PRINTS THE METHOD AND PATH WHERE WE REQUEST WAS SENT AND REACHED --->
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.originalUrl}`);
  next();
});


//<--- TO USE THE FUNCTIONALITY DEFINED IN listing.js FOR ALL ROUTES BEGINNING WITH '/listings' --->
app.use("/listings", listingRouter)

//<--- TO USE THE FUNCTIONALITY DEFINED IN review.js FOR ALL ROUTES BEGINNING WITH '/listings/:id/reviews' --->
app.use("/listings/:id/reviews", reviewRouter)

//<--- TO USE THE FUNCTIONALITY DEFINED IN user.js FOR ALL ROUTES BEGINNING WITH '/' --->
app.use("/", userRouter)


// <---------------------------------------->


//<----- WHEN WRAPASYNC CALLS CATCH(NEXT) THE CONTROL IS SENT HERE BY NEXT ----->
app.use((err,req,res,next) => {
    let {statusCode=500, message="Something Went Wrong!"} = err;
    // res.status(statusCode).send(message)
    res.status(statusCode).render("error.ejs", {message})   //<--- THIS LINE IS DISPLAYING ERRORS IN NEW PAGE --->
})

//<----- START THE SERVER ----->     
app.listen(8080, ()=>{
    console.log('Server is listening to port 8080');
})