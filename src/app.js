const express = require('express');

const path = require("path");

const hbs = require("hbs");

const app = express();

const port = process.env.PORT || 3000;

///public static path 
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

///jab ham ye line use kar liye to app.get wale line me send ke jagah hame render use kana hai
app.set('view engine', 'hbs')
app.set('views', template_path)
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

///routing
app.get("", (req,res)=>{
    //res.send("welcome to mishra project")
   res.render('index')
})

app.get("/about", (req,res)=>{
    //res.send("welcome to mishra about project")
    res.render('about')
})

app.get("/weather", (req,res)=>{
    res.render('weather')
})

app.get("*", (req,res)=>{
    res.render("404error",{
        errorMsg:'Oops! Page Not Found'
    })
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})