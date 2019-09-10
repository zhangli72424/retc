<template>
	<view class="app-register">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickCBack">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.set_pwd_pass}}</view>
		</view>
		<view class="gg-line"></view>
		<view class="content">
			<view class="yzm item">
				<input type="text" :placeholder="i18n.enter_yzm" v-model="yzm"/>
				<view class="yzm-wrapper">
					<yzm @yzmClick="yzmClick" :phoneNumer="phoneNumer" :isPhone="isPhone"></yzm>
				</view>
			</view>
			<view class="password item">
				<view class="label">{{i18n.new_pass}}</view>
				<input v-if="!isOpen2" type="text" v-model="password2" :placeholder="i18n.enter_new_pass"/>
				<input v-if="isOpen2" type="password" v-model="password2" :placeholder="i18n.enter_new_pass"/>
				<view class="iconfont icon-yincang" :class="{active: !isOpen2}" @tap="eye(2)"></view>
			</view>
			<view class="tip">{{i18n.enterpaypwd_cye}}</view>
			<view class="login" hover-class="hover-class" @tap="submit">{{i18n.submit}}</view>
		</view>
		<view v-if="isShowLoading"><loading></loading></view>
	</view>
</template>

<script>
	import {mapGetters,mapMutations} from 'vuex'
	import Yzm from '../../components/yzm/yzm.vue'
	import loading from '../../components/loading/loading.vue'
	import {showToast, deterLang,fetch} from '../../common/js/util.js'
	export default {
		data() {
			return {
				// isOpen1: true,
				isOpen2: true,
				// password1: '',
				password2: '',
				yzm: '',
				userinfo: '',
				phoneNumer: '',
				yzmContent: '',
				yzm_state: false,
				hasClicked: false,
				isShowLoading: false,
				isPhone: true
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
				'getLangType',
				'getLoginInfo',
				'getUser'
			])
		},
		onLoad() {
			this.phoneNumer = this.getLoginInfo.email;
			this.isPhone = this.getUser.indexOf('@') > 0 ? false : true;
		},
		methods: {
			...mapMutations([
				'setLoginInfo'
			]),
			toIndex(){
				uni.switchTab({
					url:'/pages/index/index'
				})
			},
			eye () {
				this.isOpen2 = !this.isOpen2;
			},
			submit() {
				if (!this.password2) {
					showToast(this.i18n.enter_new_pass);
					return;
				}
				if (!this.yzm) {
					showToast(this.i18n.enter_yzm);
					return;
				}
				this.isShowLoading = true;
				let deltaData = {
						id: this.getLoginInfo.id,
						token: this.getLoginInfo.token,
						username: this.getUser,
						pwd: this.password2,
						pwd2: this.password2,
						yzm: this.yzm,
						lang_type: this.lang_type,
						type: this.isPhone ? 2 : 1
					}
					
				let result = fetch(this.getRequestUrl + '/api/user/setPaypwd',deltaData,'POST')
					result.then((res)=>{
						this.isShowLoading = false;
						if (res.data.code) {
							let {id, username, paypwd, email, incode, status, token, yqcode} = this.getLoginInfo
							let loginInfo = {id, username, paypwd:this.password2, email, incode, status, token, yqcode}
							this.setLoginInfo(loginInfo);
							showToast(res.data.msg);
							uni.navigateBack({
								delta: 1
							});
						} else {
							showToast(res.data.msg);
						}
					}).catch((err)=>{
						this.isShowLoading = false;
						showToast(res.data.reset_pass_fail);
					})
				// 	return;
				// uni.request({
				// 	url: this.getRequestUrl + '/api/user/setPaypwd',,
				// 	method: 'POST',
				// 	data: deltaData,
				// 	success: res => {
				// 		this.isShowLoading = false;
				// 		if (res.data.code) {
				// 			let {id, username, paypwd, email, incode, status, token, yqcode} = this.getLoginInfo
				// 			let loginInfo = {id, username, paypwd:this.password2, email, incode, status, token, yqcode}
				// 			this.setLoginInfo(loginInfo);
				// 			showToast(res.data.msg);
				// 			uni.navigateBack({
				// 				delta: 1
				// 			});
				// 		} else {
				// 			showToast(res.data.msg);
				// 		}
				// 	},
				// 	fail: () => {
				// 		this.isShowLoading = false;
				// 		showToast(res.data.reset_pass_fail);
				// 	},
				// })
			},
			clickCBack() {
				uni.navigateBack({
					delta: 1
				})
			}
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
	}
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
		.yzm-wrapper {
			position: relative;
			width: 120px;
			margin-top: -5px;
		}
		.label {
			margin-right: 10px;
			line-height:53upx;
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
	.tip {
		font-size: 12px;
		line-height: 12px;
		color: $font-list-tip-color;
		margin-top: 10px;
	}
}
</style>
