<template>
	<!-- <view style="height: 100vh;background-color: red;" class="uni-flex uni-column">
		
	</view> -->

	<scroll-view style="flex:1;height: 100vh;position: relative;" scroll-y="true" class="uni-flex uni-column" @scroll="onScroll" @scrolltolower="onScrolltolower">
		<uni-segmented-control
			style="flex: 1;width: 100%;padding: 5px;"
			:current="activeTabIndex"
			:values="segmentTitleItems"
			@clickItem="tabChange"
			style-type="text"
			active-color="#6a91f8"
		></uni-segmented-control>

		<!-- <view style="flex:2;position: relative;margin-bottom: 100px;" class="">

				<web-view
					id="webView"
					style="flex:1;height: 100vh;position: absolute;top:0px;"
					:webview-styles="webviewStyles"
					:src="webviewUrl"
				></web-view>
			</view> -->

		<view style="flex:1;height: 100vh;" class="uni-flex uni-column">
			<view style="flex:1;height: 100vh;" class="uni-flex uni-column">
				<web-view style="flex:1;height: 100vh;position: absolute;top: 0px;" :webview-styles="webviewStyles" :src="webviewUrl"></web-view>
			</view>

			<view style="height: 200px;flex:1;position: relative;width: 100%;background-color: #1AAD19;" class=""></view>
		</view>
	</scroll-view>

	<!-- <view class="uni-flex uni-column" style="z-index: 99;width: 100%;height: 100px;position: fixed;bottom: 0;">
			<view style="background-color:#F1F1F1;padding: 5px;flex:1;display: flex;align-items: center;">
				<input style="width: 100%;background-color: #FFFFFF;padding: 5px;" placeholder="输入意见..." />
			</view>
			<view class="uni-flex uni-row text-center" style="flex:1;">
				<view class="submit-button ripple" style="background-color:#f76767;flex:1;"><text class="submit-button-text">打回制单处</text></view>
				<view class="submit-button ripple" style="background-color: #bbc9ed;flex:1;"><text class="submit-button-text">打回上一级</text></view>
				<view class="submit-button ripple" style="background-color: #6a91f8;flex:2;"><text class="submit-button-text">同意</text></view>
			</view>
		</view> -->
</template>

<script>
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';

export default {
	onReady() {},

	data() {
		return {
			webviewUrl: 'https://uniapp.dcloud.io/casecode',
			webviewStyles: {
				progress: {
					color: '#FF3333',
					top: 100
				}
			},

			activeTabIndex: 0,
			segmentTitleItems: ['业务详情', '流程跟踪']
		};
	},
	components: {
		uniSegmentedControl
	},
	methods: {
		tabChange(index) {
			this.activeTabIndex = index;
		},

		onScroll(event) {
			console.log('onScroll:', event);
		},

		onScrolltolower(event) {
			console.log('onScrolltolower:', event);
		}
	}
};
</script>

<style>
.flow-track-title {
	font-size: 18px;
	height: 40px;
	width: 120px;
	line-height: 40px;
	background-color: #bbc9ed;
	color: #ffffff;
	margin: 10px 0px 10px 0px;
	position: relative;
}

.bg-white {
	background-color: #ffffff;
}

.text-center {
	text-align: center;
}

.label-text {
	font-size: 16px;
	color: #888888;
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
