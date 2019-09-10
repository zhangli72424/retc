<script>
	import {mapGetters, mapMutations} from 'vuex'
	export default {
		onLaunch () {
		//#ifdef APP-PLUS  
			var server = "http://retcim.com/api/index/ve"; //检查更新地址  
			var req = { //升级检测数据  
				"appid": plus.runtime.appid,  
				"version": plus.runtime.version
			};
			let _this = this;
			uni.request({  
				url: server,
				data: '',  
				success: (res) => {
					// return;
					if(res.data.code){
						let downs = res.data.data.down;
						if(res.data.data.is_up  == '1'){
							if(req.version  == res.data.data.ve){
							}else{
								uni.showModal({ //提醒用户更新  
									title: this.i18n.update,  
									content: this.i18n.update_tip,  
									success: (res) => {  
										if (res.confirm) {
											uni.showToast(this.i18n.isJumping)
											setTimeout(()=>{
												plus.runtime.openURL(downs);
											}, 500)												 
										}else{
											uni.showToast(this.i18n.soon_update);
											setTimeout(()=>{
												// #ifdef APP-PLUS  
												plus.runtime.quit();  
												// #endif
												// _this.setLogininfo('');
												// _this.setIslogin('');
												uni.redirectTo({
													url: '/pages/login/login'
												})
											}, 500)
										}
									},
									fail:(err)=>{
										showToast(_this.i18n.fail)
									}
								})
							}
						}
					}
				}  
			})  
			//#endif
		},
		computed: {
			i18n () {  
				return this.$t('message')
			},
			...mapGetters([
				'getRequestUrl'
			])
		}
	}
</script>

<style lang="scss">
/*每个页面公共css */
@import './static/font/font.css';
@import './common/scss/global.scss';
</style>
