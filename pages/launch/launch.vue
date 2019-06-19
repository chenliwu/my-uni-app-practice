<template>
	<view class="content uni-padding-wrap">
		<!-- <image style="launchImage" src="./../../static/logo.png" mode="scaleToFill"></image> -->
		<button type="primary" @click="toLogin()">进入登录页面</button>
		<button type="primary" @click="toTestWebView()">进入测试web-view页面</button>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		toLogin: function() {
			// navigateTo:打开新页面,新页面入栈
			// navigateTo方法是页面入栈，进入下一个页面后，还可以返回当前页面。
			// uni.navigateTo({
			// 	url: '../login/login'
			// });

			//页面重定向:当前页面出栈，新页面入栈
			uni.redirectTo({
				url: '../login/login'
			});
		},
		toTestWebView:function(){
			uni.navigateTo({
				url: '../testWebView/testWebView'
			});
		}
	}
};
</script>

<style>
.content {
	
}

.launchImage {
	height: 200px;
	width: 200px;
}
</style>
