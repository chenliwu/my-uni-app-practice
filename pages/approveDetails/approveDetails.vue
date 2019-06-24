<template>
	<view>
		<div>
			<wuc-tab :tab-list="tabList" textFlex :tabCur.sync="TabCur" tab-class="text-center text-black bg-white" select-class="text-orange"></wuc-tab>
			<swiper
				:current="TabCur"
				class="swiper"
				duration="300"
				:circular="true"
				indicator-color="rgba(255,255,255,0)"
				indicator-active-color="rgba(255,255,255,0)"
				@change="swiperChange"
			>
				<swiper-item><div class="bg-white padding text-center text-black">业务详情页面</div></swiper-item>

				<swiper-item><div class="bg-white padding text-center text-black">流程跟踪页面</div></swiper-item>
			</swiper>
		</div>
	</view>
</template>

<script>
import WucTab from '@/components/wuc-tab/wuc-tab.vue';

export default {
	data() {
		return {
			TabCur: 0,
			tabList: [{ name: '业务详情' }, { name: '流程跟踪' }]
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
</style>
