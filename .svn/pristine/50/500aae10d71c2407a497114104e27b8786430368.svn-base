<template>
	<view class="app-service">
		<view class="gg-top-top"></view>
		<view>
			<web-view @message="handleMessage" src="/hybrid/html/local.html" style="height: 100%;"></web-view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			i18n () {  
				return this.$t('message')
			}
		},
		methods: {
			clickClose() {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		onReady() {
			// #ifdef APP-PLUS
			let currentWebview = this.$mp.page.$getAppWebview();
			setTimeout(function() {
				let wv = currentWebview.children()[0];
				wv.setStyle({top: 0});
			}, 200);
			// #endif
		}
	}
</script>

<style lang="scss">
@import '../../common/scss/variable.scss';
</style>
