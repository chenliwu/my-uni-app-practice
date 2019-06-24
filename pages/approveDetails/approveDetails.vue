<template>
	<view>
		<view>
			<wuc-tab style="background-color: red;" :tab-list="tabList" textFlex :tabCur.sync="TabCur" tab-class="text-center text-black " select-class="text-selected"></wuc-tab>
			<scroll-view style="background-color: #0A98D5;" :scroll-top="0" scroll-y="true">
				<swiper
					:current="TabCur"
					class="swiper"
					duration="300"
					:circular="false"
					indicator-color="rgba(255,255,255,0)"
					indicator-active-color="#6a91f8"
					@change="swiperChange"
				>
					<swiper-item>
						<view class="padding text-black">
							<view style="display: flex;flex-direction: row;">
								<image style="width: 20px;height: 20px;" src="../../static/icon/icon_unread@2x.png"></image>
								<text>流程分类</text>
							</view>

							<view style="display: flex;flex-direction: column;">
								<text class="label-text">业务单号：XXXX</text>
								<text class="label-text">申请单位：XXXX</text>
								<text class="label-text">申请人：XXXX</text>
								<text class="label-text">申请时间：XXXX</text>
							</view>

							<!-- <view style="width: 100%;height: 300px;"><web-view :webview-styles="webviewStyles" :src="approveDetailUrl"></web-view></view> -->
						</view>
					</swiper-item>

					<swiper-item><view class="bg-white padding text-center text-black">流程跟踪页面</view></swiper-item>
				</swiper>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import WucTab from '@/components/wuc-tab/wuc-tab.vue';

export default {
	onReady() {
		// #ifdef APP-PLUS
		var currentWebview = this.$mp.page.$getAppWebview(); //获取当前页面的webview对象
		console.log('onReady');
		console.log(currentWebview);
		setTimeout(function() {
			wv = currentWebview.children()[0];
			wv.setStyle({ top: 150, height: 300 });
		}, 1000); //如果是页面初始化调用时，需要延时一下
		// #endif
	},

	data() {
		return {
			TabCur: 0,
			tabList: [{ name: '业务详情' }, { name: '流程跟踪' }],

			approveDetailUrl:
				'http://192.168.0.193:8080/t2/api/flow/detailPage' +
				'?access_token=eac77a7ee4a651e819cd47d4104f2734' +
				'&id=250e4675-8e49-11e9-9fa3-8c89a59654fd' +
				'&type=0' +
				'&categoryId=netbankPay' +
				'&businessId=18bb35003de14a7790ceb1eb36fdf0b3' +
				'&_btv=1560936726314',
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
