// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'//从nodemodules中获取
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Layout from './components/layout'
import IndexPage from './pages/index'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuex)


let router = new VueRouter({
	mode:'history',
	routes: [
	{
		path: './',
		component:IndexPage
	}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
