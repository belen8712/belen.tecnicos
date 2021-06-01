function mostrar()
{
    let info = {
         nombre:'Belen',
         apellido:'Molina',
         correo:{ gmail:'belenmolinavilla@gmail.com',
                  atlook:'belenmolinavilla@gmail.com'
                }
    }

    //este uso de comillas se llama templete string
    console.log(`
       Mi nombre: ${info.nombre}
       Mi apellido: ${info.apellido}
       correo: ${info.correo.atlook} 
    `) 
    
}       

function mostrar_elementos_arreglos()
{
    let valores = [44,10,8,9];
    console.log(valores[1]);
}
function mostrar_objetos()
{
   let arreglo_objetos=[ 
     {
       taller:`programacion1`,
       anio:`5to`,
       escuela:`cet 30`
     },
     {
       taller:`wed 2`,
       anio:`6to`,
       escuela:`cet 30`
     }
    ];
     let totalidad_fila = [];
      arreglo_objetos.forEach(objeto => {
     /*  console.log(`
        escuela: ${objeto.escuela}
        taller: ${objeto.taller}
        año: ${objeto.anio}
    `)*/
       let fila = `
        <tr>
           <td.${objeto.escuela}</td>
           <td.${objeto.taller}</td>
           <td.${objeto.anio}</td>
        </tr>
       `;
    totalidad_fila.push(fila);

   });

  document.querySelector("#tb_datos").innerHTML = totalidad_fila.join("");
}






