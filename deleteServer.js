const express = require("express");
const app = express();
app.use(express.json())
let posts =[
    {id:1, title: "First Post"},
    {id:2, title:"Second Poste"}
]
app.get("/posts", (req, res) =>{
    res.json(posts)
})
app.post("/posts", (req, res) => {
    const newPost = {
        id: posts.length +1,
        title: req.body.title
    }
    posts.push(newPost)
    res.status(201).json(newPost)
})
app.delete("/posts/:id", (req, res) =>{
    const posId = parseInt (req.params.id)
    posts = posts.filter(post => post.id !== posId)
    res.send("Post deleted")
})
app.patch("/posts/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    const post = posts.find ((post) => post.id === id);
    if(!post) return res.send("post not found");
    if (req.body.title !== undefined){
        post.title = req.body.title;
    }
    if( req.body.likes !== undefined) {
        post.likes = req.body.likes;
    }
    if (req.body.name !== undefined) {
        post.name = req.body.name ; }
        res.json(post)
})
app.put("/posts/:id", (req,res) => { 
    const id = parseInt (req.params.id);
    const index = posts.findIndex((p) => p.id ===id);
    posts[index] = {
        id: id,
        title: req.body.title,
        likes:req.body.likes,
        name:req.body.name,
    }
    res.json(posts[index])

})
app
app.listen(3000,() => {
    console.log("Server is running on http://localhost:3000/")
})
