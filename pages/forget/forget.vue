<template>
	<view class="app-register">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top triple">
			<view class="iconfont icon-arrow-left" @tap="clickCBack"></view>
			<view>{{i18n.forgetpass}}</view>
			<view class="iconfont icon-arrow-left hide"></view>
		</view>
		<view class="gg-line"></view>
		<view class="content">
			<view class="password item">
				<input type="text" v-model="phoneNumer" :placeholder="i18n.userinfo"/>
			</view>
			<view class="yzm item">
				<input type="text" :placeholder="i18n.enter_yzm" v-model="yzm"/>
				<view class="yzm-btn" @tap="send_yzm" :class="{gray: yzm_state}">{{yzmContent || i18n.get_yam}}</view>
			</view>
			<view class="password item">
				<input v-if="!isOpen1" type="text" v-model="password" :placeholder="i18n.enterpassword_cye"/>
				<input v-if="isOpen1" type="password" v-model="password" :placeholder="i18n.enterpassword_cye"/>
				<view class="iconfont icon-yincang" :class="{active: !isOpen1}" @tap="eye"></view>
			</view>
			<view class="login" hover-class="hover-class" @tap="submit">{{i18n.submit}}</view>
		</view>
		<view v-if="isShowLoading"><loading></loading></view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import Yzm from '../../components/yzm/yzm.vue'
	import loading from '../../components/loading/loading.vue'
	import {showToast, deterLang} from '../../common/js/util.js'
	export default {
		data() {
			return {
				isOpen1: true,
				password: '',
				yzm: '',
				userinfo: '',
				phoneNumer: '',
				yzmContent: '',
				yzm_state: false,
				hasClicked: false,
				isShowLoading: false
			}
		},
		computed: {
			i18n () {
				return this.$t('message')
			},
            lang_type () {
                return deterLang(this.getLangType);
            },
			...mapGetters([
				'getRequestUrl',
				'getLangType'
			])
		},
		methods: {
			eye () {
				this.isOpen1 = !this.isOpen1;
			},
			submit() {
				if (!this.phoneNumer) {
					showToast(this.i18n.userinfo);
					return;
				}
				if (!this.yzm) {
					showToast(this.i18n.enter_yzm);
					return;
				}
				if (!this.password) {
					showToast(this.i18n.enterpassword_cye);
					return;
				}
				this.isShowLoading = true;
				let deltaData = {
						username: this.phoneNumer,
						lang_type: this.lang_type,
						yzm: this.yzm,
						password: this.password
					}
				uni.request({
					url: this.getRequestUrl + '/api/login/resetpswd',
					method: 'POST',
					data: deltaData,
					success: res => {
						this.isShowLoading = false;
						if (res.data.code) {
							showToast(res.data.msg);
							this.setUser(this.phoneNumer);
							// this.setPass(this.password);
							uni.navigateTo({
								url: "/pages/login/login"
							})
						} else {
							showToast(res.data.msg);
						}
					},
					fail: () => {
						this.isShowLoading = false;
						showToast(res.data.reset_pass_fail);
					},
				})
			},
			send_yzm() {
				if (this.hasClicked) return;
				if (!this.phoneNumer) {
					showToast(this.i18n.userinfo);
					return;
				}
				this.isShowLoading = true;
				this.hasClicked = true;
				let _url = this.getRequestUrl + '/api/login/resetpswd';
				uni.request({
					url: _url,
					method: 'POST',
					data: {
						username: this.phoneNumer,
						lang_type: this.lang_type
					},
					success: res => {
						this.isShowLoading = false;
						if (res.data.code) {
							let {email, type} = res.data.data;
							let __url = '';
							let yzmTime = 60;
							this.yzm_state = true;
							// 开始发送验证码
							if (type) {
								__url = this.getRequestUrl + '/api/sms/sendsms';
							} else {
								__url = this.getRequestUrl + "/api/sms/emailverify";
							}
							uni.request({
								url: __url,
								method: 'POST',
								data: {
									name: email,
									lang_type: this.lang_type
								},
								success: ret => {
									console.log(ret);
									this.isShowLoading = false;
									if (ret.data.code) {
										console.log(456);
										let _this = this;
										(function loopTime(){
											yzmTime--;
											_this.yzmContent = yzmTime + "s";
											_this.timer = setTimeout(loopTime, 1000)
											if(yzmTime < 0){
												_this.yzmContent = _this.i18n.re_send_yzm;
												_this.yzm_state = false;
												clearTimeout(_this.timer);
												_this.hasClicked = false;
											}
										})();
									} else {
										this.hasClicked = false;
										this.yzm_state = false;
										showToast(ret.data.msg);
									}
								},
								fail: () => {
									this.isShowLoading = false;
									this.hasClicked = false;
									this.yzm_state = false;
									showToast(this.i18n.yzm_fail);
								}
							});
						} else {
							this.isShowLoading = false;
							this.hasClicked = false;
							showToast(res.data.msg);
						}
					},
					fail: () => {
						this.isShowLoading = false;
						this.hasClicked = false;
						showToast(res.data.msg);
					}
				})
			},
			clickCBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			...mapMutations([
				'setUser',
				// 'setPass'
			])
		},
		components: {
			Yzm,
			loading
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
.app-register {
	.content {
		padding: 12upx 100upx;
		.item {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 12px;
			border-bottom: 2upx solid $list-border-bt-color;
			height: 126upx;
			padding-top: 52upx;
			box-sizing: border-box;
			input {
				flex: 1;
			}
			.label {
				margin-right: 10px;
			}
			&.password {
				.icon-yincang {
					padding: 15px;
					margin: -10px -15px -15px -15px;
					&.active {
						color: $theme-color;
					}
				}
			}
			&.yzm {
				.yzm-btn {
					color: $theme-color;
					padding-top: 18upx;
					&.gray {
						opacity: .5;
						color: $font-common-color;
					}
				}
			}
		}
		.login {
			width: 320upx;
			height: 80upx;
			line-height: 80upx;
			background-color: $theme-color;
			border-radius: 40upx;
			text-align: center;
			font-size: 15px;
			margin: 100upx auto 0;
			color: #ffffff;
		}
	}
}
</style>
