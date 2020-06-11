<template>
	<view class="index-list animate__animated animate__bounceInRight">
		<view class="index-list-1 u-f-acjb">
			<view class="u-f-ac">
				<image :src="item.userpic" mode="aspectFill" lazy-load></image>
				{{item.username}}
			</view>
			<view class="u-f-ac" v-show="!item.isguanzhu" @tap="guanzhu">
				<view class="icon iconfont icon-21">关注</view>
			</view>
			
		</view>
		<view class="index-list-2">{{item.title}}</view>
		<view class="index-list-3 u-f-ajc">
				<image :src="item.titlepic" mode="widthFix" lazy-load></image>
				<template v-if="item.type=='video'">
					<view class="icon iconfont icon-bofang index-list-play"></view>
					<view class="index-list-playinfo"> {{item.playnum}}次播放 {{item.long}}</view>	
				</template>
						
		</view>
		<view class="index-list-4 u-f-acjb">
			<view class="u-fac" >
				<view class="u-f-ac" :class="{'active':item.infonum.index ==1}" @tap="caozuo('ding')"><view class="icon iconfont icon-xiaolian" ></view>{{item.infonum.dingnum}}</view>
				<view class="u-f-ac" :class="{'active':item.infonum.index ==2}" @tap="caozuo('cai')"><view class="icon iconfont icon-kulian" ></view>{{item.infonum.cainum}}</view>
			</view>
			<view class="u-fac">
				<view class="u-f-ac"><view class="icon iconfont icon-pinglun"></view>{{item.commentnum}}</view>
				<view class="u-f-ac"><view class="icon iconfont icon-zhuanfa"></view>{{item.sharenum}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				item: Object,
				index:Number
			},
		},
		methods:{
			guanzhu(){
				this.item.isguanzhu = true
				uni.showToast({
					title:"关注成功",
					duration:1500
				})
			},
			caozuo(type){
				switch (type){
					case "ding":
						if (this.item.infonum.index == 1){
							this.item.infonum.dingnum--;
							this.item.infonum.index = 0;
						};
						this.item.infonum.dingnum++;
						if (this.item.infonum.index == 2){
							this.item.infonum.cainum--;
						}
						this.item.infonum.index = 1;
						break;
					case "cai":
						if (this.item.infonum.index == 2){
							this.item.infonum.cainum--;
							this.item.infonum.index = 0;
						};
						if (this.item.infonum.index == 1){
							this.item.infonum.dingnum--;
						}
						this.item.infonum.cainum++;
						this.item.infonum.index = 2;
						break;
				}
			}
		}
	}
</script>

<style>
.index-list{
		padding: 20upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.index-list-1>view:first-child{
		color: #999999;		
	}
	.index-list-1>view:first-child image{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;		
	}
	.index-list-1>view:last-child{
		background-color: #F4F4F4;
		border-radius: 5upx;
		padding: 0 10upx;		
	}
	.index-list-2{
		padding-top: 15upx;
		font-size: 32upx;
	}
	.index-list-3{
		position: relative;
		padding-top: 15upx;
	}
	.index-list-play{
		position: absolute;
		color:#FFFFFF;
		font-size: 140upx;
	}
	.index-list-playinfo{
		position: absolute;
		background:rgba(51,51,51,0.72);
		color: #FFFFFF;
		bottom:8upx ;
		right: 8upx;
		border-radius: 40upx;
		font-size: 25upx;
		padding:0 12upx ;
	}
	
	.index-list-3>image{
		width: 100%;
		border-radius: 20upx;
	}
	.index-list-4{
		padding: 15upx 0;
	}
	.index-list-4 view{
		color: #999999;	
	}
	.index-list-4>view>view{
		display: flex;
		align-items: center;		
	}
	.index-list-4>view:first-child{
		display: flex;
		align-items: center;		
	}
	.index-list-4>view:last-child{
		display: flex;
		align-items: center;		
	}
	.index-list-4>view>view:first-child{
		margin-right:10upx ;
	}
	.index-list-4>view>view>view{
		margin-right: 10upx;		
	}
	.index-list-4 .active,.index-list-4 .active view{
		color: #c5f61c;
	}
</style>
