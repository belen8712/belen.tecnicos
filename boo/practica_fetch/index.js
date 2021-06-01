const obtener_foto =  async () => {

     const respuesta =await fetch("https://jsonplaceholder.typicode.com/photos?albumId=1");

     const datos =await respuesta.json();
     let total_columnas = []
     datos.forEach(element => {
         
   

        let columna = `
           <div class="col-lg-3">
                <div class="card">
                    <img src="${element.url}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <a href="#" class="btn btn-primary">compra</a>
                    </div>
                    
                </div>  

           </div>
       `;   

        total_columnas.push(columna);
     });

     document.querySelector("#r_fotos").innerHTML = total_columnas.join("");

     
     
 }

 const boton = document.querySelector("#btn_mostrar");
 boton.addEventListener("click", obtener_foto);