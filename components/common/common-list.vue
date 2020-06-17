<template>
	<view class="common-list u-f animate__animated animate__bounceInRight" >
		<view class="common-left">
			<image :src='item.userpic' mode="aspectFill" lazy-load></image>					
		</view>
		<view class="common-right">
			<view class="u-f-acjb">
				<view class="u-f-ac">
					{{item.username}}
					<tag-sex-age :item="item.sex" :age="item.age"></tag-sex-age>
				</view>
				<view>
					<view v-show="!isguanzhu" class="icon iconfont icon-21" @tap="guanzhu">
						关注
					</view>
				</view>
				
					
			</view>
			<view class="u-f-ac">{{item.title}}</view>
			<view class="u-f-ajc">
				<!-- 图片-->
				<image v-if="item.titlepic" :src="item.titlepic" mode="widthFix" lazy-load></image>
				<!-- 视频-->
				<template v-if="item.video">
					<view class="common-play icon iconfont icon-bofang"></view>
					<view class="common-play-info"> 
					{{item.video.looknum}} 次播放 {{item.video.playduration}}
					</view>
				</template>
				
				<!-- 分享 -->
				<view class="common-share u-f-ac" v-if="item.share">
					<image :src="item.share.titlepic" mode="widthFix" lazy-load></image>
					<view>{{item.share.title}}</view>
				</view>
			</view>
			<view class="u-f-acjb">
				<view class="u-f-ac">
					<view>{{item.address}}</view>
				</view>
				<view class="u-f-ac">
					<view class="icon iconfont icon-zhuanfa">{{item.sharenum}}</view>
					<view class="icon iconfont icon-pinglun">{{item.commentnum}}</view>
					<view class="icon iconfont icon-dianzan">{{item.likenum}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tagSexAge from "./tag-sex-age.vue"
	export default{
		components:{
			tagSexAge
		},
		props:{
			item:Object,
			index:Number
		},
		data() {
			return {
				isguanzhu:this.item.isguanzhu
			}
		},
		methods:{
			guanzhu(){
				this.isguanzhu = true
				uni.showToast({
					title:'关注成功',
					duration:2000
				})
			}
		}
	}
</script>

<style scoped>
	.common-share{
		background: #EEEEEE;
		width: 100%;
		padding: 10upx;
		border-radius: 10upx;
	}
	.common-share>image{
		width: 200upx;
		height: 150upx;
		border-radius: 10upx;
		margin-right: 10upx;
	}
	
	.common-left>image{
		width: 70upx;
		height: 70upx;
		border-radius: 100%;
	}
	.common-right{
		margin-left: 15upx;
		border-bottom: 1upx solid #EEEEEE;
		padding-bottom: 10upx;
		width: 100%;
	}
	.common-list{
		padding: 10upx 10upx;
	}
	.common-right>view:nth-child(3)>image{
		border-radius: 20upx;
		width: 100%;
	}
	.common-right>view:nth-child(1)>view:first-child{
		color: #999999;
		font-size: 32upx;
	}
	.common-right>view:nth-child(1)>view:last-child{
		background-color: #F4F4F4;
		border-radius: 5upx;
		padding: 0 10upx;
	}
	.common-right>view:nth-child(1)>view:last-child>view{
		font-size: 30upx;
	}
	.common-right>view:nth-child(2){
		font-size: 32upx;
		padding: 10upx 0;
	}
	.common-right>view:nth-child(3){
		position: relative;
	}
	.common-play,.common-play-info{
		position: absolute;
		color: #FFFFFF;
	}
	.common-play{
		font-size: 130upx;
	}
	.common-play-info{
		right: 10upx;
		bottom: 10upx;
		font-size: 25upx;
		padding: 0 20upx;
		border-radius: 20upx;
		background: rgba(51,51,51,0.73);
	}
	
	.common-right>view:nth-child(4)>view{
		color: #AAAAAA;
	}
	.common-right>view:nth-child(4)>view:nth-child(2)>view{
		margin-left: 10upx;
		padding-left: 5upx;
		
	}
	
	
	
</style>
