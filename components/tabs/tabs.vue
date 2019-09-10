<template>
	<view class="app-tabs" v-if="tabs.length > 0" :style="{'justify-content': (space > 0 ? 'space-between' : '')}">
		<view v-for="(item, index) in tabs" :key="index" :style="{fontSize: item.fontSize + 'px', width: (space > 0 ? '50%' : '')}" :class="{active: activeIdx == index}" @tap="changeIdx(index, item)">
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			tabs: {
				type: Array,
				default () {
					return []
				}
			},
			space: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				activeIdx: 0
			}
		},
		methods: {
			// e表示tabs的index, i表示tabs的item
			changeIdx(e, i) {
				this.activeIdx = e;
				this.$emit('changeIdx', e, i);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.app-tabs {
	display: flex;
	flex-direction: row;
	view {
		padding: 10upx 0;
		text-align: center;
		position: relative;
		color: $font-list-tip-color;
		margin:0 30upx;
		&:last-child {
			margin-right: 0;
		}
		&::after {
			content: '';
			display: block;
			position: absolute;
			height: 2upx;
			top: 100%;
			left: 50%;
			width: 50upx;
			margin-left: -25upx;
			background-color: transparent;
		}
		&.active {
			color: $theme-color;
			&::after {
				background-color: $theme-color;
			}
		}
	}
}
</style>
