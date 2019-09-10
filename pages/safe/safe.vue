<template>
	<view class="app-setting">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickClose">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.safecenter}}</view>
		</view>
		<!-- <view class="gg-line"></view> -->
		<view class="list">
			<view class="item">
				<text>{{i18n.cellnum}}</text>
				<view class="right">
					<view class="txt">{{getUser}}</view>
					<text class="right iconfont icon-arrow-right hide"></text>
				</view>
			</view>
			<view class="item" hover-class="list-hover" @tap="toLoginPass">
				<text>{{i18n.loginpass}}</text>
				<view class="right">
					<view class="txt green">{{i18n.reset}}</view>
					<text class="right iconfont icon-arrow-right"></text>
				</view>
			</view>
			<view class="item" hover-class="list-hover" @tap="topwdPass">
				<text>{{i18n.paypass}}</text>
				<view class="right">
					<view class="txt green">{{i18n.reset}}</view>
					<text class="right iconfont icon-arrow-right"></text>
				</view>
			</view>
			<view class="item" hover-class="list-hover" @tap="togesture"  style="display: none;">
				<text>{{i18n.gesturepass}}</text>
				<view class="right switch">
					<switch :checked="checked" @change="changeswitch" color="#2a7af2"/>
				</view>
			</view>
			<view class="item" style="display: none;">
				<text>{{i18n.setgesturepass}}</text>
				<view class="right">
					<view class="txt green">{{i18n.reset}}</view>
					<text class="right iconfont icon-arrow-right"></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations, mapGetters} from 'vuex'
	import {showToast, pageto, pageback} from "../../common/js/util.js"
	export default {
		data() {
			return {
				sysVersion: '',
				version: '',
				checked:true
			};
		},
		computed: {
			i18n() {
				return this.$t('message')
			},
			...mapGetters([
				'getRequestUrl','getGesturePassword', 'getUser'
			])
		},
		onLoad() {
			// console.log(this.getUser);
			if(this.getGesturePassword){
				this.checked = true
			}else{
				this.checked = false
			}
		},
		methods: {
			clickClose() {pageback();},
			toLoginPass() {
				pageto("modify-login");
			},
			topwdPass() {
				pageto("modify-pwd");
			},
			changeswitch(e) {
				this.checked = !this.checked;
				if(this.getGesturePassword){
					this.setGesturePassword('')
				}else{
					let time = new Date();
					console.log(time)
					this.setGesturePassword(time)
				}
				// console.log(e)
				// console.log(e.detail.value);
			},
			togesture() {
				console.log("togesture");
				// pageto();
			},
			...mapMutations([
				"setGesturePassword"
			])
		}
	}
</script>

<style lang="scss">
	@import '../../common/scss/variable.scss';
	.app-setting {
		.list {
			padding: 30upx 30upx 0;
			.item {
				display: flex;
				justify-content: space-between;
				align-items: center;
				line-height: 100upx;
				height: 100upx;
				border-bottom: 2upx solid $list-border-bt-color;
				&>text {
					font-size: 14px;
					color: $font-title-color;
				}

				.right {
					display: flex;
					flex-direction: row;
					align-items: center;
					view.txt {
						font-size: 14px;
						&.red {
							color: $red-adorn;
						}
						&.green {
							color: $green-adorn;
						}
					}
					.iconfont {
						font-size: 14px;
						color: $list-arrow-rt-color;
						margin-left: 24upx;
					}
					.hide {
						visibility: hidden;
					}
					&.switch {
						switch {
							transform:scale(0.7);
							margin-right: -16upx;
						}
					}
				}
			}
		}
	}
</style>
