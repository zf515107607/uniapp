<template>
	<view>
		搜索页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		// 监听原生标题导航栏按钮点击事件
		onNavigationBarButtonTap(e){
			if (e.index == 0){
				uni.navigateBack({
					delta:1
				})
			}
		},
		onNavigationBarSearchInputChanged(e){
			uni.showToast({
				title:JSON.stringify(e),
				icon:"none",
				duration:3000
			})
		},
		onNavigationBarSearchInputConfirmed(e){
			uni.showToast({
				title:JSON.stringify(e),
				icon:"none",
				duration:1000
			})
		},
		
		methods: {
			
		},
		mounted() {
			let a = document.getElementsByClassName('uni-page-head-hd')[0]
			a.style.display = 'none'
		}
		
	}
</script>

<style>

</style>
