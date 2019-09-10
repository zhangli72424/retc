<template>
	<view class="app-register">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickCBack">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.modify_login_pass}}</view>
		</view>
		<view class="gg-line"></view>
		<view class="content">
			<view class="password item">
				<view class="label">{{i18n.old_pass}}</view>
				<input v-if="!isOpen1" type="text" v-model="password1" :placeholder="i18n.enter_old_pass"/>
				<input v-if="isOpen1" type="password" v-model="password1" :placeholder="i18n.enter_old_pass"/>
				<view class="iconfont icon-yincang" :class="{active: !isOpen1}" @tap="eye(1)"></view>
			</view>
			<view class="password item">
				<view class="label">{{i18n.new_pass}}</view>
				<input v-if="!isOpen2" type="text" v-model="password2" :placeholder="i18n.enter_new_pass"/>
				<input v-if="isOpen2" type="password" v-model="password2" :placeholder="i18n.enter_new_pass"/>
				<view class="iconfont icon-yincang" :class="{active: !isOpen2}" @tap="eye(2)"></view>
			</view>
			<view class="tip">{{i18n.enterpassword_cye}}</view>
			<view class="login" hover-class="hover-class" @tap="submit">{{i18n.submit}}</view>
		</view>
		<view v-if="isShowLoading"><loading></loading></view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import loading from '../../components/loading/loading.vue'
	import {showToast, deterLang, fetch} from '../../common/js/util.js'

    export default {
        data() {
            return {
                isOpen1: true,
                isOpen2: true,
                password1: '',
                password2: '',
                yzm: '',
                userinfo: '',
                phoneNumer: '',
                isShowLoading: false,
                isPhone: true,
                popcontent: '',
                isCancel: ''
            }
        },
        computed: {
            lang_type() {
                return deterLang(this.getLangType);
            },
            i18n() {
                return this.$t('message')
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
            eye(e) {
                if (e == 1) {
                    this.isOpen1 = !this.isOpen1;
                } else if (e == 2) {
                    this.isOpen2 = !this.isOpen2;
                }
            },
            submit() {
                if (!this.password1) {
                    showToast(this.i18n.enter_old_pass);
                    return;
                }
                if (!this.password2) {
                    showToast(this.i18n.enter_new_pass);
                    return;
                }
                this.isShowLoading = true;
                let deltaData = {
                    id: this.getLoginInfo.id,
                    token: this.getLoginInfo.token,
                    old_pass: this.password1,
                    new_pass: this.password2,
                    new_pass1: this.password2,
                    lang_type: this.lang_type
                }
				const result = fetch(this.getRequestUrl + '/api/user/upPwd',deltaData,'POST')
				result.then((res)=>{
					this.isShowLoading = false;
					if (res.data.code) {
					    showToast(res.data.msg);
					    this.setPass(this.password2);
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
                // uni.request({
                //     url: this.getRequestUrl + '/api/user/upPwd',
                //     method: 'POST',
                //     data: deltaData,
                //     success: res => {
                //         this.isShowLoading = false;
                //         if (res.data.code) {
                //             showToast(res.data.msg);
                //             this.setPass(this.password2);
                //             uni.navigateBack({
                //                 delta: 1
                //             });
                //         } else {
                //             showToast(res.data.msg);
                //         }
                //     },
                //     fail: () => {
                //         this.isShowLoading = false;
                //         showToast(res.data.reset_pass_fail);
                //     },
                // })
            },
            clickCBack() {
                uni.navigateBack({
                    delta: 1
                })
            },
            ...mapMutations([
                'setPass'
            ])
        },
        components: {
            loading
        }
    };
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
.app-register {
	.content {
		padding: 12upx 100upx;
	}
	.yzm-wrapper {
		position: relative;
		width: 120px;
		margin-top: 5px;
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
			margin-top: 5px;
		}
		.label {
			margin-right: 10px;
			line-height:53upx;
		}
		&.password {
			.icon-yincang {
				padding: 15px;
				margin: -8px -15px -15px 0;
				&.active {
					color: $theme-color;
				}
			}
		}
	}
	.login {
		width: 336upx;
		height: 88upx;
		line-height: 88upx;
		background-color: $theme-color;
		border-radius: 44upx;
		text-align: center;
		font-size: 15px;
		margin: 100upx auto;
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
