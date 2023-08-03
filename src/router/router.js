import {createRouter, createWebHashHistory} from 'vue-router'
const routes = [
    {path: '/',  
    component: () => import('../modules/estudiante/pages/BienvenidaPage')}, 
    {path: '/consultar', 
    component: () => import('../modules/estudiante/pages/ConsultarEstudiante.vue')}, 
    {path: '/ingresar', 
    component: () => import('../modules/estudiante/pages/GuardarEstudiante.vue')}, 
    {path: '/actualizar', 
    component: () => import('../modules/estudiante/pages/ActualizarEstudiante.vue')}, 
    {path: '/eliminar', 
    component: () => import('../modules/estudiante/pages/EliminarEstudiante.vue')}, 
    {path: '/:pathMatch(.*)*', 
    component: () => import('../modules/estudiante/pages/NoEncontradoPage.vue')}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router