<template>
    <div class="router">

        <router-link to="/">Bienvenidos</router-link>
        <router-link to="/consultar">Consulte un estudiante</router-link>
        <router-link to="/ingresar">Ingrese un estudiante</router-link>
        <router-link to="/actualizar">Actualice un estudiante</router-link>
        <router-link to="/eliminar">Elimine un estudiante</router-link>

    </div>
</template>

<script>
export default {
}
</script>

<style>
div{
    padding: 0 30px;
}
div a{
    font-weight: bold;
    color: #800101;
    margin: 0 10px;
    font-size: 20px;
}
a:hover{
    color: #d8d8d8;
}

</style>