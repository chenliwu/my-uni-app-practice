<template>
	<view class="uni-flex uni-column">
		<view class=""><text>编码内容：{{dataString}}</text></view>
		<view class=""><text>base64编码：{{base64EncodeString}}</text></view>

		<view class=""><text>base64解码：{{base64DecodeString}}</text></view>
		<button type="primary" @click="base64Encode()">base64编码</button>
		<button type="primary" @click="base64Decode()">base64解码</button>
	</view>
</template>

<script>
import { Base64 } from 'js-base64';
export default {
	data() {
		return {
			timestamp:'',
			dataString: 'chenlw',
			base64EncodeString:'',
			base64DecodeString:''
		};
	},
	methods: {
		// URL参数加密和解密算法，加密公式：加密串 = base64Encode(时间戳+参数值)。
		// 时间戳作为干扰串，这样每次生成的加密串都会不一样。
		
		base64Encode() {
			// console.log('base64Encode');
			// this.base64EncodeString = Base64.encode(this.dataString);
			// console.log('base64EncodeString:',this.base64EncodeString);
			this.timestamp = (new Date()).getTime();
			this.base64EncodeString = Base64.encode(this.timestamp+this.dataString);
		},
		base64Decode() {
			// console.log('base64Decode');
			// if(this.base64EncodeString){
			// 	this.base64DecodeString = Base64.decode(this.base64EncodeString);
			// }
			
			console.log('base64Decode');
			if(this.base64EncodeString){
				this.base64DecodeString = Base64.decode(this.base64EncodeString).replace(this.timestamp,'');
			}
			
		}
	}
};
</script>

<style></style>
