<template>
	<view>
		<!-- 自定义导航栏 -->
		<uni-nav-bar class="nav-bar-fabu" :statusBar="true" rightText="发布" leftIcon="back" @clickLeft="back" @clickRight="submit">
			<view class="look u-f-ajc" @tap="changelook"  style="text-align: center;">
				
				<text>{{yinsi}}</text>
				<view class="icon iconfont icon-xiala2"></view>
			</view>
		</uni-nav-bar>
		<view class="uni-textarea">
			<textarea v-model="text" placeholder="说一句话吧~" />
			</view>
		<!-- 上传多图 -->
		<upload-images @upload="upload"></upload-images>
		<!-- 弹出公告 -->
		<uni-popup ref="showpopup" type="center">
			<view class="gonggao">
				<view class="u-f-ajc">
					<image src="../../static/pic/fabuye.png" mode="widthFix"></image>
				</view>
				<view>1.涉及黄色、政治、广告及骚扰信息</view>
				<view>2.涉及黄色、政治、广告及骚扰信息</view>
				<view>3.涉及黄色、政治、广告及骚扰信息</view>
				<button type="default" @tap="hidePopup">朕知道了</button>
				
			</view>
			
		</uni-popup>
	</view>
</template>

<script>
	let changlooklist = ['所有人可见','仅自己可见']
	
	
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue"
	import uploadImages from "../../components/common/upload-images.vue"
	import uniPopup from "../../components/uni-popup/uni-popup.vue"
	
	export default {
		components:{
			uniNavBar,
			uploadImages,
			uniPopup
		},
		onLoad() {
			this.type = "center"
				this.$nextTick(() => {
					this.$refs['showpopup'].open()
				})
		},
		onBackPress(e){
			if (!this.text && this.imageList.length == 0){return;}
			if (!this.isBack){
				this.baocun()
				return true
			}
		},
		data() {
			return {
				yinsi:"所有人可见",
				text:"",
				imageList:[],
				type: '',
				content: '顶部弹 popup',
				isBack:false
				
			}
		},
		
		methods: {
			baocun(){
				uni.showModal({
					title:"是否保存到草稿",
					cancelText:"不保存",
					confirmText:"保存",
					success: (res) => {
						if (res.confirm){
							console.log("保存")
						}else{
							console.log("不保存")
						}
						this.isBack = true
						uni.navigateBack({
							delta:1
						})
					}
				})
			},
			hidePopup(){
				this.$refs['showpopup'].close()
			},
			upload(arr){
				this.imageList = arr
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			submit(){
				uni.showToast({
					title:"发布",
					duration:3000
				})
			},
			changelook(){
				uni.showActionSheet({
					itemList:changlooklist,
					success:(res)=>{
						this.yinsi = changlooklist[res.tapIndex] 
					},
				
				})
			},

			
		}
		
	}
</script>

<style>
	.uni-textarea{
		border: 1upx solid #EEEEEE ;
	}
	.gonggao{
		background: #FFFFFF;
		padding: 50upx;
		border-radius: 10upx;
	}
	.gonggao button {
		background:#FFE934;
	}
	.gonggao image{
		width: 80%;
	}
	.nav-bar-fabu{
		position: relative;
	}
	.look{
		position: absolute;
		left: 40%;
	}
</style>
