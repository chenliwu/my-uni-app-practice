<template>
	<view class="uni-common-mt uni-padding-wrap">
		<view class="content">
			<form @submit="formSubmit">
				<view class="section">
					<view class="section__title">账号</view>
					<input class="uni-input" name="account" placeholder="请输入账号" />
				</view>

				<view class="section">
					<view class="section__title">密码</view>
					<input class="uni-input" name="password" type="text" password="true" placeholder="请输入登录密码" />
				</view>
				<view class="btn-area" style="margin-top: 20px;margin-bottom: 10px;"><button formType="submit" type="primary">登录</button></view>
			</form>
			<view @click="toRegister()" class="register-findpwd-container"><view class="registerText">注册账号</view></view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		toRegister: function() {
			uni.redirectTo({
				url: '../register/register'
			});
		},

		formSubmit: function(e) {
			console.log(e.detail.value);
			this.login(e.detail.value.account, e.detail.value.password);
		},

		login: function(account, password) {
			if (!account) {
				uni.showToast({
					title: '请输入账号',
					icon: 'none'
				});
				return;
			}
			if (!password) {
				uni.showToast({
					title: '请输入密码',
					icon: 'none'
				});
				return;
			}

			uni.showLoading({
				title: '正在登录中',
				mask: true
			});
			setTimeout(function() {
				uni.hideLoading();
				uni.showToast({
					title: `输入的账号为：${account};密码为:${password}`,
					icon: 'success',
					mask: true
				});
				
				// 发送登录请求
				uni.request({
					url: 'http://192.168.0.178:8088/webUtils/api/user/login',
					method: 'GET',
					data: {
						username:account,
						password:password
					},
					success: function (res) {
						console.log('success');
						console.log('res:',res);
					},
					fail: function () {
						console.log('fail');
					},
					complete: function () {
						console.log('complete');
					}
				});
				
				
				// 打开Tab页面，要用reLaunch
				// uni.reLaunch({
				// 	url:'../tabBar/index/index'
				// });
				
			}, 1000);
		}
	}
};
</script>

<style>
.content {
	/* Safari */
	/* display: -webkit-flex; */
	/* 指定为 Flex 布局 */
	/* display: flex;	 */
	display: '-webkit-flex';
	flex: 1;
	flex-direction: 'column';
	justify-content: 'center';
	align-items: 'center';
}
.registerText {
	font-size: 18px;
	color: #007aff;
}
.register-findpwd-container {
	display: 'flex';
	flex-direction: 'row';
	justify-content: 'center';
	align-items: 'center';
}
</style>
