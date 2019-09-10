<template>
	<view>
		
	</view>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		computed:{
			...mapGetters([
				'getGesturePassword','getLoginInfo'
			])
		},
		data() {
			return {
				
			};
		},onLoad(){
			this.loadExecution();
		},methods:{
			loadExecution(){
				if(this.getLoginInfo.token){
					if(!this.getGesturePassword){
						uni.switchTab({
							url: '/pages/index/index'
						});
					}else{
						uni.redirectTo({
							url:'/pages/gesture-password/gesture-password'
						})
					}
				}else{
					uni.redirectTo({
						url: '/pages/login/login'
					});
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
