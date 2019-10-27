const express = require ('express');
const morgan = require('morgan');

//Initialize
const app= express();
const path = require('path')
var mysql= require ('mysql');

// Settings 
app.set('port', process.env.PORT || 3307 );
//app.engine()

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global Variables
app.use((req, res, next) => {
  next();
});

var con = mysql.createConnection({
  host:'localhost',
  port:'3306',//El de mi xampp
  user:'root',
  password:'', 
  database: 'proyector'

});

// Routes
app.use(require('./routes/'));
app.use(require('./routes/authentication.js'));
app.use(require('./routes/signin.js'));
app.use(require('./routes/olvcontra.js'));


// Public
app.use(express.static(path.join(__dirname,'public')));




  con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
  });


// Starting the server
  app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });

