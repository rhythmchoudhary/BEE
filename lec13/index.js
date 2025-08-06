// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.sendFile(__dirname+"/index.html")
// })


// app.get("/about.html", (req,res)=>{
//     res.sendFile(__dirname+ "/about.html")
// })





// If you're manually importing or linking all your HTML, CSS, JS files one-by-one in server.js, it can become very tedious as your project grows.
// Best Solution: Use a Static Files Middleware
// In Node.js with Express, you can serve an entire folder (like public/) containing your HTML, CSS, JS, images, etc. You don’t need to manually add each file.
// app.use(express.static(__dirname+"/public"))


// app.listen(3000, () => {
//     console.log("server started")
// })




const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post("/submit-form",(req,res)=>{
    const email = req.body.email;
    const password = req.body.password
    let user = {
        email:email,
        password:password
    }

    let allusers = [];
    fs.readFile("./user.json","utf-8",(err,data)=>{
        if(err) res.send(err);
        if(data){
            allusers = JSON.parse(data);
        }
        allusers.push(user);
        
        fs.writeFile("./user.json", JSON.stringify(allusers,null,2),(err)=>{
            if(err) return res.send(err);
            res.send("data saved");
        })
    })
})

app.listen(port, () => {
    console.log("Server started");
});

