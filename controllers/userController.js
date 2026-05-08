const users = require("../modeles/userModel");
exports.getUser = (req,res)=> {
    const user =users[0] 
    res.render("profile", {user})
}
exports.getAllUser =(req, res)=>{
    res.render("alluser",{users})
}