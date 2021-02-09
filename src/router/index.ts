import Vue from 'vue';
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			requiresAuth: false,
		},
	},
	{
		path: '/form',
		name: 'Form',
		component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
		beforeEnter(to: Route, from: Route, next: NavigationGuardNext) {
			if (from.path === '/success') {
				next('/');
			} else { next(); }
		},
	},
	{
		path: '/success',
		name: 'Success',
		component: () => import (/*webpackChunkName: "success" */ '../components/success/success.component.vue'),
		beforeEnter(to: Route, from: Route, next: NavigationGuardNext) {
			if (from.path === '/') {
				next('/');
			} else { next(); }
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to: Route, from: Route, next: NavigationGuardNext) => {
	if (!['/', '/form', '/success'].includes(to.path)) {
		next('/');
	} else { next(); }
});

export default router;
