const mongoose = require("mongoose");

const string = process.env.DBCONNCTIONSTRING;

mongoose
    .connect(string)
    .then((res) => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    }); 