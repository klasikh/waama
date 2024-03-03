// @ts-ignore
/* eslint-disable */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import store from "./store";
import { FontAwesomeIcon } from '@/plugins/font-awesome'

import DashboardLayout from '@/components/DashboardLayout.vue'
import EmptyLayout from '@/components/EmptyLayout.vue'
import FrontOfficeLayout from '@/components/FrontOfficeLayout.vue'

const app = createApp(App)

app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)
app.component('FrontOfficeLayout', FrontOfficeLayout)

app.use(router)
app.use(store)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
