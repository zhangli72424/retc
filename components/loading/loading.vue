<template>
	<view class="loading">
		<image src="/static/imgs/loading.gif" :style="{backgroundColor: 'backBg', width: size+'px', height: size+'px'}"></image>
	</view>
</template>

<script>
	export default {
		props: {
			backBg: {
				type: String,
				default: 'transparent'
			},
			size: {
				type: Number,
				default: 50
			}
		}
	}
</script>

<style lang="scss" scoped>
	.loading {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		image {
			width: 50px;
			height: 50px;
		}
	}
</style>
