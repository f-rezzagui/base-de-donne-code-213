const express = require("express")
const app = express()

const isLoggodId = true;
function checkLogin (req, res, next) {
    if (isLoggodId){
        next(); 
    } else {
        res.send("you must log in first ")
    }
}
app.get("/",(req,res) => {
    res.send("public Home page")
})
app.get("/dashboard", checkLogin,(req, res) => {
    res.send("welcome to you dashboard")
})
app.get("/profile", checkLogin,(req, res) => {
    res.send("you profile")
})
app.listen(3000,() => {
    console.log("Server is running on http://localhost:3000/")
})

