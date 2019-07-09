<template>
	<view class="">
		<button type="primary" @tap="show">弹出</button>
		<popup-layer ref="popupRef" :direction="'top'">
			<view style="display: flex;width: 100%;" class="uni-flex uni-column">
				<view style="height: 30px;line-height: 30px;font-size: 16px;padding: 5px 0;"></view>
				<view style="padding: 5px;width: 100%;margin-bottom: 10px;" class="uni-flex">
					<!-- <input id="inputCommentElement" focus="true" style="width: 100%;background-color: #FFFFFF;padding: 5px; -webkit-overflow-scrolling: touch;"
					 placeholder="输入意见..." /> -->
			
					<textarea style="flex:1;text-align:left;padding: 5px;height: 100px;border: 1px solid #C8C7CC;margin-right: 10px;" @blur="bindTextAreaBlur"
					 placeholder="请输入签字意见..." />
			
				</view>
				
				<view class="uni-flex uni-row text-center" style="flex:1;height: 45px;line-height: 45px;">
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
		</popup-layer>
	</view>
</template>

<script>
	import popupLayer from '../../components/popup-layer/popup-layer.vue';
	export default {
		components: {
			popupLayer
		},
		data() {
			return {
				boolShow: false
			}
		},
		methods: {
			bindTextAreaBlur(event){
				 console.log(event.detail.value)
			},
			show() {
				this.$refs.popupRef.show(); // 或者 boolShow = rue
			},
			close() {
				this.$refs.popupRef.close(); // 或者 boolShow = false
			}
		}
	}
</script>

<style>
	
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
