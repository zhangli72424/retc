<template>
	<view class="app-history">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickCBack">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.transferlog}}</view>
		</view>
		<view class="list">
			<scroll-view id="scrollview" :style="{height:style.contentViewHeight+'px'}" @scrolltolower="getList" scroll-y="true" scroll-with-animation="true">
				<block v-for="(item,index) in list" :key="index">
					<view class="item" hover-class="list-hover" @tap="handleclick(item)">
						<view class="left">
							<view class="name">{{title}}{{i18n.transfer}}</view>
							<view class="time">{{item.create_time}}</view>
						</view>
						<view class="right">
							<view class="txt">{{i18n.charge}}</view>
							<view class="num green">{{item.number}}</view>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapGetters,mapMutations} from 'vuex'
	import {pageback, pageto,fetch ,showToast} from "../../common/js/util.js"
	import {validate} from '../../common/js/validate.js'
	export default {
		data() {
			return {
				tokenId:'',
				title:'',
				page:1,
				style:{
					contentViewWidth:0,
					contentViewHeight:0,
					mitemHeight:0
				},
				list:[]
			}
		},
		created:function(){
			const res = uni.getSystemInfoSync(); 
			this.style.pageHeight = res.windowHeight;
			//获取 head  高度
			this.style.contentViewHeight = res.windowHeight - 70; //像素
		},
		onLoad(e) {
			this.tokenId = e.tokenid;
			this.title = e.title;
			this.getList();
		},
		computed: {
			i18n() {
				return this.$t('message');
			},
			...mapGetters([
				'getRequestUrl','getLoginInfo','getLangType'
			])
		},
		methods: {
			...mapMutations([
				'setDetails'
			]),
			clickCBack() {pageback();},
			handleclick(e) {
				let lists = e;
				lists.title = this.title;
				this.setDetails(lists)
				pageto(`log`)
			},
			getList(){
				let _url=this.getRequestUrl+'/api/wallet/history';
				let _data={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token,
					rows:10,
					token_id:this.tokenId,
					type:2,
					page:this.page,
					lang_type:this.getLangType=='chs'?'1':'2'
				}
				uni.showLoading()
				const result = fetch(_url,_data,"POST");
				result.then((res)=>{
					uni.hideLoading()
					if(res.data.code){
						if(!res.data.data.data){
							return
						}
						if(this.page>1){
							this.page ++
							this.list = this.list.concat(res.data.data.data)
						}else{
							this.page ++
							this.list = res.data.data.data
						}
					}else{
						showToast(res.data.msg)
					}
				})
			}
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
		align-items: center;
		width: 690upx;
		height: 126upx;
		border-radius: 10upx;
		margin: 0 auto 20upx;
		background-color: #ffffff;
		padding: 0 20upx;
		.left {
			.name {
				font-size: 15px;
				color: $font-title-color;
				margin-bottom: 20upx;
			}
			.time {
				font-size: 14px;
				color: $font-list-tip-color;
			}
		}
		.right {
			text-align: right;
			.txt {
				font-size: 15px;
				color: $font-title-color;
				margin-bottom: 18upx;
			}
			.num {
				font-size: 16px;
				&.green {
					color: $green-adorn;
				}
				&.red {
					color: $red-adorn;
				}
			}
		}
	}
}
</style>
