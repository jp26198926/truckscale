
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
let routes = [
	{
		name: 'main',
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			
			{ 
				path: '/(home)?', 
				name: 'home' , 
				component: () => import('pages/home/home.vue'),
				props: true
			},
			//Dashboard routes


//users routes
			{ 
				path: '/users/', 
				name: 'userslist', 
				component: () => import('pages/users/list.vue'), 
				props: true
			},
			{ 
				path: '/users/(list|index)/:fieldName?/:fieldValue?', 
				name: 'userslistfilter', 
				component: () => import('pages/users/list.vue'), 
				props: true
			},
	
			{ 
				path: '/users/view/:id', 
				name: 'usersview', 
				component: () => import('pages/users/view.vue'), 
				props: true
			},
	
			{ 
				path: '/users/add', 
				name: 'usersadd', 
				component: () => import('pages/users/add.vue'), 
				props: true
			},
	
			{ 
				path: '/users/edit/:id', 
				name: 'usersedit', 
				component: () => import('pages/users/edit.vue'), 
				props: true
			},
		

//vessels routes
			{ 
				path: '/vessels/', 
				name: 'vesselslist', 
				component: () => import('pages/vessels/list.vue'), 
				props: true
			},
			{ 
				path: '/vessels/(list|index)/:fieldName?/:fieldValue?', 
				name: 'vesselslistfilter', 
				component: () => import('pages/vessels/list.vue'), 
				props: true
			},
	
			{ 
				path: '/vessels/view/:id', 
				name: 'vesselsview', 
				component: () => import('pages/vessels/view.vue'), 
				props: true
			},
	
			{ 
				path: '/vessels/add', 
				name: 'vesselsadd', 
				component: () => import('pages/vessels/add.vue'), 
				props: true
			},
	
			{ 
				path: '/vessels/edit/:id', 
				name: 'vesselsedit', 
				component: () => import('pages/vessels/edit.vue'), 
				props: true
			},
		

			
			
			
			{ 
				path:  '/error/forbidden', 
				name: 'forbidden', 
				component: () => import('pages/errors/forbidden.vue'),
				props: true
			},
			{ 
				path: '/error/notfound', 
				name: 'notfound',
				component: () => import('pages/errors/pagenotfound.vue'),
				props: true
			}
		]
	},
];


/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default async function ({ store, ssrContext }) {
	let mainRoute = routes.find(x => x.name = "main");

	

	// Always leave this as last one
	if (process.env.MODE !== 'ssr') {
		mainRoute.children.push({path: '*', component: () => import('pages/errors/pagenotfound.vue')});
	}

	const Router = new VueRouter({
		scrollBehavior: () => ({ x: 0, y: 0 }),
		routes,
		// Leave these as they are and change in quasar.conf.js instead!
		// quasar.conf.js -> build -> vueRouterMode
		// quasar.conf.js -> build -> publicPath
		mode: process.env.VUE_ROUTER_MODE,
		base: process.env.VUE_ROUTER_BASE
	});
	return Router
}
