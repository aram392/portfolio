import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import 'animate.css';
import Hover from 'hover.css';
import Carousel3d from 'vue-carousel-3d';
import VueAnalytics from 'vue-analytics';

Vue.use(Carousel3d);
Vue.use(VueAnalytics, {
  id: 'G-HL7HGMDH6C',
});
Vue.config.productionTip = false;

new Vue({
  vuetify,
  Hover,

  render: (h) => h(App),
}).$mount('#app');
