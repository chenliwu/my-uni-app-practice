
const todoApproveStore = {
	state:{
		hasLogin:'todoApproveStore.hashLogin',
		approveItem:{
			name:'todoApproveStore的approveItem'
		},
		approveIsFinished:false,
	},
	mutations:{
		
	},
	getters:{
		getApprotem:function(state,params){
			console.log('todoApproveStore.getApprotem.params:',params);
			return state.approveItem;
		},
		hasLogin(state){
			console.log('todoApproveStore.userStore.getters.hasLogin');
			return state.hasLogin;
		}
	}
}

export default todoApproveStore;