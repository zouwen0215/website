import router from '../router'
import store from '../store'
import Vue from 'vue'

//鉴权路由拦截TokenKey(导航守卫)
router.beforeEach((to, from, next) => {
	window.scrollTo(0,0);
	if(to.path == '/'){
		next('/dashboard')
	}else{
		next()
	}
	
});