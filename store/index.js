import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './userStore.js';
import todoApproveStore from './todoApproveStore.js';

Vue.use(Vuex);

// const store = new Vuex.Store({
// 	state: {
// 		login: false,
// 		token: '',
// 		avatarUrl: '',
// 		userName: ''
// 	},
// 	mutations: {
// 		login(state, provider) {
//             console.log(state)
//             console.log(provider)
// 			state.login = true;
// 			state.token = provider.token;
// 			state.userName = provider.userName;
// 			state.avatarUrl = provider.avatarUrl;
// 		},
// 		logout(state) {
// 			state.login = false;
// 			state.token = '';
// 			state.userName = '';
// 			state.avatarUrl = '';
// 		}
// 	}
// })

const store = new Vuex.Store({
	modules: {
		userStore: userStore,
		todoApproveStore: todoApproveStore
	}
});

export default store;
