import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Admin from "../views/Admin";
import Post from "../views/Post";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Admin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/post/:id",
    component: Post,
    name: "Post",
  },
  {
    path: "/signin",
    component: Signin,
    name: "Signin",
  },
  {
    path: "/signup",
    component: Signup,
    name: "Signup",
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
