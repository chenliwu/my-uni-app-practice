<template>
	<view style="height: 100vh;" class="flex">
		<MyTaskContainer :flowTrackList="flowTrackList"></MyTaskContainer>
	</view>
</template>

<script>
	import MyTaskContainer from '../../components/MyTaskContainer/MyTaskContainer.vue';
	export default {
		components:{
			MyTaskContainer
		},
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
