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
  to: '',
  subject: 'HOLA ',
  text: 'prueba asasdasadasdad'
};


router.post('/nuevousuario', function(req, res){
    const iusuario=req.body.iusuario ;
    const nombre=req.body.nombre;
    const apellido=req.body.apellido;
    const email=req.body.email;
    const contraseña=req.body.contraseña;
    const genero=req.body.genero;
    const ubicacion=req.body.ubicacion;

    var date = new Date().getDate(); //devuelve de 1-31
    var codigo = Math.floor((Math.random() * 9999) + 1000);;
    mailOptions.text = `Tu código es ${codigo}` ;
    mailOptions.to = `${email}` ;

    con.query(`
    select * from usuarios  where Usuario ="${iusuario}"  or Email= "${email}"
    `, function(error, rows, fields){
        if(error) console.log(error ); 
          else{ 
            if (rows.length!=0){ // llego lleno,  encontro usuario o correo repetido
              res.send("-1");
            } else {
              con.query(`
              insert into usuarios (Usuario,Contraseña,Nombre, Apellido, Email, Genero, Ubicacion) 
              values ("${iusuario}","${contraseña}","${nombre}","${apellido}","${email}","${genero}","${ubicacion}")
              `, function(error, rows, fields){
                  if(error) console.log(error ); 
                    else{ 
                      console.log("Se Creó un nuevo usuario");
                    }
              });
          
              con.query(`
              insert into codigoactivacion (Usuario, Email, Codigo, Fecha) 
              values ("${iusuario}","${email}","${codigo}","${date}")
              `, function(error, rows, fields){
                  if(error) console.log(error ); 
                    else{ 
                      console.log("Se Creó un nuevo codigo de activacion ");
                    }
              });
               console.log(mailOptions.to);
               console.log(mailOptions.text);
              transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                  } else {
                    console.log('Email sent: ' + info.response);
                  }
                });
                res.send("0");
            }
          }
    });

    
  });


  router.get('/obtenercodigo/:user', function(req, res) {

    var usuario = req.params.user;
  // cuidado con las comillas que son diferenres ``, ayuda poder agregar variables
    con.query(`select * from codigoactivacion where Usuario= "${usuario}" limit 1`, function(error, rows, fields){
          if(error) console.log(error );
  
          else{
              console.log(usuario);
              console.log(rows);
              res.send(rows);

          }
    });
    
  });


  module.exports = router;