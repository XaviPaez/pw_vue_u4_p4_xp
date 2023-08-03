<template>
    <div class="eliminar">
        <h1>Eliminar un estudiante</h1>
        <div class="id">
            <label for="">Id</label>
            <input v-model="id" type="text" 
             placeholder="Ingrese el id"/>
        </div>
    </div>
    <button @click="eliminarEstudiante">Eliminar</button>
    <label v-if="nombre" for="">"Se elimino el estudiante: " {{this.nombre}} </label>


</template>

 

<script>

import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente.js";


export default {

  data() {

    return {

      id: null,
      nombre:null,
   
    };

  },

  methods:{

    async eliminarEstudiante(){

       const data= await eliminarEstudianteFachada(this.id);

       this.nombre= data.nombre

    },


  }

};

</script>

 

<style>


.eliminar {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  color: #38060e;
  margin-bottom: 20px;
}


.campo {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

label {
  width: 120px;
  font-weight: bold;
  margin-right: 10px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
}

button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #132231;
  color: white;
  border: none;
  cursor: pointer;
}

</style>