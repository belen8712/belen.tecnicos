const mispropiedades = {
data() {
    return{
     descripcion:"",
     tiempo:"",
     lista_tareas:[]

    }
},

methods: {
    guardarTarea(){
      const nuevaTarea = {
          descripcion:this.descripcion,
          tiempo:this.tiempo
      }
    if("tareas" in localStorage){
       this.lista_tareas = JSON.parse(localStorage-getItem("tareas"));
       this.lista_tareas.push(nueva.Tarea);
       localStorage.setItem("tareas",this.lista_tareas)

    }else {
      this.lista_tareas.push(nuevaTarea);
      localStorage.setItem("tareas",JSON.stringify(this.lista_tareas))
    
      } 
      this.descripcion = "";
      this.tiempo = "";


    },
    listarTareas(){
        if("Tareas" in localStorage) 
       {
          this.lista_Tareas = JSON.parse(localStorage.getItem("tareas"));
       }else {

        this.lista_Tareas =  [];
       }


    },
    eliminarTareas(index){
      this.lista_Tareas.setItem("tareas",JSON.stringify(this.lista_Tareas));


    },
    eliminar(){
        localStorage.removeItem("tareas");
        this-lista_tareas();
    }

      },
    



mounted() {

    this.listarTareas();
  }
}

Vue.createApp(mispropiedades).mount("#App");