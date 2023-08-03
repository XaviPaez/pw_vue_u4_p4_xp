<template>
    <div class="actualizar">
        <h1>Actualizar un estudiante</h1>
        <div class="id">
            <label for="">Id</label>
            <input v-model="id" type="text" 
             placeholder="Ingrese un id"/>
        </div>
        <div class="cedula">
            <label for="">Cedula</label>
            <input v-model="cedula" type="text" 
             placeholder="Ingrese el numero de cedula"/>
        </div>
        <div class="nombre">
            <label for="">Nombre</label>
            <input v-model="nombre" type="text" 
             placeholder="Ingrese el nombre"/>
        </div>
        <div class="apellido">
            <label for="">Apellido</label>
            <input v-model="apellido" type="text"
             placeholder="Ingrese el apellido" />
        </div>
    </div>
    <button @click="actualizarEstudiante">Actualizar</button>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      id: null,
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },

  methods: {
    async actualizarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "Pichincha",
      };

      await actualizarEstudianteFachada(data, this.id);
    },
  },
};
</script>

<style>

.actualizar {
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