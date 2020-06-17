<template>
	<view class="paper-list u-f-ac animate__animated animate__bounceInRight">
		<image :src="item.userpic" mode="scaleToFill" lazy-load="true"></image>
		<view>
			<view class="u-f-ac u-f-jsb">{{item.username}} <view>{{item.newstime}}</view></view>
			<view class="u-f-ac u-f-jsb">{{item.content}} <uni-badge :text="item.newscount" type="error"></uni-badge></view>
		</view>
	</view>
</template>

<script>
	import uniBadge from "../../components/uni-badge/uni-badge.vue"
	export default{
		components:{
			uniBadge
		},
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style scoped>
	
	.paper-list{
		border-bottom: 1upx solid #EEEEEE;
		padding: 20upx 0;
	}
	.paper-list>image{
		width: 100upx;
		height: 100upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;
	}
	.paper-list>view{
		flex: 1;
	}
	.paper-list>view>view:first-child{
		font-size: 35upx;
	}
	.paper-list>view>view:first-child>view{
		color: #CBCBCB;
	}
	.paper-list>view>view:last-child{
		color: #CBCBCB;
	}
</style>
