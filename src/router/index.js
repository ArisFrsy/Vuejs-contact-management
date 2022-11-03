import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import ContactForm from '../views/ContactForm.vue'
  
Vue.use(VueRouter)
  
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ContactForm',
        name: 'ContactForm',
        component: ContactForm
    },
    //  Added our new route file named profile.vue
    {
        path: '/about',
        name: 'About',
        // The route level code-splitting
        // this generates a separate chunk 
        // (about.[hash].js) for this route
        // which is lazy-loaded when the
        // route is visited.
        component:()=> import(
            /* webpackChunkName: "about" */ 
            '../views/AboutView.vue'
        )
    },
]
  
// Create Vue Router Object
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router