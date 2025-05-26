import { createRouter, createWebHashHistory } from 'vue-router'
import UserLogin from '../Login.vue';
import SignUp from '../SignUp.vue';
import LogOut from '../LogOut.vue';
const routes = [
  {
    path: '/',
    name: 'Login',
    component: UserLogin
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/logout',
    name: 'LogOut',
    component: LogOut
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
