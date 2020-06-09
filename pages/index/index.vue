<template>
	<view>
		<tab-bar-head :tabBars="tabBars" :tabIndex="tabIndex" @tabtap="tabtap"></tab-bar-head>
		<view >
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<swiper-item v-for="(items,index) in newslist" :key="index">
					<scroll-view scroll-y="true" class="list">
						<block v-for="(item,index1) in items.list" :key="index1">
							<index-list :item="item" :index="index"></index-list>
						</block>
					</scroll-view>
				</swiper-item>

			</swiper>
		</view>
	</view>
</template>

<script>
	import indexList from '../../components/index/index-list.vue'
	import tabBarHead from '../../components/index/tab-bar-head.vue'

	export default {
		components: {
			indexList,
			tabBarHead
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
				newslist: [
					{
						list: [
							{
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
						list: [
							{
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
						list: [
							{
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
						list: [
							{
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
						list: [
							{
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
					}
				]
			}
		},
		methods: {
			tabtap(index) {
				this.tabIndex = index
			},
			tabChange(e){
				this.tabIndex = e.detail.current
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height=res.windowHeight-uni.upx2px(100)
					this.swiperheight = height
				}
			})
		}

	}
</script>

<style>
	
</style>
