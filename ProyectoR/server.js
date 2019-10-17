const express= require ('express');
const app= express();
var mysql= require ('mysql');

// Settings 
app.set('port', process.env.PORT || 4646);
//Middleware
app.use(express.json());

var con = mysql.createConnection({
    host:'localhost',
    port:'3306',//El de mi xampp
    user:'root',
    password:'', 
    database: 'proyector'

});

  con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
  });


  //================================================================//
  //================================================================//
  //================================================================//
  //================================================================//
// Aqui van las rutas de la peticiones fetch 

// enviar solo un usuario por metodo get
app.get('/obtenerusuario/:user', function(req, res){
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

  
  //================================================================//
  //================================================================//
  //================================================================//
  //================================================================//
  //================================================================//




  app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });

