import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{path:'/',redirect:"/home"},
		{path:'/home',component:()=>import('components/content/home.vue')},
		{path:'/car',component:()=>import('components/content/car.vue')},
		{path:'/list',component:()=>import('components/content/list.vue')},
		{path:'/profile',component:()=>import('components/content/profile.vue')}

	],
	mode:'history'
})

export default router