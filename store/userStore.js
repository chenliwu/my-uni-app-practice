
const userStore = {
	//namespaced: true,
	state:{
		hasLogin:false,
		accessToken:null,
		username:null,
	},
	mutations:{
		
		/**
		 * 
		 * @param {Object} state
		 * @param {Object} provider 参数值集合
		 */
		login(state,provider){
			console.log('userStore.login,state:',state);
			console.log('userStore.login,provider:',provider);
			// state.hasLogin = true;
			// state.accessToken = "accessToken";
			// state.username = "chenlw";
			this.hasLogin = true;
			this.accessToken = "accessToken";
			this.username = "chenlw";
			console.log('hasLogin',this.hasLogin);
			console.log('accessToken',this.accessToken);
			console.log('username',this.username);
		},
		logout(state,provider){
			state.hasLogin = false;
			state.accessToken = null;
			state.username = null;
		}
	},
	
	/**
	 * module未设置namespace的情况下，
	 * 
	 * userStore和todoApproveStore都定义了同名的getters方法hasLogin()，则this.$store.getter.hashLogin调用的方法将会是module定义次序先的store。
	 * userStore定义的次序在todoApproveStore之前，所以this.$store.getter.hashLogin调用的是userStore的hashLogin()方法。
	 */
	getters:{
		// getter方法接收参数
		hasLogin:(state)=>(params)=> {
			console.log('userStore.getters.hasLogin');
			console.log('userStore.getters.hasLogin.params:',params);
			return state.hasLogin;
		}
	}
};

export default userStore;