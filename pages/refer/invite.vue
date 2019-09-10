<template>
	<view class="app-invite">
		<view class="gg-status-bar"></view>
		<view class="gg-top triple">
			<view class="iconfont icon-arrow-left" @tap="clickClose"></view>
			<view>{{i18n.invite_friend}}</view>
			<view class="iconfont icon-arrow-left hide"></view>
		</view>
		<view class="gg-page">
			<image src="/static/imgs/invite-bg01.png"></image>
			<view class="start-plan-txt">
				{{i18n.start_plan_txt}}
			</view>
			<view class="gg-content">
				<view class="invite-text">{{i18n.invite_txt}}</view>
				<view class="invite-code">{{getLoginInfo.yqcode}}</view>
				<view class="qr">
					<image :src="qrSrc"></image>
				</view>
				<view class="site">{{addressDta}}</view>
			</view>
			<view class="gg-content2">
				<!-- <view class="save-btn" @tap="save" hover-class="submit-s-class">
					<image src="/static/imgs/invite-btn-bg.png"></image>
				</view> -->
				<view class="btns-wrapper">
					<view class="save-btn" @tap="save" hover-class="hover-class">
						{{i18n.save}}
					</view>
				</view>
			</view>
			<view class="gold-coin">
				<image src="/static/imgs/invite-coin.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters} from 'vuex'
	import Qr from '../../components/qrcode/qrcode.vue';
	export default {
		data() {
			return {
				qrSrc: '',
				addressDta: '',
				isfast: false
			}
		},
		onLoad() {
			this.qrSrc = this.getRequestUrl+'/static/zhifu_img/username_'+this.getLoginInfo.username+'.png';
		},
		onShow() {
			this._getAddress();
		},
		methods: {
			clickClose() {
				uni.navigateBack({
					delta: 1
				})
			},
			save () {
				var pages = getCurrentPages();  
		        var page = pages[pages.length - 1];
		        var bitmap=null;  
				// 获得当前webview对象
		        var currentWebview = page.$getAppWebview();
				// 要绘制的图片对象
		        bitmap = new plus.nativeObj.Bitmap('amway_img');  
		        // 将webview内容绘制到Bitmap对象中  
		        currentWebview.draw(
					bitmap,
					// 成功的回调函数
					function(){
						bitmap.save(
						// 要保存的图片路径 相对路径URL(RelativeURL) - 以"_"开头的相对路径
						// 因为内容可能改变 所以使用随机数作为文件的名字
						"_doc/"+Math.random()+".jpg"  
						// 可设置保存图片的格式，压缩质量等参数。
						,{}  
						,function(i){  
							// console.log('保存图片成功：'+JSON.stringify(i));  
							uni.saveImageToPhotosAlbum({  
								filePath: i.target,  
								success: function () {  
									bitmap.clear(); //销毁Bitmap图片  
									uni.showToast({  
										title: '保存图片成功',  
										duration: 1500,
										icon: "none"
									});  
								}  
							});  
						}  
						,function(e){
							uni.showToast({  
								title: '保存图片失败',  
								duration: 1500,
								icon: "none"
							}); 
							// console.log('保存图片失败：'+JSON.stringify(e));  
						});  
					},
					// 失败的回调函数
					function(e){
						uni.showToast({  
							title: '保存图片失败',
							duration: 1500,
							icon: "none"
						}); 
						// console.log('截屏绘制图片失败：'+JSON.stringify(e));  
					}
				);
			},
			_getAddress() {
				uni.request({
					url: this.getRequestUrl + '/api/user/userQrcode',
					method: 'GET',
					data: {
						id: this.getLoginInfo.id,
						token: this.getLoginInfo.token
					},
					success: (res) => {
						if (res.data.code) {
							this.addressDta = res.data.data.qrcode;
						} else {
							showToast(res.data.msg);
						}
					},
					fail: () => {
						showToast(this.i18n.request_fail);
					}
				})
			}
		},
		computed: {
			i18n () {  
				return this.$t('message')
			},
			...mapGetters([
				'getRequestUrl',
				'getLoginInfo'
			])
		},
		components: {
			Qr
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
.app-invite {
	.gg-status-bar {
		background-color: transparent;
	}
	.gg-top {
		background-color: transparent;
		view {
			color: #ffffff;
			&.iconfont {
				color: #ffffff;
			}
		}
	}
	.gg-page {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		image {
			width: 100%;
			height: 100%;
		}
		.gold-coin {
			width: 714upx;
			height: 930upx;
			position: absolute;
			z-index: 10;
			left: 0;
			top: 150upx;
		}
		.start-plan-txt {
			z-index: 11;
			position: absolute;
			left: 50%;
			top: 222upx;
			transform: translateX(-50%);
			font-size: 20px;
			color: #ffffff;
		}
		.gg-content2 {
			width: 558upx;
			height: 760upx;
			position: absolute;
			z-index: 11;
			left: 50%;
			margin-left: -279upx;
			top: 294upx;
			.btns-wrapper {
				position: absolute;
				left: 0;
				bottom: 60upx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-content: center;
				width: 558upx;
				.save-btn {
					width: 308upx;
					height: 90upx;
					background: linear-gradient(to right, #7BF6C6, #4FC295);
					border-radius: 90upx;
					text-align: center;
					line-height: 90upx;
					color: #ffffff;
					font-size: 21px;
				}
			}
		}
		.gg-content {
			width: 558upx;
			height: 760upx;
			position: absolute;
			z-index: 5;
			left: 50%;
			margin-left: -279upx;
			top: 294upx;
			background-color: #ffffff;
			border-radius: 10px;
			view {
				text-align: center;
				line-height: 1;
			}
			.invite-text {
				font-size: 15px;
				color: #080923;
				margin-top: 60upx;
			}
			.invite-code {
				font-size: 30px;
				color: $theme-color;
				font-weight: bold;
				margin-top: 20upx;
			}
			.qr {
				margin: 60upx auto 0;
				width: 240upx;
				height: 240upx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.site {
				color: #3D3D3D;
				font-size: 10px;
				max-width: 70%;
				margin: 60upx auto 0;
				word-break: break-all;
			}
		}
	}
}
</style>
