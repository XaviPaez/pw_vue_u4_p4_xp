<template>

  <div class="ingresar">
        <h1>Ingresar un estudiante</h1>
        <div class="cedula">
            <label for="">Cedula</label>
            <input v-model="cedula" type="text"
             placeholder="Ingrese el numero de cedula" />
        </div>
        <div class="nombre">
            <label for="">Nombre</label>
            <input v-model="nombre" type="text"
             placeholder="Ingrese el nombre" />
        </div>
        <div class="apellido">
            <label for="">Apellido</label>
            <input v-model="apellido" type="text"
             placeholder="Ingrese el apellido" />
        </div>
    
    </div>
    <button @click="guardarEstudiante">Guardar</button>

</template>


<script>

import {ingresarEstudianteFachada} from "../helpers/EstudianteCliente.js"

export default {
 data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,

    };
  },

    methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "Pichincha",

      };

      await ingresarEstudianteFachada(data);
    },
  },
}
</script>

<style>
.ingresar {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

h1 {
    color: #38060e;
  font-size: 24px;
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