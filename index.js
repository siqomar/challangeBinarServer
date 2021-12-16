const express = require("express");
const app = express();
// let alert = require("alert");
const userlogin = require("./userlogin.json");

app.use(express.json());
app.use(express.urlencoded({ extended:false}));

// Route to login
app.get("/",(req,res) => {
    res.sendFile(__dirname + "/static/login.html");
});

app.get("/home",(req,res) =>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/login",(req,res) =>{
    // Script login
    // buat variable terlebih dahulu
    let username = req.body.username;
    let pw = req.body.pw;

    const user = userlogin.find(
        (item) =>
        item.username === username &&
        item.pw === pw
    );
    if (user) {
        res.status(200).redirect("/home");
    }else{
        console.log("Error Mas Bro");
    }

});
// tentukan port untuk server
    const port = 8000;

    // buat fungsi listen untuk mengetahui server berjalan atau tidak
    app.listen(port,() => console.log(`Server Berjalan Dengan baik di port ${port}`));