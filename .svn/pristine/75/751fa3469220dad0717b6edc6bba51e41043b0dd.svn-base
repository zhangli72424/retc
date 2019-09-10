<template>
	<view class="app-register">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top between">
			<view class="left">{{i18n.hello}}<text>{{i18n.welcome}}</text></view>
			<!-- <view class="iconfont icon-cha" @tap="clickClose"></view> -->
		</view>
		<view class="content">
			<view class="phone item">
				<input type="text" :placeholder="i18n.enter_num_phone" v-model="phoneNumer"/>
			</view>
			<view class="password item">
				<input v-if="!isOpen" type="text" v-model="password" :placeholder="i18n.enterpassword_cye"/>
				<input v-if="isOpen" type="password" v-model="password" :placeholder="i18n.enterpassword_cye"/>
				<view class="iconfont" :class="{'icon-yanjing1': !isOpen,'icon-yanjing2': isOpen}" @tap="eye"></view>
			</view>
			<view class="other-content">
				<view class="tip" @tap="toForget">{{i18n.forgetPass}}</view>
				<view class="switch_lang" @tap="switchLang">{{i18n.switch_lang}}</view>
			</view>
			<view class="login" :class="hassoment ? 'active' :''" hover-class="hover-class" @tap="login">{{i18n.login}}</view>
			<view class="login-text" @tap="tologin">
				{{i18n.notAccount}} <text class="tologin" >{{i18n.signin}}</text>
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
		<view v-if="isShowLoading">
			<loading></loading>
		</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import {showToast, deterLang, pageto,fetch} from '../../common/js/util.js'
	import loading from '../../components/loading/loading.vue'
	export default {
		data() {
			return {
				phoneNumer: '',
				isOpen: true,
				hassoment:false,
				password: '',
				yzm: '',
				isShowLoading: false,
				showSelectLang: false,
				currentLang: ""
			}
		},
		watch:{
			phoneNumer(val){
				if(val.length){
					this.hassoment = true
				}else{
					this.hassoment = false
				}
			}
		},
		computed: {
			i18n () {  
				return this.$t('message')
			},
			areaCode() {
				return (this.getArea.code ? this.getArea.code : 86) + '  ' + (this.getArea.zh ? this.getArea.zh : "中国");
			},
            lang_type () {
                return deterLang(this.getLangType);
            },
			...mapGetters([
				'getArea',
				'getLangType',
				'getRequestUrl',
				'getUser',
				'getPass'
			])
		},
		onLoad() {
			this.password = this.getPass || '';
			this.phoneNumer = this.getUser || '';
			this.currentLang = uni.getStorageSync('lang') || 'chs';
		},
		methods: {
			eye() {
				this.isOpen = !this.isOpen;
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
			tologin() {
				pageto("/pages/register/register");
			},
			toForget() {
				pageto("/pages/forget/forget");
			},
			switchLang() {
				this.showSelectLang = true;
			},
			login() {
				if (!this.phoneNumer.length) {
					showToast(this.i18n.enter_num_phone);
					return;
				}
				if (!this.password.length) {
					showToast(this.i18n.enterpassword_cye);
					return;
				}
				let type;
				if(this.lang_type == null || this.lang_type=='' || !this.lang_type){
					type=1;
				}else{
					type = this.lang_type
				}
				this.isShowLoading = true;
				let _data = {
						username: this.phoneNumer,
						password: this.password,
						lang_type: type
					}
				let requests = fetch(this.getRequestUrl + '/api/login/login',_data,"POST");
				requests.then((res) => {
					this.isShowLoading = false;
					showToast(res.data.msg);
					if(res.data.code){
						uni.showToast({
							title:res.data.msg,
							icon:'success'
						})
						let {id, username, paypwd, email, incode, status, token, yqcode} = res.data.data;
						let loginInfo = {
							id, yqcode, username, paypwd, email, incode, status, token, password: this.password
						};
						// 登录信息
						this.setLoginInfo(loginInfo);
						// 用户名
						this.setUser(this.phoneNumer);
						// 密码
						this.setPass(this.password);
						// 跳转到首页
						uni.switchTab({ url: "/pages/index/index" });
					}
				}).catch((err)=>{
					this.isShowLoading = false;
				});
			},
			toArea() {
				uni.navigateTo({
					url: "/pages/area/area"
				})
			},
			...mapMutations([
				'setLoginInfo',
				'setUser',
				'setPass',
				'setLangType'
			])
		},
		components: {
			loading
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
.app-register {
	.gg-top {
		.left {
			display: flex;
			flex-direction: column;
			text {
				font-size: 12px;
			}
		}
	}
	.content {
		padding: 0 30upx;
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
		&.phone {
			margin-top: 100upx;
		}
		input {
			width: 100%;
		}
		.area {
			font-size: 14px;
		}
		&.password {
			.iconfont {
				padding: 10px;
				margin: 0px -10px -10px -10px;
			}
		}
	}
	.other-content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		view {
			color: $theme-color;
			padding: 10px;
			margin: -10px;
			margin-top: 0;
			font-size: 14px;
		}
		.switch_lang {
			text-align: right;
		}
	}
	.login {
		width: 320upx;
		height: 80upx;
		color: #ffffff;
		line-height: 80upx;
		text-align: center;
		background-color: #acacac;
		margin: 0 auto;
		margin-top: 200upx;
		border-radius: 10upx;
		&.active{
			background-color: $theme-color;
		}
	}
	.login-text {
		color: $font-common-color;
		margin-top: 70upx;
		text-align: center;
		font-size: 14px;
		.tologin {
			color: $theme-color;
			font-size: 14px;
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
				font-size: 14px;
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
					font-size: $font-title-color;
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
}
</style>
