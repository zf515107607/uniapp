<template>
	<view class="tag-sex icon iconfont" :class="[sex==0?'icon-nan nan':'icon-nv nv']">
		{{age}}
	</view>
</template>

<script>
	export default{
		props:{
			sex:Number,
			age:Number
		}
	}
</script>

<style scoped>
	.tag-sex{
		color: #FFFFFF;
		font-size:24upx ;
		padding: 5upx 10upx;
		margin-left: 10upx;
		border-radius: 20upx;
		line-height: 22upx;
	}
	.nan{
		background: #007AFF;
	}
	.nv{
		background: #E80080;
	}
</style>
