<template>
	<view style="height: 100vh;" class="flex">

		<block v-for="(flowTrack,index) in flowTrackList" :key="index">
			<view style="margin-top: 5px;margin-bottom: 10px;" class="uni-flex uni-column">

				<view style="justify-content: space-between ;align-items: center;padding-right: 10px;" class="uni-flex uni-row">
					<view v-if="flowTrack.taskName!=null && typeof(flowTrack.taskName)!='undefined'" style="padding: 5px;background-color: #bbc9ed;justify-content: center;align-items: center;border-top-right-radius: 8px;border-bottom-right-radius: 8px;"
					 class="uni-flex">
						<text style="font-size: 14px;color: #FFFFFF;">{{flowTrack.taskName}}</text>
					</view>
					<view class=""><text class="task-label-text">节点总耗时</text></view>
				</view>

				<block v-for="(task,taskIndex) in flowTrack.taskList" :key="taskIndex">

					<view style="padding-left: 15px;padding-right: 10px;margin-top: 10px;" class="uni-flex uni-row">

						<!-- 分割线 -->
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
								<!-- 处理中/节点耗时 -->
								<view class=""><text class="task-label-text">{{task.endTime ? '结束时间：'+task.endTime : '处理中'}}</text></view>
							</view>

							<block v-if="task.endTime">
								<view style="flex:1;justify-content: space-between ;align-items: center;padding: 5px;" class="uni-flex uni-row">

									<view style="flex:1;justify-content: center;align-content: center;" class="uni-flex uni-column">

										<view style="flex:1;justify-content: space-between;align-items: center;" class="uni-flex uni-row">
											<view v-if="task.status == 1" style="padding: 3px 10px;background-color: #22ca93;justify-content: center;align-items: center;border-radius: 5px;"
											 class="uni-flex">
												<text style="color:#FFFFFF;font-size: 14px;">同意</text>
											</view>
											<view v-else-if="task.status == 2" style="padding: 3px 10px;background-color: #fbaa5c;justify-content: center;align-items: center;border-radius: 5px;"
											 class="uni-flex">
												<text style="color:#FFFFFF;font-size: 14px;">打回上一级</text>
											</view>
											<view v-else-if="task.status == 3" style="padding: 3px 10px;background-color: #f76767;justify-content: center;align-items: center;border-radius: 5px;"
											 class="uni-flex">
												<text style="color:#FFFFFF;font-size: 14px;">打回制单处</text>
											</view>
											<view style="" class=""><text class="task-label-text">耗时</text></view>
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
	export default {
		data() {
			return {
				flowTrackList: [{
						taskList: [{
								comment: '审批意见1',
								createTime: '创建时间1',
								duration: '节点耗时1',
								endTime: '结束时间1',
								status: '1',
								userCode: '用户代码1',
								username: '用户名1'
							},
							{
								comment: '审批意见2',
								createTime: '创建时间2',
								duration: '节点耗时2',
								endTime: '结束时间2',
								status: '2',
								userCode: '用户代码2',
								username: '用户名2'
							},
						],
						taskName: '任务名称1'
					},
					{
						taskList: [{
								comment: '审批意见1',
								createTime: '创建时间1',
								duration: '节点耗时1',
								endTime: '结束时间1',
								status: '3',
								userCode: '用户代码1',
								username: '用户名1'
							},
							{
								comment: '审批意见2',
								createTime: '创建时间2',
								duration: '节点耗时2',
								endTime: '结束时间2',
								status: '1',
								userCode: '用户代码2',
								username: '用户名2'
							},
						],
						taskName: '任务名称2'
					},
					{
						taskList: [{
							comment: null,
							createTime: '创建时间1',
							duration: '节点耗时1',
							endTime: null,
							status: 0,
							userCode: '用户代码1',
							username: '用户名1'
						}],
						taskName: '任务名称2'
					}
				],
			}
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
			}
		}
	}
</script>

<style>
	.task-label-text {
		font-size: 14px;
		color: #888888;
	}
</style>
