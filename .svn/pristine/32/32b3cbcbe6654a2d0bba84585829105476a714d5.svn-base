<template>
	<view class="app-address">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top">
			<view class="iconfont icon-arrow-left" @tap="clickCBack"></view>
			<view @tap="clickCBack">{{i18n.add_new_address}}</view>
		</view>
		<view class="gg-line"></view>
		<view class="item" @tap="handleclickcoin">
			<view class="txt">{{i18n.transfercoin}}</view>
			<view class="right">{{tokentitle}}</view>
			<view class="right-after iconfont icon-arrow-right"></view>
		</view> 
		<view class="item">
			<view class="txt">{{i18n.lable}}</view>
			<view class="right">
				<input type="text" v-model="lable">
			</view>
		</view>
		<view class="item">
			<view class="txt">{{i18n.address_charge}}</view>
			<view class="right">
				<input type="text" value="" v-model="address" />
			</view>
		</view>
		<view class="btn" hover-class="hover-class" @tap="addCurAddress">{{i18n.submit}}</view>
		<view class="select-lang" v-if="showSelectLang">
			<view class="lang-wrapper">
				<view class="title">选择币种</view>
				<view class="langs" v-if="coins.length !=0">
					<view 	class="lang" 
							@tap="selectLang(item, index)" 
							v-for="(item, index) in coins"
							:key="index"
							:class="{active: currentIdx==index}"
					>
						{{item.title_en}}
					</view>
				</view>
				<view class="lang-btns">
					<view @tap="cancle">{{i18n.cancel}}</view>
					<view @tap="confirm">{{i18n.confirm}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import {pageback, pageto,fetch,showToast, deterLang} from "../../common/js/util.js"
	import {validate} from '../../common/js/validate.js'
	export default {
		data() {
			return {
				showSelectLang: false,
				isModifyNick: false,
				isModifySex: false,
				address:'',
				tokenId:'',
				lable:'',
				tokentitle:'',
				isfast: false,
				coins: [],
				currentIdx: 0
			}
		},
		onLoad() {
			this.getCoins();
		},
		computed: {
			i18n() {
				return this.$t('message');
			},
			...mapGetters([
				'getRequestUrl','getLoginInfo','getLangType'
			])
		},
		methods: {
			getCoins(){
				uni.showLoading()
				let _url = this.getRequestUrl+'/api/Wallet/coins';
				let _data={}
				const result = fetch(_url,_data)
				result.then((res)=>{
					uni.hideLoading();
					if(res.data.code){
						this.coins = res.data.data
						this.tokenId = res.data.data[0].id;
						this.tokentitle = res.data.data[0].title_en;
					}
				})
			},
			clickCBack() {
				pageback();
			},
			handleclickcoin() {
				this.showSelectLang = true;
			},
			cancle() {
				this.showSelectLang = false;
			},
			selectLang(e, i) {
				this.tokenId = e.id;
				this.currentIdx = i;
			},
			confirm() {
				this.showSelectLang = false;
			},
			addCurAddress(){
				let _url = this.getRequestUrl + "/api/wallet/addA";
				let _data={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token,
					lang_type:this.getLangType=='en'? 2 : 1,
					token_id:this.tokenId,
					tag:this.lable,
					address:this.address
				}
				const result = fetch(_url,_data,"POST")
				result.then((res)=>{
					if(res.data.code){
						showToast(res.data.msg)
						setTimeout(()=>{
							uni.navigateBack({
								delta: 2
							})
						},500)
					}
				})
			}
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
page {
	background-color: #f6f6f6;
}
.app-address {
	.gg-top {
		background-color: transparent;
	}
	.item {
		margin: 0 auto 20upx;
		width: 690upx;
		height: 90upx;
		border-radius: 10upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1upx solid $list-border-bt-color;
		.txt {
			font-size: 14px;
			color: $font-list-tip-color;
		}
		.right {
			flex: 1;
			margin-left: 20upx;
			font-size: 14px;
			color: $font-title-color;
		}
		.right-after {
			font-size: 14px;
			color: $list-arrow-rt-color;
			width: 40px;
			height: 90upx;
			line-height: 90upx;
			text-align: right;
		}
	}
	.select-lang {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: rgba(0, 0, 0, .5);
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
		.lang-wrapper {
			background-color: #ffffff;
			width: 600upx;
			height: auto;
			border-radius: 10upx;
			.title {
				font-size: 14px;
				color: $font-title-color;
				text-align: center;
				height: 112upx;
				line-height: 112upx;
			}
			.langs {
				padding: 0 46upx 50upx;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				.lang {
					width: 156upx;
					height: 66upx;
					line-height: 66upx;
					margin-right: 20upx;
					margin-bottom:20upx;
					background-color: $btn-lang-bg-color;
					border-radius: 10upx;
					color: $lang-color;
					text-align: center;
					font-size: 14px;
					&:nth-child(3n) {
						margin-right: 0;
					}
					&.active {
						background-color: $theme-color;
						color: #ffffff;
					}
				}
			}
			.lang-btns {
				display: flex;
				view {
					flex: 1;
					height: 100upx;
					line-height: 100upx;
					text-align: center;
					font-size: $font-title-color;
					border-top: 1upx solid $list-border-bt-color;
					font-size: 14px;
					&:last-child {
						border-left: 1upx solid $list-border-bt-color;
						color: $theme-color;
					}
				}
			}
		}
	}
	.btn {
		width: 360upx;
		height: 80upx;
		background-color: $theme-color;
		font-size: 14px;
		color: #ffffff;
		text-align: center;
		line-height: 80upx;
		border-radius: 10upx;
		margin: 200upx auto 0;
	}
}
</style>
