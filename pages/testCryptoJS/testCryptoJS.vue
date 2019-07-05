<template>
	<view>
		<view class="uni-flex uni-column">
			<text>要加密的内容：{{data}}</text>
			<text>加密后的内容：{{encryptedData}}</text>
			<text>加密后的内容：{{decryptedData}}</text>
		</view>
		<button type="primary" @click="aesEncrypt()">AES加密</button>
		<button type="primary" @click="aesDecrypt()">AES解密</button>
	</view>
</template>

<script>
	import CryptoJS from 'crypto-js';

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
			},

			/**
			 * AES解密
			 */
			aesDecrypt() {
				// Decrypt
				if(this.encryptedData){
					var bytes = CryptoJS.AES.decrypt(this.encryptedData, AES_KEY);
					this.decryptedData = bytes.toString(CryptoJS.enc.Utf8);
				}
				
			}
		}
	}
</script>

<style>

</style>
