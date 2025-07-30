const mongoose = require("mongoose");
const Schema= mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
  type: String,
  default: "https://ix-marketing.imgix.net/autocompress.png?auto=format,compress&w=1946",
  set: v => v === "" ? "https://ix-marketing.imgix.net/autocompress.png?auto=format,compress&w=1946" : v
}

    ,
    price: Number,
    location: String,
    country: String, 
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports =Listing; 