<template>
	<view>
		<view class="app-yzm" @tap="handleClickYzm" ref="yzm" :class="{gray: yzm_state}" :style="{width: yzmStyle.width || '', height: yzmStyle.height || '', 'background-color': yzmStyle.backgroundColor || '', 'line-height': yzmStyle.lineHeight || ''}">
			{{yzmContent || i18n.get_yam}}
		</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from "vuex"
	import {showToast, deterLang} from '../../common/js/util.js'
	export default {
		props: {
			phoneNumer: [Number, String],
			isPhone: Boolean,
			yzmStyle: {
				type: Object,
				default() {
					return {}
				}
			},
			type: {
				type: Number,
				default: 2
			}
		},
		data() {
			return {
				yzm_state: false,
				hasClicked: false,
				yzmContent: '',
				timer: null
			}
		},
		computed:{
			i18n() {
				return this.$t('message');
			},
            lang_type () {
                return deterLang(this.getLangType);
            },
			...mapGetters([
				'getRequestUrl',
				'getIncode',
				'getLangType'
			])
		},
		methods: {
			handleClickYzm() {
				// 防止连续点击
				if (this.hasClicked) return;
				if (!this.phoneNumer) {
					if (this.isPhone) {
						showToast(this.i18n.enter_num_phone);
						return;
					} else {
						showToast(this.i18n.enter_email);
						return;
					}
				};
				// type 1邮箱,2手机号
				// /api/sms/sendsms 邮箱验证码
				// /api/sms/emailverify 邮箱验证码
				let _url = '';
				let _name = '';
				if (this.isPhone) {
					// 手机发送验证码
					_url = this.getRequestUrl + '/api/sms/sendsms';
					_name = (this.getIncode + '') + this.phoneNumer;
				} else {
					// 邮箱发送验证码
					_url = this.getRequestUrl + '/api/sms/emailverify';
					_name = this.phoneNumer;
					if (_name.indexOf('@') < 0) {
						showToast(this.i18n.error_email);
						this.hasClicked = false
						return;
					}
				}
				// 是否显示灰色
				this.yzm_state = true;
				// 快速二次点击
				this.hasClicked = true;
				// 倒计时时间1分钟
				let yzmTime = 60;
				// 清楚定时器
				clearTimeout(this.timer);
				let _slef_data = {
						name: _name,
						lang_type: this.lang_type
					};
				uni.request({
					url: _url,
					method: 'POST',
					data: _slef_data,
					success: res => {
						// console.log(res);
						if (res.data.code) {
							showToast(res.data.msg);
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
							this.yzm_state = false;
							this.hasClicked = false;
							showToast(res.data.msg);
						}
					},
					fail: () => {
						this.hasClicked = false;
						this.yzm_state = false;;
						showToast(this.i18n.yzm_fail);
					}
				});
			},
			...mapMutations([
				'setIncode'
			])
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../common/scss/variable';
	.app-yzm {
		position: absolute;
		right: 0;
		top: 0;
		height: 39px;
		line-height: 39px;
		color: $theme-color;
		font-size: 14px;
		&.gray {
			color: $font-list-tip-color;
		}
	}
</style>
