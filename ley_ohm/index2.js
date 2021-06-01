


/// cálculo TENSION 
const tencion = () => {                                             

     const d1 = document.querySelector("#inp-t").value;                     
     const d2= document.querySelector("#inp-r").value;
     const E = d1 * d2;
     document.querySelector("#inp-resultado").value = E;
     
 }
 
 const p_producto = document.querySelector("#botton-1");
 
 p_producto.addEventListener("click", tencion);
 
 //cálculo intencidad
 
 const intencidad = () => {
 
     const d3 = document.querySelector("#inp-t").value;
     const d4 = document.querySelector("#inp-r").value;
     const inten= d3 / d4;
     document.querySelector("#intensidad").value = intensity;
 
 }
 const d_dividir = document.querySelector("#int_intensidad");
 d_dividir.addEventListener("click", intensidad);
 
 //Cálculo Resistencia
 
 const Resistencia = () => {
 
     const te_c = document.querySelector("#inp-t").value;
     const in_t = document.querySelector("#inp-inte").value;
     const end = te_c / in_t;
     document.querySelector("#Resistencia").value = end;
 
 }
 
 const calculo_s = document.querySelector("#r_resistencia");
 btn_endu.addEventListener("click", Resistencia);



     
}

    