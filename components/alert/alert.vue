<template>
	<view class="app-message">
		<view class="content" :style="{height: contentHeight}">
			<view class="s-title" v-if="title">{{title}}</view>
			<view class="alert-line" v-if="title"></view>
			<view class="s-txt" style="overflow-y: scroll;">
				<view>
					{{content}}
				</view>
			</view>
			<view class="btns">
				<view class="btn left" @tap="clickBtn(false)" v-if="!isCancel">取消</view>
				<view class="btn right" @tap="clickBtn(true)">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: "GG.Capital"
			},
			isCancel: {
				type: Boolean,
				default: false
			},
			content: {
				type: String,
				default: "",
				required: true
			},
			contentHeight: {
				type: String,
				default: "40%"
			}
		},
		methods: {
			clickBtn(e) {
				this.$emit("clickPopBtn", e);
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../../common/scss/variable.scss';
.app-message {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	background-color: $_alert_mask_bgcolor;
	z-index: 11000;
	overflow: hidden;
	.content {
		width: 690upx;
		height: 40%;
		border-radius: 16upx;
		background-color: $_alert_content_color;
		position: relative;
		box-shadow: 0 0 2px $_alert_shadow_color;
		.s-title {
			padding-left: 40upx;
			font-size: 16px;
			font-weight: bold;
			line-height: $_alert_title_height;
			height: $_alert_title_height;
			box-sizing: border-box;
			text-align: left;
			color: $_alert_title_color;
		}
		.alert-line {
			height: 1upx;
			width: auto;
			background-color: $_alert_line_bgcolor;
			margin: 0 30upx 20upx;
		}
		.s-txt {
			padding: 0 30upx;
			word-break: break-all;
			font-size: 13px;
			color: $_alert_txt_color;
			height: calc(100% - 130px);
			text-align: left;
			line-height: 1.5;
		}
		.btns {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			width: 690upx;
			padding: 20upx 115upx;
			box-sizing: border-box;
			right: 0;
			bottom: 0;
			display: flex;
			justify-content: space-between;
			align-items: flex-start;
			flex-direction: row;
			background-color: $_alert_content_color;
			border: 1px solid red;
			.btn {
				width: 160upx;
				height: 60upx;
				text-align: center;
				line-height: 60upx;
				border-radius: 60upx;
				background-color: $_alert_btn_bgcolor;
				color: $_alert_btn_color;
				font-size: 15px;
			}
		}
	}
}
</style>
