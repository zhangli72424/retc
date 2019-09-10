<template>
	<view class="app-address">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top">
			<view class="iconfont icon-arrow-left" @tap="clickCBack"></view>
			<view @tap="clickCBack">{{i18n.with_address}}</view>
			<view class="add-new" @tap="addaddress">{{i18n.add_new_address}}</view>
		</view>
		<view class="gg-line"></view>
		<scroll-view id="scrollview"  :style="{height:style.contentViewHeight+'px'}" @scrolltolower="getAddList" scroll-y="true" scroll-with-animation="true">
			<block v-for="(item,index) in addressList" :key="index">
				<view class="item" @tap="getAddress(item)">
					<image :src="item.logo"></image>
					<view class="right">
						<view class="name">{{item.tag}}</view>
						<view class="address">{{item.address}}</view>
					</view>
					<view class="right-after" @tap.stop="clickshanchu(item)">{{i18n.delete}}</view>
				</view>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import {pageback, pageto,fetch,showToast} from "../../common/js/util.js"
	import {validate} from '../../common/js/validate.js'
	export default {
		data() {
			return {
				isModifyNick: false,
				isModifySex: false,
				isfast: false,
				title:'',
				tokenid:'',
				style:{
					contentViewWidth:0,
					contentViewHeight:0,
					mitemHeight:0
				},
				addressList:[],
				page:1
			}
		},
		created:function(){
			const res = uni.getSystemInfoSync(); 
			this.style.pageHeight = res.windowHeight;
			//获取 head  高度
			this.style.contentViewHeight = res.windowHeight - 70; //像素
		},
		onLoad(e) {
			this.tokenid = e.tokenid;
			this.title = e.title;
			this.getAddList();
		},
		computed: {
			i18n() {
				return this.$t('message');
			},
			...mapGetters([
				'getLangType',
				'getRequestUrl',
				'getLoginInfo'
			])
		},
		methods: {
			...mapMutations([
				'setCurAddress'
			]),
			getAddList(){
				let _url=this.getRequestUrl+'/api/wallet/addrList';
				let _data={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token,
					rows:10,
					page:this.page,
					lang_type:this.getLangType
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
							let listss = res.data.data.data;
							listss = listss.filter(item => {
								return item.title_en.indexOf(this.title) >= 0;
							})
							this.addressList = this.addressList.concat(listss)
						}else{
							this.page ++
							let lists = res.data.data.data;
							lists = lists.filter(item => {
								return item.title_en.indexOf(this.title) >= 0;
							})
							this.addressList = lists
						}
					}else{
						showToast(res.data.msg)
					}
				})
			},
			clickCBack() {
				pageback();
			},  
			getAddress(e){
				let {id,tag:label,address,logo,title_en} = e;
				let iconlist = {id,label,address,logo,title_en}
				this.setCurAddress(iconlist)
				pageback();
			},
			handleclick()  {
				console.log(123)
			},
			clickshanchu(e) {
				let _self = this
				uni.showModal({
					title: _self.i18n.confirmOk,
					content: ' ',
					success: function (res) {
						if (res.confirm) {
							let _url=_self.getRequestUrl+'/api/wallet/delAddr';
							let _data={
								id:_self.getLoginInfo.id,
								token:_self.getLoginInfo.token,
								addid:e.id,
								lang_type:_self.getLangType
							}
							uni.showLoading()
							const result = fetch(_url,_data,"POST");
							result.then(res=>{
								if(res.data.code){
									showToast(res.data.msg)
									setTimeout(()=>{
										uni.navigateBack({
											delta: 1
										})
									},500)
								}else{
									showToast(res.data.msg)
								}
							})
						} else if (res.cancel) {
							showToast(_self.i18n.cancel)
						}
					}
				});
		
				return;
				
				
			},
			addaddress() {
				pageto("modify-address");
			}
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
page {
	background-color: #f6f6f6;
}
.app-address {
	.gg-top {
		background-color: transparent;
	}
	.add-new {
		flex: 1;
		text-align: right;
	}
	.item {
		margin: 0 auto 20upx;
		width: 690upx;
		height: 156upx;
		border-radius: 10upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		padding: 0 20upx;
		image {
			width: 62upx;
			height: 62upx;
			margin-right: 20upx;
		}
		.right {
			flex: 1;
			width: 70%;
			.name {
				font-size: 14px;
				color: $font-list-tip-color;
				margin-bottom: 18upx;
			}
			.address {
				font-size: 14px;
				width:100%;
				word-wrap: break-word;
				word-break: normal;
				color: $font-title-color;
			}
		}
		.right-after {
			font-size: 14px;
			color: $theme-color;
			width: 40px;
			height: 156upx;
			line-height: 156upx;
			text-align: right;
		}
	}
}
</style>
