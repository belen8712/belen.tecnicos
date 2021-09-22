const mispropiedades = {

   data(){
      return {
        
        nombre:'',
        apellido:'',
        dni:null,
        lista_Empleados:[]

      }

   },

   methods: {
     guardarEmpleado()  {
       
       let unEmpleado = {
           nombre:this.nombre,
           apellido:this.apellido,
           dni:this.dni

         }
        
      this.lista_Empleados.push(unEmpleado);

      this.nombre= ''; this.apellido = ''; this.dni = null;
      
      },
      eliminarEmpleado(index)
      {
          this.lista_Empleados.splice(index,1)
      }


   },

   mounted() {

   }




}
Vue.createApp(mispropiedades).mount("#app");