<template>
	<view class="uni-flex uni-column" style="height: 100vh;">
		<wuc-tab style="background-color: red;" :tab-list="tabList" textFlex :tabCur.sync="TabCur" tab-class="text-center text-black " select-class="text-selected"></wuc-tab>
		<swiper
			style="height: 100vh;"
			:current="TabCur"
			class="swiper uni-flex uni-column"
			duration="300"
			:circular="false"
			indicator-color="rgba(255,255,255,0)"
			indicator-active-color="#6a91f8"
			@change="swiperChange"
		>
			<swiper-item>
				<scroll-view style="height: 100vh;background-color: #0A98D5;" :scroll-top="0" scroll-y="true">
					<view style="flex:1;height: 100vh;" class="padding text-black uni-flex uni-column">
						
						<view style="display: flex;flex-direction: row;background-color: red;">
							<image style="width: 20px;height: 20px;" src="../../static/icon/icon_unread@2x.png"></image>
							<text>流程分类</text>
						</view>

						<view style="display: flex;flex-direction: column;flex: 1;background-color: #576B95;">
							<text class="label-text">业务单号：XXXX</text>
							<text class="label-text">申请单位：XXXX</text>
							<text class="label-text">申请人：XXXX</text>
							<text class="label-text">申请时间：XXXX</text>
						</view>

						<web-view v-if="TabCur == 0"  style="margin-top:60vh;height: 70%;" :webview-styles="webviewStyles" :src="approveDetailUrl"></web-view>
					</view>
				</scroll-view>
			</swiper-item>

			<swiper-item>
				<scroll-view style="height: 100vh;background-color:#1AAD19;" :scroll-top="0" scroll-y="true">
					<view class="bg-white padding text-center text-black">流程跟踪页面</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import WucTab from '@/components/wuc-tab/wuc-tab.vue';

export default {
	data() {
		return {
			TabCur: 0,
			webViewHeight:'30vh',
			tabList: [{ name: '业务详情' }, { name: '流程跟踪' }],

			approveDetailUrl:
				'http://192.168.0.193:8080/t2/api/flow/detailPage' +
				'?access_token=eac77a7ee4a651e819cd47d4104f2734' +
				'&id=250e4675-8e49-11e9-9fa3-8c89a59654fd' +
				'&type=0' +
				'&categoryId=netbankPay' +
				'&businessId=18bb35003de14a7790ceb1eb36fdf0b3' +
				'&_btv=1560936726314',
			//approveDetailUrl: 'https://www.baidu.com/',
			webviewStyles: {
				progress: {
					color: '#FF3333',
					top: 100
				}
			}
		};
	},
	components: { WucTab },
	methods: {
		tabChange(index) {
			this.TabCur = index;
		},
		swiperChange(e) {
			let { current } = e.target;
			this.TabCur = current;
		}
	}
};
</script>

<style>
div,
scroll-view,
swiper {
	box-sizing: border-box;
}

.box {
	display: flex;
	display: -webkit-flex;
}

.height100vh {
	height: 100vh;
}

.text-orange {
	color: #f37b1d;
}

.text-selected {
	color: #6a91f8;
}

.text-black {
	color: #333333;
}

.bg-white {
	background-color: #ffffff;
}

.padding {
	padding: 30upx;
}

.margin {
	margin: 30upx;
}

.margin-top {
	margin-top: 30upx;
}
.text-center {
	text-align: center;
}

.label-text {
	font-size: 16px;
	color: '#808080';
}
</style>
