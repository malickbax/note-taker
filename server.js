// Calling all required files
const express = require("express");
const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");

// App to create Express server below
const app = express();

// Using port number 8080. We use process.env.PORT since we will deploy to Heroku
const PORT = process.env.PORT || 8080;
app.use(express.static("public"));  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api",apiRoute);
app.use("/",htmlRoute);

// App listen starts here 
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});