
const express = require ('express')

const enrutador = express.Router();

const db = require('../database')


    enrutador.get('/productos', (req,res) => {
    //vamos a realizar una consulta a la base, una query
      db.query('select * from producto', (err,rows) => {
        if(err)
        {
        
                console.log('algo susedio al realizar la consulta')
        }else{

           
            res.json(rows)
        
        }
        
      })

    })


    enrutador.get('/producto/:codigo', async (req,res) => {

        //capturamos el parametro
        const id = req.params.codigo;
        await db.query('select * from producto where id_producto = ?', [id], (err, rows) => {
            if (err){
                return console.log ('algo ocurrio ')

            }else{
                res.json(rows[0])
            }
        })
    })

    enrutador.delete('/producto/:codigo', async (req,res) => {
        const id= req.params.codigo;

       await db.query('delete from producto where id_producto  = ?',[id], (err,result) => {
           
           if (err){
           return console.log('algo ocurrio')
          
            }else{
               res.json('operacion exitosas')
            }
        })    
    
    })

    enrutador.post('/producto', async (req,res) => { 
        const unProducto = req.body;

        console.log(unProducto)

        await db.query('insert into producto set ?', [unProducto], (err,result) => {

         if (err) {
             return console.log('algo ocurrio')
         }else{
             
         res.json('se almaseno un productos en la base')
         }

        })


    });       
    
    

    //implementacion y creacion de ruta producto -update
    enrutador.put('/producto/:codigo', async (req,res) => {
     
    //primer paso: captura el codigo
    const id = req.params.codigo
    //segundo paso: captura el body, es decir, los datos del producto modificado
      const ProductoModificado = req.body;
        await db.query('update producto set ? where id_producto = ?', [ProductoModificado,id], (err,result) => {
        if(err){
          return console.log('algo ocurrio')
        }else{
            //console.log('operacion ecitosa!')
            res.json('operacion exitosa!')
        }
    })
   
    });
   

    






       module.exports = enrutador
