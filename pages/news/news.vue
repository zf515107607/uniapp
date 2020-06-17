<template>
	<view>
		<!-- 自定义导航 -->
		<news-nav-bar :tabBars="tabBars" :tabIndex="tabIndex" @change-tab='changeTab'>
		</news-nav-bar>
		<!-- 资讯列表-->

		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="{height:swiperheight+'px'}" :current="tabIndex" @change="tabChange">
				<!-- 关注 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list" @scrolltolower="loadmore()">
						<block v-for="(item,index) in itemlist.list" :key='index'>
							<common-list :item='item' :index='index'></common-list>
						</block>
						<!-- 上拉加载 -->
						<load-more :loadtext="itemlist.loadtext"></load-more>
					</scroll-view>
				</swiper-item>
				<!-- 话题 -->
				<swiper-item>
					<scroll-view scroll-y="true" class="list">
						<!-- 搜索框 -->
						<view class="search-input">
							<input class="uni-input" placeholder="搜索内容" placeholder-class="icon iconfont icon-sousuo topic-search" />
						</view>
						<!-- 轮播图 -->
						<swiper class="topic-swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">

							<block v-for="(item,index) in topic.swiper" :key="index">
								<swiper-item>
									<image :src="item.src" mode="widthFix" lazy-load></image>
								</swiper-item>
							</block>
						</swiper>
						<!-- 热门分类 -->
						<top-label :label="topic.label"></top-label>
						<!-- 最近更新 -->
						<view class="topic-new">
							<view>最近更新</view>
							<view>
								<block v-for="(item,index) in topic.list" :key='index'>
									<topic-list :item="item" :index="index"></topic-list>
								</block>
							</view>
							
							
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>


	</view>
</template>

<script>
	import newsNavBar from "../../components/news/news-nav-bar.vue"
	import commonList from "../../components/common/common-list.vue"
	import loadMore from "../../components/common/load-more.vue"
	import topLabel from "../../components/news/top-label.vue"
	import topicList from "../../components/news/topic-list.vue"
	export default {
		components: {
			commonList,
			newsNavBar,
			loadMore,
			topLabel,
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
						name: "话题",
						id: "huati"
					}
				],
				itemlist: {
					loadtext: "上拉加载更多",
					list: [
						// 文字
						{
							userpic: "../../static/pic/beijita.png",
							username: "张三",
							sex: 0, //0:男、1:女
							age: 25,
							isguanzhu: false,
							title: "这是资讯标题",
							titlepic: "",
							video: false,
							share: false,
							address: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							likenum: 50


						},
						// 图文
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


						},
						// 视频
						{
							userpic: "../../static/pic/beijita.png",
							username: "张三",
							sex: 1, //0:男、1:女
							age: 35,
							isguanzhu: false,
							title: "这是资讯标题",
							titlepic: "../../static/pic/jinx.png",
							video: {
								looknum: "20w",
								playduration: "3:48"
							},
							share: false,
							address: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							likenum: 50
						},
						//	分享
						{
							userpic: "../../static/pic/beijita.png",
							username: "张三",
							sex: 1, //0:男、1:女
							age: 35,
							isguanzhu: false,
							title: "这是资讯标题",
							titlepic: "",
							video: false,
							share: {
								title: "分享标题",
								titlepic: "../../static/pic/daomei.png"
							},
							address: "深圳 龙岗",
							sharenum: 20,
							commentnum: 30,
							likenum: 50
						}
					]
				},
				topic: {
					swiper: [{
							src: "../../static/pic/lanbo.png"
						},
						{
							src: "../../static/pic/fengnv.png"
						},
						{
							src: "../../static/pic/jinx.png"
						}
					],
					label: [{
							name: "最新"
						}, {
							name: "打卡"
						},
						{
							name: "游戏"
						},
						{
							name: "故事"
						},
						{
							name: "情感"
						},
						{
							name: "喜爱"
						}
					],
					list:[
						{
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
						}
					]
				}


			}
		},
		methods: {
			// 点击切换
			changeTab(index) {
				this.tabIndex = index
			},
			// 滑动切换
			tabChange(e) {
				this.tabIndex = e.detail.current
			},
			//	上拉加载
			loadmore() {
				if (this.itemlist.loadtext != "上拉加载更多") {
					return;
				}
				this.itemlist.loadtext = "加载中...";
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
					this.itemlist.list.push(obj);
					this.itemlist.loadtext = "上拉加载更多";

				}, 1000);

				// this.newslist[index].loadtext = "加载中...";
				// this.newslist[index].loadtext = "没有更多数据了";
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
	.search-input {
		padding: 20upx;
		border-top: 1upx solid;
	}

	.search-input>input {
		background-color: #F4F4F4;
		border-radius: 10upx;
	}

	.topic-search {
		display: flex;
		justify-content: center;
		font-size: 26upx;
	}

	.topic-swiper {
		padding: 0 20upx 20upx 20upx;
		border-radius: 10upx;
	}

	.topic-swiper image {
		width: 100%;
		border-radius: 10upx;
	}
	.topic-new>view:first-child{
		color: #333333;
		font-size: 30upx;
		font-weight: bolder;
		padding: 20upx 0 0 30upx;
	}

	.topic-new>view:last-child{
		padding: 0 20upx;
	}
	
	
</style>
