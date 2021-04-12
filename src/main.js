import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'animate.css'
import Hover from 'hover.css';
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);
Vue.config.productionTip = false

new Vue({
  vuetify,
  Hover,
  
  render: h => h(App)
}).$mount('#app')
