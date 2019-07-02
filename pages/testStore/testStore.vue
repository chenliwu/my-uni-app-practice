<template>
	<view>
		<button type="primary" @click="login()">登录操作</button>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		onLoad(options) {
			console.log('testStore.onLoad()');
			console.log('this.$store:',this.$store);
			console.log('this.$store.state.userStore:',this.$store.state.userStore);
		},
		data() {
			return {
				
			}
		},
		methods: {
			// login(){
			// 	const userstore = this.$store.state.userStore;
			// 	console.log('login');
			// 	userstore.login(userstore);
			// 	console.log('this.$store.state.userStore:',this.$store.state.userStore);
			// }
			...mapMutations(['login'])
		}
	}
</script>

<style>

</style>
