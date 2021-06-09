import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Login from './views/Login.vue'
import User from './views/user/User.vue'
import UserProducts from './views/user/UserProducts.vue'
import UserEdit from './views/user/UserEdit.vue'
import UserPurchases from './views/user/UserPurchases.vue'
import UserSales from './views/user/UserSales.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/produto/:id',
      name: 'produto',
      component: Product,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/usuario',
      component: User,
      children: [
        {
          path: '',
          name: 'usuario',
          component: UserProducts,
        },
        {
          path: 'editar',
          name: 'usuario-editar',
          component: UserEdit,
        },
        {
          path: 'compras',
          name: 'compras',
          component: UserPurchases,
        },
        {
          path: 'vendas',
          name: 'vendas',
          component: UserSales,
        },
      ]
    },
  ],
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  }
});
