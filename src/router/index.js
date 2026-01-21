import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home'
import Auth from '../views/Auth'
import Applications from '../views/Applications'
import Request from '../views/Request'
import Help from '../views/Help'
import NotFound from '../views/NotFound'
const routes = [
  {
    path: '/',
    component: Home,
    meta:{
      layot: 'main',
      auth: true
    }
  },
  {
    path: '/auth',
    component: Auth,
    meta:{
      layot: 'login',
      auth: false
    }
  },
  {
    path: '/applications',
    component: Applications,
    meta:{
      layot: 'main',
      auth: true
    }
  },
   {
    path: '/request/:id',
    component: Request,
    meta:{
      layot: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    component: Help,
    meta:{
      layot: 'main',
      auth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta:{
      layot: 'login',
      auth: false
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  const requiredAuth = to.meta.auth
  if (requiredAuth && store.getters['auth/isAuth']) {
    next()
  } else if(requiredAuth && !store.getters['auth/isAuth']){
    next('/auth?message=auth')
  }else{
    next()
  }
})

export default router
