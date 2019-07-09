<template>
	<view>
		<view class="uni-flex uni-column">
			<text>要加密的内容：{{data}}</text>
			<text>加密后的内容：{{encryptedData}}</text>
			<text>加密后的内容：{{decryptedData}}</text>
		</view>
		<button type="primary" @click="aesEncrypt()">AES加密</button>
		<button type="primary" @click="aesDecrypt()">AES解密</button>

		<button type="primary" @click="test()">测试解密</button>
		<button type="primary" @click="testUrl()">测试URL传参</button>
	</view>
</template>

<script>
	import CryptoJS from 'crypto-js';

	import AESUtils from '../../utils/AESUtils.js';

	const AES_KEY = "chenlw";

	export default {
		data() {
			return {
				data: 'chenlw',
				encryptedData: null,
				decryptedData: null,
			}
		},
		methods: {
			/**
			 * AES加密
			 */
			aesEncrypt() {
				this.encryptedData = CryptoJS.AES.encrypt(this.data, AES_KEY).toString();
				console.log('this.encryptedData:', this.encryptedData);
			},

			/**
			 * AES解密
			 */
			aesDecrypt() {
				// Decrypt
				if (this.encryptedData) {
					// 如果给加密后的字符串encryptedData在末尾添加字符，依然能正常解密回原来的数值，
					// 但如果减少字符或在中间添加字符，就会解密失败，返回""
					// var bytes = CryptoJS.AES.decrypt(this.encryptedData.substring(0,this.encryptedData.length-2), AES_KEY);
					var bytes = CryptoJS.AES.decrypt(this.encryptedData, AES_KEY);
					this.decryptedData = bytes.toString(CryptoJS.enc.Utf8);
					console.log('this.decryptedData:', this.decryptedData);
				}
			},

			/**
			 * 如果给加密后的字符串encryptedData在末尾添加字符，依然能正常解密回原来的数值，
			 * 但如果减少字符或在中间添加字符，就会解密失败，返回""
			 * 只要判断解密处理的值是否为""，就可以判断数据是否被篡改过了。
			 */
			test() {
				console.log('');
				console.log('test');
				//var encrypedText = "U2FsdGVkX19ennIOXEou2LoFOV7pxzldAyHS+VfAp5A=";
				var encrypedText = "U2FsdGVkX1+fi73OaIO4VyzRAgDd736VQkb2YtYETPYQ1I63tfgIZjXdLYuALn8DyOzhhFNC4mZzWJHhIG74Ug==";
				// 测试AES加密解密工具类
				var decryptedData = AESUtils.decrypt(encrypedText);
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
			},

			testUrl() {
				var encrypedText = "U2FsdGVkX1+fi73OaIO4VyzRAgDd736VQkb2YtYETPYQ1I63tfgIZjXdLYuALn8DyOzhhFNC4mZzWJHhIG74Ug==";
				
				uni.navigateTo({
					url: '../testCryptoJS/testUrlParamEnctypt?param=' + encodeURIComponent(encrypedText) ,
				});
			}

		}
	}
</script>

<style>

</style>
