<template>
	<view><web-view :webview-styles="webviewStyles" :src="approveDetailUrl" @message="handleMessage"></web-view></view>
</template>

<script>
export default {
	onReady() {
		// #ifdef APP-PLUS
		var currentWebview = this.$mp.page.$getAppWebview(); //获取当前页面的webview对象
		setTimeout(function() {
			wv = currentWebview.children()[0];
			wv.setStyle({ top: 150, height: 300 });
		}, 1000); //如果是页面初始化调用时，需要延时一下
		// #endif
	},

	data() {
		return {
			webviewUrl: 'http://192.168.0.178:8088/webUtils/testUniAppWebView',
			approveDetailUrl:
				'http://192.168.0.178:8080/t2/api/flow/detailPage' +
				'?access_token=eac77a7ee4a651e819cd47d4104f2734' +
				'&id=250e4675-8e49-11e9-9fa3-8c89a59654fd' +
				'&type=0' +
				'&categoryId=netbankPay' +
				'&businessId=18bb35003de14a7790ceb1eb36fdf0b3' +
				'&_btv=1560936726314',
			webviewStyles: {
				progress: {
					color: '#FF3333',
					top: 100
				}
			}
		};
	},
	methods: {
		handleMessage(evt) {
			console.log('接收到的消息：' + JSON.stringify(evt.detail.data));
			uni.showToast({
				title: '接收到的消息：' + JSON.stringify(evt.detail.data),
				icon: 'success',
				mask: true
			});
		}
	}
};
</script>

<style></style>
