require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose");
const router = require("./routes");


app.use(express.json())
mongoose
.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => {
    console.log("Db is connected successfully...")
// If connection is successful, start the server.
// app.listen(process.env.PORT || 7000);
})
.catch((error) => {
console.log(error);
});

app.use("/",router)

app.listen(process.env.PORT || 7000, () => {
    console.log(`Server is running at port ${process.env.PORT}`)
})