<template>
	<view style="height: 100vh;">
		<robby-image-upload ref="uploadFilesElement" v-model="imageData" @delete="deleteImage" @add="addImage" :enable-drag="enableDrag"
		 :enable-del="enableDel" :enable-add="enableAdd" :limit="limitNumber"></robby-image-upload>
		<view v-for="(item,index) in imageData" :key="index" class="">
			{{index}}. {{item.substr(-14)}}
		</view>
		<button @click="uploadFiles()" type="primary">上传文件</button>
	</view>
</template>

<script>
	import robbyImageUpload from '@/components/robby-image-upload/robby-image-upload.vue';
	export default {
		data() {
			return {
				enableDel: true,
				enableAdd: true,
				enableDrag: true,
				limitNumber: 8,
				imageData: [],
				//serverUrl: 'http://localhost:1234/work/uploadWorkPicture',
				//serverUrlDeleteImage: 'http://localhost:1234/work/deleteWorkPicture',
				formData: {

				},
				allImagesBlobList: []
			}
		},
		components: {
			robbyImageUpload
		},
		methods: {
			deleteImage: function(e) {
				// {currentImage,allImages}
				console.log(e);
			},
			addImage: function(event) {
				console.log(event);

				this.allImagesBlobList.push(event.currentImage);

				// const flag = this.allImagesBlobList.some(function(item,index,arr){
				// 	return item == event.currentImage;
				// });
				// if(flag){
				// 	this.$refs.uploadFilesElement.value = this.$refs.uploadFilesElement.value.filter(function(item){
				// 		return item!=  event.currentImage;
				// 	});
				// }else{
				// 	this.allImagesBlobList.push(event.currentImage);
				// }
				// if(flag){
				// 	uni.showToast({
				// 		title: '不能重复上传图片',
				// 		icon: 'none'
				// 	});
				// }else{
				// 	this.allImagesBlobList.push(event.currentImage);
				// }
			},

			uploadFiles() {
				console.log('uploadFiles:', this.$refs.uploadFilesElement.value);
				let files = [];
				var formData = new FormData();
				this.$refs.uploadFilesElement.value.map(function(item, index, arr) {
					files.push(item);
					formData.append()
				});
				console.log('files:', files);

				uni.uploadFile({
					url: 'http://192.168.16.104:8080/file/uploadFiles', 
					filePath: '',
					files:files,
					name: 'files',
					fileType:'image',
					formData: {
						'user': 'test'
					},
					success: function(uploadFileRes) {
						console.log('success');
						console.log(uploadFileRes.data);
					},
					fail:function(){
						console.log('fail');
					}
				});

				// uni.request({
				// 	url: 'http://192.168.16.104:8080/file/uploadFiles',
				// 	// header:{
				// 	// 	'content-type':'multipart/form-data'
				// 	// },
				// 	method: 'POST',
				// 	data: {
				// 		files:files
				// 	},
				// 	success: function(res){
				// 		console.log('success:',res);
				// 	},
				// 	fail: function(){
				// 		console.log('fail');
				// 	},
				// });
			}
		}
	}
</script>

<style>

</style>
