import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contato from '../views/Contato.vue'
import Cursos from '../views/Cursos.vue'
import Curso from '../views/Curso.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contato",
    name: "contato",
    component: Contato,
  },
  {
    path: "/cursos",
    name: "cursos",
    component: Cursos,
  },
  {
    path: "/curso/:curso",
    name: "curso",
    component: Curso,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
