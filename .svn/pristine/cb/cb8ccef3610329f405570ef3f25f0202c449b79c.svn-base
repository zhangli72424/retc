<template>
	<view class="app-setting">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickClose">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.sys_set}}</view>
		</view>
		<view class="setting-list">
			<view class="setting-item" hover-class="list-hover" @tap="toLang">
				<text>{{i18n.switch_lang}}</text>
				<text class="right iconfont icon-arrow-right"></text>
			</view>
			<view class="setting-item" hover-class="list-hover" @tap="toprotocol">
				<text>{{i18n.protocol}}</text>
				<text class="right iconfont icon-arrow-right"></text>
			</view>
			<view class="setting-item">
				<text>{{i18n.version}}</text>
				<text class="right r">{{version}}</text>
			</view>
			<view class="exit" @tap="exit" hover-class="hover-class">
				{{i18n.exit}}
			</view>
		</view>
		<view class="select-lang" v-if="showSelectLang">
			<view class="lang-wrapper">
				<view class="title">{{i18n.select_lang}}</view>
				<view class="langs">
					<view class="lang" :class="{active: currentLang=='chs'}" @tap="selectLang('chs')">{{i18n.zh}}</view>
					<view class="lang" :class="{active: currentLang=='en'}" @tap="selectLang('en')">{{i18n.en}}</view>
					<view class="lang" :class="{active: currentLang=='ko'}" @tap="selectLang('ko')">{{i18n.ko}}</view>
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
	import { mapMutations, mapGetters } from 'vuex'
	import { showToast, pageto, pageback} from "../../common/js/util.js"
	export default {
		data() {
			return {
				version: '',
				showSelectLang: false,
				currentLang: ""
			};
		},
		computed: {
			i18n() {
				return this.$t('message')
			},
			...mapGetters([
				'getRequestUrl'
			])
		},
		onLoad() {
			this._getVersion();
			this.currentLang = uni.getStorageSync('lang') || 'chs';
		},
		methods: {
			clickClose() {
				pageback();
			},
			toLang() {
				this.showSelectLang = true;
			},
			toprotocol () {
				pageto("/pages/notice/protocol");
			},
			cancle() {
				this.showSelectLang = false;
			},
			selectLang(e) {
				this.currentLang = e;
			},
			confirm() {
				this.setLangType(this.currentLang);
				this.$i18n.locale = this.currentLang;
				this.showSelectLang = false;
			},
			_getVersion() {
				uni.request({
					url: this.getRequestUrl + '/api/index/ve',
					success: (res) => {
						// console.log(res);
						if (res.data.code) {
							this.version = res.data.data.ve;
						} else {
							showToast(this.i18n.request_fail);
						}
					},
					fail: () => {
						showToast(this.i18n.request_fail);
					}
				})
			},
			exit() {
				// #ifdef APP-PLUS  
				plus.runtime.quit();
				// #endif
				uni.redirectTo({
					url: '/pages/login/login'
				})
			},
			...mapMutations([
				'setLoginInfo',
				'setLangType'
			])
		}
	}
</script>

<style lang="scss">
	@import '../../common/scss/variable.scss';
	.app-setting {
		.gg-line {
			width: 100%;
			height: 1px;
			background-color: rgba(62, 62, 62, 1);
		}

		.setting-list {
			padding: 0 30upx;

			.setting-item {
				line-height: 120upx;
				height: 120upx;
				box-sizing: border-box;
				border-bottom: 2upx solid $list-border-bt-color;

				text {
					font-size: 16px;
					margin-top:50upx;
				}

				.right {
					float: right;
					font-size: 17px;
					color: $list-arrow-rt-color;

					&.r {
						color: $font-title-color;
					}
				}
			}
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
				font-size: 16px;
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
	.exit {
		width: 320upx;
		height: 80upx;
		background-color: $theme-color;
		border-radius: 10upx;
		color: #ffffff;
		font-size: 15px;
		text-align: center;
		line-height: 80upx;
		margin: 200upx auto 0;
	}
</style>
