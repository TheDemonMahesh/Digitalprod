require('dotenv').config()
const express = require('express');
const path = require('path');

const app = express();


// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/dc-app'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/dc-app/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT ,() => {
    console.log("open the application by using port ",process.env.PORT)
});
