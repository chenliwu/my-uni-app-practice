<template>
	<view class="uni-padding-wrap">
		<view class="">首页</view>
		<button @click="logout()" type="primary">返回登录页面</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		logout: function() {
			uni.reLaunch({
				url: '../../login/login'
			});
		}
	}
};
</script>

<style></style>
