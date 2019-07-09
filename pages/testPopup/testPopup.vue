<template>
	<view>
		<button type="button" data-position="bottom" @click="togglePopup('bottom-share')">底部弹出（分享界面）</button>
		
		<uni-popup  :show="type === 'bottom-share'" position="bottom" @hidePopup="togglePopup('')">
			<view style="flex:1;width: 100%;" class="uni-flex uni-column">
				
				<view style="height: 25px;line-height: 25px;font-size: 16px;"></view>
				<view style="width: 100%;margin-bottom: 10px;justify-content: center;align-items: center;" class="uni-flex">
		
					<textarea style="width: 90%;text-align:left;border: 1px solid #C8C7CC;" @blur="bindTextAreaBlur"
					 placeholder="请输入签字意见..." />
			
				</view>
				
				<view class="uni-flex uni-row" style="display: flex;flex-direction: row;height: 45px;line-height: 45px;">
					<view  class="submit-button ripple" style="background-color:#f76767;flex:1;">
						<text class="submit-button-text">打回制单处</text>
					</view>
					<view class="submit-button ripple" style="background-color: #bbc9ed;flex:1;">
						<text class="submit-button-text">打回上一级</text>
					</view>
					<view class="submit-button ripple" style="background-color: #6a91f8;flex:2;"><text class="submit-button-text">同意</text></view>
				</view>
				
				<!-- <view class="bottom-btn" @click="togglePopup('')">完成</view> -->
			</view>
		</uni-popup>
		
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				type: '',
				list: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
			}
		},
		onBackPress() {
			if (this.type !== '') {
				this.type = ''
				return true
			}
		},
		methods: {
			togglePopup(type) {
				this.type = type
			},
			bindTextAreaBlur(event){
				 console.log(event.detail.value)
			}
		}
	}
</script>
<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.uni-padding-wrap {
		padding: 0 30upx;
	}

	button {
		margin: 20upx 0;
	}

	.uni-helllo-text {
		height: 100upx;
		line-height: 100upx;
		text-align: center;
	}

	.center-box {
		width: 500upx;
		height: 500upx;
	}

	.uni-list-item {
		text-align: left;
		line-height: 80upx;
		border-bottom: 1px #f5f5f5 solid;
	}

	.uni-list-item:last-child {
		border: none;
	}

	.center-box .image {
		width: 100%;
		height: 100%;
	}

	.bottom-title {
		line-height: 60upx;
		font-size: 24upx;
		padding: 15upx 0;
	}

	.bottom-content {
		display: flex;
		flex-wrap: wrap;
		padding: 0 35upx;
	}

	.bottom-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 15upx;
		width: 25%;
		box-sizing: border-box;
	}

	.bottom-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90upx;
		height: 90upx;
		overflow: hidden;
		background: #007aff;
		border-radius: 10upx;
	}

	.bottom-content-text {
		font-size: 26upx;
		color: #333;
		margin-top: 10upx;
	}

	.bottom-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
	}

	.bottom-content-image.wx {
		background: #00ce47;
	}

	.bottom-content-image.qq {
		background: #00b6f6;
	}

	.bottom-content-image.sina {
		background: #ff766a;
	}

	.bottom-content-image.copy {
		background: #07ccd0;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 1028200 */
		src: url('https://at.alicdn.com/t/font_1028200_47ewtwy4t04.ttf') format('truetype');
	}

	.icon {
		font-family: 'iconfont';
		font-size: 40upx;
		color: #fff;
	}
	
	
	.submit-button {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.submit-button-text {
		font-size: 13px;
		color: #ffffff;
	}
	
	/* 水波纹效果 */
	.ripple {
		position: relative;
	}
	
	.ripple:focus {
		outline: none;
	}
	
	.ripple:after {
		content: '';
		display: block;
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		pointer-events: none;
		background-color: #cccccc;
		background-repeat: no-repeat;
		background-position: 50%;
		opacity: 0;
		transition: all 0.3s;
	}
	
	.ripple:active:after {
		opacity: 0.3;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: 0s;
	}
	
	
</style>
