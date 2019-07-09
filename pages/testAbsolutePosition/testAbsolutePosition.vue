<template>
	<view style="height: 100vh;" class="">
		<view style="background-color: #FFFFFF;position:absolute;width: 100%;" class="uni-flex uni-column">
			<uni-segmented-control
				style="width: 100%;padding: 5px;"
				:current="activeTabIndex"
				:values="segmentTitleItems"
				@clickItem="tabChange"
				style-type="text"
				active-color="#6a91f8"
			></uni-segmented-control>

			<view v-show="activeTabIndex == 0" style="flex:1;height: 100vh;position: relative;" class="uni-flex uni-column">
				<!-- v-bind:style="approveDetailContanerStyle" -->
				<view class="uni-flex uni-column" style="position: relative;padding: 10px 10px 5px 10px;margin-bottom: 10px;">
					<view style="display: flex;display: -webkit-flex;flex-direction: column;z-index: 80;margin-top: 5px;">
						<!-- <text class="label-text">业务单号：{{approveItem.businessId}}</text> -->
						<text class="label-text">申请单位：{{ approveItem.corpName }}</text>
						<text class="label-text">申请人：{{ approveItem.username }}</text>
						<text class="label-text">申请时间：{{ approveItem.createTime }}</text>
					</view>
				</view>

				<block v-if="activeTabIndex == 0 && approveDetailUrl != null">
					<view style="flex:2;position: relative;margin-top: 15px;" class="">
						<!-- v-bind:style="webviewChangeStyle" -->
						<web-view
							id="webView"
							v-bind:style="webviewChangeStyle"
							style="flex:1;height: 100vh;position: absolute;top:0px;"
							:webview-styles="webviewStyles"
							:src="approveDetailUrl"
						></web-view>
					</view>
				</block>
			</view>

			<view v-show="activeTabIndex == 1" style="flex:1;height: 100vh;" class="uni-flex uni-column"></view>
		</view>

		<!-- v-bind:style="{ bottom: actionButtonContainerBotton }" -->
		<view v-show="isShowActionButton" class="uni-flex uni-column" style="z-index: 120;width: 100%;height: 100px;position: absolute;bottom: 0;">
			<view style="background-color:#F1F1F1;padding: 5px;flex:1;display: flex;align-items: center;">
				<input
					v-model="comment"
					@focus="inputCommentsFocus"
					@blur="inputCommentsBlur"
					@confirm="inputCommentsConfirm"
					style="width: 100%;background-color: #FFFFFF;padding: 5px;"
					placeholder="输入意见..."
				/>
			</view>
			<view class="uni-flex uni-row text-center" style="flex:1;">
				<view @click="submitAction(3)" class="submit-button ripple" style="background-color:#f76767;flex:1;"><text class="submit-button-text">打回制单处</text></view>
				<view @click="submitAction(2)" class="submit-button ripple" style="background-color: #bbc9ed;flex:1;"><text class="submit-button-text">打回上一级</text></view>
				<view @click="submitAction(1)" class="submit-button ripple" style="background-color: #6a91f8;flex:2;"><text class="submit-button-text">同意</text></view>
			</view>
		</view>

		<view
			v-show="!isShowActionButton"
			@click="showActionButton()"
			class="uni-flex uni-column"
			style="background-color: transparent;z-index: 99;width: 100%;height: 70px;position: fixed;bottom: 0;"
		></view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import WucTab from '@/components/wuc-tab/wuc-tab.vue';
import uniSegmentedControl from '@/components/uni-segmented-control/uni-segmented-control.vue';

import moment from 'moment';

// 底部按钮容器的高度
const actionButtonContainerHeight = 150;

//获取运行平台
const isIos = uni.getSystemInfoSync().platform == 'ios';
const isAndroid = uni.getSystemInfoSync().platform == 'android';

// 页面滑动方向
const SCROLL_DIRECTION_UP = 0; //表示往上滚动
const SCROLL_DIRECTION_DOWN = 1; //表示往下滚动

export default {
	onLoad: function(options) {
		if (isAndroid) {
			this.webviewChangeStyle = {
				height: '97vh'
			};
		} else if (isIos) {
			this.webviewChangeStyle = {
				height: '70vh'
			};
		}
	},
	onReady() {
		window.addEventListener('resize', function(event) {
			console.log('resize:', event);
			const activeElement = document.activeElement;
			uni.showToast({
				title: 'resize',
				icon: 'none'
			});
			if (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA') {
				setTimeout(() => {
					//activeElement.scrollIntoViewIfNeeded();
				}, 100);
			}
		});
	},
	onPageScroll: function(obj) {
		if (this.activeTabIndex != 0 || this.inputCommentsFucos) {
			return;
		}
		// if (this.inputCommentsFucos && this.comments.length > 0) {
		// 	return;
		// }
		//监听页面滚动，参数为Object
		let scrollTop = obj.scrollTop;
		//console.log('onPageScroll:', scrollTop);

		if (this.scrollTop < scrollTop) {
			//往下滑动
			this.scrollDirection = SCROLL_DIRECTION_DOWN;
		} else {
			//往上滑动
			this.scrollDirection = SCROLL_DIRECTION_UP;
		}

		if (scrollTop > 10) {
			// 当页面往上滑动，而ActionButton处于显示状态时，则不隐藏
			// 当页面往下滑动，而ActionButton处于显示状态时，则隐藏
			if (this.isShowActionButton && this.scrollDirection == SCROLL_DIRECTION_DOWN) {
				this.actionButtonContainerBotton = '-150px';
				this.isShowActionButton = false;
			}

			// 当页面往上滑动，而ActionButton处于隐藏状态时，则显示
			// if(!this.isShowActionButton && this.scrollDirection == SCROLL_DIRECTION_UP){
			// 	this.showActionButton();
			// }
		} else if (scrollTop <= 10) {
			// 显示ActionButton
			this.actionButtonContainerBotton = 0;
			this.isShowActionButton = true;
		}
		this.scrollTop = obj.scrollTop;
	},
	data() {
		return {
			authorization: null,
			accessToken: null,
			approveId: null,
			businessId: null,
			categoryId: null,
			type: 0, // 0标识待审批，1标识已审批

			comment: '',
			//approveDetailUrl: null,
			approveIsFinished: false,
			loadingDetailDataFinishd: false,
			approveDetailUrl: 'https://uniapp.dcloud.io/frame',

			// 记录审批详情json
			approveItem: {
				categoryName: null,
				corpCode: null,
				corpName: null,
				createTime: null,
				extendParams: null,
				userCode: null,
				username: null
			},
			// 流程追踪详情
			approveFlowTrack: [],

			platform: null,
			activeTabIndex: 0,
			tabList: [
				{
					name: '业务详情'
				},
				{
					name: '流程跟踪'
				}
			],
			segmentTitleItems: ['业务详情', '流程跟踪'],
			webviewStyles: {
				progress: {
					color: '#6a91f8',
					top: 200
				}
			},
			webviewChangeStyle: {
				height: '70vh'
			},

			scrollTop: 0,
			actionButtonContainerBotton: 0,
			isShowActionButton: true,
			scrollDirection: SCROLL_DIRECTION_DOWN,
			inputCommentsFucos: false
		};
	},
	components: {
		WucTab,
		uniSegmentedControl
	},
	computed: {
		//...mapState(['bfsAuthData','dotoApproveItem'])
	},
	methods: {
		// 切换tab页面
		tabChange(index) {
			this.activeTabIndex = index;
		},

		// 审批提交操作
		submitAction: function(type) {
			if ((type == 2 || type == 3) && this.comment.trim().length == 0) {
				uni.showModal({
					title: '请填写审批意见',
					content: '填写详细的审批意见更有利于接下来的流程哦！',
					showCancel: false
				});
				return;
			}
			const that = this;
			uni.showModal({
				title: '温馨提示',
				content: '是否提交此操作？',
				cancelText: '取消',
				confirmText: '确定',
				success: function(res) {
					if (res.confirm) {
						uni.showLoading({
							title: '正在提交...',
							mask: false
						});
						setTimeout(function() {
							uni.request({
								url: BfsServerConfigs.baseURL + '/api/flow/approve',
								method: 'POST',
								data: {
									ids: [that.approveId],
									action: type,
									comment: that.comment
								},
								header: {
									Authorization: that.authorization
								},
								success: function(res) {
									uni.hideLoading();
									console.log('');
									console.log('submitAction success:', res);
									if (res.data.success) {
										// 操作成功
										uni.showToast({
											title: '操作成功'
										});
										that.approveIsFinished = true;
										// 跳转到审批已完成页面
										uni.redirectTo({
											url: '../approvedPage/approvedPage'
										});
									} else {
										uni.showModal({
											title: '提示信息',
											content: '操作失败，请联系管理员!',
											showCancel: false
										});
									}
								},
								fail: function(ex) {
									uni.hideLoading();
									console.log('');
									console.log('submitAction fail:', ex);
									uni.showModal({
										title: '提示信息',
										content: '操作失败!',
										showCancel: false
									});
								},
								complete: function() {}
							});
						}, 500);
					} else if (res.cancel) {
					}
				}
			});
		},

		// 显示审批操作按钮
		showActionButton() {
			this.actionButtonContainerBotton = 0;
			this.isShowActionButton = true;
		},

		inputCommentsFocus(event) {
			this.inputCommentsFucos = true;
		},

		inputCommentsBlur(event) {
			this.inputCommentsFucos = false;
		},

		inputCommentsConfirm(event) {
			setTimeout(function() {
				this.inputCommentsFucos = false;
			}, 1000);
		}
	}
};
</script>

<style>
.flow-track-title {
	font-size: 18px;
	height: 40px;
	width: 120px;
	line-height: 40px;
	background-color: #bbc9ed;
	color: #ffffff;
	margin: 10px 0px 10px 0px;
	position: relative;
}

.bg-white {
	background-color: #ffffff;
}

.text-center {
	text-align: center;
}

.label-text {
	font-size: 16px;
	color: #888888;
}

.submit-button {
	display: flex;
	justify-content: center;
	align-items: center;
}

.submit-button-text {
	font-size: 13px;
	color: #ffffff;
}

/* 水波纹效果 */
.ripple {
	position: relative;
}

.ripple:focus {
	outline: none;
}

.ripple:after {
	content: '';
	display: block;
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	bottom: 0px;
	pointer-events: none;
	background-color: #cccccc;
	background-repeat: no-repeat;
	background-position: 50%;
	opacity: 0;
	transition: all 0.3s;
}

.ripple:active:after {
	opacity: 0.3;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	transition: 0s;
}
</style>
