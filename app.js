const express = require('express');
const cors = require('cors');
require("./config/db")

// import router
const userRouter=require("./routes/user.route")

const app = express();
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// use router
app.use("/api/users",userRouter)


// api/users : GET
// api/users/:id : GET
// api/users : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

// get home
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html")
})

// invalid url
app.use((req, res, next) => {
  res.status(404).json({
    message: ' Route Not Found',
  });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: " Something is Broken"
  })
});

module.exports = app;