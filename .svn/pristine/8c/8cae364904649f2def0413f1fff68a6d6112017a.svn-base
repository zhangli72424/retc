<template>
	<view class="app-history">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickCBack">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.charge_detail}}</view>
		</view>
		<view class="list">
			<view class="item" hover-class="list-hover">
				<view class="left">
					<view class="name">{{style.title}}{{i18n.charge}}</view>
					
					<view class="num">+{{style.number}}{{style.title}}</view>
					
					<view class="name">{{i18n.from_per}}</view>
					<view class="address">{{style.from}}</view>
					<view class="name">{{i18n.to_per}}</view>
					<view class="address">{{style.to}}</view>
				</view>
				<view class="right">
					<view class="state">{{i18n.charge}} | {{i18n.Arrived}}</view>
					
				</view>
			</view>
			<view class="item" hover-class="list-hover">
				<view class="left" style="width: 70%;">
					<view class="name">{{i18n.TradingNumber}}</view>
					<view class="address" style="width:100%;word-wrap: break-word;word-break: normal;">{{style.tx}}</view>
					<view class="name">{{i18n.TradingTime}}</view>
					<view class="address">{{style.create_time}}</view>
				</view>
				<view class="right">
						<tki-qrcode
						cid="qrcode1" 
						ref="qrcode" 
						:val="htx" 
						:size="size" 
						:unit="unit" 
						:background="background" 
						:foreground="foreground" 
						:pdground="pdground" 
						:icon="icon" 
						:iconSize="iconsize" 
						:lv="lv" 
						:onval="onval" 
						:loadMake="loadMake" 
						:usingComponents="true" 
						@result="qrR" />
					<view class="fee copybtn" @tap="copy">复制地址</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import tkiQrcode from '../../components/qrcode/qrcode.vue';
	import {mapGetters, mapMutations} from 'vuex'
	import {pageback, pageto,showToast} from "../../common/js/util.js"
	import {validate} from '../../common/js/validate.js'
	export default {
		data() {
			return {
				htx:'',
				style:{
					create_time:"",
					title:'',
					from:'',
					htx:'',
					number:'',
					remark:'',
					status:'',
					to:'',
					tx:''
				},
				size: 140, // 二维码大小
				unit: 'upx', // 单位
				background: '#000', // 背景色
				foreground: '#fff', // 前景色
				pdground: '#000', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: false, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '' // 二维码生成后的图片地址或base64
			}
		},
		onLoad() {
			let {create_time,title,from,htx,number,remark,status,to,tx} = this.getDetails;
			this.htx = htx;
			this.style = {create_time,title,from,htx,number,remark,status,to,tx}
			// console.log(this.style.htx)
		},
		computed: {
			i18n() {
				return this.$t('message');
			},
			...mapGetters([
				'getDetails'
			])
		},
		methods: {
			clickCBack() {pageback();},
			qrR(res){
				this.style.htx = res
			},
			copy(){
				let _this = this
				uni.setClipboardData({
					data: this.htx,
					success: function () {
						showToast(_this.i18n.copySu)
					}
				});
			}
		},
		components:{
			tkiQrcode 
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
page {
	background-color: #f6f6f6;
}
.app-history {
	.gg-top {
		background-color: transparent;
	}
	.item {
		display: flex;
		justify-content: space-between;
		// align-items: center;
		width: 690upx;
		border-radius: 10upx;
		margin: 0 auto 20upx;
		background-color: #ffffff;
		padding:40upx;
		.left {
			.name {
				font-size: 17px;
				font-weight: bold;
				color: $font-title-color;
				margin-bottom: 20upx;
			}
			.address {
				font-size: 14px;
				color: #6a6a6a;
				margin-bottom: 26upx;
			}
			.time {
				font-size: 13px;
				color: $font-list-tip-color;
			}
		}
		.right {
			text-align: right;
			.state {
				font-size: 13px;
				color: #FF7428;
				margin-bottom: 38upx;
			}
			.num {
				font-size: 15px;
				font-weight: bold;
				margin-bottom: 18upx;
				color: #000000;
			}
			.fee {
				font-size: 13px;
				color: #6a6a6a;
				&.copybtn{
					text-align: center;
					padding:22upx 0;
					margin-top:20upx;
					font-size: 14px;
					border-radius:8upx;
					background-color:$theme-color;
					color: #fff;
				}
			}
		}
	}
}
</style>
