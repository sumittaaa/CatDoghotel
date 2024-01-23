import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '../views/about.vue'
import Rejister from '../views/Rejister.vue'
import package from '../views/package .vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path:'/about',
      name:'about',
      component:about
    },
    {
      path:'/Rejister',
      name:'about',
      component:Rejister
    }
    {
      path:'/package',
      name:'package',
      component:Rejister
    }
  
 
  ]
})

export default router
