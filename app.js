//DEPENDENCIES
const express = require('express');
const passport = require('passport');
const config = require('./config/db');
const path = require('path');
const mongoose = require('mongoose');

//importing model
const Registration = require('./model/User');
//importing Routes
const registerRoute = require('./routes/registerRoute')

//INSTANTIATION
const app = express();


// Setting up db connections
mongoose.connect(config.database,{ useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function(){

console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function(err){
  console.error(err);
});

//CONFIGURATION
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


// MIDDLEWARE

//To parse URL encoded data
  app.use(express.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
  

  // Passport configuration middleware
app.use(passport.initialize());
// passport.use(Registration.createStrategy());


//Using routes
app.use('/', registerRoute)

// ROUTE
app.get('*', (req, res) =>{
    res.send('Not Found!, page not found');
});


app.listen(5000, () => console.log('listening to 5000'));