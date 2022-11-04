import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import ContactManager from '../views/ContactManager.vue'
import AddContact from '../views/AddContact.vue'
import EditContact from '../views/EditContact.vue'
import ViewContact from '../views/ViewContact.vue'
import PageNotFound from '../views/PageNotFound.vue'
  
Vue.use(VueRouter)
  
const routes = [
    {
        path: '/',
        name: 'Home',
        redirect : '/contact',
        component: Home
    },
    {
        path: '/contact',
        name: 'ContactManager',
        component: ContactManager
    },
    {
        path: '/contact/add',
        name: 'AddContact',
        component: AddContact
    },
    {
        path: '/contact/edit/:contactId',
        name: 'EditContact',
        component: EditContact
    },
    {
        path: '/contact/view/:contactId',
        name: 'ViewContact',
        component: ViewContact
    },
    {
        path: '**',
        name: 'PageNotFound',
        component: PageNotFound
    },
]
  
// Create Vue Router Object
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router