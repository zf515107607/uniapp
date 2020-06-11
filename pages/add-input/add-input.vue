<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar :statusBar="true" rightText="发布" leftIcon="back" @clickLeft="back" @clickRight="submit">
			<view class="u-f-ajc">
				<view>所有人可见</view>
				<view class="icon iconfont icon-xiala2"></view>
			</view>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components:{
			uniNavBar
		},
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				
			},
			submit(){
				
			}
		}
	}
</script>

<style>

</style>
