<template>
	<view>
		<uni-segmented-control style="width: 100%;" :current="current" :values="segmentTitleItems" @clickItem="onClickItem" style-type="text" active-color="#6a91f8"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">选项卡1的内容</view>
			<view v-show="current === 1">选项卡2的内容</view>
		</view>
	</view>
</template>

<script>
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';
export default {
	onLoad:function(options){
		console.log('options:',options);
	},
	components: { uniSegmentedControl },
	data() {
		return {
			segmentTitleItems: ['选项卡1', '选项卡2'],
			current: 0
		};
	},
	methods: {
		onClickItem(index) {
			if (this.current !== index) {
				this.current = index;
			}
		}
	}
};
</script>

<style>
	
	
</style>
