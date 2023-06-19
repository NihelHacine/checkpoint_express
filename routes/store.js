const express = require("express");
const storeRouter = express.Router();
//cruds
storeRouter.get("/", 

(req,res) =>{
const date = new Date();
const hours = date.getHours();
if (hours>8 && hours<18) {
    res.render("opened")
}
else { res.render("closed")}
}
);

module.exports = storeRouter ; 

