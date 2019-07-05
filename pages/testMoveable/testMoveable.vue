<template>
	<view style="height: 100vh;position: relative;" class="uni-flex uni-column">
		<movable-area style="height: 100vh;width: 100vh;position: absolute;background-color: #0081FF;z-index: 99;">
			<movable-view :x="x" :y="y" direction="all" @change="onChange">text</movable-view>

		</movable-area>

		<scroll-view style="height: 100vh;width: 100vh;z-index: 100;" scroll-y="true" class="uni-flex uni-column">
			<block v-for="(item,index) in dataList" :key="index">
				<view class="">
					<text>{{item}}</text>
				</view>
			</block>
		</scroll-view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [
					1, 2, 3, 4, 5, 6, 7, 8, 9, 10
				],
				x: 0,
				y: 0,
				old: {
					x: 0,
					y: 0
				}
			}
		},
		methods: {
			onChange: function(e) {
				this.old.x = e.detail.x
				this.old.y = e.detail.y
			}
		}
	}
</script>

<style>

</style>
