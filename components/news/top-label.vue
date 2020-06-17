<template>
	<view class="top-nav">
		<view class="u-f-acjb">
			<view>热门分类</view>
			<view class="u-f-ac" @tap="openTopicNav">
				更多
				<view class="icon iconfont icon-gengduo"></view>
			</view>
		</view>
		<view class="u-f-ac">
			<block v-for="(item,index) in label">
				<view>{{item.name}}</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			label:Array
		},
		methods:{
			openTopicNav(){
				uni.navigateTo({
					url:"../../pages/topic-nav/topic-nav"
				})
			}
		}
	}

</script>

<style>
	.top-nav {
		border-bottom: 1upx solid #EEEEEE;
		border-top: 1upx solid #EEEEEE;
		padding: 20upx;
	}
	
	.top-nav>view:first-child {
		margin-bottom: 10upx;
	}
	
	.top-nav>view:first-child view {
		color: #9E9E9E;
	}
	
	.top-nav>view:first-child>view:first-child {
		color: #333333;
		font-size: 30upx;
		font-weight: bolder;
		padding: 0 10upx;
	}
	
	.top-nav>view:last-child {}
	
	.top-nav>view:last-child>view {
		flex: 1;
		background: #EEEEEE;
		color: #9e9e9e;
		border-radius: 10upx;
		margin: 0 10upx;
		display: flex;
		justify-content: center;
		text-align: center;
	}
</style>
