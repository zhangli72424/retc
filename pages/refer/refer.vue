<template>
	<view class="app-register">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickCBack">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.myrefer}}</view>
		</view>
		<view class="gg-line"></view>
		<view class="content">
			<view class="item">
				<text class="label">{{i18n.myrefer}}</text>
				<view class="bottom">
					<view>{{refer}}</view>
					<view class="copy" @tap="copy('refer')">{{i18n.copy}}</view>
				</view>
			</view>
			<view class="item">
				<text class="label">{{i18n.myreferurl}}</text>
				<view class="bottom">
					<view class="ttt">{{referurl}}</view>
					<view class="copy" @tap="copy('url')">{{i18n.copy}}</view>
				</view>
			</view>
			<view class="generatebtn" @tap="generate">{{i18n.genetateVcode}}</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import {pageback, showToast , fetch, pageto} from "../../common/js/util.js"
	export default {
		data() {
			return {
				isfast: false,
				refer: "123456",
				referurl: "",
				qrSrc: ""
			}
		},
		computed: {
			i18n() {
				return this.$t('message');
			},
			...mapGetters([
				'getLangType',
				'getLoginInfo',
				'getRequestUrl'
			])
		},
		onLoad() {
			this.getinvite();
			this.refer = this.getLoginInfo.yqcode;
			this.qrSrc = this.getRequestUrl+'/static/zhifu_img/username_'+this.getLoginInfo.username+'.png';
		},
		methods: {
			clickCBack() { pageback(); },
			getinvite(){
				//获取邀请码信息
				let _data={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token
				}
				let result = fetch(this.getRequestUrl+'/api/user/userQrcode' ,_data ,"POST")
				result.then((res)=>{
					if (res.data.code) {
						this.referurl = res.data.data.qrcode;
					}
				}).catch((err)=>{
					
				})
			},
			generate() {
				// if (this.isfast) return;
				// this.isfast = true;
				// setTimeout(()=> {
				// 	this.isfast = false;
				// }, 1000)
				pageto("invite");
			},
			copy(e) {
				let _data 
				if (e == "refer") {
					_data = this.refer;
				} else if (e == "url") {
					_data = this.referurl;
				}
				uni.setClipboardData({
					data: _data,
					success: () => {
						if (e == "refer") {
							showToast(this.refer+this.i18n.copysuccess);
						} else if (e == "url") {
							showToast(this.referurl+this.i18n.copysuccess);
						}
					}
				});
			},
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
.app-register {
	.content {
		padding: 0 30upx;
		.item {
			display: flex;
			flex-direction: column;
			margin-top: 56upx;
			.label {
				font-size: 14px;
				color: $font-list-tip-color;
			}
			.bottom {
				display: flex;
				justify-content: space-between;
				height: 80upx;
				align-items: center;
				border: 1upx solid $list-border-bt-color;
				margin-top: 30upx;
				border-radius: 10upx;
				padding: 0 30upx;
				view:first-child {
					font-size: 14px;
					color: $font-title-color;
				}
				.copy{
					font-size:14px;
					color: $green-adorn;
					padding: 10px;
					margin: -10px;
					width: 100upx;
				}
				.ttt {
					font-size: 10px;
					padding-right: 20upx;
					line-height: 12px;
					word-break: break-all;
					flex: 1;
				}
			}
		}
		.generatebtn {
			width: 360upx;
			height: 80upx;
			text-align: center;
			line-height: 80upx;
			margin: 100upx auto 60upx;
			font-size: 14px;
			color: #ffffff;
			border-radius: 10upx;
			background-color: $theme-color;
		}
	}
}
</style>
