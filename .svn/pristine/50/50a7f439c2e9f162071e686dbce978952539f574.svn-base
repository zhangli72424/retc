<template>
	<view>
		<view class="uni-text">{{text}}</view>
		<view>
			<mpvue-gesture-lock :containerWidth="590" :cycleRadius="46" @end="onEnd" :password="password"></mpvue-gesture-lock>
		</view>
	</view>
</template>

<script>
	import mpvueGestureLock from '@/components/mpvueGestureLock';
	import {showToast, deterLang, pageto,fetch} from '../../common/js/util.js'
	import {
		mapState,
		mapGetters,
		mapMutations
	} from 'vuex';
	export default {
		components: {
			mpvueGestureLock
		},
		data() {
			return {
				title: "手势图案",
				password: [],
				text: '请设定手势',
				gesturePwd: ''
			}
		},
		methods: {
			onEnd(data) {
				console.log(data)
				if (this.password.length) {
					if (this.password.join('') === data.join('')) {
						console.log(this.gesturePwd)
						this.text = '手势设定完成';
						let {
							id,
							token
						} = this.getLoginInfo;
						const loginInfo = {
							id: id,
							token: token,
							gespwd: data.join(''),
							type: 1
						}
						
						let result = fetch(this.getRequestUrl + '/api/user/GesPwd',loginInfo,"POST");
						result.then((res)=>{
							uni.hideLoading();
							if(res.data.code){
								let tim = new Date(new Date()) / 1000;
								this.setIslogin(tim)
								setTimeout(() => {
									uni.switchTab({
										url: '/pages/index/index'
									});
								}, 500)
								
							}else{
								showToast(res.data.msg)
							}
						}).catch((err)=>{
							showToast(res.data.msg)
						})
						return
						console.log(JSON.stringify(loginInfo))
						uni.request({
							url: this.getRequestUrl + '/api/user/GesPwd',
							method: 'POST',
							data: loginInfo,
							success: res => {
								console.log(JSON.stringify(res))
								uni.hideLoading();
								if (res.data.code) {
									let tim = new Date(new Date()) / 1000;
									this.setIslogin(tim)
									setTimeout(() => {
										uni.switchTab({
											url: '/pages/index/index'
										});
									}, 500)
								} else {
									uni.showToast({
										title: res.data.msg,
										icon: 'none',
										duration: 1000
									});
								}
							},
							fail: () => {
								uni.showToast({
									title: this.i18n.login_fail,
									icon: 'none',
									duration: 1000
								});
							}
						});
						this.password = []
					} else {
						this.text = '两次手势设定不一致'
						this.password = []
					}
				} else {
					this.text = '请确认手势设定'
					this.password = data;

				}
			},
			...mapMutations([
				'setIslogin'
			])
		},
		computed: {
			i18n() {
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

<style>
	.uni-text {
		position: absolute;
		top: 280upx;
		left: 50%;
		transform: translate(-50%);
		font-size: 24upx;
		font-weight: bold;
		color: #000;
	}
</style>
