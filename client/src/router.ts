import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
// import store from "@/store";

import Dashboard from '@/views/Dashboard.vue'
import Forms from '@/views/Forms.vue'
import Tables from '@/views/Tables.vue'
import UIElements from '@/views/UIElements.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Modal from '@/views/Modal.vue'
import Card from '@/views/Card.vue'
import Blank from '@/views/Blank.vue'
import Home from "@/views/Home.vue";
import Biblio from "@/views/Biblio.vue";
import Calendar from "@/views/Calendar.vue";
import Actuality from "@/views/Actuality.vue";
import ActualitiesList from "@/views/Actuality/ActualitiesList.vue";
import ActualityAdd from "@/views/Actuality/ActualityAdd.vue";
import NotFoundPage from "@/views/[...all].vue";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { 
      layout: 'frontOffice',
      title: "Accueil",
      requiredAuth: false 
    },
  },
  {
    path: "/actuality",
    name: "Actuality",
    component: Actuality,
    meta: { 
      layout: 'frontOffice',
      title: "Actualités",
      requiredAuth: false 
    },
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar,
    meta: { 
      layout: 'frontOffice',
      title: "Calendrier",
      requiredAuth: false 
    },
  },
  {
    path: "/biblio",
    name: "Biblio",
    component: Biblio,
    meta: { 
      layout: 'frontOffice',
      title: "Bibliothèque",
      requiredAuth: false 
    },
  },
  {
    path: '/office',
    name: 'Login',
    component: Login,
    meta: { 
      layout: 'empty',
      title: "Connexion",
      requiredAuth: false 
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { 
      layout: 'empty',
      title: "Inscription",
      requiredAuth: false 
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { 
      title: "Tableau de bord",
      requiredAuth: true 
    },
  },
  {
    path: '/actualities-list',
    name: 'ActualitiesList',
    component: ActualitiesList,
    meta: { 
      title: "Office - Actualités",
      requiredAuth: true 
    },
  },
  {
    path: '/add-actuality',
    name: 'ActualityAdd',
    component: ActualityAdd,
    meta: { 
      title: "Office - Actualités",
      requiredAuth: true 
    },
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms,
    meta: { 
      title: "Tableau de bord",
      requiredAuth: true 
    },
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Card,
    meta: { 
      title: "Tableau de bord",
      requiredAuth: true 
    },
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
    meta: { 
      title: "Tableau de bord",
      requiredAuth: true 
    },
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: UIElements,
    meta: { 
      title: "Tableau de bord",
      requiredAuth: true 
    },
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
    meta: { 
      title: "Tableau de bord",
      requiredAuth: true 
    },
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
    meta: { 
      title: "Tableau de bord",
      requiredAuth: true 
    },
  },
  { 
    path: "/:pathMatch(.*)*", 
    name: "errorPage", 
    component: NotFoundPage, 
    meta: { 
      layout: 'empty', 
      title: 'Erreur 404', 
      requiredAuth: false 
    },
  },
]

const projectName = "Waama";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    // document.getElementById('app').scrollIntoView({behavior:'smooth'});
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

router.afterEach((to) => {
  document.title = projectName + " - " + to.meta.title
})

router.beforeEach(async (to, from, next) => {
  // let auth = store.getters["auth/isTokenActive"];
  const loggedIn = localStorage.getItem('user');
  if (loggedIn && !to.meta.requiredAuth) {
    return next({ name: "dashboard" });
  } else if (!loggedIn && to.meta.requiredAuth) {
    return next({ path: "/" });
  } 

  return next();
});

export default router
