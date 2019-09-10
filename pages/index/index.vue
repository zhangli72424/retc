<template>
	<view class="app-index">
		<view class="top">
			<view class="gg-height" style="height: '70px'"></view>
			<view class="gg-status-bar"></view>
			<view class="gg-top">{{i18n.index}}</view>
			
			<view class="index_flex">
				<view class="index_item">
					<view class="assets" @tap="handleclickyanjing">
						<text class="txt">{{i18n.assets}}</text><text class="iconfont" :class="currentyanjing"></text>
					</view>
					<view class="assets-num">≈￥<text>{{assetsNum}}</text></view>
				</view>
				<view class="index_item">
					<!-- <view class="assets" @tap="handleclickqukuaibao">
						<text class="txt">{{i18n.aCode}}</text><text class="iconfont" :class="currentyanjing1"></text>
					</view>
					<view class="assets-num">≈￥<text>{{blockPackage}}</text></view> -->
				</view>
				<!-- <view class="index_item"> -->
					<!-- <button type="primary" size="mini" @tap="exchange"><i class="iconfont icon-shandian"></i>{{i18n.exchange}}</button> -->
				<!-- </view> -->
			</view>
			
	<!-- 		
			<view class="assets" @tap="handleclickyanjing">
				<text class="txt">{{i18n.assets}}</text><text class="iconfont" :class="currentyanjing"></text>
			</view>
			<view class="assets-num">≈$<text>{{assetsNum}}</text></view> -->
			<view class="search-wrapper">
				<view class="left">
					<text class="iconfont icon-sousuo"></text>
					<input type="text" v-model="searchContent" @input="filterCur" :placeholder="i18n.search_coin" />
				</view>
				<view class="right" @tap="filterNumber">
					<image :src="isFilterNumber ? '/static/imgs/circle1.png':'/static/imgs/circle0.png'"></image>
					<text>{{i18n.hide_currency}}</text>
				</view>
			</view>
		</view>
		<view class="list">
			<view class="item" :class="item.isShow ?'active':''" v-for="(item, index) in coins" :key="index" @tap="getClick(index)">
				<view class="top">
					<view class="left">
						<image :src="item.logo"></image>
						<view>
							<text class="name">{{item.title_en}}</text>
							<!-- <text class="note" style="visibility: hidden;">{{item.title_zh}}</text> -->
							<text class="note">{{i18n._market}} ≈{{item.price}} ￥</text>
						</view>
					</view>
					<view class="right">
						<text class="num">{{item.balance}}</text>
						<text class="val">≈<text class="innerval">{{item.usd_price}} ￥</text></text>
						<!-- <text class="val"><text class="innerval"></text></text> -->
					</view>
				</view>
				<view class="line" v-if="item.isShow"></view>
				<view class="bottom"  v-if="item.isShow">
					<view class="inneritem" @tap="charge(item)">
						<image src="/static/imgs/index-func03.png"></image>
						<text>{{i18n.chargein}}</text>
					</view>
					<view class="inneritem" @tap="withdraw(item)" v-if="isSHows">
						<image src="/static/imgs/index-func02.png"></image>
						<text>{{i18n.transfer}}</text>
					</view>
					<view class="inneritem" @tap="toHistory(item)">
						<image src="/static/imgs/index-func01.png"></image>
						<text>{{i18n.detail}}</text>
					</view>
				</view>
			</view>
			
			
			<view class="line"></view>
			<view class="QuotationTitle" v-if="coinslist.length >0">
				{{i18n._market}}
			</view>
			<view class="item" :class="item.isShow ?'active':''" v-for="(item, index) in coinslist" :key="index">
				<view class="top">
					<view class="left">
						<image :src="item.logo"></image>
						<view>
							<text class="name">{{item.coin}}</text>
							<text class="note" style="visibility: hidden;">{{item.title_zh}}</text>
						</view>
					</view>
					<view class="right">
						<text class="num">{{item.last}} $</text>
						
						<view class="val">
							<text class="innerval" :class="item.percentChange>0 ? 'green' :'red'">{{item.percentChange}}%</text>
							 <image v-if="item.percentChange>0" src="../../static/imgs/up.png"></image> 
							 <image v-if="item.percentChange<0" src="../../static/imgs/down.png"></image> 
						 </view>
					</view>
				</view>
			</view>
		</view>
		<!-- 首页公告 -->
		<view class="announcementPop" v-show="announcementShow">
			<view class="inner-content">
				<view class="title">
					<h2>{{announcementTitle}}</h2>
					<p>{{announcementTime}}</p>
				</view>
				<scroll-view scroll-y style="max-height: 400upx;">
					<view class="announcementContent" v-html="announcementContent"></view>
				</scroll-view>
				<view class="button">
					<button @tap="closeAnnouncement">{{i18n.meKnow}}</button>
				</view>
			</view>
		</view>
		<view class="announcementMask" v-show="announcementShow" @tap="closeAnnouncement"></view>
		<!-- end -->
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import {showToast, deterLang, pageto, fetch, _updataTabBar, forceUpdate} from '../../common/js/util.js'
	export default {
		data() {
			return {
				assetsNum: '***',
				isSHows:false,
				currentyanjing: "icon-yanjing2",
				currentyanjing1: "icon-yanjing2",
				totalval: '',
				blockPackage:'***',  //区块包数量
				blockPackages:'',
				isFilterNumber:false,
				wcoins: [],
				coinslist:[],
				announcementShow: false,
				announcementTitle:'',
				announcementContent:'',
				announcementTime:'',
				coins: []
			}
		},
		onLoad() {
			this.getAnnouncement();
		},
		onShow() {
			this.getAssets();
			this._updataTabBar();
			this.getMarket();
			this._forceUpdate();
		},
		computed: {
			i18n () {  
				return this.$t('message')
			},
			...mapGetters([
				'getArea',
				'getLangType',
				'getRequestUrl',
				'getLoginInfo',
				'getUser',
				'getPass',
				'getTextArr'
			])
		},
		methods: {
			exchange(){
				pageto('/pages/exchange/exchange')
			},
			handleclickqukuaibao(){
				if(this.currentyanjing1 == "icon-yanjing2") {
					this.currentyanjing1 = "icon-yanjing1";
					this.blockPackage = this.blockPackages;
				} else if (this.currentyanjing1 == "icon-yanjing1") {
					this.currentyanjing1 = "icon-yanjing2";
					this.blockPackage = '***';
				}
			},
			_forceUpdate() {
				forceUpdate(this.i18n.update, this.i18n.update_tip, this.i18n.isJumping, this.i18n.soon_update, this.i18n.fail);
			},
			filterNumber(){
				this.isFilterNumber = !this.isFilterNumber;
				if(this.isFilterNumber){
					this.coins = this.coins.filter(item => {
						return parseFloat(item.balance) >  0;
					})
				}else{
					let list = this.wcoins;
					this.coins = list;
				}
			},
			getMarket(){
				let _url = this.getRequestUrl+'/api/wallet/getCoinMarket';
				let result = fetch(_url, '', "POST");
				result.then(res=>{
					if(res.data.code){
						this.coinslist = res.data.data
					}
				}).catch(err=>{
					console.log(err)
				})
				// /api/wallet/getCoinMarket
			},
			getAnnouncement(){
				let _url = this.getRequestUrl+'/api/User/notice';
				let result = fetch(_url, '', "POST");
				result.then((res)=>{
					if(res.data.code){
						if(res.data.code ==1){
							if(res.data.data.length =='0') return
							let codeTime = res.data.data[0].time;
							codeTime = codeTime.replace(/-/g, '/');
							const codeTimes = new Date(codeTime).getTime();
							let nowTime = new Date().getTime();
							if((nowTime - codeTimes)<259200000){
								this.announcementShow = true;
							}else{
								this.announcementShow = false;
							}
							this.announcementTitle=res.data.data[0].title
							this.announcementContent=res.data.data[0].content
							this.announcementTime=res.data.data[0].time
						}else{
							uni.navigateTo({
								url:'/pages/login/login'
							})
						}
					}else{
						showToast(res.data.msg)
					}
				})
				
			},
			closeAnnouncement() {
				this.announcementShow = false;
			},
			getAssets(){
				uni.showLoading()
				let _url = this.getRequestUrl+'/api/wallet/wallet_list';
				let _data={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token
				}
				let result = fetch(_url,_data)
				result.then((res)=>{
					// console.log(res);
					uni.hideLoading()
					if(res.data.code){
						if(res.data.code ==1){
							this.totalval = parseFloat(res.data.data.total).toFixed(2);
							let list = res.data.data.list
							list.forEach((item,index)=>{
								list[index].isShow = false;
								list[index].balance = parseFloat(item.balance).toFixed(2)
								list[index].usd_price = parseFloat(item.usd_price).toFixed(2)
								// if(item.title_en =='BP'){
								// 	this.blockPackages = parseFloat(item.balance).toFixed(4);
								// }
							})
							this.blockPackages = parseFloat(list[0].a_cash).toFixed(2);
							this.coins = res.data.data.list;
							
							this.coins = this.coins.filter(item => {
								return item.title_en !='BP'
							})
							this.wcoins = this.coins;
						}else{
							uni.navigateTo({
								url:'/pages/login/login'
							})
						}
					}
				})
				
			},
			handleclickyanjing() {
				if(this.currentyanjing == "icon-yanjing2") {
					this.currentyanjing = "icon-yanjing1";
					this.assetsNum = this.totalval;
				} else if (this.currentyanjing == "icon-yanjing1") {
					this.currentyanjing = "icon-yanjing2";
					this.assetsNum = '***';
				}
			},
			getClick(item){
				for	(var i = 0 ; i<this.coins.length ; i++){
					if (item === i) {
						this.coins[i].isShow = !this.coins[i].isShow;
						// this.coins[i].isShow = false;
					} else {
						this.coins[i].isShow = false;
					}
				}
			},
			charge(e) {
				pageto(`/pages/charge/charge?title=${e.title_en}&address=${e.address}&tokenid=${e.token_id}`);
			},
			withdraw(e) {
				pageto(`/pages/withdraw/withdraw?tokenid=${e.token_id}&day_kt=${e.day_kt}&balance=${e.balance}&title=${e.title_en}&fee=${e.fee}&txmini=${parseFloat(e.txmini)}&txsxf=${e.txsxf}&address=${e.address}`);
			},
			toHistory(e){
				pageto(`/pages/charge/history?tokenid=${e.token_id}&balance=${e.balance}&title=${e.title_en}&fee=${e.fee}&txmini=${parseFloat(e.txmini)}&txsxf=${e.txsxf}&address=${e.address}`);
			},
			getCurList(){
				//获取币种信息
				let _data={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token
				}
				let _this = this
				let result = fetch(this.getRequestUrl+``,_data,"POST");
				result.then((res)=>{
					if(res.data.code){
						if(res.data.code ==1){
							_this.total = res.data.data.total;
							_this.coins = res.data.data.list;
						}else{
							uni.navigateTo({
								url:'/pages/login/login'
							})
						}
						
					}
				}).catch((err)=>{
					showToast(this.i18n.register_fail);
				})
			},
			filterCur(e){
				let target = e.detail.value.toLowerCase();
				let list = this.wcoins;
				if(target ==''){
					this.coins = list;
				}else{
					this.coins = this.coins.filter(item => {
						if(item.title_en.toLowerCase().includes(target)){
							return item.title_en.toLowerCase().indexOf(target) >= 0;
						}
					})
				}
			},
			_updataTabBar() {
				_updataTabBar(this.getTextArr, this.getLangType);
			}
		}
	}
</script>

<style lang="scss">
@import "../../common/scss/variable.scss";
page {
	background-color: $page_gray_color;
}
@keyframes changebox {
	10% {  padding-bottom: 0;  }
	100% {  padding-bottom: 120upx;}
}
@keyframes changeboxs {
	10% {  opacity: 0 }
	50% {  opacity: 0.1 }
	100% {  opacity: 1}
}
.app-index {
	.index_flex{
		display: flex;
		flex-direction: row;
		align-content: center;
		.index_item{
			flex: 1;
			button{
				background-color: #FFC52A;
				line-height: 60upx;
				color: #fff;
				position: relative;
				padding-left: 24px;
				margin-left: 20upx;
				.iconfont{
					position: absolute;
					left: 0;
					top: 50%;
					transform: translate(0,-50%);
					display: inline;
					margin:0;
					padding:0;
				}
			}
		}
	}
	.top {
		padding: 0 30upx;
		.gg-status-bar {
			background-color: $theme-color;
		}
		.gg-top {
			background-color: $theme-color;
			font-size: 20px;
			line-height: 20px;
			padding-bottom: 0;
			color: #ffffff;
		}
		width: 750upx;
		height: 422upx;
		background-color: $theme-color;
		.assets {
			display: flex;
			flex-direction: row;
			.txt {
				font-size: 14px;
				color: $index-green-color;
				margin-right: 16upx;
			}
			.iconfont {
				font-size: 14px;
				color: $index-green-color;
			}
		}
		.assets-num {
			margin-top: 30upx;
			color: #ffffff;
			font-size: 14px;
			text {
				margin-left: 10upx;
			}
		}
		.search-wrapper {
			display: flex;
			flex-direction: row;
			margin-top: 30upx;
			.left {
				background-color: #ffffff;
				border-radius: 10upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 418upx;
				height: 58upx;
				padding: 0 26upx;
				margin-right: 28upx;
				.iconfont {
					font-size: 16px;
					color: #a5a5a5;
					margin-right: 10upx;
				}
				input {
					font-size: 14px;
					flex: 1;
				}
			}
			.right {
				display: flex;
				align-items: center;
				image {
					flex-shrink: 1;
					width: 22upx;
					height: 22upx;
					margin-right: 10upx;
				}
				text {
					font-size: 12px;
					flex: 1;
					color: $index-green-color;
				}
			}
		}
	}
	.QuotationTitle{
		line-height: 90upx;
		padding-left:30upx;
		color: #000;
	}
	.list {
		margin: -76upx 30upx 0;
		.item {
			margin-bottom: 20upx;
			&.active{
				position: relative;
				// padding-bottom: 120upx;
				animation: changebox .5s ease-in-out;
				animation-fill-mode: forwards;
				.bottom{
					animation: changeboxs 0.5s ease-in-out;
					animation-fill-mode: forwards;
					display: flex;
				}
			}
			.top {
				background-color: #ffffff;
				width: 690upx;
				height: 150upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				border-radius: 10upx;
				padding: 0 30upx;
				.left {
					display: flex;
					flex-direction: row;
					image {
						width: 76upx;
						height: 76upx;
						border-radius: 76upx;
						overflow: hidden;
						margin-right: 30upx;
					}
					view {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: flex-start;
						.name {
							font-size: 14px;
							font-weight: bold;
							color: $font-title-color;
						}
						.note {
							font-size: 14px;
							color: $font-list-tip-color;
							margin-top: 14upx;
						}
					}
				}
				.right {
					display: flex;
					flex-direction: column;
					justify-content: center;
					image{
						margin-left: 10upx;
						width: 14upx;
						height: 15upx;
					}
					.num {
						font-size: 15px;
						color: $font-title-color;
						font-weight: bold;
						text-align: right;
					}
					.val {
						font-size: 14px;
						color: $font-list-tip-color;
						text-align: right;
						margin-top: 14upx;
						.innerval {
							margin-left: 10upx;
							&.red{
								color: red;
							}
							&.green{
								color: green;
							}
						}
					}
				}
			}
			.line {
				width: 656upx;
				height: 1upx;
				background-color: $list-border-bt-color;
				margin: 0 auto;
			}
			.bottom {
				opacity: 0;
				position: absolute;
				bottom: 0;
				width: 100%;
				justify-content: space-between;
				align-items: center;
				background-color: #ffffff;
				border-radius: 10upx;
				height: 120upx;
				.inneritem {
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					image {
						width: 52upx;
						height: 52upx;
						border-radius: 52upx;
						overflow: hidden;
					}
					text {
						font-size: 14px;
						color: $font-title-color;
						margin-top: 14upx;
					}
				}
			}
		}
	}
	.announcementPop {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background-color: rgba(0, 0, 0, .2);
		z-index: 10000;
		.inner-content {
			position: fixed;
			top:50%;
			left:50%;
			transform: translate(-50%,-50%);
			z-index: 10000;
			width: 600upx;
			background-color: #ffffff;
			padding:50upx;
			border-radius:20upx;
			.title{
				margin-bottom: 10upx;
				color: #000;
				h2{
					font-weight: bold;
					font-size:30upx;
					text-align: center;
				}
				p{
					font-size: 24upx;
					text-align: center;
					color: darkgrey;
					margin: 20upx 0;
				}
			}
			.announcementContent{
				text-index:2em;
				font-size: 26upx;
				color: #666;
			}
			.button{
				margin-top:40upx;
				button{
					width: 300upx;
					font-size:30upx;
				}
			}
		}
	}
}
</style>