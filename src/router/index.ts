import { createRouter, createWebHistory } from 'vue-router'
import TabsView from '../views/tabs/TabsView.vue'
import HomeView from '../views/tabs/home/HomeView.vue'
import MineView from '../views/tabs/mine/MineView.vue'
import OrderView from '../views/tabs/order/OrderView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsView,
      children: [
        {name: 'home', path:'/home',component: HomeView},
        {name: 'order', path:'/order',component: OrderView},
        {name: 'mine', path:'/mine',component: MineView}
      ]
    }
  ]
})

export default router