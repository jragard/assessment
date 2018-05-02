var mongoose = require('mongoose');
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