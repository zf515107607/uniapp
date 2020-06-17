<template>
	<view>
		<!-- 模糊背景 -->
		<view class="topic-bg">
			<image :src="item.titlepic" mode="scaleToFill" lazy-load="true" ></image>
		</view>
		<!-- 话题信息 -->
		<view class="topic-info">
			<view class="topic-info-t">
				<image :src="item.titlepic" mode="scaleToFill" lazy-load="true"></image>
				<view>#{{item.title}}#</view>
			</view>
			<view class="topic-info-c u-f-ac">
				<view>动态 {{item.totalnum}}</view>
				<view>今日 {{item.todaynum}}</view>
			</view>
			<view class="topic-info-b">
				{{item.desc}}
			</view>
		</view>
	</view>
	
</template>

<script>
	export default{
		props:{
			item:Object
		}
	}
</script>

<style scoped>
	.topic-bg{
		width: 100%;
		height: 300upx;
		position: relative;
		overflow: hidden;
	}
	.topic-bg>image{
		width: 100%;
		position: absolute;
		filter: blur(7px);
	}
	.topic-info{
		padding: 0 20upx;
	}
	.topic-info-t{
		padding: 15upx;
		position: relative;
	}
	.topic-info-t>image{
		width: 150upx;
		height: 150upx;
		border-radius: 20upx;
		position: absolute;
		top: -75upx;
	}
	.topic-info-t>view{
		font-size: 35upx;
		margin-left: 150upx;
		flex: 1;
	}
	.topic-info-c{
		padding:5upx 0 20upx 15upx;
	}
	.topic-info-c>view{
		margin-right: 20upx;
		color: #cdcdcd;
	}
	.topic-info-b{
		color: #A3A3A3;
		font-size: 32upx;
		padding:10upx 15upx	
	}
</style>
