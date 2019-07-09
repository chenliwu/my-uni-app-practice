
const todoApproveStore = {
	state:{
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
		
	}
}

export default todoApproveStore;