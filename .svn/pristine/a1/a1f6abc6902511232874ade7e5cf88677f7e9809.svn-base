<template>
	<view class="app-setting">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickClose">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.sys}}</view>
		</view>
		<!-- <view class="gg-line"></view> -->
		<view class="list">
			<h2>{{i18n.protocol_title}}</h2>
			<div v-html="i18n.protocol01"></div>
			<h4>{{i18n.protocol02}}</h4>
			<div v-html="i18n.protocol03"></div>
			<h4>{{i18n.protocol04}}</h4>
			<div v-html="i18n.protocol05"></div>
			<h4>{{i18n.protocol06}}</h4>
			<div v-html="i18n.protocol07"></div>
			<h4>{{i18n.protocol08}}</h4>
			<div v-html="i18n.protocol09"></div>
			<h4>{{i18n.protocol10}}</h4>
			<div v-html="i18n.protocol11"></div>
			<h4>{{i18n.protocol12}}</h4>
			<div v-html="i18n.protocol13"></div>
			<h4>{{i18n.protocol14}}</h4>
			<div v-html="i18n.protocol15"></div>
			<h4>{{i18n.protocol16}}</h4>
			<div v-html="i18n.protocol17"></div>
			<h4>{{i18n.protocol18}}</h4>
			<div v-html="i18n.protocol19"></div>
			<h4>{{i18n.protocol20}}</h4>
			<div v-html="i18n.protocol21"></div>
			<h4>{{i18n.protocol22}}</h4>
			<div v-html="i18n.protocol23"></div>
			
			<h4>{{i18n.protocol24}}</h4>
			<div v-html="i18n.protocol25"></div>
		</view>
	</view>
</template>

<script>
	import {showToast, pageto, pageback,deterLang} from "../../common/js/util.js"
	export default {
		data() {
			return {
				dyData:[],
				page:1,
				style:{
					contentViewWidth:0,
					contentViewHeight:0,
					mitemHeight:0
				}
			};
		},
		computed: {
			i18n() {
				return this.$t('message')
			}
		},
		onLoad() {
		},
		methods: {
			clickClose() {pageback()}
		}
	}
</script>

<style lang="scss">
	@import '../../common/scss/variable.scss';
	.app-setting {
		overflow: hidden;
		.gg-status-bar{
			background-color: #fff;
		}
		.list {
			padding: 0 30upx 40px;
			h2{
				text-align: center;
				font-size:40upx;
				line-height:80upx;
				font-weight: bold;
			}
			h4{
				font-size: 30upx;
				line-height:60upx;
				font-weight: 600;
				color: #666;
			}
			div{
				font-size:26upx;
				line-height: 50upx;
				color: #929292;
				p{
					font-size:26upx;
				}
			}
		}
	}
	.nodata {
		width: 690upx;
	}
</style>
