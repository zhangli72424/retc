<template>
	<view class="app-register">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top between">
			<view class="left">{{i18n.hello}}<text>{{i18n.welcome}}</text></view>
			<view class="iconfont icon-cha" @tap="clickClose"></view>
		</view>
		<view class="tabs">
			<tabs :tabs="tabs" @changeIdx="changeTabIndex"></tabs>
		</view>
		<view class="content">
			<view class="code item" @tap="toArea" v-if="isPhone">
				<text class="area">+{{areaCode}}</text>
				<view class="iconfont icon-arrow-right"></view>
			</view>
			<view class="phone item">
				<input type="text" :placeholder="nametip" v-model="phoneNumer"/>
			</view>
			<view class="yzm item">
				<input type="text" :placeholder="i18n.enter_yzm" v-model="yzm"/>
				<view class="yzm-wrapper">
					<yzm :phoneNumer="phoneNumer" :type="type" :isPhone="isPhone"></yzm>
				</view>
			</view>
			<view class="password item">
				<input v-if="!isOpen" type="text" v-model="password" :placeholder="i18n.enter_login_pass"/>
				<input v-if="isOpen" type="password" v-model="password" :placeholder="i18n.enter_login_pass"/>
				<view class="iconfont" :class="{'icon-yanjing1': !isOpen,'icon-yanjing2': isOpen}" @tap="eye(0)"></view>
			</view>  
			<view class="repassword item">
				<input v-if="!isOpen1" type="text" v-model="repassword" :placeholder="i18n.reenter_login_pass"/>
				<input v-if="isOpen1" type="password" v-model="repassword" :placeholder="i18n.reenter_login_pass"/>
				<view class="iconfont" :class="{'icon-yanjing1': !isOpen1,'icon-yanjing2':isOpen1}" @tap="eye(1)"></view>
			</view>
		<!-- 	<view class="password item pay">
				<input v-if="!isOpen2" type="text" v-model="paypassword" :placeholder="i18n.enter_pay_pass"/>
				<input v-if="isOpen2" type="password" v-model="paypassword" :placeholder="i18n.enter_pay_pass"/>
				<view class="iconfont" :class="{'icon-yanjing1': !isOpen2,'icon-yanjing2':isOpen2}" @tap="eye(2)"></view>
			</view>
			<view class="repassword item repay">
				<input v-if="!isOpen3" type="text" v-model="repaypassword" :placeholder="i18n.reenter_pay_pass"/>
				<input v-if="isOpen3" type="password" v-model="repaypassword" :placeholder="i18n.reenter_pay_pass"/>
				<view class="iconfont" :class="{'icon-yanjing1': !isOpen3 , 'icon-yanjing2':isOpen3}" @tap="eye(3)"></view>
			</view> -->
			<!-- <view class="nickname item">
				<input type="text" v-model="nickname" :placeholder="i18n.enter_nickname"/>
			</view> -->
			<view class="item imgyzm">
				<input type="text" v-model="yzmImg" :placeholder="i18n.enter_imgyzm"/>
				<view class="yzm-img">
					<image :src="captcha" @tap="updatecaptcha"></image>
				</view>
			</view>
			<view class="refer item">
				<input type="text" v-model="refer" :placeholder="i18n.enter_refer"/>
			</view>
			<view class="protocol item">
				<image @tap="clickprotocol" :src="isProtocol1 ? '/static/imgs/protocol1.png':'/static/imgs/protocol2.png'"></image>
				{{i18n.i}}<text @tap="clickagreeprotocol">{{i18n.iagree}}</text>
			</view>
			<view class="register" hover-class="hover-class" @tap="doRegister">{{i18n.register}}</view>
			<view class="login-text" @tap="tologin">
				{{i18n.haveAccount}} <text class="tologin">{{i18n.login}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import Yzm from '../../components/yzm/yzm.vue'
	import {showToast, pageback, deterLang, checkinput,fetch} from '../../common/js/util.js'
	import {validate} from '../../common/js/validate.js'
	import tabs from "../../components/tabs/tabs.vue"
	export default {
		data() {
			return {
				phoneNumer: '',
				isOpen: true,
				isOpen1: true,
				isOpen2: true,
				isOpen3: true,
				password: '',
				repassword: '',
				paypassword: "",
				repaypassword: "",
				nickname: "",
				yzmImg: '',
				yzm: '',
				captcha: "",
				isPhone: true,
				refer: '',
				code: 86,
				tabs: [{name: "手机号注册"},{name: "邮箱注册"}],
				type: 2,
				isProtocol1: false
			}
		},
		computed: {
			i18n () {  
				return this.$t('message')
			},
			areaCode() {
				return (this.getArea.code ? this.getArea.code : 86) + '  ' + (this.getArea.zh ? this.getArea.zh :this.i18n.china);
			},
            lang_type () {
                return deterLang(this.getLangType);
            },
			nametip() {
				return this.isPhone ? this.i18n.enter_num_phone : this.i18n.enter_email;
			},
			...mapGetters([
				'getArea',
				'getLangType',
				'getIncode',
				'getRequestUrl'
			])
		},
		onLoad() {
			this.captcha = this.getRequestUrl + "/api/login/captcha";
			if (this.getLangType == "chs") {
				this.tabs = [
					{
						name: "手机号注册",
						fontSize: 14
					},
					{
						name: "邮箱注册",
						fontSize: 14
					}
				]
			} else if (this.getLangType == "en") {
				this.tabs = [
					{
						name: "Mobile"
					},
					{
						name: "Email"
					}
				]
			} else if (this.getLangType == "ko") {
				this.tabs = [
					{
						name: "휴대 전화 번호"
					},
					{
						name: "사서함"
					}
				]
			}
		},
		methods: {
			updatecaptcha() {
				this.captcha = this.getRequestUrl + "/api/login/captcha" + '?' + Math.random();
			},
			clickprotocol() {
				// isProtocol1 未选中
				this.isProtocol1 = !this.isProtocol1;
			},
			clickagreeprotocol() {
				uni.navigateTo({
					url: '/pages/notice/protocol'
				})
			},
			eye(e) {
				if (e == 0) {
					this.isOpen = !this.isOpen;
				} else if (e == 1) {
					this.isOpen1 = !this.isOpen1;
				} else if (e == 2) {
					this.isOpen2 = !this.isOpen2;
				} else if (e == 3) {
					this.isOpen3 = !this.isOpen3;
				}
			},
			tologin() {
				uni.navigateBack({ url: "/pages/login/login" })
			},
			toArea() {
				uni.navigateTo({ url: '/pages/area/area' });
			},
			clickClose() {
				uni.navigateBack({
					delta: 1
				})
			},
			changeTabIndex(e) {
				// 默认是0 也就是手机号
				// 注意提交的时候 1是邮箱,2是手机号
				if (e == 0) {
					this.type = 2;
					this.isPhone = true;
					this.code = this.getIncode;
				} else if (e == 1) {
					this.type = 1;
					this.isPhone = false;
					this.code = "";
				}
			},
			doRegister() {
				if(this.isProtocol1) {
					showToast(this.i18n.pleaseagree);
					return;
				}
				if(this.isPhone){
					if(!validate.mobile(this.phoneNumer)){
						showToast('手机号码格式有误');
						return;
					}
				}else{
					if(!validate.email(this.phoneNumer)){
						showToast('邮箱格式有误');
						return;
					}
				}
				if (!this.phoneNumer) {
					showToast(this.i18n.enter_num_phone);
					return;
				}
				if (!this.password.trim()) {
					showToast(this.i18n.login_is_empty);
					return;
				}
				// 登录密码格式错误
				if (!validate.passLogin(this.password)) {
					showToast(this.i18n.login_is_error);
					return;
				}
				// 登录密码与确认登录密码不一致
				if (!(this.repassword == this.password)) {
					showToast(this.i18n.login_not_same);
					return;
				}
				// 验证码为空
				if (!this.yzm.trim()) {
					showToast(this.i18n.yzm_error_is);
					return;
				}
				// 验证码为空格式错误
				if (!validate.yzm(this.yzm)) {
					showToast(this.i18n.yzm_error_isfail);
					return;
				}
				// // 支付密码为空
				// if (!this.paypassword.trim()) {
				// 	showToast(this.i18n.pay_is_empty);
				// 	return;
				// }
				// // 支付密码格式错误
				// if (!validate.passPwd(this.paypassword)) {
				// 	showToast(this.i18n.pay_is_error);
				// 	return;
				// }
				// // 支付密码与确认登录密码不一致
				// if (!(this.repaypassword == this.paypassword)) {
				// 	showToast(this.i18n.pay_not_same);
				// 	return;
				// }
				// // 昵称为空
				// if (!this.nickname.trim()) {
				// 	showToast(this.i18n.nickname_is_empty);
				// 	return;
				// }
				// // 昵称格式错误
				// if (!validate.passLogin(this.paypassword)) {
				// 	showToast(this.i18n.nickname_is_error);
				// 	return;
				// }
				// 图形验证码为空
				if (!this.yzmImg.trim()) {
					showToast(this.i18n.yzmimg_is_empty);
					return;
				}
				// 图形验证码格式错误
				if (!validate.yzmimg(this.yzmImg)) {
					showToast(this.i18n.yzmimg_is_error);
					return;
				}
				// // 邀请码为空
				// if (!this.yzmImg.trim()) {
				// 	showToast(this.i18n.yzm_is_empty);
				// 	return;
				// }
				// // 邀请码格式错误
				// if (!validate.yzm(this.yzmImg)) {
				// 	showToast(this.i18n.yzm_is_error);
				// 	return;
				// }
				uni.showLoading()
				let registerData = {
					email: this.phoneNumer,
					password: this.password,
					password1: this.repassword,
					yzm: this.yzm,
					lang_type: this.lang_type,
					type: this.type,
					code: this.code,
					username: this.phoneNumer,
					refer: this.refer,
					img_code: this.yzmImg,
					// nickname: this.nickname
				}
				console.log(registerData);
				let _url = this.getRequestUrl + '/api/login/register';
				let result = fetch(_url,registerData,"POST")
				result.then((res)=>{
					// console.log(res);
					uni.hideLoading();
					if (res.data.code) {
						this.setUser(this.phoneNumer);
						this.setPass(this.password);
						showToast(res.data.msg);
						setTimeout(() => {
							pageback();
						}, 800)
					} else {
						showToast(res.data.msg);
						this.updatecaptcha();
					}
				}).catch((err)=>{
					showToast(this.i18n.register_fail);
					this.updatecaptcha();
				})
			},
			...mapMutations([
				'setUser',
				'setPass'
			])
		},
		components: {
			Yzm,
			tabs
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
.app-register {
	.gg-top {
		height: 50px;
		.left {
			display: flex;
			flex-direction: column;
			text {
				font-size: 12px;
			}
		}
	}
	.tabs {
		margin-top: 80upx;
	}
	.content {
		padding: 10upx 30upx;
	}
	.item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		border-bottom: 2upx solid $list-border-bt-color;
		height: 90upx;
		padding-top: 20upx;
		box-sizing: border-box;
		input {
			width: 100%;
		}
		.yzm-wrapper {
			position: relative;
			width: 120px;
			margin-top: -5px;
		}
		.area {
			font-size: 14px;
		}
		.yzm-img {
			width: 220upx;
			height: 60upx;
			margin-top: -10upx;
			border-radius: 5upx;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		&.yzm {
			align-items: flex-start;
		}
		&.password, &.repassword {
			.icon-yincang {
				padding: 10px;
				margin: -10px;
				&.active {
					color: $theme-color;
				}
			}
		}
		&.code {
			color: $font-title-color;
			align-items: center;
			.iconfont {
				color: $list-arrow-rt-color;
				font-size: 14px;
			}
		}
		&.protocol {
			border: 0;
			color: $font-title-color;
			justify-content: flex-start;
			text {
				color: $theme-color;
				text-decoration: underline;
			}
			image {
				width: 14px;
				height: 14px;
				padding: 12upx;
				margin: -12upx 0 -12upx -12upx;
			}
		}
	}
	.register {
		width: 320upx;
		height: 80upx;
		color: #ffffff;
		line-height: 80upx;
		text-align: center;
		background-color: $btn-bg-color;
		margin: 100upx auto 0;
		border-radius: 10upx;
	}
	.login-text {
		font-size: 14px;
		line-height: 1;
		padding: 40upx 0;
		margin: 0 auto;
		text-align: center;
		.tologin {
			color: $theme-color;
			margin-left: 10upx;
			font-size: 14px;
		}
	}
}
</style>
