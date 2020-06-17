<template>
	<view class="topic-new-list u-f-ac animate__animated animate__bounceInRight" @tap="openTopicDetail">
		<image :src="item.titlepic" mode="aspectFill" lazy-load></image>
		<view>
			<view>#{{item.title}}#</view>
			<view>{{item.desc}}</view>
			<view>动态 {{item.totalnum}} 今日 {{item.todaynum}}</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number
		},
		methods:{
			openTopicDetail(){
				uni.navigateTo({
					url:"../../pages/topic-detail/topic-detail"
				})
			}
		}
	}

</script>

<style scoped>
	.topic-new{
		padding: 20upx;
	}
	.topic-new>view:first-child{
		padding-bottom: 10upx;
		font-size: 30upx;
		font-weight: bolder;
		margin-left: 10upx;
	}
	
	.topic-new-list{
		padding: 30upx 0;
		border-bottom: 1upx solid #EEEEEE;
	}
	.topic-new-list>image{
		width: 180upx;
		height: 180upx;
		border-radius: 15upx;
	}
	.topic-new-list>view{
		margin-left: 30upx;
	}
	.topic-new-list>view>view:first-child{
		font-size: 36upx;
		margin-top: 10upx;
	}
	.topic-new-list>view>view:nth-child(2){
		color: #9E9E9E;
	}
	.topic-new-list>view>view:nth-child(3){
		color: #9E9E9E;
	}
</style>
