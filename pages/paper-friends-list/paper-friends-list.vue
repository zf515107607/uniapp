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
			<user-list :item='item' :index="index"></user-list>
		</block>
		
	</view>
</template>

<script>
	import tabBarHead from '../../components/index/tab-bar-head.vue'
	import tagSexAge from '../../components/common/tag-sex-age.vue'
	import userList from "../../components/user-list/user-list.vue"
	export default {
		components:{
			tabBarHead,
			tagSexAge,
			userList
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
	
</style>
