<template>
	<view>
		<button type="primary" @click="login({username,password})">登录操作</button>
		
		<button type="primary" @click="testGetState()">测试获取store的state</button>
		<button type="primary" @click="testMutations()">测试mutations</button>
		<button type="primary" @click="testGetters()">测试getters</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		onLoad(options) {
			// console.log('testStore.onLoad()');
			// console.log('this.$store:',this.$store);
			// console.log('this.$store.state.userStore:',this.$store.state.userStore);
		},
		data() {
			return {
				username:'chenlw111',
				password:'password',
			}
		},
		methods: {
			testGetState(){
				const {userStore,todoApproveStore} = this.$store.state;
				// userStore的state
				console.log('userStore.hasLogin:',this.$store.state.userStore.hashLogin);
				console.log('todoApproveStore.hasLogin:',this.$store.state.todoApproveStore.hashLogin);
			},
			testMutations(){
				// 调用userStore的login方法（mutations）
				// 你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：
				this.$store.commit('login',{"username":this.username,"password":this.password});
			},
			
			testGetters(){
				console.log('');
				// this.$store.state.userStore.hasLogin：访问userStore里面的hasLogin状态。
				// console.log('testGetters:',this.$store.state.userStore.hasLogin);
				
				// this.$store.getters.hasLogin：调用了userStore里面getters的hashLogin()方法
				console.log('testGetters:',this.$store.getters.hasLogin({name:'test'}));
			},
			
			// 使用mapMutations映射userStore的login()方法出来
			// 页面当中调用userStore的login()方法并传递复合参数的时候，可以这样子：login({username,password})。
			...mapMutations(['login'])
			
			// login(){
			// 	this.$store.state.dispatch('login','chenlw');
			// }
		}
	}
</script>

<style>

</style>
