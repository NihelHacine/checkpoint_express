const express = require ("express");
const app = express();
app.use(express.json());
app.set("view engine", "ejs")
app.listen(4000, 
    (err)=> err? console.log(err) : console.log("bonjour")
    );

app.use("/store", require("./routes/store"))