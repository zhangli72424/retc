<template>
	<view class="app-community">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top">
			<view class="community_name">{{i18n.community}}</view>
			<view class="right" style="visibility: hidden;">
				<view class="iconfont icon-sousuo" @tap="clickSearch" :style="{right: searchTapRight}"></view>
				<input id="searchInp" type="text" @input="inputCoin" :style="{right: searchRight}"  :placeholder="i18n.search_content">
			</view>
		</view>
		<view class="tabs-wrapper">
			<view v-for="(item, index) in tabs" 
				  :key="index" 
				  class="tab"
				  :class="{active: activeIdx == index}" 
				  @tap="changeIdx(index, item)">
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 应用 -->
		<view class="application" v-if="activeIdx == 8">
			<view class="top">
				<image src="/static/imgs/apply-img.png" mode=""></image>
			</view>
			<view class="bottom">
				<view class="title">开放进度表</view>
				<view class="apply-list">
					<view class="apply-li">
						<view class="inner-title">2019-5-5<text>V1.0</text></view>
						<view class="txt">
							hdjfka dfhadjk  dsfhakjl  dfjakl dsfj dfas df sdf  dsf d sf  sd f dsf  adf s df a sdf adf sad fa dsf ads f ads
						</view>
						<view class="circle"><view></view></view>
						<view class="vline"></view>
					</view>
					<view class="apply-li">
						<view class="inner-title">2019-5-5<text>V1.0</text></view>
						<view class="txt">
							hdjfka dfhadjk  dsfhakjl  dfjakl dsfj dfas df sdf  dsf d sf  sd f dsf  adf s df a sdf adf sad fa dsf ads f ads
						</view>
						<view class="circle"><view></view></view>
						<view class="vline"></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 销毁池 -->
		<view class="ruin"  v-if="activeIdx == 3">
			<view class="top" style="background-image: url(../../static/imgs/community-bg.png)">
				<view class="left">
					<view class="name">CYE{{i18n.destory_pool}}<text class="small">(销毁时间是每日23:00-24:00)</text></view>
					<view class="num">{{parseFloat(desTotal)}}</view>
				</view>
				<view class="tobrowser" hover-class="hover-class" @tap="tourl">{{i18n.browser}}</view>
			</view>
			<view class="bottom">
				<view class="thead">
					<view class="part">{{i18n.time}}</view>
					<view class="part">{{i18n.edu}}</view>
					<view class="part">{{i18n.user}}</view>
				</view>
				<view class="split"></view>
				<view class="ruin-list">
					<view class="ruin-li" v-for="(item, index) in desData" :key="index">
						<text>{{(item.time).substr(0, 10)}}</text>
						<text>{{parseFloat(item.num)}}CYE</text>
						<text>{{item.username}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 社区动态 -->
		<view v-if="activeIdx == 0">
			<!-- <swiper class="imageContainer" previous-margin="60px" next-margin="45px" :circular="true"  :autoplay="true"> -->
			<swiper class="imageContainer" :circular="true"  :autoplay="true">
				<block v-for="(item,index) in imgList" :key="index">
					<swiper-item class="swiperitem">
						<view :class="currentIndex == index ? 'swiperactive': ''" class="itemImg">
							<!-- <image :src="item.img"></image> -->
							<image :src="getRequestUrl + '/uploads/' + item.img"></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
			<view class="bulletin">
				<view v-show="showlaba" class="iconfont icon-announce"></view>
				<swiper circular="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for="(item, index) in dyData" :key="index" @tap="clickBullentin(item)">
						<view class="swiper-item">{{item.title}}</view>
					</swiper-item>
				</swiper>
			</view>
			<view class="list">
				<view class="li"  v-for="(item,index) in dyData" :key="index" @tap="clickBullentin(item)">
					<view class="name">
						{{item.title}}
					</view>
					<view class="info" v-html="item.content"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Tabs from '../../components/tabs/tabs.vue';
	import {formatTabs, _updataTabBar, deterLang, fetch, showToast, pageto, forceUpdate} from '../../common/js/util.js';
	import {mapGetters, mapMutations} from 'vuex';
	export default {
		data() {
			return {
				searchTapRight: '0px',
				searchRight: '-100%',
				isShowSearch: false,
				activeIdx: 0,
				// 销毁区
				destoryPage: 1,
				// 动态
				dyPage: 1,
				// 应用
				applyPage: 1,
				// 浏览器链接
				browserUrl: '',
				desTotal: 0,
				rows: 10,
				desData: [],
				dyData: [],
				imgList: [],
				tabs: []
			};
		},
		computed: {
			showlaba() {
				return JSON.stringify(this.dyData).length > 2 ? true : false
			},
			i18n () {  
				return this.$t('message')
			},
			...mapGetters([
				'getTextArr',
				'getLangType',
				'getRequestUrl'
			])
		},
		onLoad() {
			this.tabs = formatTabs(this.getLangType);
			
			this._getLuns();
		},
		onShow() {
			this.tabs = formatTabs(this.getLangType);
			this.desData = [];
			this._getDyData();
			this._updataTabBar();
			this._forceUpdate();
		},
		methods: {
			_forceUpdate() {
				forceUpdate();
			},
			changeIdx(i, item) {
				this.activeIdx = i;
				if (i == 1) {
					// console.log(i);
					// 获取动态数据
					// this._getDyData();
					return false;
					// this._getDestoryData();
				}else if(i==2){
					// this.activeIdx = 1
					return false
				}else{
					this._getDyData();
					// this.desData = [];
					// this._getDestoryData();
				}
			},
			clickSearch() {
				if (this.isShowSearch) {
					this.searchRight = '-100%';
					this.searchTapRight = 0;
					this.isShowSearch = false;
				} else {
					this.searchRight = '0px';
					this.searchTapRight = '10px';
					this.isShowSearch = true;
				}
			},
			_updataTabBar() {
				_updataTabBar(this.getTextArr, this.getLangType);
			},
			tourl() {
				plus.runtime.openWeb(this.browserUrl); 
			},
			// 搜索
			// inputCoin(e) {
			// 	let target = e.detail.value.toLowerCase();
			// 	this.renderCoins = this.coins.filter(item => {
			// 		return item.coin.toLowerCase().indexOf(target) >= 0;
			// 	})
			// },
			// 销毁数据
			_getDestoryData(page = this.destoryPage, rows = this.rows) {
				let _data = {
					page,
					rows,
					lang_type: deterLang(this.getLangType)
				}
				fetch(this.getRequestUrl+'/api/Game/The_destruction', _data, 'post')
					.then(res => {
						// console.log(res);
						if (res.data.code) {
							this.browserUrl = res.data.data.address;
							this.desData = this.desData.concat(res.data.data.data);
							if (!res.data.data.data.length) {
								if (this.activeIdx == 0) {
									this.destoryPage--;
								}
								return;
							}
							this.desTotal = res.data.data.sum;
						} else {
							showToast(res.data.msg);
						}
					})
			},
			// 社区动态
			_getDyData() {
				let _data = {
					type: deterLang(this.getLangType)
				}
				fetch(this.getRequestUrl+'/api/Index/news', _data, 'post')
					.then(res => {
						if (res.data.code) {
							this.dyData = res.data.data;
						} else {
							showToast(res.data.msg);
						}
					})
			},
			_getLuns() {
				fetch(this.getRequestUrl + '/api/user/lun')
					.then(res => {
						if (res.data.code) {
							this.imgList = res.data.data;
						} else {
							showToast(res.data.msg);
						}
					})
			},
			clickBullentin(e) {
				this.setBulletin(e);
				pageto('bullentin');
			},
			...mapMutations([
				'setBulletin'
			])
		},
		components: {
			Tabs
		},
		onReachBottom() {
			if( this.activeIdx == 0 ) {
				this.destoryPage ++;
				this._getDestoryData(this.destoryPage);
			}
		}
	}
</script>

<style lang="scss">
@import '../../common/scss/variable.scss';
.app-community {
	.gg-height {
		height: 61px;
		background-color: #ffffff;
	}
	.gg-status-bar {
		background-color: #ffffff;
	}
	.gg-top {
		flex-direction: row;
		justify-content: space-between;
		color: $font-title-color;
		view {
			font-size: 21px;
			line-height: 30px;
			&.right {
				position: relative;
				width: 400upx;
				height: 30px;
				overflow: hidden;
				.iconfont {
					padding: 0 40upx;
					margin-right: -40upx;
					font-size: 20px;
					line-height: 20px;
					position: absolute;
					top: 4px;
					transition: right .7s ease;
					z-index: 10;
				}
				input {
					position: absolute;
					top: 0;
					right: -100upx;
					width: 100%;
					height: 100%;
					background-color: rgba(150, 150, 150, 0.1);
					border: 1upx solid rgba(150, 150, 150, 0.3);
					border-radius: 30px;
					font-size: 14px;
					padding: 0 10px;
					box-sizing: border-box;
					transition: right .8s ease;
				}
			}
		}
	}
	// 应用
	.application {
		.top {
			width: 750upx;
			height: 322upx;
			background-color: #f8f8f8;
			display: flex;
			justify-content: center;
			image {
				width: 378upx;
				height: 322upx;
			}
		}
		.bottom {
			padding: 0 30upx;
			.title {
				height: 108upx;
				line-height: 108upx;
				font-size: 14px;
				color: #000000;
			}
			.apply-list {
				.apply-li {
					position: relative;
					padding-bottom: 50upx;
					padding-left: 56upx;
					.inner-title {
						font-size: 14px;
						font-weight: bold;
						color: $theme-color;
						margin-bottom: 34upx;
						text {
							margin-left: 36upx;
							font-size: 11px;
							font-weight: normal;
						}
					}
					.txt {
						font-size: 14px;
						color: $font-title-color;
						line-height: 18px;
					}
					.circle {
						position: absolute;
						left: 0;
						top: 0;
						border: 1upx solid rgba(79, 194, 149, .4);
						border-radius: 16upx;
						view {
							width: 16upx;
							height: 16upx;
							margin: 4upx;
							border-radius: 16upx;
							background-color: $theme-color;
						}
					}
					.vline {
						position: absolute;
						left: 14upx;
						top: 26upx;
						width: 2upx;
						background-color: rgba(79, 194, 149, .4);
						height: 100%;
					}
					&:last-child {
						.vline {
							height: 0;
						}
					}
				}
			}
		}
	}
	// 销毁池
	.ruin {
		.top {
			width: 750upx;
			height: 220upx;
			background-color: $theme-color;
			padding: 0 30upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			background-size: contain;
			.left {
				flex: 1;
				.name {
					font-size: 15px;
					color: #C9FEE9;
					margin-bottom: 26upx;
				}
				.num {
					font-size: 25px;
					color: #ffffff;
				}
			}
			.tobrowser {
				width: 150upx;
				height: 70upx;
				border-radius: 10upx;
				font-size: 15px;
				color: #ffffff;
				background-color: #5D51C4;
				line-height: 70upx;
				text-align: center;
			}
		}
		.bottom {
			.thead {
				padding: 0 30upx;
				display: flex;
				flex-direction: row;
				height: 100upx;
				align-items: center;
				.part {
					flex: 1;
					font-size: 14px;
					color: $font-title-color;
					text-align: center;
					&+.part {
						border-left: 1upx solid $list-border-bt-color;
					}
				}
			}
			.split {
				width: 750upx;
				height: 20upx;
				background-color: #f6f6f6;
			}
			.ruin-list {
				padding: 0 30upx;
				.ruin-li {
					height: 100upx;
					border-bottom: 1upx solid $list-border-bt-color;
					display: flex;
					align-items: center;
					text {
						flex: 1;
						font-size: 14px;
						color: $font-title-color;
						text-align: center;
					}
				}
			}
		}
	}
	// 社区动态
	.tabs-wrapper {
		display: flex;
		flex-direction: row;
		padding: 0 30upx;
		height: 40px;
		.tab {
			font-size: 14px;
			color: $font-list-tip-color;
			padding: 0 20px 0 0;
			line-height: 40px;
			&.active {
				text {
					font-weight: bold;
					color: $font-title-color;
					position: relative;
					&::after {
						content: "";
						display: block;
						position: absolute;
						width: 62upx;
						height: 4upx;
						background-color: $theme-color;
						border-radius: 2upx;
						top: 110%;
						left: 50%;
						transform: translateX(-50%);
					}
				}
			}
		}
	}
	.imageContainer {
		width: 100%;
		height: 368upx;
		.swiperitem {
			height: 368upx;
			position: relative;
			.itemImg {
				position: absolute;
				width: 690upx;
				height: 368upx;
				left: 30upx;
				z-index: 5;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	.bulletin {
		width: 750upx;
		height: 16px;
		color: $font-title-color;
		display: flex;
		overflow: hidden;
		padding: 0 30upx;
		box-sizing: border-box;
		margin-top: 30upx;
		.iconfont {
			font-size: 16px;
			vertical-align: middle;
			margin-right: 10upx;
		}
		swiper {
			height: 58upx;
			flex: 1;
			.swiper-item {
				font-size: 14px;
				line-height: 14px;
				white-space: nowrap;
			}
		}
	}
	.list {
		padding: 0 30upx 40px;
		.li {
			padding: 30upx 0;
			border-bottom: 1px solid $list-border-bt-color;
			display: flex;
			flex-direction: column;
			.name {
				font-size: 14px;
				color: $list-arrow-rt-color;
				margin-bottom: 10upx;
			}
			.info {
				font-size: 14px;
				color: $font-list-tip-color;
				width: 690upx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
}
.small {
	font-size: 12px;
	color: #ffffff;
	opacity: 0.5;
	margin-left: 16upx;
}
</style>
