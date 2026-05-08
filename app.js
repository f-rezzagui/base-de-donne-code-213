const { name } = require("ejs");
const express = require("express")
const app = express();

app.set("view engine", 'ejs');

const users = [
    {id: 1, name: "Alice", email:"alice@example.com"},
    {id: 1, name: "bob", email:"bob@example.com"},
    {id: 1, name: "Charlie", email:"Charlie@example.com"}
]

app.get("/admin", (req,res) => {
    res.render("admin", {isAdmin: true});

});

app.get("/users", (req,res) => {
    res.render("users", {users})
})








app.listen(3000,() => console.log ("http://localhost:3000/"))