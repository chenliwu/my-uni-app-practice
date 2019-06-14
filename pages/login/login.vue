<template>
	<view class="uni-common-mt">
		<view class="uni-form-item uni-column">
			<view class="title">account:</view>
			<input class="uni-input" v-model="account" placeholder="请输入账号" />
		</view>
		<view>
			  <button type="primary" plain="true" @click="login()">登录</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			account:'',
		};
	},
	methods: {
		login:function(){
			uni.showToast({
				title:`账号:${this.account}`,
				icon:'none'
			});
		}
	}
};
</script>

<style></style>
