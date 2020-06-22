<template>
	<view class="friends-list u-f-ac">
		<image :src="item.userpic" mode="aspectFill" lazy-load="true"></image>
		<view>
			<view class="nikename">{{item.username}}</view>
			<view class="u-f-ac">
				<tag-sex-age :sex="item.sex" :age="item.age"></tag-sex-age>
			</view>		
		</view>
		<view class="icon iconfont u-f-ajc" :class="[item.isAdd?'icon-duigou isAdd':'icon-jiahao2 noAdd']"></view>
	</view>
</template>

<script>
	export default{
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style scoped>
	.friends-list{
		padding: 20upx;
		border-bottom: 1upx solid #EEEEEE;
	}
	.friends-list>image{
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		margin-right: 20upx;
		flex-shrink: 0;	
	}
	.friends-list>view:first-of-type{
		flex: 1;
	}
	.nikename{
		margin-left: 10upx;
		font-size: 32upx;
	}
	.friends-list>view:last-of-type{
		width: 80upx;
		
		font-size: 35upx;
	}
	.isAdd{
		color: #EEEEEE;
	}
	.noAdd{
		color: #F87918;
	}
</style>
