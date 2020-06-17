<template>
	<view>
		<uni-nav-bar :fixed="true" class="nav-bar-news" :statusBar="true" @clickRight="openAdd" style="width:100%;">
			<!-- 左边 -->
				<block slot='left'>
					<view class="nav-left">
						<view class="icon iconfont icon-qiandao"></view>
					</view>
				</block>
			<!-- 中间 -->
				<view class="nav-tav-bar u-f-ajc">
					<block v-for="(tab,index) in tabBars" :key="tab.id">
						<view class="u-f-ajc" :class="{'active':tabIndex==index}" @tap="changeTab(index)">
							{{tab.name}}
							<view v-if="(tabIndex==index)" class="nav-tav-bar-line"></view>
						</view>
					</block>
					
		
				</view>
			<!-- 右边 -->
				<block slot='right'>
					<view class="nav-right">
						<view class="icon iconfont icon-bianji"></view>
					</view>
				</block>
		</uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components:{
			uniNavBar
		},
		props:{
			tabBars:Object,
			tabIndex:Number
		},
		data() {
			return {
				
			}
		},
		methods: {
			openAdd(){
				uni.navigateTo({
					url:"../add-input/add-input"
				});
			},
			changeTab(index){
				this.$emit('change-tab',index)
			}
		}
	}
</script>

<style scoped>
	.nav-left,.nav-right{
		/* border: 1upx solid; */
	}
	.nav-left>view,.nav-right>view{
		font-size: 43upx;
	}
	.nav-left>view{
		color: #FF9619;
	}
	.nav-left{
		margin-left: 10px;
	}
	.nav-right{
		width: 0upx;
	}
	.nav-tav-bar{
		width: 100%;
		margin-left: -10upx;
		position: relative;
	}
	.nav-tav-bar>view{
		font-size: 30upx;
		padding: 0 15upx;
		font-weight: bold;
		color: #969696;
	}
	.active{
		color: #333333!important;
	}
	.nav-tav-bar-line{
		border-bottom: 5upx solid #FEDE33;
		border-top: 5upx solid #FEDE33;
		width: 60upx;
		border-radius: 20upx;
		position: absolute;
		bottom: 0upx;
	}
</style>
