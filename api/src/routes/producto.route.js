
const express = require ('express')

const enrutador = express.Router();

const db = require('../database')


    enrutador.get('/producto', (req,res) => {
    //vamos a realisar una consulta a la base, una query
      db.query('select * from producto', (err,rows) => {
        if(err){
            res.json(rows);
        }else{
             res.json('error al traer los datos de la tabla producto')
        }
        
        })

    })


    enrutador.get('/producto/:codigo', async (req,res) => {

        //capturamos el parametro
        const id = req.params.codigo;
        await db.query('select * from producto where id_producto = ?', [id], (err,rows) => {
            if(err){
                return console.log ('algo ocurrio ')

            }else{
                res.json(rows[0])
            }
        })


    enrutador.delete('/producto/:codigo', async (req,res) => {
        const id= req.params.codigo;

       await db.query('delete from producto id_producto=?',[id]);
           res.json("se eliminara un producto")
           if (err){
           return console.log('algo ocurrio')
          
            }else{
               res.json('operacion exitosas')
            }
           
    
    })

    enrutador.post('/producto', async (req,res) => { 
        const unCliente = req.body;

        await db.query('insert into producto set ?',[unCliente]),
        res.json('se almaseno un producto en la base')
    
    });       
    
    

    //implementacion y creacion de ruta cliente -update
    enrutador.put('/producto/:codigo', async (req,res) => {
     res.json('en esta ruta se actualizara un cliente');
    
    //primer paso: captura el codigo
    const id = req.params.codigo
    //segundo paso: captura el body, es decir, los datos del cliente modificado
      const clienteModificado = req.body;
        await db.query('update producto set ? where id_producto = ?', [productoModificado,id], (err,result) => {
        if(err){
          return console.log("algo ocurrio,")
        }else{
            //console.log('operacion extosa!')
            res.json('operacion exitosa!')
        }
    })
   
    });
   

    })






       module.exports = enrutador