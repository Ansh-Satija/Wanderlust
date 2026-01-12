require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongoUrl = process.env.ATLASDB_URL;
console.log("Mongo URL =>", mongoUrl); // TEMP debug


main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(mongoUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  //<----- ADD THE OWNER FIELD IN EACH LISTING DOCUMENT(OBJECT) ----->
  initData.data = initData.data.map((obj) => ({...obj, owner: "685a4a54bb5cd59f6ec10be3"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();