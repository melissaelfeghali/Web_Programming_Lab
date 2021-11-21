// Node JS Packages used 
const exp = require("constants");
const express = require("express");
const fs = require("fs");
const js = require("js");
const multer = require("multer");

// STEP 1

const app = express(); // Creates an Express app

// When user enters http://localhost:8081 he is automatically directed to the page.html containing the form to be filled
app.get("", (req, res) => {
    res.sendFile(__dirname + "/page.html");
});


// STEP 2 & 3

app.use(express.json()); 
app.use(express.urlencoded());
app.use(express.static("public"));

const d_storage = multer.diskStorage({
    destination: function(req, file, cb_function){
        cb_function(null, __dirname + "/Uploads");
    }, 

    filename: function(req, file, cb_function){
        cb_function(null, file.originalname);
    },
});

const upload = multer({ storage: d_storage}); 


// When user clicks on the submit button 
app.post("/processForm", upload.single("user"), (req, res) => {
    const file_n = `${req.body.firstName}.html`;
    const directory = __dirname + "/public";
    let is_found = false;

    file_list = fs.readdirSync(directory);
    file_list.forEach((file) => {
        if (file == file_n){
            is_found = true;
        }
    });

    // If there exists a prior file with name of user 
    if (is_found){
        res.sendFile(directory + "/" + file_n);
        if (req.file != null){
            const f_path = req.file.path;
            fs.unlink(f_path, function(err) {
                console.log(`Attempt of ${req.body.firstName} to submit disregarded.`);
            });
        }

    // If no prior file with name of user exists
    } else {
        let info_page = `
        <h1> Greetings ${req.body.firstName} ! </h1>
        <p> Your Bio: ${req.body.description} </p>
        <img src="${req.body.image}" alt="User image">
        <p> Your gender: ${req.body.gender} </p>
        <p> Your birthday: ${req.body.date} </p>
        <p> Your favorite color: ${req.body.color} </p>
        `;

        res.send(info_page); 

        fs.writeFile(__dirname + `/public/${req.body.firstName}.html`, 
        info_page, (err) => {
            if (err) {
                throw err; 
            }

            console.log(`Information Page of ${req.body.firstName} created and saved.`);
        });
    }
} );

// Starts the Web Server and listens to the specified port 
const my_server = app.listen(8081, () => {
    console.log(`Express app listening through http://localhost:8081`);
});



