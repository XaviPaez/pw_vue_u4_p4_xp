<template>
  <div class="consultar">
    <h1>Consultar un estudiante</h1>
    <div class="ingresar">
      <button @click="consultarEstudiante">Consultar</button>

      <input
        class="inputCedula"
        v-model="cedula"
        type="text"
        placeholder="Ingrese el numero de cedula"
      />
    </div>
    <div class="nombre">
      <label for="">Nombre: </label>
      <input v-model="nombre" type="text" />
    </div>
    <div class="apellido">
      <label for="">Apellido: </label>
      <input v-model="apellido" type="text" />
    </div>

  </div>
</template>

<script>
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },

  methods: {
    async consultarEstudiante() {
      const n = await obtenerEstudianteFachada(this.cedula);
      this.nombre = n.nombre;
      this.apellido = n.apellido;
    },
  },
};
</script>

<style>
.consultar {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #38060e;
}
button {
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #132231;
  color: white;
  border: none;
  cursor: pointer;
}

.inputCedula {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

.datos-estudiante {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.campo {
  display: flex;
  align-items: center;
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
</style>