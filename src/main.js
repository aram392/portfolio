import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'animate.css'
import Hover from 'hover.css';

Vue.config.productionTip = false

new Vue({
  vuetify,
  Hover,
  
  render: h => h(App)
}).$mount('#app')
