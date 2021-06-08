 const cotizacion =  async () => {

    const respuesta =await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales");

    const datos =await respuesta.json();
    let total_costos = []
    datos.forEach(element => {
        let costo = `
               <tr>
                       <td>${element.casa.nombre}</td>
                       <td><span class="budge bg-warning text-dark">${element.casa.compra}</span></td>
                       <td><span class="budge bg-info text-dark">${element.casa.venta}</span</td>
              </tr>
                  
          `;   

          total_costos.push(costo);
     });
       document.querySelector("#i-cambio").innerHTML = total_costos.join("");

        
  
}

const boton = document.querySelector("#btn_cotizacion");
boton.addEventListener("click", cotizacion);