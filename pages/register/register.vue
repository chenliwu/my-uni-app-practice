<template>
	<view class="uni-padding-wrap">
		<view class="content">
			<text>注册页面</text>
			<view class="mt10 mb20"><button @click="toLogin()" type="primary">返回登录页面</button></view>

			<view class="mt20"><button @click="toMain()" type="primary">进入主页</button></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		toLogin: function() {
			uni.redirectTo({
				url: '../login/login'
			});
		},
		toMain: function() {
			// uni.redirectTo({
			// 	url: '../index/index'
			// });

			// 打开Tab页面，要用reLaunch
			uni.reLaunch({
				url: '../tabBar/index/index'
			});
		}
	}
};
</script>

<style>
.content {
	display: 'flex';
	flex-direction: 'column';
	justify-content: 'center';
	align-items: 'center';
}
</style>
