const express = require("express");
const app = express();
app.use(express.json())
let posts =[
    {id:1, title: "First Post", likes:1, author:"one"},
    {id:2, title:"Second Poste", likes:2, author:"two"},
    {id:3, title:"tree Poste", likes:3, author:"three"},
    {id:4, title:"for Poste", likes:0, author:"four"}
]

function authorCheck (req, res, next) {
    const {author} = req.query
 if (!author) {
    return res.status(400).json({ error: "error " });
  }
  next();
}

app.get("/posts", (req, res) =>{
    res.json(posts)
})


app.post("/posts",authorCheck, (req, res) => {
    const newPost = {
        id: posts.length +1,
        title: req.body.title,
        likes:req.body.likes,
        author: req.body.author
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
    if (req.body.author !== undefined) {
        post.author = req.body.author ; }
        res.json(post)
})
app.put("/posts/:id", (req,res) => { 
    const id = parseInt (req.params.id);
    const index = posts.findIndex((p) => p.id ===id);
    posts[index] = {
        id: id,
        title: req.body.title,
        likes:req.body.likes,
        author:req.body.author,
    }
    res.json(posts[index])

})
app.delete("/posts/:id", (req, res) =>{
    const posId = parseInt (req.params.id)
    posts = posts.filter(post => post.id !== posId)
    res.send("Post deleted")
})
app.get("/posts/top" , (req,res) =>{

    const top = posts.reduce((max,post) => {
       return post.likes > max.likes? post : max
    }
    
)
res.json(top)

})
app.get("/my-post",authorCheck ,(req,res)=> {
    const myAuter = req.query.author
    const myposts = posts.filter((post) => post.author === myAuter)
    res.json(myposts)

})


app.listen(3000,() => {
    console.log("Server is running on http://localhost:3000/")
})
