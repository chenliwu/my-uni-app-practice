<template>
	<view style="height:90vh;width: 100%;" class="uni-flex">
		<image style="height: 100vh;"  src="../../static/images/start_bg.png" mode="aspectFit"></image>
	</view>
</template>

<script>
export default {
	onLoad(options) {
		// 监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）
		console.log('onLoad:', options);
		this.approveId = options.approveId;
		this.businessId = options.businessId;
		this.categoryId = options.categoryId;
		// if (!this.categoryId || !this.businessId || !this.categoryId) {
		// 	uni.reLaunch({
		// 		url: './AuthenticationFaild'
		// 	});
		// 	return;
		// }
		// uni.reLaunch({
		// 	url: './AuthenticationSuccess'
		// });
	},
	onReady() {
		// 监听页面初次渲染完成。注意如果渲染速度快，会在页面进入动画完成前触发
		console.log('onReady:');
		uni.showLoading({
			title: '正在验证身份...'
		});
		setTimeout(function(){
			 uni.hideLoading();
		},2000);
	},
	data() {
		return {
			approveId: '',
			businessId: '',
			categoryId: ''
		};
	},
	methods: {}
};
</script>

<style></style>
