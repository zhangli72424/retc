<template>
	<view class="app-fund">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top between">
			<view class="tabs">
				<view class="left tab" :class="{active: currentIdx == 0}"><text>{{i18n.investment}}</text></view>
				<!-- <view class="tab" :class="{active: currentIdx == 1}" @tap="handleClickTap(1)"><text>C2C</text></view> -->
			</view>
			<view class="add-new" id="addNew">
				<image src="/static/imgs/add-new.png" @tap="handleAdd"></image>
				<view class="add-items" v-if="isShowAdd">
					<view class="arrow"></view>
					<view class="add-list">
						<!-- <view class="add-item" hover-class="add-hover" @tap="record"> -->
						<view class="add-item" hover-class="add-hover" @tap="record">
							<text class="iconfont icon-fund"></text>{{i18n.myfund}}
						</view>
						<view class="add-item" hover-class="add-hover" style="display: none">
							<text class="iconfont icon-order"></text>{{i18n.exit_order}}
						</view>
					</view>
				</view>
			</view>
		</view>
	<!-- 	<view class="search-wrapper">
			<text class="iconfont icon-sousuo"></text>
			<input type="text" :placeholder="i18n.search_txt">
		</view> -->
		<!-- <view class="list">
			<view class="item">
				<view class="left">
					<view class="top">
						<view class="name">套餐 A</view>
						<view class="info">无敌神基金会</view>
					</view>
					<view class="bottom">
						<view class="min-invest">
							最小投资额：<text>7000USDT</text>
						</view>
						<view class="min-invest">
							币种：<text>USDT</text>
						</view>
					</view>
				</view>
				<view class="right">
					<view class="state">开挂模式</view>
					<view class="rate">3.6%</view>
					<view class="m-rate-txt">日利率化</view>
					<view class="invest-btn">投资</view>
				</view>
			</view>
		</view> -->
		<view class="clist">
			<scroll-view id="scrollview"  :style="{height:style.contentViewHeight+'px'}" @scrolltolower="getPlan" scroll-y="true" scroll-with-animation="true">
				<block v-for="(item,index) in plans" :key="index" v-if="plans.length">
					<view class="citem">
					<!-- 	<view class="left">
							<image src="/static/imgs/avatar.png"></image>
						</view> -->
						<view class="right">
							<view class="name">{{item.title}}</view>
							<!-- <view class="info">大师傅大师傅大师傅大师傅大师傅</view> -->
							<view class="labels">
								<view class="label">{{item.freeze}}RMB</view>
								<view class="label">{{item.bili}}</view>
								<!-- <view class="label">BTC</view> -->
							</view>
							<view class="other" style="display: none;">
								<text class="sale">{{i18n.saled}}{{start}}</text>
								<text class="endsale">{{i18n.end}}{{end}}</text>
							</view>
						</view>
						<!-- <view class="state" style="display: none;">{{i18n.state}}</view> -->
						<view class="btn" hover-class="hover-class" @tap="invest(item)">{{i18n.investment}}</view>
					</view>
				</block>
			</scroll-view>
		</view>
		<view class="mask" @tap="mask" v-if="isShowMask"></view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex';
	import {showToast, deterLang, pageto, fetch, _updataTabBar, forceUpdate} from '../../common/js/util.js';
	export default {
		data() {
			return {
				isShowAdd: false,
				currentIdx: 0,
				isShowMask: false,
				plans:[],
				usdtNumber1:'',
				usdtNumber0:'',
				start:'',
				end:'',
				title:'',
				page:1,
				style:{
					contentViewWidth:0,
					contentViewHeight:0,
					mitemHeight:0
				},
				list:[]
			};
		},
		created:function(){
			const res = uni.getSystemInfoSync(); 
			this.style.pageHeight = res.windowHeight;
		
			this.style.contentViewHeight = res.windowHeight - 70; //像素
		},
		computed: {
			i18n () {  
				return this.$t('message')
			},
			...mapGetters([
				'getTextArr',
				'getLangType',
				'getRequestUrl',
				'getLoginInfo'
			])
		},
		onShow() {
			this._updataTabBar();
			this.getPlan();
			this._forceUpdate();
		},
		methods: {
			_forceUpdate() {
				forceUpdate();
			},
			...mapMutations([
				'setFirstInvestment'
			]),
			record(){
				pageto('recording')
			},
			getPlan(){
				// api/Shop/shop_list
				let _url=`${this.getRequestUrl}/api/Shop/shop_list`;
				let _data={}
				const result = fetch(_url,_data,"POST")
				result.then((res)=>{
					if(res.data.code){
						this.plans = res.data.data;
						this.plans.forEach((item,index)=>{
							this.plans[index].bili = item.bili*100+'%';
						})
					}
				}).catch((err)=>{
					console.log(this.i18n.FailedToGetData)
				})
			},
			handleAdd() {
				this.isShowAdd = !this.isShowAdd;
				this.isShowMask = !this.isShowMask;
			},
			mask() {
				this.isShowAdd = false;
				this.isShowMask = false;
			},
			invest(e) {
				let {a_bili,bili,freeze,id,sf_bili,status,title,ve_bili} = e;
				pageto(`fund-buy?a_bili=${a_bili}&bili=${bili}&freeze=${freeze}&id=${id}&sf_bili=${sf_bili}&status=${status}&title=${title}&ve_bili=${ve_bili}`)
				// 点击投资
			},
			_updataTabBar() {
				_updataTabBar(this.getTextArr, this.getLangType);
			}
		},
		onHide() {
			this.isShowAdd = false;
			this.isShowMask = false;
		},
		onUnload() {
			this.isShowAdd = false;
			this.isShowMask = false;
		}
	}
</script>

<style lang="scss">
@import '../../common/scss/variable.scss';
page {
	color: $font-title-color;
	background-color: #f6f6f6;
}
.app-fund {
	min-height: 100%;
	.gg-top {
		background-color: transparent;
		.tabs {
			display: flex;
			flex-direction: row;
			.tab {
				padding-right: 20px;
				height: 70upx;
				line-height: 70upx;
				text {
					font-size: 15px;
					color: $font-title-color;
				}
				&.active {
					text {
						position: relative;
						font-weight: bold;
						font-size: 20px;
						&:after {
							position: absolute;
							content: "";
							display: block;
							top: 120%;
							left: 50%;
							transform: translateX(-50%);
							width: 54upx;
							height: 4upx;
							background-color: $theme-color;
						}
					}
				}
			}
		}
		.add-new {
			width: 40upx;
			height: 40upx;
			position: relative;
			image {
				flex: 40upx;
				width: 40upx;
				height: 40upx;
			}
			.add-items {
				position: absolute;
				background-color: $font-common-color;
				width: 210upx;
				right: -8px;
				top: 70upx;
				border-radius: 10upx;
				.add-item {
					display: flex;
					flex-direction: row;
					padding: 0 15upx;
					align-items: center;
					color: #ffffff;
					border-bottom: 1upx solid rgba(186, 250, 225, .2);
					height: 72upx;
					font-size: 13px;
					text {
						margin-right: 14upx;
						width: 15px;
					}
					.icon-fund {
						font-size: 14px;
					}
					.icon-order {
						margin-left: -1px;
					}
				}
				.arrow {
					position: absolute;
					top: -15px;
					right: 8px;
					width: 0;
					border: 10px solid transparent;
					border-right: 10px solid transparent;
					border-bottom-color: $font-common-color;
				}
			}
		}
	}
	.clist {
		.citem {
			width: 690upx;
			height: 220upx;
			background-color: #ffffff;
			border-radius: 10upx;
			margin: 20upx 30upx;
			padding: 60upx 60upx 0;
			display: flex;
			flex-direction: row;
			position: relative;
			.left {
				width: 80upx;
				height: 80upx;
				margin-right: 20upx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.right {
				.name {
					font-size: 15px;
					font-weight: bold;
					color: black;
					margin-top: 6upx;
				}
				.info {
					font-size: 14px;
					color: #000000;
					margin-top: 18upx;
				}
				.labels {
					display: flex;
					margin-top: 30upx;
					.label {
						padding: 12upx 14upx;
						background-color: rgba(255, 116, 40, .14);
						color: #FF7428;
						margin-right: 10upx;
						font-size: 13px;
						border-radius: 10upx;
					}
				}
				.other {
					margin-top: 38upx;
					.sale {
						font-size: 14px;
						color: $font-list-tip-color;
						margin-right: 30upx;
					}
					.endsale {
						font-size: 14px;
						color: $font-list-tip-color;
					}
				}
			}
			.state {
				position: absolute;
				top: 40upx;
				right: 30upx;
				font-size: 13px;
				color: $red-adorn;
			}
			.btn {
				position: absolute;
				right: 22upx;
				bottom: 48upx;
				background-color: $theme-color;
				border-radius: 10upx;
				color: #ffffff;
				font-size: 12px;
				text-align: center;
				width: 160upx;
				height: 54upx;
				line-height: 54upx;
			}
		}
	}
	// .search-wrapper {
	// 	width: 690upx;
	// 	height: 58upx;
	// 	display: flex;
	// 	flex-direction: row;
	// 	padding: 0 20upx;
	// 	align-items: center;
	// 	background-color: #ffffff;
	// 	border-radius: 10upx;
	// 	margin: 0 auto;
	// 	input {
	// 		font-size: 12px;
	// 		color: $font-list-tip-color;
	// 		margin-left: 10upx;
	// 		flex: 1;
	// 	}
	// 	.iconfont {
	// 		font-size: 14px;
	// 	}
	// }
	// .list {
	// 	padding: 20upx 30upx;
	// 	.item {
	// 		width: 690upx;
	// 		height: 266upx;
	// 		border-radius: 10upx;
	// 		background-color: #ffffff;
	// 		display: flex;
	// 		flex-direction: row;
	// 		justify-content: space-between;
	// 		align-items: flex-start;
	// 		padding: 32upx 20upx 0;
	// 		.left {
	// 			display: flex;
	// 			flex-direction: column;
	// 			.top {
	// 				margin-bottom: 34upx;
	// 				.name {
	// 					font-size: 15px;
	// 					font-weight: bold;
	// 					color: black;
	// 				}
	// 				.info {
	// 					font-size: 12px;
	// 					color: black;
	// 					margin-top: 18upx;
	// 				}
	// 			}
	// 			.bottom {
	// 				.min-invest {
	// 					font-size: 11px;
	// 					color: $font-list-tip-color;
	// 					&:last-child {
	// 						margin-top: 22upx;
	// 					}
	// 				}
	// 			}
	// 		}
	// 		.right {
	// 			display: flex;
	// 			flex-direction: column;
	// 			align-items: flex-end;
	// 			.state {
	// 				font-size: 10px;
	// 				color: $theme-color;
	// 				width: 96upx;
	// 				height: 36upx;
	// 				background-color: $state-bg-color;
	// 				border-radius: 6upx;
	// 				line-height: 36upx;
	// 				text-align: center;
	// 				margin-bottom: 16upx;
	// 			}
	// 			.rate {
	// 				font-size: 17px;
	// 				color: $red-adorn;
	// 				margin-bottom: 20upx;
	// 			}
	// 			.m-rate-txt {
	// 				font-size: 10px;
	// 				margin-bottom: 26upx;
	// 				color: $font-list-tip-color;
	// 			}
	// 			.invest-btn {
	// 				width: 152upx;
	// 				height: 54upx;
	// 				font-size: 12px;
	// 				color: #ffffff;
	// 				text-align: center;
	// 				line-height: 54upx;
	// 				border-radius: 10upx;
	// 				background-color: $theme-color;
	// 			}
	// 		}
	// 	}
	// }
	.mask {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: transparent;
	}
}
.add-hover {
	background-color: rgba(255, 255, 255, .1);
}
</style>
