const express = require('express')
const multer = require("multer")    


const app = express()
const upload = multer ({dest:"upload/"});
app.post("/upload",upload.single("file"),(req,res) => { 
    res.send("File uploaded succesfully")

})
app.post("/upload-multiple", upload.array("files",5), (req,res) => {
    res.json({
        message:"files uploaded",
        body:req.body,
        files: req.files
    })
})








app.listen(3000,() => {
    console.log("Server is running on http://localhost:3000/")
})

