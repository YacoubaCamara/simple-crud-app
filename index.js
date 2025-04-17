const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://admin:10kHJhvXFkp5tJr9@simplecrudappdb.jyu1dvk.mongodb.net/test?retryWrites=true&w=majority&appName=SimpleCrudAppDB"
  )
  .then(() => {
    console.log("Successfully connected!");
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
