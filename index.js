const mongoose = require('mongoose');

const express = require('express');

const port = 3000;
const app = express();
// const mongoose = require('mongoose');
const pug= require ('pug');
app.use(express.static('public'));
app.set('view engine', 'pug');
app.use(express.urlencoded({extended: false}));

const formSchema = mongoose.Schema({
    name: String,
    email: String,
    attending: Boolean,
    guests: Number
});

const Response = mongoose.model('Response', formSchema);

app.get('/', function(req, res) {

    res.render('index');
});


app.post('/reply', function (req, res) {
    // console.log(req.body);
    const instance = new Response(req.body);


    // Callbacks 

    // instance.save(function (err, instance) {
    //     if (err) res.send(err);
    //     res.send(`
    //     <h1>Thank your for your response!</h1>
    //     <p>Click here to see current <a href="/guests">/guests</a> </p>
    //   `);
    // })

    // Promises

    instance.save()
        .then(instance => res.send(`
            <h1>Thank your for your response!</h1>
            <p>Click here to see current <a href="/guests">/guests</a> </p>
        `)).catch(err => res.send(err))

       
});
    


app.get('/guests', function (req, res)  {
    // if else for attending/ not attending?
    Response.find( function (err, people) {
    
    res.render("guests", {people});
   
    // document.write(people[i].name + "happily confirmed!"); 
    
   
});
});


app.listen(port, () => {
    mongoose.connect('mongodb://localhost/rsvp');
});




   
    
    
