<template>
	<view class="body">
		<!-- tab切换 -->
		<tab-bar-head 
			:tabBars="tabBars" 
			:tabIndex="tabIndex" 
			scrollStyle="border-bottom: 0" 
			scrollItemStyle="width: 33%"
			@tabtap="tabtap">
			
		</tab-bar-head>
		
		<!-- 好友列表 -->
		<block v-for="(item,index) in list" :key="index">
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
		</block>
		
	</view>
</template>

<script>
	import tabBarHead from '../../components/index/tab-bar-head.vue'
	import tagSexAge from '../../components/common/tag-sex-age.vue'
	export default {
		components:{
			tabBarHead,
			tagSexAge
		},
		data() {
			return {
				tabIndex: 0,
				tabBars: [{
						name: "互关",
						id: "huguan",
						num:10
					},
					{
						name: "关注",
						id: "guanzhu",
						num:20
					},
					{
						name: "粉丝",
						id: "fensi",
						num:30
					}
				],
				list:[
					{
						userpic:"../../static/pic/beijita.png",
						username:"贝吉塔",
						sex:1,
						age:19,
						isAdd:true
					},
					{
						userpic:"../../static/pic/kakaluote2.png",
						username:"卡卡罗特",
						sex:0,
						age:19,
						isAdd:false
					}
				]
			}
		},
		methods: {
			// 点击切换
			tabtap(index) {
				this.tabIndex = index
			},
		},
		// 监听导航栏按钮事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
					uni.navigateBack({
						delta:1
					})
			}
		}
	}
</script>

<style>
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
