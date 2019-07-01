<template>
	<view>
		
	</view>
</template>

<script>
	import { Base64 } from 'js-base64';
	import URLParamsUtils from '../../utils/URLParamsUtils.js';
	export default {
		
		onLoad(options) {
			console.log('onload:',options);
			var timestamp = options.timestamp;
			var param = options.param;
			var decryptParamValue = URLParamsUtils.decryptParam(timestamp,param);
			console.log('timestamp:',timestamp);
			console.log('param:',param);
			console.log('decryptParamValue:',decryptParamValue);
		},
		data() {
			return {
				
			}
		},
		methods: {
			decryptParam(timestamp,paramValue){
				if(timestamp && paramValue){
					// 1、base64解码
					// paramValue = decodeURIComponent(Base64.decode(paramValue));
					paramValue = Base64.decode(paramValue);
					// 2、去除时间戳干扰
					return paramValue.replace(timestamp,'');
				}else{
					return "";
				}
				
			}
		}
	}
</script>

<style>

</style>
