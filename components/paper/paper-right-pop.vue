<template>
	<view>
		<!-- 操作菜单 -->
		<view class="paper-right-pop-mask" v-show="showPop" @tap="hidePop"></view>
		<view class="paper-right-pop" v-show="showPop">
			<view class="u-f-ac" hover-class="paper-right-pop-hover" @tap="addFriend">
				<view class="icon iconfont icon-sousuo"></view>
				加好友
			</view>
			<view class="u-f-ac" hover-class="paper-right-pop-hover" @tap="clearCache">
				<view class="icon iconfont icon-qingchu"></view>
				清除缓存
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props:{
			showPop:Boolean
			},
		methods:{
			// 隐藏右上角按钮弹框
			hidePop(){
				this.$emit("hidePop")
			},
			// 添加好友
			addFriend(){
				this.$emit("addFriend")
			},
			// 清除缓存
			clearCache(){
				this.$emit("clearCache")
			},
		}
	}
</script>

<style scoped>
	.paper-right-pop-mask{
		position: fixed;
		top: 70upx;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
	}
	.paper-right-pop {
		position: fixed;
		right: 0;
		top: 100upx;
		background: #FFFFFF;
		z-index: 1000;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 20upx #CCCCCC;
		border-radius: 10upx;
	}
	
	.paper-right-pop>view {
		padding: 20upx;
		font-size: 30upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	
	.paper-right-pop>view>view {
		margin-right: 10upx;
		font-weight: bold;
		font-size: 35upx;
	
	}
	
	.paper-right-pop-hover {
		background: #EEEEEE;
	}
</style>
