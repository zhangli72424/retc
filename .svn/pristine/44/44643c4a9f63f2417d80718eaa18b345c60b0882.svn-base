<template>
	<view class="app-history">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickCBack">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.transfer_detail}}</view>
		</view>
		<view class="list">
			<view class="item" hover-class="list-hover">
				<view class="left">
					<view class="name">{{list.title}}{{i18n.transfer}}</view>
					<view class="address">{{i18n.OutgoingAddress}}：{{list.from}}</view>
					<view class="address">{{i18n.ReceivingAddress}}：{{list.to}}</view>
					<view class="time">{{list.create_time}}</view>
				</view>
				<view class="right">
					<view class="state" v-if="list.status ==1">{{i18n.transfer}} | {{i18n.AuditInProgress}}</view>
					<view class="state" v-if="list.status ==3">{{i18n.transfer}} | {{i18n.Adopted}}</view>
					<view class="state" v-if="list.status ==4">{{i18n.transfer}} | {{i18n.Rejected}}</view>
					<view class="num">{{list.number}}</view>
					<view class="fee">{{i18n.transferfee}}：{{list.sfee}}{{list.title}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import {pageback, pageto} from "../../common/js/util.js"
	import {validate} from '../../common/js/validate.js'
	export default {
		data() {
			return {
				list:{
					create_time:'',
					fee:'',
					from:'',
					number:'',
					remark:'',
					sfee:'',
					status:'',
					to:''
				}
			}
		},
		onLoad() {
			let {title,create_time,fee,from,number,remark,sfee,status,to} = this.getDetails
			this.list = {title,create_time,fee,from,number,remark,sfee,status,to}
		},
		computed: {
			i18n() {
				return this.$t('message');
			},
			...mapGetters([
				'getDetails'
			])
		},
		methods: {
			clickCBack() {pageback();}
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
page {
	background-color: #f6f6f6;
}
.app-history {
	.gg-top {
		background-color: transparent;
	}
	.item {
		display: flex;
		justify-content: space-between;
		// align-items: center;
		width: 690upx;
		height: 326upx;
		border-radius: 10upx;
		margin: 0 auto 20upx;
		background-color: #ffffff;
		padding: 20upx 20upx;
		.left {
			width: 70%;
			.name {
				font-size: 17px;
				font-weight: bold;
				color: $font-title-color;
				margin-bottom: 20upx;
			}
			.address {
				font-size: 14px;
				color: #6a6a6a;
				margin-bottom: 26upx;
				width: 98%;
				word-wrap: break-word; 
				word-break: normal;
			}
			.time {
				font-size: 13px;
				color: $font-list-tip-color;
			}
		}
		.right {
			text-align: right;
			.state {
				font-size: 13px;
				color: #FF7428;
				margin-bottom: 38upx;
			}
			.num {
				font-size: 15px;
				font-weight: bold;
				margin-bottom: 18upx;
				color: #000000;
			}
			.fee {
				font-size: 13px;
				color: #6a6a6a;
			}
		}
	}
}
</style>
