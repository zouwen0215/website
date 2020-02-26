import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {path: '/',name: 'home',component: () => import('@/view/index')}
    	{path: '/detail',name: '查看详情',component: () => import('@/view/aboutus/detail')}, 
     {
			path: '/',
			name: '管理',
			component: () => import('@/view/index'),
		
			children: [
				{path: '/dashboard',name: '首页',component: () => import('@/view/home/homePage')}, 
				{path: '/frontDesk',name: "'薄'前台",component: () => import('@/view/product/frontDesk')}, 
				{path: '/middleground',name: "'厚'中台",component: () => import('@/view/product/middleground')}, 
				{path: '/background',name: "'强'后台",component: () => import('@/view/product/background')}, 

				{path: '/storesWisdom',name: '智慧门店解决方案',component: () => import('@/view/softsolution/storesWisdom')}, 
				{path: '/courtMiddle',name: '中台解决方案',component: () => import('@/view/softsolution/courtMiddle')}, 
				{path: '/chainSupply',name: '供应链解决方案',component: () => import('@/view/softsolution/chainSupply')}, 
				{path: '/dataBig',name: '大数据解决方案',component: () => import('@/view/softsolution/dataBig')}, 
				
				{path: '/aboutus',name: '关于我们',component: () => import('@/view/aboutus/aboutus')}, 
				{path: '/job',name: '招聘专栏',component: () => import('@/view/aboutus/job')}, 
				
			
			]
		},
  ]
})
