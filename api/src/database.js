const mysql = require('mysql')

 const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'apidb'
});

//aca se pone en marcha la conexion
db.connect(function(err){
    if(err){
        console.log(err)
        return;
    }else{
        console.log('la conexion fue exitosa')

    }
    
});


module.exports = db;