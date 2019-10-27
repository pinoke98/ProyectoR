const express = require('express');
const router = express.Router();
const con = require('../database');


router.get('/obtenerusuario/:user', function(req, res) {



    var usuario = req.params.user;
  // cuidado con las comillas que son diferenres ``, ayuda poder agregar variables
    con.query(`select * from usuarios where Usuario= "${usuario}" limit 1`, function(error, rows, fields){
          if(error) console.log(error );
  
          else{
              console.log(usuario);
              res.send(rows);
          }
    });

  });

module.exports = router;