<template>
	<view>
		<topic-info :item="topicInfo"></topic-info>
		<!-- tab切换 -->
		<tab-bar-head :tabBars="tabBars" :tabIndex="tabIndex" scrollStyle="border-bottom: 0" scrollItemStyle="width: 50%"
		 @tabtap="tabtap"></tab-bar-head>
		<!-- 资讯列表 -->
		<view class="topic-detail-list">
			<block v-for="(item,index) in tablist" :key='index'>
				<template v-if="index==tabIndex">
					<!-- 列表 -->
					<block v-for="(item1,index1) in item.list">
						<common-list :item="item1" :index="index1"></common-list>
					</block>
					<!-- 上拉加载 -->
					<load-more :loadtext="item.loadtext"></load-more>
				</template>
			</block>
		</view>
	</view>

</template>

<script>
	import topicInfo from "../../components/topic/topic-info.vue"
	import tabBarHead from '../../components/index/tab-bar-head.vue'
	import commonList from "../../components/common/common-list.vue"
	import loadMore from "../../components/common/load-more.vue"
	export default {
		components: {
			topicInfo,
			tabBarHead,
			commonList,
			loadMore
		},
		data() {
			return {
				topicInfo: {
					titlepic: "../../static/pic/kakaluote2.png",
					title: "忆往事，敬余生",
					desc: "话题描述",
					totalnum: 350,
					todaynum: 123
				},
				tabIndex: 0,
				tabBars: [{
						name: "默认",
						id: "moren"
					},
					{
						name: "最新",
						id: "zuixin"
					}
				],
				tablist: [{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/pic/beijita.png",
								username: "张三",
								sex: 1, //0:男、1:女
								age: 35,
								isguanzhu: false,
								title: "这是资讯标题",
								titlepic: "../../static/pic/jinx.png",
								video: false,
								share: false,
								address: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								likenum: 50
							}, {
								userpic: "../../static/pic/beijita.png",
								username: "张三",
								sex: 1, //0:男、1:女
								age: 35,
								isguanzhu: false,
								title: "这是资讯标题",
								titlepic: "../../static/pic/jinx.png",
								video: false,
								share: false,
								address: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								likenum: 50
							},
							{
								userpic: "../../static/pic/beijita.png",
								username: "张三",
								sex: 1, //0:男、1:女
								age: 35,
								isguanzhu: false,
								title: "这是资讯标题",
								titlepic: "../../static/pic/jinx.png",
								video: false,
								share: false,
								address: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								likenum: 50
							}
						]
					},
					{
						loadtext: "上拉加载更多",
						list: [{
								userpic: "../../static/pic/duolaameng.png",
								username: "张三",
								sex: 1, //0:男、1:女
								age: 35,
								isguanzhu: false,
								title: "这是资讯标题",
								titlepic: "../../static/pic/fengnv.png",
								video: false,
								share: false,
								address: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								likenum: 50
							}, {
								userpic: "../../static/pic/beijita.png",
								username: "张三",
								sex: 1, //0:男、1:女
								age: 35,
								isguanzhu: false,
								title: "这是资讯标题",
								titlepic: "../../static/pic/jinx.png",
								video: false,
								share: false,
								address: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								likenum: 50
							},
							{
								userpic: "../../static/pic/beijita.png",
								username: "张三",
								sex: 1, //0:男、1:女
								age: 35,
								isguanzhu: false,
								title: "这是资讯标题",
								titlepic: "../../static/pic/jinx.png",
								video: false,
								share: false,
								address: "深圳 龙岗",
								sharenum: 20,
								commentnum: 30,
								likenum: 50
							}
						]
					}
				]
			}
		},
		onReachBottom() {
			//上拉加载
			this.loadmore()

		},
		onPullDownRefresh() {
			// 监听下拉刷新
			this.getData()
		},
		methods: {
			getData() {
				setTimeout(() => {
					// 获取数据
					let arr = [{
							userpic: "../../static/pic/jinx.png",
							username: "张三",
							sex: 1, //0:男、1:女
							age: 35,
							isguanzhu: false,
							title: "这是资讯标题",
							titlepic: "../../static/pic/lanbo.png",
							video: false,
							share: false,
							address: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							likenum: 50
						}, {
							userpic: "../../static/pic/duolaameng.png",
							username: "张三",
							sex: 1, //0:男、1:女
							age: 35,
							isguanzhu: false,
							title: "这是资讯标题",
							titlepic: "../../static/pic/kakaluote1.png",
							video: false,
							share: false,
							address: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							likenum: 50
						},
						{
							userpic: "../../static/pic/kakaluote2.png",
							username: "张三",
							sex: 1, //0:男、1:女
							age: 35,
							isguanzhu: false,
							title: "这是资讯标题",
							titlepic: "../../static/pic/jinx.png",
							video: false,
							share: false,
							address: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							likenum: 50
						}
					]
					// 赋值
					this.tablist[this.tabIndex].list = arr
					// 关闭下拉刷新
					uni.stopPullDownRefresh()
				}, 2000)
			},

			// 点击切换
			tabtap(index) {
				this.tabIndex = index
			},
			loadmore() {
				if (this.tablist[this.tabIndex].loadtext != "上拉加载更多") {
					return;
				}
				this.tablist[this.tabIndex].loadtext = "加载中...";
				setTimeout(() => {
					let obj = {
						userpic: "../../static/pic/beijita.png",
						username: "张三",
						sex: 1, //0:男、1:女
						age: 35,
						isguanzhu: false,
						title: "这是资讯标题",
						titlepic: "../../static/pic/jinx.png",
						video: false,
						share: false,
						address: "深圳 龙岗",
						sharenum: 20,
						commentnum: 30,
						likenum: 50
					}
					this.tablist[this.tabIndex].list.push(obj);
					this.tablist[this.tabIndex].loadtext = "上拉加载更多";

				}, 1000);

				// this.newslist[index].loadtext = "加载中...";
				// this.newslist[index].loadtext = "没有更多数据了";
			}
		}
	}
</script>

<style>
</style>
