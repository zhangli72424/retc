<template>
	<view class="app-setting">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickClose">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.communitylevel}}</view>
		</view>
		<view class="list">
			<view class="header" :class="{ lastColor:lvShow}">
				<image :src="avatar" mode=""></image>
				<p class="fonts">{{name1}}</p>
			</view>
			<view class="menuList">
				<view class="item" @tap="toTeam(1)">
					<p :class="{ acolor:lvShow}">{{ztrs}}</p>
					<div>{{i18n.goldteam}}</div>
				</view>
				<view class="item" @tap="toTeam(3)">
					<p :class="{ acolor:lvShow}">{{tdrs}}</p>
					<div>{{i18n.goldpush}}</div>
				</view>
				<view class="item">
					<p :class="{ acolor:lvShow}">{{yeji}}</p>
					<div>{{i18n.yeji}}</div>
				</view>
			</view>
			<view class="level-wrapper">
				<view class="inner-content">
					<!-- <mix-tree :list="list" @handleClickTree="treeItemClick"></mix-tree> -->
					<mix-tree :list="list"></mix-tree>
				</view>
				<!-- <view class="inner-content">
					<view class="grade1">
						<view class="piece">
							<view class="title">追风筝的女孩</view>
							<view class="info">(下属4-5区块，黄金社区)</view>
							<view class="btn">+</view>
						</view>
					</view>
					<block v-for="(item,index) in erjiData" :key="index">
						<view class="grade2">
							<view class="piece">
								<view class="title">{{item.username}} <text class="two">2级</text></view>
								<view class="info">(下属4-5区块，黄金社区)</view>
								<view class="btn">+</view>
								<view class="vline"></view>
								<view class="hline"></view>
							</view>
						</view>
						<view class="grade3">
							<view class="piece">
								<view class="title">追风筝的女孩 <text class="three">3级</text></view>
								<view class="info">(下属4-5区块，黄金社区)</view>
								<view class="vline"></view>
								<view class="hline"></view>
							</view>
						</view>
					</block>
				</view> -->
			</view>
			<!-- <view class="income">
				<view class="incomeHeader">
					收益记录
				</view>
				<view class="incomeContent">
					<view class="incomenav" :class="{act:lvShow}">
						<view class="item" :class="indexs ===1 ? 'active':''" @tap="tranIndex(1)">
							动态收益
						</view>
						<view class="item" :class="indexs ===2 ? 'active':''" @tap="tranIndex(2)">
							静态收益
						</view>
						<view class="item" :class="indexs ===3 ? 'active':''" @tap="tranIndex(3)">
							直推收益
						</view>
					</view>
					<view class="incomelist">
						<scroll-view id="selecScroll" :style="{height:style.contentViewHeight+'px'}" @scrolltolower="getSomeThings" scroll-y="true" scroll-with-animation="true">
							<view class="lis">
								<view class="item">
									2019-7-17 10:19
								</view>
								<view class="item">
									团队收益
								</view>
								<view class="item">
									+0.0012 EYC
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	import {pageto, pageback, _updataTabBar, fetch, deterLang, showToast} from "../../common/js/util.js"
	import {mapGetters} from 'vuex';
	import mixTree from '@/components/mix-tree/mix-tree';
	export default{
		data(){
			return{
				list: [],
				tdrs: 0,
				yeji: 0,
				ztrs: 0,
				avatar: '',
				yeji1: '',
				name1: '',
				freeze1: ''
			}
		},
		computed:{
			i18n () {  
				return this.$t('message')
			},
			...mapGetters([
				'getTextArr',
				'getLangType',
				'getLoginInfo',
				'getRequestUrl'
			])
		},
		onLoad(e) {
			this.avatar = e.avatar;
			this.yeji1 = e.yeji;
			this.name1 = e.name;
			this.freeze1 = e.freeze;
			// console.log(e);
		},
		onShow(){
			this._getTeam();
			this._getTeamInfo();
		},
		methods:{
			clickClose() {pageback()},
			// treeItemClick(item) {
			// 	let _data = {
			// 		id: this.getLoginInfo.id,
			// 		token: this.getLoginInfo.token,
			// 		userid: item.id
			// 	}
			// 	fetch(this.getRequestUrl+'/api/User/myZt2', _data, "post")
			// 		.then(res => {
			// 			if (res.data.code) {
			// 				let _tmpIdx;
			// 				// console.log(JSON.stringify(this.list));
			// 				let _tmpArr = this.list[0].children;
			// 				for (let i = 0; i < _tmpArr.length; i++) {
			// 					if (_tmpArr[i].id == _data.userid ) {
			// 						_tmpIdx = i;
			// 					}
			// 				}
			// 				this.$set(this.list[0].children, _tmpIdx, Object.assign(item, {
			// 					children: res.data.data
			// 				}));
			// 				this.$forceUpdate();
			// 				// console.log(this.list);
			// 			} else {
			// 				showToast(res.data.msg);
			// 			}
			// 		})
			// },
			_getTeam() {
				let _data = {
					id: this.getLoginInfo.id,
					token: this.getLoginInfo.token,
					lang_type: deterLang(this.getLangType)
				}
				// fetch(this.getRequestUrl+'/api/User/myZt', _data, "post")
				// 	.then(res => {
				// 		let _tmp = {
				// 				id: this.getLoginInfo.id,
				// 				username: this.getLoginInfo.username
				// 			};
				// 		this.list = [_tmp];
				// 		if (res.data.code) {
				// 			if (res.data.data.length > 0) {
				// 				this.list = [
				// 					Object.assign(this.list[0], {
				// 						children: res.data.data
				// 					})
				// 				];
				// 			}
				// 		} else {
				// 			showToast(res.data.msg);
				// 		}
				// 	})
				fetch(this.getRequestUrl+'/api/User/two_user', _data, "post")
					.then(res => {
						let _tmp = {
								id: this.getLoginInfo.id,
								username: this.getLoginInfo.username,
								name: this.name1,
								yeji: this.yeji1,
								freeze: this.freeze1
							};
						this.list = [_tmp];
						if (res.data.code) {
							if (res.data.data.length > 0) {
								this.list = [
									Object.assign(this.list[0], {
										xj: res.data.data
									})
								];
							}
						} else {
							showToast(res.data.msg);
						}
					})
			},
			_getTeamInfo() {
				let _data =  {
					id: this.getLoginInfo.id,
					token: this.getLoginInfo.token
				}
				fetch(this.getRequestUrl+'/api/User/team', _data, 'post') 
					.then(res => {
						if (res.data.code) {
							let {tdrs, yeji, ztrs} = res.data.data;
							this.tdrs = tdrs;
							this.yeji = yeji;
							this.ztrs = ztrs;
						} else {
							showToast(res.data.msg);
						}
					})
			}
		},
		components: {
			mixTree
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f1f1f1;
	}
	@import '../../common/scss/variable.scss';
	.app-setting {
		.gg-line {
			width: 100%;
			height: 1px;
			background-color: rgba(62, 62, 62, 1);
		}
		.gg-status-bar {
			background-color: #ffffff;
		}
		.gg-height {
			background-color: #ffffff;
		}
		.list {
			.level-wrapper {
				background-color: #f1f1f1;
				padding-top: 1upx;
				.inner-content {
					width: 690upx;
					background-color: #ffffff;
					border-radius: 10upx;
					margin: 30upx;
					padding: 40upx;
					padding-left: 0;
					overflow: hidden;
					.grade1 {
						.piece {
							padding-left: 48upx !important;
							margin-top: 0 !important;
						}
						.title {
							margin-left: 40upx !important;
							font-weight: bold !important;
							color: #000000 !important;
						}
						.info {
							margin-left: 40upx !important;
						}
						.btn {
							width: 48upx !important;
							height: 48upx !important;
							font-size: 20px !important;
							bordr-radius: 20upx !important;
						}
					}
					.grade2 {
						margin-left: 78upx;
						&:first-child {
							border: 1px solid red !important;
							background-color: #4fc295 !important;
							.vline{
								height: 114upx !important;
								top: -78upx !important;
							}
						}
					}
					.grade3 {
						margin-left: 146upx;
						.vline {
							top: -79upx !important;
							height: 114upx !important;
						}
						.piece {
							padding-left: 0 !important;
						}
					}
					.piece {
						position: relative;
						padding-left: 36upx;
						margin-top: 70upx;
						.btn {
							position: absolute;
							left: 0;
							top: 50%;
							transform: translateY(-50%);
							width: 36upx;
							height: 36upx;
							border-radius: 10upx;
							color: #ffffff;
							background-color: $theme-color;
							border-radius: 8upx;
							font-size: 16px;
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.vline {
							position: absolute;
							height: 228upx;
							width: 1upx;
							background-color: $theme-color;
							left: -52upx;
							top: -192upx;
						}
						.hline {
							position: absolute;
							width: 52upx;
							height: 1upx;
							background-color: $theme-color;
							left: -52upx;
							top: 33upx;
						}
						.title {
							font-size: 14px;
							color: #626262;
							margin-left: 16upx;
						}
						.info {
							font-size: 10px;
							color: $font-list-tip-color;
							margin-top: 20upx;
							margin-left: 16upx;
						}
						.two {
							width: 50upx;
							height: 26upx;
							font-size: 13px;
							color: rgba(79, 194, 149, 1);
							background-color: rgba(79, 194, 149, .2);
							padding: 4upx 12upx;
							margin-left: 16upx;
							border-radius: 6upx;
						}
						.three {
							width: 50upx;
							height: 26upx;
							font-size: 13px;
							color: rgba(255, 145, 64, 1);
							background-color: rgba(255, 145, 64, .2);
							padding: 4upx 12upx;
							margin-left: 16upx;
							border-radius: 6upx;
						}
					}
				}
			}
			.header{
				display: flex;
				flex-flow:row wrap;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 268upx;
				background-color: #2a7af2;
				&.lastColor{
					background-color: #2a7af2;
				}
				image{
					width: 144upx;
					height: 144upx;
					background-color: #fff;
					border-radius:72upx;
				}
				.fonts{
					width: 100%;
					text-align: center;
					font-size: 28upx;
					margin-top:-50upx;
					color: #fff;
					font-weight: bold;
				}
			}
			.menuList{
				display: flex;
				flex-direction: row;
				height: 176upx;
				justify-content: space-between;
				align-items: center;
				padding-top:44upx;
				padding-bottom:52upx;
				width: 100%;
				background-color: #ffffff;
				.item{
					flex: 1;
					text-align: center;
					p{
						font-size: 20px;
						color: #2a7af2;
						font-weight: bold;
						&.acolor{
							color:#c4aa6e;
						}
					}
					div{
						font-size: 14px;
						margin-top: 10upx;
						color: #929292;
					}
				}
			}
			
			// .income{
			// 	.incomeHeader{
			// 		line-height: 100upx;
			// 		background-color: #f6f6f6;
			// 		font-size: 28upx;
			// 		color: #000;
			// 		padding-left:30upx;
			// 	}
			// 	.incomeContent{
			// 		width: 100%;
			// 		.incomenav{
			// 			display: flex;
			// 			flex-flow:row wrap;
			// 			width: 100%;
			// 			padding:  30upx;
			// 			&.act{
			// 				.item{
			// 					width: 140upx;
			// 					line-height: 56upx;
			// 					font-size: 24upx;
			// 					text-align: center;
			// 					border-radius:10upx;
			// 					border:2upx solid #c4aa6e;
			// 					margin-right: 16upx;
			// 					color: #c4aa6e;
			// 					&.active{
			// 						color: #fff;
			// 						background: #c4aa6e;
			// 					}
			// 				}
			// 			}
			// 			.item{
			// 				width: 140upx;
			// 				line-height: 56upx;
			// 				font-size: 24upx;
			// 				text-align: center;
			// 				border-radius:10upx;
			// 				border:2upx solid #4fc295;
			// 				margin-right: 16upx;
			// 				color: #4fc295;
			// 				&.active{
			// 					color: #fff;
			// 					background: #4fc295;
			// 				}
			// 			}
			// 		}
			// 		.incomelist{
			// 			.lis{
			// 				display: flex;
			// 				flex-flow:row wrap;
			// 				width: 100%;
			// 				position: relative;
			// 				.item{
			// 					flex: 1;
			// 					text-align: center;
			// 					font-size: 26upx;
			// 					line-height: 100upx;
			// 				}
			// 				&::after{
			// 					content:'';
			// 					width: 90%;
			// 					height: 2upx;
			// 					position: absolute;
			// 					bottom:0;
			// 					background-color: #dedede;
			// 					left: 30upx;
			// 				}
			// 			}
			// 		}
			// 	}
			// }
		}
	}
</style>
