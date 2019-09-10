<template>
	<view>
		<view class="header">
			<view class="img">
				<image></image>
			</view>
			<p>{{name}}</p>
			<view class="uni-text">{{text}}</view>
		</view>
        <view>
            <mpvue-gesture-lock :containerWidth="590" :cycleRadius="46" @end="onEnd" :password="password"></mpvue-gesture-lock>
        </view>
		<view class="forgetgesture" @tap="forget">
			忘记手势密码 ？
		</view>
		<view class="popver" v-if="isPopver">
			<view class="popver-header">
				<view>安全验证</view>
				<view @tap="closePopver">取消</view>
			</view>
			<view class="popver-content">
				<view class="phone item">
					<lable>登录密码</lable>
					<input :type="isOpen ?'text' :'password'" placeholder="请输入您的登录密码" v-model="phoneLoginpwd"/>
					<view class="iconfont icon-yincang" :class="{active: isOpen}" @tap="eye"></view>
				</view>
				<view class="yzm item">
					<lable>验证码</lable>
					<input type="text" :placeholder="i18n.enter_yzm" v-model="yzm" maxlength="6"/>
					<view class="yzm-wrapper">
						<yzm @yzmClick="yzmClick" :phoneNumer="phoneNumer" :type="type" :isPhone="isPhone"></yzm>
					</view>
				</view>
				<view class="item code-list">
					<span v-if="isSuccess">验证码将发送到{{phoneNumer}}</span>
				</view>
			</view>
			<view class="popver-btn" @tap="popverPromise">
				<button>确定</button>
			</view>
		</view>
		<view class="mask" @touchmove.stop.prevent="moveHandle" @tap="closePopver" v-if="isPopver"></view>
	</view>
</template>

<script>
    import mpvueGestureLock from '@/components/mpvueGestureLock';
    import {mapState, mapGetters, mapMutations} from 'vuex';
	import {validate} from '../../common/js/validate.js'
	import {showToast, pageback, deterLang, checkinput,fetch} from '../../common/js/util.js'
	import Yzm from '../../components/yzm/yzm.vue'
    export default {
        components: {
            mpvueGestureLock,
			Yzm
        },
        data() {
            return {
				name:'您 好！ 币神沙雕无敌手',
				title : "手势图案",
                password: [],
				phoneNumer:'',
				yzm:'',
				phoneLoginpwd:'',
				isPopver:false,
				isPhone:true,
				isSuccess:false,
				type: 2,
				isOpen:false,
                text: '请绘制您的手势密码',
                gesturePwd:''
            }
        },
		onLoad(){
			this.phoneNumer = this.getLoginInfo.email
			if(this.getLoginInfo.incode){
				this.type = 2;
				this.isPhone = true;
				this.code = this.getLoginInfo.incode;
			}else{
				this.type = 1;
				this.isPhone = false;
				this.code = "";
			}
		},
        methods: {
			popverPromise(){
				uni.hideKeyboard();
				if (!this.phoneLoginpwd.trim()) {
					showToast(this.i18n.login_is_empty);
					return;
				}
				// 登录密码格式错误
				if (!validate.passLogin(this.phoneLoginpwd)) {
					showToast(this.i18n.login_is_error);
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
				uni.showLoading()
				let _url = this.getRequestUrl + '/api/user/GesPwd';
				let _data ={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token,
					pwd:this.phoneLoginpwd,
					yzm:this.yzm
				}
				let result = fetch(_url,_data,"POST")
				result.then((res)=>{
					uni.hideLoading()
					if(res.data.code){
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1000
						});
						uni.navigateTo({
							url: '/pages/index/index'
						});
					}else{
						this.phoneLoginpwd = '';
						this.yzm = '';
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1000
						});
						// uni.switchTab({
						// 	url: '/pages/game/shell_war'
						// });
					}
				}).catch((err)=>{
					uni.hideLoading()
					showToast(this.i18n.register_fail, pageback);
				})
			},
			yzmClick(){
				uni.hideKeyboard();
			},
			eye(){
				uni.hideKeyboard();
				this.isOpen = !this.isOpen;
			},
			moveHandle(){
				return false;
			},
			closePopver(){
					this.isPopver = !this.isPopver;
			},
            onEnd(data) {
				let {id,token} = this.getLoginInfo;
				const loginInfo = {
					id:id,
					token:token,
					gespwd:data.join(''),
					type:2
				}
				let _url = this.getRequestUrl + '/api/user/GesPwd';
				const result = fetch(_url,loginInfo,"POST")
				result.then((res)=>{
					uni.hideLoading();
					if (res.data.code) {
						this.password = [];
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1000
						});
						let tim =new Date(new Date()) / 1000;
						this.setIslogin(tim)
						setTimeout(()=>{
							uni.navigateTo({
								url: '/pages/index/index'
							});
						},500)
						
					}else{
						this.password = [];
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1000
						});
						uni.switchTab({
							url: '/pages/game/shell_war'
						});
					}
					
				}).catch((err)=>{
					uni.showToast({
						title: this.i18n.login_fail,
						icon: 'none',
						duration: 1000
					});
				})
			},
			forget(){
				this.isPopver = !this.isPopver;
			},
			...mapMutations([
				'setIslogin'
			])
        },
        computed:{
		i18n () {  
			return this.$t('message')
		},
		...mapGetters([
			'getLangType',
			'getRequestUrl',
			'getUser',
			'getLoginInfo'
		])
	}
    }
</script>

<style lang="scss">
	@import '../../common/scss/variable';
	.popver{
		position: fixed;
		background: #fff;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 9999;
		.popver-header{
			background-color: #f0f0f0;
			height: 80upx;
			line-height: 80upx;
			font-size: 24upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30upx;
		}
		.popver-content{
			padding:0 30upx;
			.item {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 12px;
				border-bottom: 2upx solid $list-border-bt-color;
				height: 126upx;
				padding-top: 52upx;
				box-sizing: border-box;
				position: relative;
				&.code-list{
					border-bottom:none;
					color: #929292;
					font-size:20upx;
					padding-top:24upx;
					height: 80upx;
				}
				.active{
					color: $theme-color;
				}
				lable{
					position: absolute;
					left: 0;
					top: 0;
					line-height: 150upx;
				}
				input {
					width: 85%;
					margin-left: 15%;
				}
				.yzm-wrapper {
					position: relative;
					width: 120px;
					margin-top: -5px;
				}
				.area {
					font-size: 14px;
				}
				&.phone {
					.icon-yincang {
						padding: 10px;
						margin: -5px -10px -10px;
						&.active {
							
						}
					}
				}
			}
		}
		.popver-btn{
			button{
				width: 100%;
				line-height: 100upx;
				background: $theme-color;
				color: #fff;
				border-radius: 0;
			}
		}
	}
	.mask {  
		position: fixed;
		top:0;
		left:0;
		z-index:999;
		width:100%;
		height:100vh;
		background:rgba(0,0,0,0.4);
	}
	.header{
		width: 100%;
		position: absolute;
		top: 64upx;
		left:0;
		text-align: center;
		.img {
			image{
				width: 120upx;
				height: 120upx;
				border-radius:60upx;
				background-color: $theme-color;
			}
		}
		p {
			margin-top:24upx;
			font-size:26upx;
		}
	}
    .uni-text{
        font-size: 24upx;
        text-align: center;
        margin-top: 30upx;
		font-weight: bold;
		color: #000;
    }
	.forgetgesture{
		position: absolute;
		bottom: 90upx;
		left: 50%;
		transform: translate(-50%);
		font-size:24upx;
		color: $theme-color;
		font-weight: bold;
	}
</style>
