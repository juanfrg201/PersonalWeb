import { createRouter, createWebHashHistory } from 'vue-router'

import DashboardIndex from '../views/dashboard/Index'
import PersonalProyectShow from '../views/personal_proyect/Show'

const routes = [
  {
    path: '/',
    name: 'index',
    component: DashboardIndex
  },
  {
    path: '/personal_proyect/show',
    name: 'personal_proyect_show',
    component: PersonalProyectShow
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
