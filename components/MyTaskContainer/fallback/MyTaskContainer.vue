<template>
	<view style="height: 100vh;" class="uni-flex;">

		<block v-for="(flowTrack,index) in flowTrackList" :key="index">
			<view style="margin-top: 5px;margin-bottom: 20px;" class="uni-flex uni-column">

				<view style="justify-content: space-between ;align-items: center;padding-right: 10px;" class="uni-flex uni-row">
					<view v-if="flowTrack.taskName!=null && typeof(flowTrack.taskName)!='undefined'" style="padding: 5px 15px;background-color: #bbc9ed;justify-content: center;align-items: center;border-top-right-radius: 8px;border-bottom-right-radius: 8px;"
					 class="uni-flex">
						<text style="font-size: 14px;color: #FFFFFF;">{{flowTrack.taskName}}</text>
					</view>
					<view class=""><text class="task-label-text">{{totalDuration == 0 ? '':'节点耗时'+timestampToShortTime(totalDuration)}}</text></view>
				</view>

				<block v-for="(task,taskIndex) in flowTrack.taskList" :key="taskIndex">

					<view style="padding-left: 15px;padding-right: 10px;margin-top: 15px;" class="uni-flex uni-row">

						<view style="justify-content: center;align-items: center;" class="uni-flex uni-column">
							<view v-bind:style="{'background-color':getColorByTaskStatus(task.status)}" style="flex: 2;background-color: #22ca93;width: 2px;min-height: 15px;"></view>
							<view v-bind:style="{'background-color':getColorByTaskStatus(task.status)}" style="background-color: #fbaa5c;width: 10px;height: 10px;border-radius: 50%;margin: 3px;"></view>
							<view v-bind:style="{'background-color':getColorByTaskStatus(task.status)}" style="flex: 2;background-color: #22ca93;width: 2px;min-height: 15px;"></view>
						</view>

						<view style="flex:1;justify-content: center;" class="uni-flex uni-column">

							<view style="justify-content: space-between ;align-items: center;padding: 5px;" class="uni-flex uni-row">

								<view style="justify-content: center;align-items: center;" class="uni-flex uni-row">
									<image style="width: 15px;height: 15px;margin-right: 5px;" src="../../static/images/icon_list_approver@2x.png"></image>
									<view class=""><text>{{task.username}}</text></view>
								</view>
								<view class=""><text class="task-label-text">{{task.endTime ? getEndTime(task.endTime) : '处理中'}}</text></view>
							</view>

							<block v-if="task.endTime">
								<view style="flex:1;justify-content: space-between ;align-items: center;padding: 5px;" class="uni-flex uni-row">

									<view style="flex:1;justify-content: center;align-content: center;" class="uni-flex uni-column">

										<view style="flex:1;justify-content: space-between;align-items: center;" class="uni-flex uni-row">
											<view v-if="task.status == 1" style="width: 80px;padding: 3px 10px;background-color: #22ca93;justify-content: center;align-items: center;border-radius: 5px;"
											 class="uni-flex">
												<text style="color:#FFFFFF;font-size: 14px;">同意</text>
											</view>
											<view v-else-if="task.status == 2" style="width: 80px;padding: 3px 10px;background-color: #fbaa5c;justify-content: center;align-items: center;border-radius: 5px;"
											 class="uni-flex">
												<text style="color:#FFFFFF;font-size: 14px;">打回上一级</text>
											</view>
											<view v-else-if="task.status == 3" style="width: 80px;padding: 3px 10px;background-color: #f76767;justify-content: center;align-items: center;border-radius: 5px;"
											 class="uni-flex">
												<text style="color:#FFFFFF;font-size: 14px;">打回制单处</text>
											</view>
											<view style="" class=""><text class="task-label-text">{{task.duration ? timestampToShortTime(task.duration):''}}</text></view>
										</view>
										<view v-if="task.comment" style="margin-top: 5px;" class=""><text class="task-label-text">{{task.comment}}</text></view>
									</view>

								</view>
								<view v-if="taskIndex != flowTrack.taskList.length -1" style="width: 100%;height: 1px;background-color:#CCCCCC;margin-top: 5px;"></view>
							</block>
						</view>
					</view>

				</block>

			</view>
		</block>

	</view>
</template>

<script>
	import moment from 'moment';
	import DateUtils from '../../utils/DateUtils.js';
	export default {
		name: 'MyTaskContainer',
		props: {
			flowTrackList: {
				type: Array,
				default () {
					return [];
				}
			}
		},
		onLoad() {
			let totalDuration = 100;
			let status = 0;
			for (let item of this.$props.flowTrackList.taskList) {
				if (!item.duration) {
					continue;
				}
				totalDuration += item.duration;
				if (status < 1 && item.status == 1) {
					status = 1;
				} else if (status < 2 && item.status == 2) {
					status = item.status;
				}
			}
			this.totalDuration = totalDuration;
		},
		data() {
			return {
				totalDuration: 0,
			};
		},
		methods: {
			getColorByTaskStatus(status) {
				if (status == 1) {
					return '#22ca93';
				} else if (status == 2) {
					return '#fbaa5c';
				} else if (status == 3) {
					return '#f76767';
				}
				return '#2ab9ff';
			},
			getEndTime(endTime){
				return moment(endTime).format('HH:mm:ss MM/DD');
			},
			timestampToShortTime(timestamp){
				return DateUtils.timestampToShortTime(timestamp);
			}
		}
	}
</script>

<style>
	.uni-flex {
		display: flex;
		flex-direction: row;
		display: -webkit-flex;
	}

	.uni-flex-item {
		flex: 1;
	}

	.uni-row {
		flex-direction: row;
	}

	.uni-column {
		flex-direction: column;
	}

	.task-label-text {
		font-size: 14px;
		color: #888888;
	}
</style>
