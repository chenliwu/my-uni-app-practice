<template>
	<view class="uni-flex">
		<view style="width: 100%;padding-left: 5px;" class="uni-flex uni-row">
			<block v-for="(tabItemName, index) in tabItemArray" :key="index">
				<view :class="[activeTabIndex == index ? 'active-tab-item' : '']" class="tab-item " @click="tabChange(index)">
					<text :class="[activeTabIndex == index ? 'active-tab-item-text' : '']" class="tab-item-text">{{ tabItemName }}</text>
					<view class="active-tab-indicator"></view>
				</view>
			</block>
			<!-- <view :key="index" class="tab-item "><text class="tab-item-text">按钮1</text></view> -->
			<!-- <view class="tab-item "><text class="tab-item-text">按钮2</text></view> -->
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			activeTabIndex: 0,
			tabItemArray: ['选项卡1', '选项卡2']
		};
	},
	methods: {
		tabChange(index) {
			this.activeTabIndex = index;
		}
	}
};
</script>

<style>
.tab-item {
	/* height: 40px;
	line-height: 40px; */
	flex: 1;
	padding: 10px 10px 5px 10px;
	display: flex;
	
	justify-content: center;
	align-items: center;
	margin-left: 5px;
	margin-right: 5px;
}

.tab-item-text {
	font-size: 14px;
	color: black;
}

.active-tab-item{
	border-bottom: 4px solid #007aff;
	padding: 10px 10px 1px 10px;
}

.active-tab-item-text {
	font-size: 14px;
	color: #007aff;
}
</style>
