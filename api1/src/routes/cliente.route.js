
const express = require ('express')

const enrutador = express.Router();

const db = require('../database')


    enrutador.get('/clientes', (req,res) => {
    //vamos a realizar una consulta a la base, una query
      db.query('select * from cliente', (err,rows) => {
        if(err)
        {
        
                console.log('algo susedio al realizar la consulta')
        }else{

           
            res.json(rows)
        
        }
        
      })

    })


    enrutador.get('/cliente/:codigo', async (req,res) => {

        //capturamos el parametro
        const id = req.params.codigo;
        await db.query('select * from cliente where id_cliente = ?', [id], (err,rows) => {
            if(err){
                return console.log ('algo ocurrio ')

            }else{
                res.json(rows[0])
            }
        })
    })

    enrutador.delete('/cliente/:codigo', async (req,res) => {
        const id= req.params.codigo;

       await db.query('delete from cliente where id_cliente  = ?',[id], (err,result) => {
           
           if (err){
           return console.log('algo ocurrio')
          
            }else{
               res.json('operacion exitosas')
            }
        })    
    
    })

    enrutador.post('/cliente',async (req,res) => { 
        const unCliente = req.body;

        await db.query('insert into cliente set ?', [unCliente], (err,result) => {

         if (err) {
             return console.log('algo ocurrio')
         }else{
             
         res.json('se almaseno un cliente en la base')
         }

        })


    });       
    
    

    //implementacion y creacion de ruta cliente -update
    enrutador.put('/cliente/:codigo', async (req,res) => {
     
    //primer paso: captura el codigo
    const id = req.params.codigo
    //segundo paso: captura el body, es decir, los datos del cliente modificado
      const clienteModificado = req.body;
        await db.query('update cliente set ? where id_cliente = ?', [clienteModificado,id], (err,result) => {
        if(err){
          return console.log('algo ocurrio')
        }else{
            //console.log('operacion ecitosa!')
            res.json('operacion exitosa!')
        }
    })
   
    });
   

    






       module.exports = enrutador