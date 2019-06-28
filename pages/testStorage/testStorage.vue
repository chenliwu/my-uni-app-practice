<template>
	<view>
		<button type="primary" @click="saveDataToStorage()">存数据到Storage</button>
		<button type="primary" @click="getStorageData()">读取数据</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			getStorageData() {
				// H5端为localStorage，浏览器限制5M大小，是缓存概念，可能会被清理
				// 关闭页面再重启，重新读取数据也是可以读取到的。
				var key = 'test';
				try {
					const data = uni.getStorageSync(key);
					console.log('getStorageData:',JSON.parse(data))
					uni.showModal({
						title: '操作提示',
						content: '读取到的数据为：' + data,
						showCancel: false,
					});
				} catch (e) {
					// error
				}
			},
			saveDataToStorage() {
				try {
					var key = 'test';
					var data = {
						accessToken: '身份令牌'
					};
					uni.setStorageSync(key, JSON.stringify(data));
					uni.showToast({
						title: '操作成功'
					});
				} catch (e) {
					// error
					uni.showModal({
						title: '错误提示',
						content: '存储数据失败：' + e,
						showCancel: false,
					});
				}

			}
		}
	}
</script>

<style>

</style>
