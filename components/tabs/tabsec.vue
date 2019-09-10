<template>
	<view class="app-tabs" v-if="tabs.length > 0">
		<view v-for="(item, index) in tabs" :key="index" @tap="handleClick(index)" :style="{fontSize: item.fontSize + 'px'}" :class="{active: activeIdx == index}">
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
			handleClick(e) {
				this.activeIdx = e;
				this.$emit('handleClick', e)
			}
		}
	}
</script>

<style lang="scss">
@import '../../common/scss/variable.scss';
.app-tabs {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	view {
		text-align: center;
		color: #DCFFF1;
		font-size: 12px;
		width: 138upx;
		height: 56upx;
		line-height: 56upx;
		border-radius: 30upx;
		&.active {
			color: $theme-color;
			background-color: #ffffff;
		}
	}
}
</style>
