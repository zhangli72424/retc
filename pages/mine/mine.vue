<template>
	<view class="app-mine">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top between">
			<view class="left-wrapper">
				<view class="image">
					<image :src="lvimg"></image>
				</view>
				<view class="left">
					<text @tap="toinformation" class="afterset">{{nickname ? nickname : i18n.setNickNameTxt}}</text>
					<text>
						{{getLoginInfo.username}}
						<text class="lvname" :class="lv > 2 ? 'green' : 'yellow'" v-if="lvname">{{lvname}}</text>
					</text>
				</view>
			</view>
			<view class="iconfont icon-arrow-right"  style="color: #fff;" @tap="toinformation"></view>
		</view>
		<view class="content">
			<view class="item bill"  hover-class="list-hover" @tap="bill" v-if="isShow">
				<view class="left">
					<image src="/static/imgs/mine-icon01.png"></image>
					<text>{{i18n.mybill}}</text>
				</view>
				<view class="iconfont icon-arrow-right"></view>
			</view>
			<view class="item safe" @tap="toSafe"  hover-class="list-hover">
				<view class="left">
					<image src="/static/imgs/mine-icon02.png"></image>
					<text>{{i18n.safecenter}}</text>
				</view>
				<view class="right">
					<view class="adorn"></view>
					<view class="iconfont icon-arrow-right"></view>
				</view>
			</view>
			<view class="item level" @tap="communityLevel"  hover-class="list-hover" v-if="isShow">
				<view class="left">
					<image src="/static/imgs/mine-icon03.png"></image>
					<text>{{i18n.communitylevel}}</text>
				</view>
				<view class="iconfont icon-arrow-right"></view>
			</view>
			<view class="item refer" @tap="torefer"  hover-class="list-hover">
				<view class="left">
					<image src="/static/imgs/mine-icon04.png"></image>
					<text>{{i18n.myrefer}}</text>
				</view>
				<view class="iconfont icon-arrow-right"></view>
			</view>
			<view class="item help " @tap="notice"  hover-class="list-hover">
				<view class="left">
					<image src="/static/imgs/news.png"></image>
					<text>{{i18n.sys}}</text>
				</view>
				<view class="iconfont icon-arrow-right"></view>
			</view>
			<view class="item help"  hover-class="list-hover" @tap="toservice" v-if="isShow">
				<view class="left">
					<image src="/static/imgs/mine-icon05.png"></image>
					<text>{{i18n.helpcenter}}</text>
				</view>
				<view class="iconfont icon-arrow-right"></view>
			</view>
			<view class="item set" @tap="toSetting" hover-class="list-hover">
				<view class="left">
					<image src="/static/imgs/mine-icon06.png"></image>
					<text>{{i18n.set}}</text>
				</view>
				<view class="iconfont icon-arrow-right"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import {pageto, _updataTabBar, fetch, deterLang, showToast, forceUpdate} from "../../common/js/util.js"
	import {mapGetters} from 'vuex';
	export default {
		data() {
			return {
				nickname: "",
				isShow:false,
				lvname: '',
				lvimg:'',
				lv: 0,
				freeze: '',
				name: ''
			}
		},
		computed: {
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
		onLoad() {
		},
		onShow() {
			this._updataTabBar();
			this._getData();
			this._forceUpdate();
		},
		methods: {
			_forceUpdate() {
				forceUpdate();
			},
			bill(){
				// return;
				pageto('/pages/bill/bill');
			},
			notice(){
				pageto('/pages/notice/notice');
			},
			toSafe() {
				pageto('/pages/safe/safe');
			},
			toSetting() {
				pageto('/pages/setting/setting');
			},
			communityLevel(){
				// return;
				pageto(`/pages/community/community-team?avatar=${this.lvimg}&freeze=${this.freeze}&yeji=${this.yeji}&name=${this.name}`);
			},
			toinformation() {
				let email = this.getLoginInfo.email
				pageto(`/pages/information/information?nickname=${this.nickname}&account=${email}&avatar=${this.lvimg}`);
			},
			torefer() {
				pageto('/pages/refer/refer');
			},
			toservice() {
				// return
				pageto('/pages/service/service');
			},
			_updataTabBar() {
				_updataTabBar(this.getTextArr, this.getLangType);
			},
			_getData() {
				let _url = this.getRequestUrl+'/api/index/index';
				let _data = {
					id: this.getLoginInfo.id,
					token: this.getLoginInfo.token,
					lang_type: deterLang(this.getLangType)
				}
				fetch(_url, _data, 'POST')
					.then(res => {
						// console.log(res);
						if (res.data.code) {
							let {freeze, yeji, id, lv, name, lvimg1, lvimg2, nickname} = res.data.data;
							this.nickname = nickname;
							this.freeze = freeze;
							this.lvname = name;
							this.lvimg = lvimg1;
							this.lvimg = '../../static/imgs/120x120.png';
							this.yeji = yeji;
							this.lv = lv;
							this.name = name;
						} else {
							showToast(res.data.msg);
						}
					})
			}
		}
	}
</script>

<style lang="scss">
@import '../../common/scss/variable.scss';
.app-mine {
	overflow: hidden;
	.gg-height {
		height: 110px;
		background-color: $theme-color;
	}
	.gg-top {
		background-color: rgba(255, 255, 255, 0);
		height: auto;
		padding-bottom: 3px;
		.left-wrapper {
			display: flex;
			flex-direction: row;
			height: 120upx;
			align-items: center;
			.image {
				width: 100upx;
				height: 100upx;
				border-radius: 100upx;
				background-color: #fff;
				margin-right: 30upx;
				overflow:hidden;
				// border: 1upx solid #fff;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.left {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				text {
					font-size: 14px;
					color: #fff;
				}
				.lvname {
					width: 88upx;
					height: 38upx;
					border-radius: 5upx;
					font-size: 11px;
					margin-left: 12upx;
					padding: 6upx 10upx;
					&.green {
						background-color: rgba(18, 79, 22, .9);
						color: #fff;
					}
					&.yellow {
						background-color: rgba(255, 205, 66, .9);
						color: #fff;
					}
				}
				.afterset {
					font-size: 16px;
					color: #fff;
					margin-bottom: 10upx;
				}
			}
		}
		.iconfont {
			height: 120upx;
			display: flex;
			align-items: center;
		}
	}
	.content {
		padding: 50upx 30upx 0;
		display: flex;
		flex-direction: column;
		.item {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			// border-bottom: 1upx solid $list-border-bt-color;
			height: 100upx;
			image {
				width: 26upx;
				height: 32upx;
				margin-right: 32upx;
			}
			.left {
				display: flex;
				align-items: center;
			}
			.iconfont {
				color: $list-arrow-rt-color;
				font-size: 14px;
				padding: 10px;
				margin: -10px;
			}
			&.safe {
				.right {
					position: relative;
					.adorn {
						position: absolute;
						width: 14upx;
						height: 14upx;
						background-color: $red-adorn;
						border-radius: 14upx;
						top: -50%;
						right: 40upx;
					}
				}
			}
			text {
				font-size: 16px;
				color: $font-title-color;
			}
			&.level {
				image {
					width: 30upx;
					height: 34upx;
				}
			}
			&.refer {
				image {
					width: 36upx;
					height: 26upx;
				}
			}
			&.help {
				image {
					width: 36upx;
					height: 36upx;
				}
			}
			&.set {
				image {
					width: 38upx;
					height: 36upx;
				}
			}
		}
	}
}
</style>
