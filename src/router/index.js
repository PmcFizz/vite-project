import { createRouter, createWebHashHistory } from 'vue-router'

const router = new createRouter({
	history:createWebHashHistory(),
	routes:[
		{
			path:'/',
			redirect:'/home'
		},
		{
			path:'/home',
			component:() => import('../views/Home.vue')
		},
    {
			path:'/user',
			component:() => import('../views/Users.vue')
		},
	]
})

router.beforeEach((to,from,next) => {
	console.log(to,from,111);
	next();
})

export default router;
