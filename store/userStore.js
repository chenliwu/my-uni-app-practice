
const userStore = {
	state:{
		hasLogin:false,
		accessToken:null,
		username:null,
	},
	mutations:{
		login(username){
			console.log('login');
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
		logout(state){
			state.hasLogin = false;
			state.accessToken = null;
			state.username = null;
		}
	}
};

export default userStore;