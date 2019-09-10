<template>
	<view class="content">
		<view class="gg-status-bar"></view>
		<view class="gg-top">
			<view>{{title}}</view>
			<view class="iconfont icon-cha" @tap="clickback"></view>
		</view>
		<view class="gg-height">
			<view class="lists">
				<view class="item">
					<view class="bottom">
						<view class="info">{{Attributes.sf_bili}}%</view>
						<text>{{i18n.dayshifang}}</text>
					</view>
					<!-- <view class="bottom">
						<view class="info">200</view>
						<text>已投</text>
					</view> -->
				</view>
				<view class="item">
					<view class="bottom">
						<view class="info">￥{{Attributes.freeze*Attributes.a_bili}}</view>
						<text>{{i18n.shifang01}}</text>
					</view>
					<!-- <view class="bottom">
						<view class="info"></view>
						<text></text>
					</view> -->
				</view>
				<view class="item">
					<view class="bottom">
						<view class="info">￥{{Attributes.freeze*Attributes.ve_bili}}</view>
						<text>{{i18n.shifang02}}</text>
					</view>
					<!-- <view class="bottom">
							<view class="info"></view>
							<text></text>
					</view> -->
				</view>
			</view>
			
			<view class="lists" v-if="frezze">
				<view class="item">
					<view class="bottom">
							<view class="info">￥ {{frezze}}</view>
							<text>{{i18n.AlreadyInvested}}</text>
					</view>
				</view>
				<view class="item">
				</view>
				<view class="item">
				</view>
			</view>
		</view>
		<view class="pop">
			<view class="content">
				<view class="title">{{i18n.InputCurrency}}</view>
				<!-- <view class="txt">{{i18n.MinimumStarting}}<text>{{lowestNumber}}</text> USDT</view> -->
				<view class="item">
					<view class="label">
						{{i18n.SelectCurrency}}
						<!-- {{frezze ? i18n.SelectCurrency : i18n.ChooseTheNumberOfInputs}} -->
					</view>
					<view class="coins">
						<!-- <view v-for="(item, index) in coins" :key="index" :class="{active: index == currentIdx}" @tap="clickCoinType(index, item)">{{item.name}}</view> -->
						
						￥ {{Attributes.freeze}} ≈ {{CurrentQuantity}} RETC
					</view>
				</view>
				<view class="item trd">
					<view class="top">
						{{i18n.transactionPassword}}
					</view>
					<view class="bottom">
						<input type="password" :placeholder="i18n.transactionPassword" v-model="pwd" maxlength="6">
					</view>
				</view>
				<view v-if="!isFirst" class="confirm-btn" @tap="confirm" > {{frezze ? i18n.Input : i18n.Repeat }}</view>
			</view>
		</view>
		<view v-if="isShowOuterLoading">
			<loading></loading>
		</view>
	</view>
</template>

<script>
	import loading from '../../components/loading/loading.vue'
	import {showToast, deterLang, showLangContent, pageto, fetch} from '../../common/js/util.js'
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				Attributes:[],
				title:'',
				lilv:'',
				highest:'',
				frezze:'',
				CurrentQuantity:'',
				lowestNumber:'',
				istobuy:false,
				target: '',
				price:'',
				isShowLoding: false,
				coins: [],
				currentIdx: 0,
				isFirst:false,
				sum: '',
				pwd: '',
				rate: '',
				cointype: '',
				requiredUsd: 0,
				cyeNumber:0,
				isShowOuterLoading: true,
				isFastClick: false,
				surplus: 0
			}
		},
		onShow(){
			// if(!this.getLoginInfo.paypwd){
			// 	uni.navigateTo({
			// 		url:'../setting/modify-pwd'
			// 	})
			// }
		},
		computed: {
			i18n () {  
				return this.$t('message')
			},
			...mapGetters([
				'getLangType',
				'getLoginInfo',
				'getRequestUrl',
				'getFirstInvestment'
			])
		},
		onLoad(e) {
			console.log(e) 
			this.Attributes = e;
			this.Attributes.sf_bili = parseFloat(e.sf_bili*100);
			this.target = this.getplan;
			this._getWallet();
			// this.title = this.getFirstInvestment[0].contract_name;
			// this.lilv = this.getFirstInvestment[0].day_profit;
			// this.highest = parseFloat(this.getFirstInvestment[0].abnormal_quit);
			// this.lowestNumber = parseFloat(this.getFirstInvestment[0].lnvestment_price)
		},
		methods: {
			clickback() {
				uni.navigateBack({ delta: 1 });
			},
			formatDigit(e) {
				return parseFloat(e);
			},
			showLangContent(str1, str2, str3) {
				return showLangContent(str1, str2, str3, this.getLangType);
			},
			allInvest() {
				this.sum  = Number.parseInt((this.surplus)*this.price/100);
				this.requiredUsd=  Number.parseInt((this.surplus)*this.price/100)*100
				this.cyeNumber = Number.parseInt((this.surplus)*this.price/100)/this.price*100
				this.$forceUpdate();
			},
			confirm() {
				if(this.istobuy) return
				this.istobuy = true
				uni.hideKeyboard()
				if (!this.pwd) {
					this.istobuy = false
					showToast(this.i18n.PleaseEnterThTransactionPassword);
					return;
				}
				let _data = {
					id: this.getLoginInfo.id,
					token: this.getLoginInfo.token,
					shopid: this.Attributes.id,
					pay_pwd: this.pwd,
					lang_type: deterLang(this.getLangType)
				}
				uni.request({
					url: this.getRequestUrl + "/api/Shop/buy_shop",
					data: _data,
					method: "POST",
					success: (res) => {
						console.log(res);
						this.istobuy = false
						if (res.data.code) {
							this.pwd = '';
							this.sum = '';
							this.surplus = parseFloat(res.data.data.balance).toFixed(2);
							this.frezze = parseFloat(res.data.data.freeze) + "";
							this._getWallet();
							showToast(res.data.msg);
						} else {
							showToast(res.data.msg);
						}
					},
					fail: (err) => {
						this.istobuy = false
						showToast(err.data.msg);
					}
				})
			},
			//获取币种列表
			_getWallet() {
				let _data = {
					id: this.getLoginInfo.id,
					token: this.getLoginInfo.token,
				}
				uni.request({
					url: this.getRequestUrl + "/api/Wallet/coin_list",
					data: _data,
					success: (res) => {
						// console.log(res);
						this.isShowOuterLoading = false;
						if (res.data.code) {
							//已经投资过的属性
							this.isFirst = true;
							this.surplus = parseFloat(res.data.data[0].balance);
							this.frezze = parseFloat(res.data.data.yt) + "";
							this.price = res.data.data[0].price;
							this.CurrentQuantity = this.Attributes.freeze / res.data.data[0].price
							// if(parseFloat(res.data.data.yt)){
							// 	this.coins=[];
							// 	//取消选择币种
							// 	return;
							// 	this.coins = [res.data.data[0].name]
							// }else{
								//没有投资的时候币种列表
								this.isFirst = false;
								this.coins = res.data.data
								// this.coins = 
							// }
						} else {
							showToast(res.data.msg);
						}
					},
					fail: () => {
						this.isShowOuterLoading = false;
						showToast(this.i18n.request_fail);
					}
				})
			},
			//切换币种
			clickCoinType(index, item) {
				if (this.isFastClick) return;
				this.isFastClick = true;
				setTimeout(() => {
					this.isFastClick = false;
				}, 500);
				this.currentIdx = index;
				if(!this.isFirst){
					this.sum = this.coins[index]
					this.requiredUsd = this.coins[index]*100
					this.cyeNumber = this.coins[index]*100/this.price
				}
			},
			formatUsd(str) {
				return str.toFixed(4);
			}
		},
		onReachBottom() {
			this.isShowLoding = true;
			setTimeout(()=>{
				this.isShowLoding = false;
			}, 1500);
		},
		components: {
			loading
		}
	}
</script>

<style lang="scss">
@import '../../common/scss/variable.scss';
page {
	background-color: #f6f6f6;
}
.gg-status-bar {
	background-color: #fff;
}
.gg-top {
	justify-content: space-between;
	.iconfont {
		font-size: 14px;
		line-height: 1;
		padding: 10px;
		margin: 0px -10px -10px;
	}
	view {
		font-size: 21px;
	}
	background-color: #fff;
}
.gg-height {
	height: 400upx;
	padding-top: 140upx;
	background-color: #fff;
	box-sizing: border-box;
	.lists {
		padding: 30upx 30upx 0;
		display: flex;
		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.top, .bottom {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.bottom {
				margin-top: 20upx;
				.info {
					color: red;
				}
				.info.green {
					color: green;
				}
			}
			.info {
				font-size: 14px;
				color: #aaa;
				line-height: 1;
			}
			.info+text {
				font-size: 14px;
				line-height: 1;
				margin-top: 10upx;
				color: #AAAAAA;
			}
			&.last {
				justify-content: flex-start;
			}
		}
	}
}
.basic {
	padding: 0 30upx 30upx;
	.item {
		display: flex;
		justify-content: space-between;
	}
	text {
		font-size: 14px;
		color: #fff;
		line-height: 76upx;
	}
	text+text {
		font-size: 14px;
	}
	&.last {
		margin-top: 20upx;
		margin-bottom: 100upx;
		text {
			color: #AAAAAA;
		}
	}
}
.infomation {
	padding: 30upx;
	.detail1 {
		font-size: 14px;
		line-height: 20px;
		color: #AAAAAA;
	}
	.detail1+view {
		text-align: center;
		color: $theme-color;
		margin-top: 20upx;
		margin-bottom: 20upx;
	}
	.split {
		margin-left: -30upx;
	}
}
.title {
	color: #666;
	font-size: 17px;
}
.title+.line {
	height: 1upx;
	width: 100%;
	background-color: #3E3E3E;
	margin-top: 10px;
}
.purchase {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100upx;
	text-align: center;
	line-height: 100upx;
	color: #ffffff;
	background-color: $theme-color;
	font-size: 16px;
	z-index: 10000;
}
.pop {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// background-color: rgba(0, 0, 0, .5);
	margin-top: 30upx;
	margin-bottom: 60upx;
	.content {
		background-color: #fff;
		width: 690upx;
		border-radius: 16upx;
		padding: 60upx 0;
		image {
			width: 62upx;
			height: 62upx;
			border-radius: 62upx;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.title {
			font-size: 20px;
			line-height: 1;
			margin-bottom: 32upx;
		}
		.txt {
			font-size: 14px;
			line-height: 1;
			color: #aaa;
			text {
				color: $theme-color;
				padding: 0 10upx;
			}
		}
		.item {
			margin-top: 34upx;
			width: 630upx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			image {
				margin-right: 20upx;
			}
			.coins {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				view {
					width: 140upx;
					height: 50upx;
					line-height: 50upx;
					border-radius: 50upx;
					background-color: #fff;
					color: #666;
					text-align: center;
					margin-bottom: 30upx;
					margin-right: 20upx;
					&:nth-child(4n) {
						margin-right: 0;
					}
					&.active {
						color: #fff;
						background-color: $theme-color;
					}
				}
			}
			.label {
				color: #898989;
				font-size: 14px;
				margin-bottom: 20upx;
			}
			.left {
				margin-right: 30upx;
				display: flex;
				align-items: center;
				color: #ffffff;
			}
			input {
				text-align: center;
				width: 320upx;
				height: 86upx;
				border-radius: 86upx;
				background-color: #fff;
				color: #666;
			}
			&.sec {
				margin-top: 0;
				border-top: 1px solid rgba(187, 199, 212, .1);
				padding: 30upx 0 10upx;
				.top {
					color: #898989;
					font-size: 14px;
					line-height: 1;
					text {
						font-size: 13px;
						color: #898989;
						margin-left: 16upx;
						line-height: 1;
					}
				}
				.bottom {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 630upx;
					.inp {
						border-radius: 0;
						font-size: 14px;
						text-align: left;
						background-color: transparent;
					}
					.left {
						font-size: 21px;
						line-height: 1;
					}
					.right {
						display: flex;
						flex-direction: column;
						align-items: flex-end;
						.t {
							color: #3581D8;
							font-size: 14px;
							line-height: 1;
							padding: 10px;
							margin: -10px;
						}
						.b {
							color: #898989;
							font-size: 13px;
							line-height: 1;
							margin-top: 20upx;
						}
					}
				}
			}
			&.trd {
				margin-top: 0;
				border-top: 1px solid rgba(187, 199, 212, .1);
				padding: 30upx 0;
				.top {
					color: #898989;
					font-size: 14px;
					line-height: 1;
				}
				.bottom {
					input {
						width: 630upx;
						border-radius: 0;
						background-color: transparent;
						text-align: left;
					}
					border-bottom: 1px solid rgba(187, 199, 212, .1);
				}
			}
		}
		.confirm-btn {
			width: 306upx;
			height: 78upx;
			border-radius: 78upx;
			background-color: $theme-color;
			color: #ffffff;
			font-size: 15px;
			text-align: center;
			line-height: 78upx;
			margin-top: 30upx;
		}
	}
}
</style>
