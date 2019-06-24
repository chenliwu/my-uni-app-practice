<template>
	<view>
		<!-- 横向布局 -->
		<view class="box">
			<view class="view1">view1</view>
			<view class="view2">view2</view>
			<view class="view3">view3</view>
		</view>

		<view style="display: flex;flex-direction: column;">
			<view class="flex-item uni-bg-red">A</view>
			<view class="flex-item uni-bg-green">B</view>
			<view class="flex-item uni-bg-blue">C</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {}
};
</script>

<style>
.box {
	/* flex布局在H5上面，flex-direction默认为row */
	display: flex;
	-webkit-display: flex;
	flex-direction: row;
}
.view1,
.view2,
.view3 {
	width: 33.3%;
	height: 200upx;
	flex: 1;
}
.view1 {
	background-color: #dd524d;
}
.view2 {
	background-color: #007aff;
}
.view3 {
	background-color: #8a6de9;
}

.flex-item {
	width: 100%;
	height: 200upx;
	text-align: center;
	line-height: 200upx;
}

.flex-item-V {
	width: 100%;
	height: 150upx;
	text-align: center;
	line-height: 150upx;
}
</style>
