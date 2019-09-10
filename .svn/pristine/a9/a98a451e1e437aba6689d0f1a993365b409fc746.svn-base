<template>
	<view class="content" style="overflow-x: hidden;"><!-- -->
		<view class="gg-status-bar"></view>
		<view class="gg-height"></view>
		<view class="gg-top between">
			<view>{{i18n.myfund}}</view>
			<view class="iconfont icon-cha" @tap="clickback"></view>
		</view>
		<view class="basic">
			<view class="lists">
				
				<view class="item">
					<view class="bottom">
						<text>{{i18n.InvestmentQuantity}}</text>
						<view class="info">￥ {{number}}</view>
						
					</view>
				</view>
				<view class="item">
					<view class="bottom">
						<text>{{i18n.waitshifang02}}</text>
						<view class="info">￥ {{Anumber}}</view>
						
					</view>
				</view>
				<view class="item">
					<view class="bottom">
						<text>{{i18n.status}}</text>
						<view class="info" :class="dayLength ?'green':' '">{{status}}</view>
						
					</view>
					<!-- <view class="bottom">
							<view class="info"></view>
							<text></text>
					</view> -->
				</view>
			</view>
			<view class="lists" v-if="dayLength">
				
				<view class="item">
					<view class="bottom" v-if="dayLength">
						<text>{{i18n.startTime}}</text>
						<view class="info">{{startTime.slice(5)}}</view>
						
					</view>
					<view class="bottom" v-if="!dayLength"> 
						<text>{{i18n.endTime}}</text>
						<view class="info">{{endTime}}</view>
						
					</view>
					<!-- <view class="bottom">
						<view class="info"></view>
						<text></text>
					</view> -->
				</view>
				<view class="item">
					<view class="bottom">
						<text>{{i18n.waitshifang01}}</text>
						<view class="info">￥ {{VEnumber}}</view>
					</view>
				</view>
				<view class="item" v-if="dayLength">
					<view class="bottom">
						<text>{{i18n.income_day}}</text>
						<view class="info">{{day}}</view>
					</view>
				</view>
				
			</view>
		</view>
		
		<view class="cirdList">
			<view class="uni-flex">
				<view class="uni-flex-item">
					{{i18n.types}}
				</view>
				<view class="uni-flex-item">
					{{i18n.quantity}}
				</view>
				<view class="uni-flex-item">
					{{i18n.time}}
				</view>
			</view>
			<scroll-view id="selecScroll" :style="{height:style.contentViewHeight+'px'}" @scrolltolower="_getData" scroll-y="true" scroll-with-animation="true">
				<block v-for="(item,index) in list" :key="index">
					<view class="lists">
						<view class="uni-flex">
							<view class="uni-flex-item">
								{{item.typeStr}}
							</view>
							<view class="uni-flex-item">
								￥ {{item.num}}
							</view>
							<view class="uni-flex-item">
								{{item.time}}
							</view>
						</view>
					</view>
				</block>
			</scroll-view>
		</view>
		
		<!-- <view class="purchase " v-if="!dayLength" :class=" !dayLength && 'stop'">{{i18n.Repeat}}</view> -->
		<!-- <view class="purchase" @tap="purchase"  v-if="dayLength">{{i18n.termination}}</view> -->
		<!-- <view class="pop" v-if="isShowPop">
			<view class="content">
				<view class="title" style="color: #666;">{{i18n.ContractTermination}}</view>
				<view class="info">
					<view class="left">
						<text>{{touzi_total}}({{parseFloat(usdtNumber)}} USDT)</text> {{i18n.BlockPackage}}
					</view>
					<view class="right">
						<text>{{touzi_koubenjin}}({{parseFloat(kouchu_usdtNumber)}} USDT)</text>{{i18n.DeductedQuantity}}
					</view>
				</view>
				<view class="info">
					<view class="left">
						<text>{{touzi_liyi}}({{parseFloat(kouchuSHOuyi)}} USDT)</text>{{i18n.interest}}
					</view>
					<view class="right">
						<text>{{touzi_liyi}}({{parseFloat(kouchuSHOuyi)}} USDT)</text>{{i18n.DeductingIncome}}
					</view>
				</view>
				<view class="warm_tip">
					<view class="title" style="border: none;">
						<text>{{i18n.RefundablePrincipal}}:</text><text style="width: 80%;">{{touzi_tui_benjin}} {{i18n.BlockPackage}}</text>
					</view>
					<view class="title">
						<text>{{i18n.transactionPassword}}:</text><input type="password" :placeholder="i18n.enter_pwd" v-model="pwd_num" maxlength="6">
					</view>
					<view class="txt">
						{{i18n.listshenchangdeshuzi}}
					</view>
				</view>
				<view class="btns">
					<view class="stop item" @tap="stop_contract">{{i18n.termination}}</view>
					<view class="cancel item" @tap="cancel_contract">{{i18n.cancel}}</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	import loading from '../../components/loading/loading.vue'
	import {pageto, _updataTabBar, fetch, deterLang, showToast} from "../../common/js/util.js"
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {
				packageNumber:"",  //包的数量
				status:'',   //状态
				startTime:'', //开始时间
				number:'',   //cye数量
				VEnumber:'', //待释放ve数量
				Anumber:'',//待释放A积分数量
				day:'',
				shopid:'',
				style:{
					contentViewWidth:0,
					contentViewHeight:0,
					mitemHeight:0
				},
				list:[],
				target: '',
				isShowLoding: false,
				isShowPop: false,
				endTime:'',
				dayLength:'',
				pwd_num: '',
				touzi_name:'',
				touzi_total:'',
				usdtNumber:'',
				touzi_koubenjin:'',
				touzi_liyi:'',
				kouchuSHOuyi:'',
				touzi_kouchushouyi:'',
				kouchu_usdtNumber:'',
				touzi_tui_benjin:'',
				page: 1,
				rows: 10
			}
		},
		mounted(){
			const query = uni.createSelectorQuery().in(this);
			query.select('#selecScroll').boundingClientRect(data => {
				const res = uni.getSystemInfoSync(); 
				this.style.contentViewHeight = res.windowHeight - data.top-80; 
			}).exec();
		},
		computed: {
			i18n () {  
				return this.$t('message')
			},
			...mapGetters([
				'getLangType',
				'getLoginInfo',
				'getRequestUrl'
			])
		},
		onLoad(e) {
		},
		onShow() {
			this._getData();
		},
		methods: {
			// purchase() {
			// 	this.isShowPop = true;
			// 	let _url = this.getRequestUrl +'/api/Shop/prompt_default';
			// 	let _data ={
			// 		id: this.getLoginInfo.id,
			// 		token: this.getLoginInfo.token,
			// 		lang_type: deterLang(this.getLangType),
			// 		shopid: this.shopid
			// 	}
			// 	const result = fetch(_url,_data,"POST")
			// 	result.then(res=>{
			// 		if(res.data.code){
			// 			this.touzi_total = parseFloat(res.data.data.num)+'';
			// 			this.usdtNumber = res.data.data.num1+'';
			// 			this.touzi_koubenjin = res.data.data.kq_num+'';
			// 			this.kouchu_usdtNumber = res.data.data.kq_num1+'';
			// 			this.touzi_liyi =  parseFloat(res.data.data.lx)+''
			// 			this.kouchuSHOuyi = res.data.data.lx1+'';
			// 			this.touzi_tui_benjin = parseFloat(res.data.data.kth_num).toFixed(4)+''
			// 		}else{
			// 			showToast(res.data.msg);
			// 		}
			// 	})
			// },
			formatDigit(str) {
				return parseFloat(str)
			},
			formatData(str) {
				return parseFloat(str).toFixed(4);
			},
			clickback() {
				uni.navigateBack({ delta: 1 });
			},
			// stop_contract() {
			// 	if (!this.pwd_num) {
			// 		showToast(this.i18n.pay_is_empty);
			// 		return;
			// 	}
			// 	let _data = {
			// 		id: this.getLoginInfo.id,
			// 		token: this.getLoginInfo.token,
			// 		lang_type: deterLang(this.getLangType),
			// 		shopid: this.shopid,
			// 		pay_pwd: this.pwd_num
			// 	}
			// 	let _this = this
			// 	let _url = this.getRequestUrl + "/api/Shop/Growth_default";
			// 	const result = fetch(_url,_data,"POST");
			// 	result.then(res=>{
			// 		if(res.data.code){
			// 			showToast(res.data.msg);
			// 			_this.pwd_num = '';
			// 			// setTimeout(()=>{
			// 			// 	uni.navigateBack({
			// 			// 		delta: 1
			// 			// 	})
			// 			// },500)
			// 			_this.isShowPop = false;
			// 			_this._getData();
			// 		}else{
			// 			showToast(res.data.msg);
			// 			_this.isShowPop = false;
			// 			_this.pwd_num = '';
			// 		}
			// 	})
			// },
			cancel_contract() {
				this.isShowPop = false;
			},
			showLangContent(str1, str2, str3) {
				let tmp = '';
				if (this.getLangType == 'chs') {
					tmp = str1;
				} else if (this.getLangType == 'en') {
					tmp = str2;
				} else if (this.getLangType == 'ko') {
					tmp = str3;
				} else {
					tmp = '';
				}
				return tmp;
			},
			_getData() {
				let _url =this.getRequestUrl+ '/api/Shop/Growth';
				let _data ={
					id: this.getLoginInfo.id,
					token: this.getLoginInfo.token,
					page:this.page,
					rows:10
				}
				const result = fetch(_url,_data,"POST")
				result.then(res=>{
					if(res.data.code){
						this.dayLength = parseFloat(res.data.data.tz_info.num);
						this.packageNumber = parseFloat(res.data.data.tz_info.num);
						// if(this.packageNumber =='0'){
						// 	showToast(this.i18n.emptySomethings)
						// 	setTimeout(()=>{
						// 		uni.navigateBack({ delta: 1 });
						// 	},500)
						// }
						
					
						
						this.VEnumber = parseFloat(res.data.data.tz_info.ve_cash)
						this.Anumber = parseFloat(res.data.data.tz_info.a_cash)
						this.day = res.data.data.tz_info.day+''
						this.status = res.data.data.tz_info.status;
						this.startTime = res.data.data.tz_info.start_time;
						this.endTime = res.data.data.tz_info.end_time;
						this.number = parseFloat(res.data.data.tz_info.total);
						this.shopid = res.data.data.tz_info.id;
						if(!res.data.data.tz_history.data.length){
							return
						}
						if(this.page == 1){
							this.page++;
							this.list = res.data.data.tz_history.data;
							this.list.forEach((item,index)=>{
								this.list[index].num = parseFloat(item.num)+''
							})
						}else{
							this.page++;
							this.list= this.list.concat(res.data.data.tz_history.data);
							this.list.forEach((item,index)=>{
								this.list[index].num = parseFloat(item.num)+''
							})
						}
					}else{
						// uni.navigateBack({
						// 	delta: 1
						// })
						this.packageNumber = '0'
						this.number = '0'
						this.status=this.i18n.nodata
						showToast(res.data.msg)
					}
				})
			}
		},
		components: {
			loading
		}
	}
</script>

<style lang="scss">
@import '../../common/scss/variable.scss';
page {
	background-color: #fff;
}
.gg-status-bar {
	background-color: $theme-color;
}
.gg-height{
	background-color: $theme-color;
}
.gg-top {
	justify-content: space-between;
	&.between {
		view {
			color: #fff;
		}
	}
	.iconfont {
		font-size: 14px;
		line-height: 1;
		padding: 10px;
		margin: 0px -10px -10px;
		color: #fff;
	}
	view {
		font-size: 21px;
	}
	background-color: $theme-color;
}
.basic {
	padding: 0upx 30upx 30upx;
	background-color: $theme-color;
	.item {
		display: flex;
		justify-content: space-between;
	}
	text {
		font-size: 14px;
		color: #fff;
		line-height: 76upx;
	}
	text+text {
		font-size: 14px;
	}
	&.last {
		margin-bottom: 100upx;
		text {
			color: #fff;
		}
	}
	.lists {
		padding: 0 30upx 0;
		display: flex;
		.item {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			.top, .bottom {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			.bottom {
				margin-top: 40upx;
				.info {
					color: red;
					margin-top: 10upx;
				}
				.info.green {
					color: #000;
				}
				text {
					font-size: 14px;
					line-height: 1;
					color: #fff;
				}
			}
			.info {
				font-size: 14px;
				color: #aaa;
				line-height: 1;
			}
			&.last {
				justify-content: flex-start;
			}
		}
	}
}
.title {
	// margin-top: 20upx;
	color: #ffffff;
	font-size: 17px;
}
.title+.line {
	height: 1upx;
	width: 100%;
	background-color: #3E3E3E;
	margin-top: 10px;
}
.purchase {
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100upx;
	text-align: center;
	line-height: 100upx;
	color: #ffffff;
	background-color: $theme-color;
	font-size: 16px;
	z-index: 10000;
	&.stop{
		background-color: #acacac;
	}
}
.cirdList{
	.uni-flex{
		background: #f6f6f6;
		padding:30upx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		.uni-flex-item{
			flex: 1;
			text-align: center;
			font-size: 30upx;
			color: #969696;
		}
	}
	.lists{
		border-bottom:2upx solid #f4f4f4;
		.uni-flex{
			background: #fff;
		}
		&:last-child{
			border-bottom:none;
		}
	}
}
.pop {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 1000;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, .5);
	.content {
		background-color: #fff;
		width: 650upx;
		height: 750upx;
		border-radius: 16upx;
		padding: 0 30upx;
		image {
			width: 62upx;
			height: 62upx;
			border-radius: 62upx;
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.title {
			font-size: 20px;
			line-height: 1;
			margin-bottom: 60upx;
		}
		.info {
			display: flex;
			flex-direction: row;
			width: 600upx;
			.left, .right {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				color: #888888;
				font-size: 14px;
				line-height: 1;
				text-align: center;
				flex: 1;
				width: 50%;
				box-sizing: border-box;
				text {
					margin-bottom: 20upx;
				}
			}
			.left {
				text {
					color: green;
					font-size: 14px;
				}
			}
			.right {
				border-left: 1px solid #f4f4f4;
				text {
					color: red;
					font-size: 14px;
				}
			}
		}
		.info + .info {
			margin-top: 40upx;
		}
		.warm_tip {
			padding: 0 30upx;
			margin: 0 30upx;
			.title {
				display: flex;
				flex-direction: row;
				font-size: 14px;
				height: 60upx;
				line-height: 60upx;
				border-bottom: 1px solid #f4f4f4;
				padding-bottom: 20upx;
				margin-bottom: 0;
				margin-top: 60upx;
				color: #666;
				input {
					font-size: 14px;
					height: 40upx;
					box-sizing: border-box;
				}
				text {
					width: 160upx;
					margin-top: 8upx;
				}
			}
			.txt {
				font-size: 10px;
				color: #cccccc;
				line-height: 12px;
				margin-top: 10upx;
			}
		}
		.btns {
			display: flex;
			flex-direction: row;
			.item {
				width: 170upx;
				height: 60upx;
				background-color: $theme-color;
				margin-top: 60upx;
				border-radius: 60upx;
				color: #fff;
				font-size: 15px;
				text-align: center;
				line-height: 60upx;
			}
			.cancel {
				margin-left: 100upx;
			}
		}
	}
}
</style>
