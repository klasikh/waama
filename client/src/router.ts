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
import Event from "@/views/Event.vue";

import Actuality from "@/views/Actuality.vue";
import ActualitiesList from "@/views/Actuality/ActualitiesList.vue";
import ActualityAdd from "@/views/Actuality/ActualityAdd.vue";
import ActualityOne from "@/views/Actuality/ActualityOne.vue";
import ActualityEdit from "@/views/Actuality/ActualityEdit.vue";

import EventsList from "@/views/Event/EventsList.vue";
import EventAdd from "@/views/Event/EventAdd.vue";
import EventOne from "@/views/Event/EventOne.vue";
import EventFrontShow from "@/views/Event/EventFrontShow.vue";
import EventEdit from "@/views/Event/EventEdit.vue";

import CadresList from "@/views/Cadre/CadresList.vue";
import CadreAdd from "@/views/Cadre/CadreAdd.vue";
import CadreOne from "@/views/Cadre/CadreOne.vue";
import CadreEdit from "@/views/Cadre/CadreEdit.vue";

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
    path: "/events",
    name: "Event",
    component: Event,
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
      title: "Office - Ajout d'actualité",
      requiredAuth: true 
    },
  },
  {
    path: '/get-actuality/:id',
    name: 'ActualityOne',
    component: ActualityOne,
    props: true,
    meta: { 
      title: "Office - Affichage d'une actualité",
      requiredAuth: true 
    },
  },
  {
    path: '/edit-actuality/:id',
    name: 'ActualityEdit',
    component: ActualityEdit,
    props: true,
    meta: { 
      title: "Office - Edition d'actualité",
      requiredAuth: true 
    },
  },
  {
    path: '/events-list',
    name: 'EventsList',
    component: EventsList,
    meta: { 
      title: "Office - Evénements",
      requiredAuth: true 
    },
  },
  {
    path: '/add-event',
    name: 'EventAdd',
    component: EventAdd,
    meta: { 
      title: "Office - Ajout d'un événement",
      requiredAuth: true 
    },
  },
  {
    path: '/get-event/:id',
    name: 'EventOne',
    component: EventOne,
    props: true,
    meta: { 
      title: "Office - Affichage d'une événement",
      requiredAuth: true 
    },
  },
  {
    path: '/edit-event/:id',
    name: 'EventEdit',
    component: EventEdit,
    props: true,
    meta: { 
      title: "Office - Edition d'un événement",
      requiredAuth: true 
    },
  },
  {
    path: '/event/:id',
    name: 'EventFrontShow',
    component: EventFrontShow,
    props: true,
    meta: { 
      title: "Office - Affichage d'une événement",
      requiredAuth: true 
    },
  },
  {
    path: '/cadres-list',
    name: 'CadresList',
    component: CadresList,
    meta: { 
      title: "Office - Cadres",
      requiredAuth: true 
    },
  },
  {
    path: '/add-cadre',
    name: 'CadreAdd',
    component: CadreAdd,
    meta: { 
      title: "Office - Ajout d'un cadre",
      requiredAuth: true 
    },
  },
  {
    path: '/get-cadre/:id',
    name: 'CadreOne',
    component: CadreOne,
    props: true,
    meta: { 
      title: "Office - Affichage d'un cadre",
      requiredAuth: true 
    },
  },
  {
    path: '/edit-cadre/:id',
    name: 'CadreEdit',
    component: CadreEdit,
    props: true,
    meta: { 
      title: "Office - Edition d'un cadre",
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
