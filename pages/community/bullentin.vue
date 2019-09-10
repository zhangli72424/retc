<template>
	<view class="app-aboutus">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top">
			<view class="iconfont icon-arrow-left" @tap="clickClose"></view>
			<view @tap="clickClose">{{i18n.sys}}</view>
		</view>
		<view class="gg-line"></view>
		<view class="content">
			<view class='title' v-if="title">{{getBulletin.title}}</view>
			<rich-text class="p" v-html="getBulletin.content"></rich-text>
		</view>
		<view class="zhi-aboutus">
			<p>{{i18n.sysBrand1}}</p>
			<p>{{i18n.sysBrand2}}</p>
			<p>{{getBulletin.time}}</p>
		</view>
	</view>
</template>

<script>
import {mapGetters} from 'vuex'
import {pageback} from '../../common/js/util.js'
export default {
	data() {
		return {
			title: '123456'
		}
	},
	computed: {
		i18n () {  
			return this.$t('message')
		},
		...mapGetters([
			'getBulletin'
		])
	},
	methods: {
		clickClose() {
			pageback();
		}
	},
	onLoad(e) {
		this.title = e.title;
	}
}
</script>

<style lang="scss">
	// 引入variable.scss文件
@import '../../common/scss/variable.scss';
.app-aboutus {
	.gg-top {
		color: $font-title-color;
	}
	.content{
		margin: 30upx;
		.title{
			padding: 66upx 0 40upx 0;
			line-height: 1;
			font-size: 15px;
		}
		.p{
			color: $font-list-tip-color;
			font-size: 14px;
			line-height: 16px;
			margin-bottom: 30upx;
		}
	}
	.zhi-aboutus{
		margin-top: 120upx;
		margin-left: 32upx;
		p {
			font-size: 15px;
			line-height: 20px;
		}
	}
}
</style>
