import {Base64} from 'js-base64';

/**
 * URL参数工具类：
 * 用于解析URL携带的参数
 * created by chenlw on 2019/07/01
 * @type 
 */
const URLParamsUtils = {
	
	/**
	 * 参数解密
	 * 参数值加密公式：base64Encode(timestamp + param)
	 * @param {Object} timestamp
	 * @param {Object} paramValue
	 */
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

};

export default URLParamsUtils;
