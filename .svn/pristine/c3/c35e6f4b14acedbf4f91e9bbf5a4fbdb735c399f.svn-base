// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import 'babel-polyfill'
import router from '@/router'
import Vuex from 'vuex'
import store from './store';
import routerBefore from './utils/beforeEach.js'
import * as filters from '@/utils/filters';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'swiper/dist/css/swiper.css';
import "@/assets/css/public.css";
import "@/assets/css/global.css";

import  VueResource  from 'vue-resource'
Vue.use(VueResource) 
Vue.use(ElementUI);
Vue.config.productionTip = false;


Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
