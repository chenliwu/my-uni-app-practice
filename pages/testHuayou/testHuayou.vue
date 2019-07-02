<template>
	<view>
		<button type="primary" @click="test()">访问华友AccessToken</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			test() {
				uni.request({
					url: 'http://122.225.91.30:9010/api/v1/token',
					method: 'POST',
					header: {
						'Content-Type': 'application/json'
					},
					data: {
						"grant_type": "client_credentials",
						"scope": "app",
						"domain_id": "hygy",
						"org_id": "9ebd0f06-7730-452c-8bd0-9581fd083381",
						"client_id": "H3DYHfTOUS7a8qyrgY9Z2b",
						"client_secret": "Emkbjx636vuQqfLEyJlSQmcb2hMXANJl"
					},
					success: function(res) {
						console.log('success：', res);
					},
					fail: function() {
						console.log('fail：');
					}
				});
			}
		}
	}
</script>

<style>

</style>
