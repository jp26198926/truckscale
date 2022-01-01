import Vue from 'vue'
import Vuex from 'vuex'
import { pageComponents } from "./page_components.js"
import { users } from "./users.js"
import { vessels } from "./vessels.js"
Vue.use(Vuex)
export default function (/* { ssrContext } */) {
	const Store = new Vuex.Store({
		modules: {
			pageComponents,
			users,
		vessels
		},
		// enable strict mode (adds overhead!)
		// for dev mode only
		strict: process.env.DEV
	})
	return Store
}