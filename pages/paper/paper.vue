<template>
	<view class="body">
		<!-- 操作菜单 -->
		<paper-right-pop 
			:showPop="showPop"
			@hidePop="hidePop"
			@addFriend="addFriend"
			@clearCache="clearCache">
		</paper-right-pop>
		<!-- 小纸条列表 -->
		<block v-for="(item,index) in newsobj.list" :key='index'>
			<paper-list :item="item" :index="index"></paper-list>
		</block>
		<!-- 上拉加载 -->
		<load-more :loadtext="newsobj.loadtext"></load-more>
		
	</view>
</template>

<script>
	import paperList from "../../components/paper/paper-list.vue"
	import loadMore from "../../components/common/load-more.vue"
	import paperRightPop from "../../components/paper/paper-right-pop.vue"
	export default {
		components: {
			paperList,
			loadMore,
			paperRightPop
		},
		data() {
			return {
				showPop: false,
				newsobj: {
					loadtext: "上拉加载更多",
					list: [{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 4
						},
						{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 0
						},
						{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 2
						},
						{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 99
						},
						{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 15
						},
						{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 4
						},
						{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 0
						},
						{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 2
						},
						{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 99
						},
						{
							userpic: "../../static/pic/daomei.png",
							username: "昵称",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 15
						}
					]
				}
			}
		},
		// 监听下拉刷新事件
		onPullDownRefresh() {
			this.getData()
		},
		// 监听上拉事件
		onReachBottom() {
			this.loadmore()
		},
		// 监听原生导航栏按钮点击事件
		onNavigationBarButtonTap(e) {
			switch (e.index){
				case 0:
					uni.navigateTo({
						url:"../paper-friends-list/paper-friends-list"
					})
					this.hidePop()
					break
				case 1:
					this.showPop = true
					break
				
			}
		},
		methods: {
			// 获取数据
			getData() {
				setTimeout(() => {
					//从服务器获取数据
					let arr = [{
							userpic: "../../static/pic/fengnv.png",
							username: "昵称1",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 1
						},
						{
							userpic: "../../static/pic/jinx.png",
							username: "昵称2",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 2
						},
						{
							userpic: "../../static/pic/beijita.png",
							username: "昵称3",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 3
						},
						{
							userpic: "../../static/pic/duolaameng.png",
							username: "昵称4",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 4
						},
						{
							userpic: "../../static/pic/kakaluote1.png",
							username: "昵称5",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 0
						}, {
							userpic: "../../static/pic/fengnv.png",
							username: "昵称1",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 1
						},
						{
							userpic: "../../static/pic/jinx.png",
							username: "昵称2",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 2
						},
						{
							userpic: "../../static/pic/beijita.png",
							username: "昵称3",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 3
						},
						{
							userpic: "../../static/pic/duolaameng.png",
							username: "昵称4",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 4
						},
						{
							userpic: "../../static/pic/kakaluote1.png",
							username: "昵称5",
							newstime: "10:21",
							content: "消息内容预览",
							newscount: 0
						}
					]
					// 赋值
					this.newsobj.list = arr
					// 关闭下拉刷新
					uni.stopPullDownRefresh()
				}, 2000)


			},
			//	上拉加载
			loadmore() {
				if (this.newsobj.loadtext != "上拉加载更多") {
					return;
				}
				this.newsobj.loadtext = "加载中...";
				setTimeout(() => {
					let obj = {
						userpic: "../../static/pic/fengnv.png",
						username: "昵称1",
						newstime: "10:21",
						content: "消息内容预览",
						newscount: 1
					}
					this.newsobj.list.push(obj);
					this.newsobj.loadtext = "上拉加载更多";

				}, 1000);

				// this.newslist[index].loadtext = "加载中...";
				// this.newslist[index].loadtext = "没有更多数据了";
			},
			// 添加好友
			addFriend(){
				console.log("加好友")
				this.hidePop()
			},
			// 清楚缓存
			clearCache(){
				console.log("清除缓存")
				this.hidePop()
			},
			// 隐藏右上角按钮弹框
			hidePop(){
				this.showPop= false
			},
			// 显示右上角按钮弹框
			showPop(){
				this.showPop= true
			}

		},
	}
</script>

<style>
	.body {
		padding: 0 20upx;
	}
	.paper-right-pop-mask{
		position: fixed;
		top: 70upx;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
	}
	.paper-right-pop {
		position: fixed;
		right: 0;
		top: 100upx;
		background: #FFFFFF;
		z-index: 1000;
		width: 55%;
		box-shadow: 1upx 1upx 20upx 20upx #CCCCCC;
		border-radius: 10upx;
	}

	.paper-right-pop>view {
		padding: 20upx;
		font-size: 30upx;
		border-bottom: 1upx solid #EEEEEE;
	}

	.paper-right-pop>view>view {
		margin-right: 10upx;
		font-weight: bold;
		font-size: 35upx;

	}

	.paper-right-pop-hover {
		background: #EEEEEE;
	}
</style>
