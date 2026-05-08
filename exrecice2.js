const express = require("express");
const multer = require("multer") ;
const app = express();
const upload = multer ({dest:"upload/"});
app.use(express.json())
let submission = [
    {id:1, studentName: "First Post", note:"2", file:"one", cours:"angle", submiHeadAT:"2026-02-23"},
   {id:2, studentName: "First Post", note:"1", file:"one", cours:"arabe", submiHeadAT:"2026-03-25"},
   {id:3, studentName: "First Post", note:"1", file:"one", cours:"arabe", submiHeadAT:"2026-07-25"},
   {id:6, studentName: "First Post", note:"1", file:"one", cours:"arabe", submiHeadAT:"2026-05-25"}
]

function sabmet (req, res, next) {
    const {roles} = req.query
 if (roles !== "student") {
    return res.status(400).json({ error: "alis student " });
  }
  next();
}


function sabmetnote (req, res, next) {
    const {role} = req.query
 if ( role !== "teacheur") {
    return res.status(400).json({ error: "error " });
  }
  next();
}



app.get("/submission", (req, res) =>{
    res.json(submission)
})



app.post("/submission/grade",sabmet, upload.array("files",5), (req,res) => { 

    
    const newPost = {
        id: submission.length +1,
        studentName: req.body.studentName,
        note: null,
        file: req.files,
        cours: req.body.cours,
        submiHeadAT:new Date()
    }
    submission.push(newPost)
    res.json(newPost)
})


app.patch("/submission/:id/grade",sabmet, (req, res) =>{
    const id = parseInt(req.params.id);
    const post = submission.find ((post) => post.id === id);
    if(!post) return res.send("post not found");
    if (req.body.studentName !== undefined){
        post.studentName = req.body.studentName;
    }
    if( req.body.note !== undefined) {
        post.note = req.body.note;
    }
    if (req.body.file !== undefined) {
        post.file = req.body.file; }
        res.json(post)

     if (req.body.cours !== undefined) {
        post.cours = req.body.cours; }
        res.json(post)

})

app.patch("/submission/:id/grade",sabmetnote , (req, res) =>{
    const id = parseInt(req.params.id);
    const notes = submission.find ((notes) => notes.id === id);
    if(!notes) return res.send("post not found");
    if (req.body.studentName !== undefined){
        notes.studentName = req.body.studentName;
    }
    if( req.body.note !== undefined) {
        notes.note = req.body.note;
    }
  
        res.json(notes)

})


app.get("/submission/top" , (req,res) =>{

    const top = submission.reduce((max,post) => {
       return post.note > max.note ? post : max
    }
    
)
res.json(top)

})

app.get("/submission/coures/:cours", (req, res) =>{
    const poscours = req.params.cours
    const resulta = submission.filter(post => post.cours == poscours)
    res.send(resulta)
})


app.listen(3000,() => {
    console.log("Server is running on http://localhost:3000/")
})
