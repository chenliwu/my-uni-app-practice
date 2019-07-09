<template>
	<view>
		<view class="uni-flex uni-column">

		</view>

	</view>
</template>

<script>
	import CryptoJS from 'crypto-js';

	import AESUtils from '../../utils/AESUtils.js';

	const AES_KEY = "Bytter2019";

	export default {
		onLoad(options) {
			console.log('');
			console.log('onLoad:',options);
			if (options.param) {
				var decryptedData = AESUtils.decrypt(options.param);
				if (decryptedData) {
					uni.showModal({
						title: '解密成功',
						content: '解密的内容为：' + decryptedData,
						showCancel: false,
					});
				} else {
					uni.showModal({
						title: '解密失败',
						content: '数据内容可能已被篡改！',
						showCancel: false,
					});
				}
			}
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
