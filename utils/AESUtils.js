/**
 * AES加密和解密工具类
 * created by chenlw on 2019/07/05
 */
import CryptoJS from 'crypto-js';

// AES加密和解密的密匙
const AES_KEY = "chenlw";

const AESUtils = {
	
	/**
	 * AES加密
	 * @param {Object} value 要加密的值
	 */
	encrypt(value){
		return CryptoJS.AES.encrypt(value, AES_KEY).toString();
	},
	
	/**
	 * AES解密
	 * @param {Object} value 要解密的值
	 * 如果解密不成功，则返回""
	 */
	decrypt(value){
		var bytes = CryptoJS.AES.decrypt(value, AES_KEY);
		return bytes.toString(CryptoJS.enc.Utf8);
	}
};

export default AESUtils;