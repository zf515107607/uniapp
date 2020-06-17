<template>
	<view>
		<tab-bar-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></tab-bar-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length >0">
							<!-- 话题列表 -->
							<view class="topic-view">
								<block v-for="(item,index1) in items.list" :key="index1">
									<topic-list :item="item" :index="index1"></topic-list>
								</block>
							</view>
							
							<!-- 上拉加载更多 -->
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<template v-else>
							<no-thing></no-thing>
						</template>
						
					</scroll-view>
				</swiper-item>

			</swiper>
		</view>
	</view>
</template>

<script>
	import indexList from '../../components/index/index-list.vue'
	import tabBarHead from '../../components/index/tab-bar-head.vue'
	import loadMore from "../../components/common/load-more.vue"
	import noThing from "../../components/common/no-thing.vue"
	import topicList from "../../components/news/topic-list.vue"

	export default {
		components: {
			indexList,
			tabBarHead,
			loadMore,
			noThing,
			topicList
		},
		data() {
			return {
				swiperheight: 500,
				tabIndex: 0,
				tabBars: [{
						name: "关注",
						id: "guanzhu"
					},
					{
						name: "推荐",
						id: "tuijian"
					},
					{
						name: "体育",
						id: "tiyu"
					},
					{
						name: "热点",
						id: "redian"
					},
					{
						name: "娱乐",
						id: "yule"
					}
				],
				newslist: [{
						loadtext:"上拉加载更多",
						list: [{
							titlepic:"../../static/pic/kakaluote1.png",
							title:"话题名称",
							desc:"话题描述",
							totalnum:50,
							todaynum:10
						},
						{
							titlepic:"../../static/pic/kakaluote2.png",
							title:"话题名称",
							desc:"话题描述",
							totalnum:100,
							todaynum:30
						},
						{
							titlepic:"../../static/pic/kakaluote2.png",
							title:"话题名称",
							desc:"话题描述",
							totalnum:100,
							todaynum:30
						},
						{
							titlepic:"../../static/pic/kakaluote2.png",
							title:"话题名称",
							desc:"话题描述",
							totalnum:100,
							todaynum:30
						},
						{
							titlepic:"../../static/pic/kakaluote2.png",
							title:"话题名称",
							desc:"话题描述",
							totalnum:100,
							todaynum:30
						},
						{
							titlepic:"../../static/pic/kakaluote2.png",
							title:"话题名称",
							desc:"话题描述",
							totalnum:100,
							todaynum:30
						}
						]
					},
					{
						loadtext:"上拉加载更多",
						list: []
					},
					{
						loadtext:"上拉加载更多",
						list: []
					},
					{
						loadtext:"上拉加载更多",
						list: []
					},
					{
						loadtext:"上拉加载更多",
						list: []
					}
				]
			}
		},
		methods: {
			loadmore(index){
				if (this.newslist[index].loadtext != "上拉加载更多") {return;}
				this.newslist[index].loadtext = "加载中...";
				setTimeout(()=> {
					let obj={
							titlepic:"../../static/pic/kakaluote2.png",
							title:"话题名称",
							desc:"话题描述",
							totalnum:100,
							todaynum:30
						}
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
							
				}, 1000);
				
				// this.newslist[index].loadtext = "加载中...";
				// this.newslist[index].loadtext = "没有更多数据了";
			},
			tabtap(index) {
				this.tabIndex = index
			},
			tabChange(e) {
				this.tabIndex = e.detail.current
			}
		},
		onNavigationBarSearchInputClicked(){
			uni.navigateTo({
				url:"../search/search"
			})
		},
		onNavigationBarButtonTap(e){
			switch(e.index){
				case 1:
					uni.navigateTo({
						url:"../add-input/add-input"
					});
					break
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(100)
					this.swiperheight = height.toString()
					
				}
			})
		}

	}
</script>

<style>
	.topic-view{
		padding: 0 20upx;
	}
</style>
