// const { name } = require("ejs");
// const express = require("express")
// const app = express();

// app.set("view engine", 'ejs');

// const users = [
//     {id: 1, name: "Alice", email:"alice@example.com"},
//     {id: 1, name: "bob", email:"bob@example.com"},
//     {id: 1, name: "Charlie", email:"Charlie@example.com"}
// ]

// app.get("/admin", (req,res) => {
//     res.render("admin", {isAdmin: true});

// });

// app.get("/users", (req,res) => {
//     res.render("users", {users})
// })

// app.listen(3000,() => console.log ("http://localhost:3000/"))


const express = require("express")
const app = express()
// const user = require("./routes/user")
// app.set("view engine" , "ejs")
// app.use(express.static('public'))
// app.use(user)



const moode = require("./routes/moode")
app.set("view engine" , "ejs")
app.use(express.static('public'))
app.use(moode)







app.listen(3000, ()=> { console.log("you are running on port 3000")})