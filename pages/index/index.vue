<template>
	<view>
		<tab-bar-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></tab-bar-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore(index)">
						<template v-if="items.list.length >0">
						<!-- 图文列表 -->
							<block v-for="(item,index1) in items.list" :key="index1">
								<index-list :item="item" :index="index"></index-list>
							</block>
							<!-- 上拉加载 -->
							<load-more :loadtext="items.loadtext"></load-more>
						</template>
						<!-- 没有图文列表时显示信息 -->
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

	export default {
		components: {
			indexList,
			tabBarHead,
			loadMore,
			noThing
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
								userpic: "../../static/pic/baishen.png",
								username: "昵称",
								isguanzhu: false,
								title: "标题",
								titlepic: "../../static/pic/beijita.png",
								type: "img", // img:图片，video:视频
								playnum: "20w",
								long: "2:17",
								infonum: {
									index: 0, // 0:没有操作, 1:顶，2：踩
									dingnum: 11,
									cainum: 11,
								},
								cai: {},
								commentnum: 20,
								sharenum: 10
							},
							{
								userpic: "../../static/pic/baishen.png",
								username: "昵称",
								isguanzhu: true,
								title: "标题",
								titlepic: "../../static/pic/beijita.png",
								type: "video", // img:图片，video:视频
								playnum: "20w",
								long: "2:17",
								infonum: {
									index: 2, // 0:没有操作, 1:顶，2：踩
									dingnum: 11,
									cainum: 11,
								},
								cai: {},
								commentnum: 20,
								sharenum: 10
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list: [{
								userpic: "../../static/pic/baishen.png",
								username: "昵称",
								isguanzhu: false,
								title: "标题",
								titlepic: "../../static/pic/baishen.png",
								type: "img", // img:图片，video:视频
								playnum: "20w",
								long: "2:17",
								infonum: {
									index: 1, // 0:没有操作, 1:顶，2：踩
									dingnum: 11,
									cainum: 11,
								},
								cai: {},
								commentnum: 20,
								sharenum: 10
							},
							{
								userpic: "../../static/pic/baishen.png",
								username: "昵称",
								isguanzhu: true,
								title: "标题",
								titlepic: "../../static/pic/beijita.png",
								type: "video", // img:图片，video:视频
								playnum: "20w",
								long: "2:17",
								infonum: {
									index: 2, // 0:没有操作, 1:顶，2：踩
									dingnum: 11,
									cainum: 11,
								},
								cai: {},
								commentnum: 20,
								sharenum: 10
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list: [{
								userpic: "../../static/pic/baishen.png",
								username: "昵称",
								isguanzhu: false,
								title: "标题",
								titlepic: "../../static/pic/beijita.png",
								type: "img", // img:图片，video:视频
								playnum: "20w",
								long: "2:17",
								infonum: {
									index: 1, // 0:没有操作, 1:顶，2：踩
									dingnum: 11,
									cainum: 11,
								},
								cai: {},
								commentnum: 20,
								sharenum: 10
							},
							{
								userpic: "../../static/pic/baishen.png",
								username: "昵称",
								isguanzhu: true,
								title: "标题",
								titlepic: "../../static/pic/baishen.png",
								type: "video", // img:图片，video:视频
								playnum: "20w",
								long: "2:17",
								infonum: {
									index: 2, // 0:没有操作, 1:顶，2：踩
									dingnum: 11,
									cainum: 11,
								},
								cai: {},
								commentnum: 20,
								sharenum: 10
							}
						]
					},
					{
						loadtext:"上拉加载更多",
						list: [{
								userpic: "../../static/pic/baishen.png",
								username: "昵称",
								isguanzhu: false,
								title: "标题",
								titlepic: "../../static/pic/baishen.png",
								type: "img", // img:图片，video:视频
								playnum: "20w",
								long: "2:17",
								infonum: {
									index: 1, // 0:没有操作, 1:顶，2：踩
									dingnum: 11,
									cainum: 11,
								},
								cai: {},
								commentnum: 20,
								sharenum: 10
							},
							{
								userpic: "../../static/pic/baishen.png",
								username: "昵称",
								isguanzhu: true,
								title: "标题",
								titlepic: "../../static/pic/beijita.png",
								type: "video", // img:图片，video:视频
								playnum: "20w",
								long: "2:17",
								infonum: {
									index: 2, // 0:没有操作, 1:顶，2：踩
									dingnum: 11,
									cainum: 11,
								},
								cai: {},
								commentnum: 20,
								sharenum: 10
							}
						]
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
								userpic: "../../static/pic/baishen.png",
								username: "昵称",
								isguanzhu: true,
								title: "标题",
								titlepic: "../../static/pic/baishen.png",
								type: "video", // img:图片，video:视频
								playnum: "20w",
								long: "2:17",
								infonum: {
									index: 2, // 0:没有操作, 1:顶，2：踩
									dingnum: 11,
									cainum: 11,
								},
								cai: {},
								commentnum: 20,
								sharenum: 10
							};
					this.newslist[index].list.push(obj);
					this.newslist[index].loadtext = "上拉加载更多";
							
				}, 1000);
				
				// this.newslist[index].loadtext = "加载中...";
				// this.newslist[index].loadtext = "没有更多数据了";
			},
			// 点击切换
			tabtap(index) {
				this.tabIndex = index
			},
			// 滑动切换
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

</style>
