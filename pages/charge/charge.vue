<template>
	<view class="app-register">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickCBack">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{title}}{{i18n.changeer}}</view>
		</view>
		<view class="gg-line"></view>
		<view class="content">
			<view class="txt">{{i18n.your}}{{title}}{{i18n.carAddress}}</view>
			<view class="inp" @tap="toCopy(address)">
				<input type="text" :placeholder="i18n.enter_wallet_address" v-model="address" disabled="disable">
			</view>
			<view class="txt" v-if="isShows">{{i18n.lable}}</view>
			<view class="inp" v-if="isShows" @tap="toCopy(label)">
				<input type="text" :placeholder="i18n.enter_wallet_address" v-model="label" disabled="disable">
			</view>
			<view class="confirm" hover-class="hover-class" @tap="getCode">{{i18n.copy}}</view>
		</view>
		<view class="split" v-if="addressImg"></view>
		<view class="vcode" v-if="addressImg">
			<view class="title">SCAN THE CODE</view>
			<view class="img">
				<image :src="eImg" mode=""></image>
			</view>
		</view>
		<div class="dangerCode">{{i18n.withdraw113}}</div>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import {pageback,showToast, deterLang, pageto, fetch, _updataTabBar} from "../../common/js/util.js"
	import {validate} from '../../common/js/validate.js'
	export default {
		data() {
			return {
				address:'',
				title:'',
				tokenid:'',
				isShows:false,
				addressImg:true,
				label:'',
				eImg:'',
				isModifyNick: false,
				isModifySex: false,
				isfast: false
			}
		},
		onLoad(e) {
			this.tokenid = e.tokenid;
			if(this.tokenid==10){
				this.isShows = true;
			}
			this.title   = e.title;
			this.getCreateAddress();
		},
		computed: {
			i18n() {
				return this.$t('message');
			},
			...mapGetters([
				'getLangType',
				'getRequestUrl',
				'getLoginInfo'
			])
		},
		methods: {
			getCreateAddress(){
				let _url = this.getRequestUrl+'/api/wallet/create_address'
				let _data ={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token,
					token_id:this.tokenid
				}
				const result = fetch(_url,_data);
				result.then((res)=>{
					if(res.data.code){
						this.address = res.data.data.address;
						this.eImg = this.getRequestUrl+'/static/zhifu_img/'+res.data.data.address+'.png'
						this.label = res.data.data.uid;
					}
				}).catch((err)=>{
					showToast(this.i18n.register_fail);
				})
			},
			toCopy(e){
				let _this = this
				uni.setClipboardData({
					data: e,
					success: function () {
						showToast(_this.i18n.copySu)
					}
				});
			},
			getCode(){
				// this.addressImg = true;
				let _this = this
				uni.setClipboardData({
					data: _this.address,
					success: function () {
						showToast(_this.i18n.copySu)
					}
				});
			},
			clickCBack() {
				pageback();
			},
			modifySex() {
				this.isModifySex = true;
			},
			modifyNick() {
				this.isModifyNick = true;
			},
			blur(e) {
				if (e) {
					this.isModifySex = false;
				} else {
					this.isModifyNick = false;
				}
			},
			save() {
				if (this.isfast) return;
				this.isfast = true;
				setTimeout(()=> {
					this.isfast = false;
				}, 1000);
				setTimeout(() => {
					pageback();
				}, 1500);
			}
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
.app-register {
	.txt {
		width: 100%;
		margin: 60upx 0 30upx;
		text-align: center;
		font-size: 14px;
		color: $font-title-color;
	}
	.inp {
		width: 620upx;
		height: 80upx;
		background-color: $page_gray_color;
		width: 580upx;
		padding: 0 40upx;
		margin: 0 auto;
		text-align: center;
		input {
			width: 100%;
			font-size: 14px;
			border-radius: 10upx;
			height: 80upx;
		}
	}
	.confirm {
		width: 360upx;
		height: 80upx;
		background-color: $theme-color;
		border-radius: 10upx;
		font-size: 14px;
		color: #ffffff;
		line-height: 80upx;
		text-align: center;
		margin: 36upx 196upx 70upx;
	}
	.split {
		width: 100%;
		height: 10upx;
		background-color: $page_gray_color;
	}
	.dangerCode{
		color: #f00;
		width: 70%;
		font-size:22upx;
		text-align: center;
		line-height: 34upx;
		margin:30upx auto;
	}
	.vcode {
		width: 750upx;
		margin-top: 100upx;
		.title {
			width: 100%;
			text-align: center;
			font-size: 15px;
			margin-bottom: 20upx;
			white-space: nowrap;
		}
		.img {
			width: 200upx;
			height: 200upx;
			margin: 0 auto;
			image{
				width: 200upx;
				height: 200upx;
			}
		}
	}
}
</style>
