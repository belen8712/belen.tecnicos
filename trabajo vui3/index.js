const mispropiedades = {

    data(){
       return {
         
         titulo:'',
         urldelaimagen:'',
         guardarurl:[]
 
       }
 
    },
 
    methods: {
      guardarurl()  {
        
        let unUrl = {
            titulo:this.titulo,
            urldelaimagen:this.urldelaimagen,
            
 
          }
         
       this.guardarurl.push(unUrl);
 
       this.titulo= ''; this.urldelaimagen = ''; this.dni = null;
       
       },
       eliminarEmpleado(index)
       {
           this.guardarurl.splice(index,1)
       }
 
 
    },
 
    mounted() {
 
    }
 
 
 
 
 }
 Vue.createApp(mispropiedades).mount("#app");