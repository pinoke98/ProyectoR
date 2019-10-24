const express = require('express');
const router = express.Router();
const con = require('../database');
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'proyectorcol1@gmail.com',
    pass: 'pinocoropablo'
  }
});

var mailOptions = {
  from: 'proyectorcol1@gmail.com',
  to: 'jpmedina2000@hotmail.com',
  subject: 'HOLA ',
  text: 'prueba asasdasadasdad'
};



    router.get('/enviarcorreo/:correo', function(req, res) {

        var correo = req.params.correo;
        var date = new Date().getDate(); //devuelve de 1-31
    var codigo = Math.floor((Math.random() * 9999) + 1000);;
    mailOptions.text = `Tu código es ${codigo}` ;
    mailOptions.to = `${correo}`;

        con.query(`select * from codigoactivacion where Email= "${correo}" limit 1`, function(error, rows, fields){
              if(error) console.log(error );
      
              else{
                    if (rows.length==0){ // no existe el correo
                        res.send("-1");
                    } else{

                        con.query(`update codigoactivacion set Codigo = "${codigo}", Fecha = "${date}" 
                        where Email = "${correo}"
                        `, function(error, rows, fields){
                            if(error) console.log(error ); 
                              else{ 
                                console.log("Se Creó un nuevo codigo de activacion ");
                              }
                        });
                    
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
                  
                  res.send(rows);
                }
              }
        });
        
      });


  router.get('/obtenercodigocorreo/:correo', function(req, res) {

    var correo = req.params.correo;
  // cuidado con las comillas que son diferenres ``, ayuda poder agregar variables
    con.query(`select * from codigoactivacion where Email= "${correo}" limit 1`, function(error, rows, fields){
          if(error) console.log(error );
  
          else{
              console.log(correo);
              console.log(rows);
              res.send(rows);
          }
    });
    
  });

  router.get('/cambiarcontrasena/:correo/:pass', function(req, res) {

    var pass = req.params.pass;
    var correo = req.params.correo;
  // cuidado con las comillas que son diferenres ``, ayuda poder agregar variables
    con.query(`
    update usuarios set Contraseña = "${pass}" where Email="${correo}"
    `, function(error, rows, fields){
          if(error) console.log(error );
  
          else{
              console.log(correo);
              console.log(rows);
              res.send(rows);
          }
    });
    
  });


  module.exports = router;