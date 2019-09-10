<template>
	<view class="app-bill">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top">
			<view class="iconfont icon-arrow-left" @tap="clickClose"></view>
			<view @tap="clickClose">{{i18n.exchange}}</view>
		</view>
		<view class="gg-line"></view>
		<view class="content">
			
		</view>
		<view class="uni-card">
			<h2>{{i18n.exchangeRate}}{{rate}}</h2>
			<ul>
				<li>
					<view class="ex_it">
						<p>{{i18n.BlockPackage}}</p>
						<span>({{qukuaiNumber}})</span>
					</view>
					<view class="ex_it">
						<input type="number" :placeholder="i18n.transfernum" v-model="exfrom" @input="exfroms">
					</view>
				</li>
				<li>
					<view class="ex_it">
						<p>CYE</p>
						<span>({{cyeNumber}})</span>
					</view>
					<view class="ex_it">
						<input type="number" :placeholder="i18n.ReceivedQuantity" v-model="exto" @input="extos">
					</view>
				</li>
			</ul>
			<view class="_iconTx">
				<i class="iconfont icon-jiantouarrow484"></i>
			</view>
			<button type="primary" class="exchange_btn" @tap="getExchange"><i class="iconfont icon-shandian"></i>{{i18n.FastFlash}}</button>
		</view>
		<h4 class="recoder_h4">{{i18n.FlashRecord}}</h4>
			<view class="recode_list_nav">
				<view class="item">
					{{i18n.FlashNumber}}
				</view>
				<view class="item">
					{{i18n.ReceivedQuantity}}
				</view>
				<view class="item">
					{{i18n.FlashTime}}
				</view>
				<view class="item">
					{{i18n.status}}
				</view>
			</view>
			<scroll-view id="selecScroll" :style="{height:style.contentViewHeight+'px'}" @scrolltolower="getHistory" scroll-y="true" scroll-with-animation="true">
				<block v-for="(item,index) in historyList" :key="index" v-if="historyList.length">
					<view class="recode_list">
						<view class="item">
							{{item.num}}
						</view>
						<view class="item">
							{{item.amount}}
						</view>
						<view class="item">
							{{item.time}}
						</view>
						<view class="item">
							{{item.type==3 && i18n.success}}
						</view>
					</view>
				</block>
				<view class="nodata" v-if="historyList.length == 0">
					{{i18n.nodata}}
				</view>
			</scroll-view>
			
			
			<!-- 弹出层-->
			<view class="popver" v-if="isPopver">
				<view class="popver-header">
					<view>{{i18n.enter_pay_pass}}</view>
					<view @tap="closePopver">{{i18n.cancel}}</view>
				</view>
				<view class="popver-content">
					<view class="phone item">
						<lable>{{i18n.paypass}}</lable>
						<input :type="isOpen ?'text' :'password'" :placeholder="i18n.enter_pay_pass" v-model="paypwd"/>
						<view class="iconfont icon-yincang" :class="{active: isOpen}" @tap="eye"></view>
					</view>
				</view>
				<view class="popver-btn" @tap="popverPromise">
					<button>{{i18n.confirm}}</button>
				</view>
			</view>
			<view class="mask" @touchmove.stop.prevent="moveHandle" @tap="closePopver" v-if="isPopver"></view>
	</view>
</template>

<script>
import {showToast,fetch} from "../../common/js/util.js"
import {mapGetters} from "vuex";
import tabs from "../../components/tabs/tabsec.vue";
import loading from '../../components/loading/loading.vue';
var timer;
export default {
	data() {
		return {
			exfrom:'',
			exto:'',
			paypwd:'',
			isPopver:false,
			isOpen:false,
			qukuaiNumber:'',
			cyeNumber:'',
			exchangeProportion:'',
			rate:'',
			token_x:'',
			token_y:'',
			page:1,
			style:{
				contentViewWidth:0,
				contentViewHeight:0,
				mitemHeight:0
			},
			historyList:[]
		}
	},
	mounted:function(){
		const query = uni.createSelectorQuery().in(this);
		query.select('#selecScroll').boundingClientRect(data => {
			const res = uni.getSystemInfoSync(); 
			this.style.contentViewHeight = res.windowHeight - data.top-10; 
		}).exec();
	},
	computed: {
		i18n () {  
			return this.$t('message')
		},
		...mapGetters([
			'getRequestUrl',
			'getLoginInfo'
		])
	},
	onShow(){
	},
	onLoad() {
		this.getWall();
		this.getHistory();
	},
	methods: {
		eye(){
			this.isOpen = !this.isOpen;
		},
		popverPromise(){
			if (!this.exfrom) {
				showToast(this.i18n.TheNumberOfInputsCannotBeEmpty);
				return;
			}
			if (!this.paypwd) {
				showToast(this.i18n.TheNumberOfInputsCannotBeEmpty);
				return;
			}
			let _url = this.getRequestUrl+'/api/wallet/exchange2';
			let _data={
				id:this.getLoginInfo.id,
				token:this.getLoginInfo.token,
				pay_pwd:this.paypwd,
				token_x:this.token_x,
				token_y:this.token_y,
				num:this.exfrom,
			}
			// console.log(_data);return;
			uni.showLoading()
			let result = fetch(_url,_data,"POST")
			result.then(res=>{
				uni.hideLoading()
				if(res.data.code){
					showToast(res.data.msg)
					this.exto = '';
					this.exfrom = '';
					this.isPopver = false;
					this.paypwd = '';
					this.page = 1;
					this.getWall();
					this.getHistory();
				}else{
					showToast(res.data.msg)
				}
				// console.log(res)
			}).catch(err=>{
				uni.hideLoading()
				// console.log(err)
				showToast(err.data.msg)
			})
		},
		closePopver(){
			this.isPopver = false;
			this.paypwd = '';
		},
		exfroms(e){
			// console.log(e.detail.value)
			this.exto =e.detail.value ? parseFloat((e.detail.value*100)/this.exchangeProportion).toFixed(6)  :''
		},
		extos(e){
			
			// console.log(e.detail.value)
			this.exfrom =e.detail.value ? parseFloat((e.detail.value)*(this.exchangeProportion)/100).toFixed(6) :''
			// exfrom
		},
		clickClose() {
			uni.navigateBack({
				delta: 1
			})
		},
		getWall(){
			uni.showLoading()
			let _url = this.getRequestUrl+'/api/wallet/wallet_list';
			let _data={
				id:this.getLoginInfo.id,
				token:this.getLoginInfo.token
			}
			let result = fetch(_url,_data)
			result.then(res=>{
				uni.hideLoading();
				// console.log(res)
				if(res.data.code){
					let lists = res.data.data.list
					lists.forEach((item,index)=>{
						if(item.title_en == "CYE"){
							this.cyeNumber = parseFloat(item.balance).toFixed(4);
							this.token_y = item.token_id
							this.exchangeProportion = item.price;
							this.rate = parseFloat(item.price/100).toFixed(6)
						}else if(item.title_en == "BP"){
							this.qukuaiNumber = parseFloat(item.balance).toFixed(4);
							this.token_x = item.token_id
						}
					})
				}
			}).catch(err=>{
				uni.hideLoading();
				console.log(err)
			})
		},
		getExchange(){
			this.isPopver = true;
		},
		getHistory(){
			let _url = this.getRequestUrl+'/api/wallet/echaglist';
			let _data={
				id:this.getLoginInfo.id,
				token:this.getLoginInfo.token,
				page:this.page,
				rows:10
			}
			let result = fetch(_url,_data,"POST")
			result.then(res=>{
				if(res.data.code){
					if(this.page ==1){
						this.page++
						this.historyList = res.data.data.data;
					}else{
						if(res.data.data.lengt == null){
							return
						}
						this.page ++
						this.historyList = this.historyList.concat(res.data.data.data);
					}
				}
			}).catch(err=>{
				console.log(err)
			})
		}
	},
	onPullDownRefresh: function() {
				//下拉刷新的时候请求一次数据
        // this.getDetails();
    },
    onReachBottom: function() {
		let _self = this
			//触底的时候请求数据，即为上拉加载更多
			//为了更加清楚的看到效果，添加了定时器
        if (timer != null) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            _self.getDetails();
        }, 1000);
				
				// 正常应为:
				// _self.getmorenews();
    },
	components: {
		tabs,
		loading
	}
}
</script>

<style lang="scss">
	page{
		background: #f6f6f6;
	}
@import '../../common/scss/variable.scss';
.app-bill {
	.popver{
		position: fixed;
		background: #fff;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 9999;
		.popver-header{
			background-color: #f0f0f0;
			height: 80upx;
			line-height: 80upx;
			font-size: 24upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30upx;
		}
		.popver-content{
			padding:0 30upx;
			.item {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 12px;
				border-bottom: 2upx solid $list-border-bt-color;
				height: 126upx;
				padding-top: 52upx;
				box-sizing: border-box;
				position: relative;
				&.code-list{
					border-bottom:none;
					color: #929292;
					font-size:20upx;
					padding-top:24upx;
					height: 80upx;
				}
				.active{
					color: $theme-color;
				}
				lable{
					position: absolute;
					left: 0;
					top: 0;
					line-height: 150upx;
				}
				input {
					width: 85%;
					margin-left: 15%;
				}
				.yzm-wrapper {
					position: relative;
					width: 120px;
					margin-top: -5px;
				}
				.area {
					font-size: 14px;
				}
				&.phone {
					.icon-yincang {
						padding: 10px;
						margin: -5px -10px -10px;
						&.active {
							
						}
					}
				}
			}
		}
		.popver-btn{
			button{
				width: 100%;
				line-height: 100upx;
				background: $theme-color;
				color: #fff;
				border-radius: 0;
			}
		}
	}
	.mask {  
		position: fixed;
		top:0;
		left:0;
		z-index:999;
		width:100%;
		height:100vh;
		background:rgba(0,0,0,0.4);
	}
	.gg-status-bar{
		background-color: $theme-color;
	}
	.content {
		padding: 30upx 30upx 0;
		overflow-x: hidden;
		background-color: $theme-color;
		padding-bottom: 292upx;
	}
	.gg-height {
		background-color: $theme-color;
	}
	.gg-top {
		background-color: $theme-color;
		view {
			color: #ffffff;
		}
	}
	.uni-card{
		background-color: #fff;
		border-radius:20upx;
		padding:36upx 34upx;
		text-align: center;
		margin:30upx;
		margin-top:-292upx;
		position: relative;
		._iconTx{
			position: absolute;
			top: 180upx;
			left: 50%;
			transform: translate(-50%);
			color: $theme-color;
		}
		button.exchange_btn{
			width: 266upx;
			margin:0 auto;
			margin-top:30upx;
			background: $theme-color;
			color: #fff;
			font-size: 14px;
			line-height: 68upx;
			position: relative;
			padding-left: 20px;
			.iconfont{
				position: absolute;
				left: 30upx;
				top: 50%;
				transform: translate(0,-50%);
			}
			&.button-hover{
				opacity: 0.9;
			}
		}
		h2{
			font-size:28upx;
			color: #202020;
			margin-bottom:36upx;
			font-weight: bold;
		}
		ul{
			overflow: hidden;
			li{
				float: left;
				width: 260upx;
				&:last-child{
					float:right;
				}
				.ex_it{
					padding: 12upx 36upx;
					border:2upx solid #d5d5d5;
					border-radius:10upx;
					margin-bottom: 30upx;
					p{
						text-align: left;
						font-size: 16px;
						color: #202020;
					}
					span{
						font-size: 12px;
						color: #a0a0a0;
						width: 100%;
						display: block;
						text-align: left;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
					input{
						width: 100%;
						height: 50supx;
						font-size: 14px;
					}
				}
			}
		}	
	}
	.recoder_h4{
		font-size: 16px;
		font-weight: bold;
		padding-left: 30upx;
		background-color: #fff;
		padding-top:30upx;
	}
	.recode_list_nav{
		display: flex;
		background-color: #fff;
		padding:20upx 0;
		flex-flow:row wrap;
		justify-content:space-between;
		align-items:center;
		border-bottom:2upx solid #d5d5d5;
		.item{
			flex: 1;
			font-size:12px;
			line-height: 40upx;
			text-align: center;
		}
		
	}
	#selecScroll{
		background-color: #fff;
		.recode_list{
			display: flex;
			flex-flow:row wrap;
			padding:20upx 0;
			justify-content:space-between;
			align-items:center;
			border-bottom:2upx solid #d5d5d5;
			.item{
				flex: 1;
				font-size:14px;
				line-height: 40upx;
				text-align: center;
			}
			&:last-child{
				border-bottom:none;
			}
		}
	}
	.uni-total-flex{
		// overflow: hidden;
		background-color: $theme-color;
		display: flex;
		flex-flow:row wrap;
		justify-content:space-between;
		align-items:center;
		.txt {
			width: 50%;
			margin-top: 80upx;
			margin-bottom: 64upx;
			display: flex;
			flex-direction: column;
			text {
				width: 80%;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				padding: 0 40upx;
				font-size: 14px;
				color: #ffffff;
			}
			text+text {
				font-size: 30px;
				color: #ffffff;
				margin-top: 26upx;
			}
		}
	}
	.list {
		padding: 0 30upx;
		margin-top: 12upx;
		overflow-x: hidden;
		.item {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid $list-border-bt-color;
			height: 104upx;
			.num {
				font-size: 16px;
				line-height: 1;
				width:40%;
				text-align:right;
				white-space:nowrap; 
				text-overflow:ellipsis; 
				overflow:hidden;
				.name {
					font-size: 16px;
					line-height: 1;
				}
				.time {
					font-size: 14px;
					line-height: 1;
					color: #a1a1a1;
					margin-top: 10upx;
				}
			}
			.left {
				display: flex;
				flex-direction: column;
				justify-content: center;
				.name {
					font-size: 16px;
					line-height: 1;
				}
				.time {
					font-size: 14px;
					line-height: 1;
					color: #a1a1a1;
					margin-top: 10upx;
				}
				.num {
					font-size: 17px;
					line-height: 1;
					width:40%;
					text-align:right;
					white-space:nowrap; 
					text-overflow:ellipsis; 
					overflow:hidden;
				}
			}
		}
	}
}
.split {
	width: 100%;
	height: 20upx;
	background-color: #F6F6F6;
}
</style>
