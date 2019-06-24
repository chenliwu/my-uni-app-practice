<template>
	<view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#4cd964"></uni-segmented-control>
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
			items: ['选项卡1', '选项卡2'],
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

<style></style>
