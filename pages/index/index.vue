<template>
	<view class="content">
		<view>
			<text class="title">{{ title }}</text>
		</view>
		<view><button type="primary" @click="gotoLogin()">跳转到登录页面</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Flexbox布局练习'
		};
	},
	onLoad() {},
	methods: {
		gotoLogin: function() {
			uni.navigateTo({
				url: '../login/login'
			});
		}
	}
};
</script>

<style>
.content {
	flex: 1;
	flex-direction: 'column';
	justify-content: 'center';
	align-items: 'center';
}

.title {
	font-size: 20upx;
	color: #8f8f94;
}
</style>
