<template>
	<view>
		<view class="test">
			<button type="primary" @click="showLiveRangetimePicker()">选择日期时间范围</button>
		</view>
		<mx-date-picker :show="liveRangetimePickerIsShow" type="rangetime" :value="value" :show-tips="true" :begin-text="'入住'"
		 :end-text="'离店'" :show-seconds="false" format="yyyymmddhhii" @confirm="onLiveTimeSelected" @cancel="onLiveTimeSelected" />
	</view>
</template>

<script>
	import MxDatePicker from "@/components/mx-datepicker/mx-datepicker.vue";
	export default {
		components: {
			MxDatePicker
		},
		data() {
			return {
				liveRangetimePickerIsShow: false,
				rangetime: ['2019/01/08 14:00', '2019/01/16 13:59'],
				value: ''
			}
		},
		methods: {
			showLiveRangetimePicker() {
				this.liveRangetimePickerIsShow = true;
			},
			onLiveTimeSelected(event) {
				this.liveRangetimePickerIsShow = false;
				if (event) {
					// event.value:[起始日期时间字符串，结束日期时间字符串]
					//选择的值
					console.log('value => ', event.value);
					console.log('type:' + typeof(event.value));
					//原始的Date对象
					console.log('date => ', event.date);
					console.log('type:' + typeof(event.date));

					let beginDate = event.value[0].substr(0, 8);
					let beginTime = event.value[0].substr(8, 4);
					let endDate = event.value[1].substr(0, 8);
					let endTime = event.value[0].substr(8, 4);
					
					console.log('beginDate:'+beginDate);
					console.log('beginTime:'+beginTime);
					console.log('endDate:'+endDate);
					console.log('endTime:'+endTime);

				}
			}
		}
	}
</script>

<style>

</style>
