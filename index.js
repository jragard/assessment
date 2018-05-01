const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'public/' });
const port = 3000;
const app = express();



app.use(express.static('public'));

app.listen(port);

app.set('view engine', 'pug')

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    
    var formSchema = mongoose.Schema({
        name: String,
        email: String,
        attending: Boolean,
        guests: Number
    });

    var Response = mongoose.model('Response', formSchema);
    
    
})

app.post('/reply', function (req, res) {
    let instance = new Response({ 
        name: req.name,
        email: req.email,
        attending: req.attending,
        guests: req.guests   
    });

    instance.save(function (err, instance) {
        if (err) return console.error(err);
    })

    // res.send()
}); 

app.get('/', function (req, res) {
    res.render('index', {title: "RSVP"});
})