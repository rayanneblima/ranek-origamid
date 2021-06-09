import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from '@/components/Loading.vue'

Vue.config.productionTip = false

Vue.component('Loading', Loading)

Vue.filter('numberPrice', value => {
  value = Number(value)
  if(!isNaN(value))
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  return ''
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
