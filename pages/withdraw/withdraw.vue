<template>
	<view class="app-withdraw">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top">
			<view class="iconfont icon-arrow-left" @tap="clickCBack"></view>
			<view @tap="clickCBack">{{i18n.transfer}}</view>
			<view class="add-new" @tap="towithdrawlog">
				<text>{{i18n.transferlog}}</text>
			</view>
		</view>
		<view class="gg-line"></view>
		<!-- 	<view class="item">
				<view class="left">{{i18n.day_kt}}</view>
				<view class="right">{{day_kt}} CYE</view>
			</view> -->

		<view class="item">
			<view class="left">{{i18n.transfercoin}}</view>
			<view class="right">{{title}}</view>
			<!-- <view class="right-after iconfont icon-arrow-right"></view> -->
		</view>
		<view class="item" @tap="toaddress">
			<view class="left">{{i18n.transferaddress}}</view>
			<view class="center">
				<view class="name">{{i18n.transferaddress}}</view>
				<view class="address">{{fromaddress}}</view>
			</view>
			<view class="right-after iconfont icon-arrow-right"></view>
		</view>
		<view class="item" v-if="showLabel">
			<view class="left">{{i18n.lable}}</view>
			<input type="text" :placeholder="i18n.enter_label" v-model="label">
		</view>
		<view class="item">
			<view class="left">{{i18n.transfernum}}</view>
			<view class="center">
				<view class="min_withdraw">
					<input type="number" @input="getInput" :placeholder="i18n.min_transfer+txmini+' ￥'" v-model="tranNumber"/>
				</view>
				<view class="current_num">{{i18n.cur_use}}{{balance}} ￥</view>
			</view>
			<view class="right-after all" @tap="getAll">{{i18n.all}}</view>
		</view>
		<view class="item">
			<view class="left">{{i18n.transferfee}}</view>
			<view class="right">{{txsxf}}</view>
		</view>
		<view class="item ex">
			<view class="left">{{i18n.arrival}}</view>
			<view class="right">{{realNumber}} ￥</view>
		</view>
		<view class="split"></view>
		<view class="item">
			<view class="left">{{i18n.paypass}}</view>
			<input type="password" :placeholder="i18n.enter_pay_pass" v-model="paypwd" maxlength="6">
		</view>
		<view class="yzm item">
			<view class="left" style="line-height: 120upx;">{{i18n.yanzhengma}}</view>
			<input type="text" :placeholder="i18n.enter_yzm" v-model="yzm"/>
			<view class="yzm-wrapper" style="margin-top: 20upx;width: 180upx;position:relative;">
				<yzm @yzmClick="yzmClick" :phoneNumer="phoneNumer" :type="type" :isPhone="isPhone"></yzm>
			</view>
		</view>
		<view class="btn" hover-class="hover-class" @tap="condirm">{{i18n.coin}}</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import Yzm from '../../components/yzm/yzm.vue'
	import {pageback, pageto, showToast, deterLang, fetch, _updataTabBar} from "../../common/js/util.js"
	import {validate} from '../../common/js/validate.js'
	export default {
		components: {
			Yzm
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
				'getCurAddress'
			])
		},
		data() {
			return {
				isfast: false,
				phoneNumer:'',
				title:'',
				day_kt:'',
				type:'',
				isPhone:'',
				showLabel:false,
				fromaddress:'',
				address:'',
				tokenid:'',
				txmini:'',
				paypwd:'',
				label:'',
				tranNumber:'',
				realNumber:0,
				balance:'',
				txsxf:'',
				yzm:''
			}
		},
		onLoad(e) {
			if(e.title =="EOS"){
				this.showLabel = true
			}
			this.day_kt = e.day_kt;
			this.tokenid = e.tokenid;
			this.title = e.title;
			this.address = e.address;
			this.balance = e.balance;
			this.txsxf = e.txsxf;
			this.txmini = e.txmini;
			this.phoneNumer = this.getLoginInfo.email;
			this.type = this.getLoginInfo.incode ? 2 :1;
			this.isPhone = this.getLoginInfo.incode ? true : false;
		},
		onShow(){
			if(!this.getLoginInfo.paypwd){
				pageto('/pages/safe/modify-pwd')
			}
			if(this.getCurAddress){
				this.fromaddress = this.getCurAddress.address;
				this.label = this.getCurAddress.label;
				this.setCurAddress('')
			}
		},
		methods: {
			...mapMutations([
				'setCurAddress'
			]),
			getAll(){
				this.tranNumber = this.balance;
			},
			condirm(){
				if (!this.fromaddress.trim()) {
					showToast('转出地址不能为空');
					return;
				}
				if (!this.tranNumber.trim()) {
					showToast('转出数量不能为空');
					return;
				}
				// if(parseFloat(this.tranNumber)>parseFloat(this.balance)){
				// 	showToast('转出数量不够');
				// 	return
				// }
				// 验证码为空
				if (!this.yzm.trim()) {
					showToast(this.i18n.yzm_error_is);
					return;
				}
				// 验证码为空格式错误
				// if (!validate.yzm(this.yzm)) {
				// 	showToast(this.i18n.yzm_error_isfail);
				// 	return;
				// }
				// 支付密码为空
				if (!this.paypwd.trim()) {
					showToast(this.i18n.pay_is_empty);
					return;
				}
				// 支付密码格式错误
				if (!validate.passPwd(this.paypwd)) {
					showToast(this.i18n.pay_is_error);
					return;
				}
				if(this.tokenid =='10'){
					if (!this.label.trim()) {
						showToast('标签不能为空');
						return;
					}
				}
				uni.showLoading()
				let _url = this.getRequestUrl + '/api/wallet/transfer';
				let _data ={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token,
					number:this.tranNumber,
					to:this.fromaddress,
					remark:this.label,
					paypwd:this.paypwd,
					token_id:this.tokenid,
					yzm:this.yzm,
					type:this.getLoginInfo.incode ? 2 :1
				}
				
				const result = fetch(_url,_data,"POST");
				result.then((res)=>{
					console.log(res)
					uni.hideLoading()
					if(res.data.code){
						showToast(res.data.msg)
						pageback();
					}else{
						this.tranNumber = '';
						this.fromaddress='';
						this.paypwd = '';
						this.yzm = '';
						showToast(res.data.msg)
					}
				})
			},
			getInput(e){
				//输入数量监听
				this.realNumber =(parseFloat(e.target.value)*((100-(parseFloat(this.txsxf)))/100)).toFixed(4)
			},
			yzmClick(e) {
				console.log(e)
			},
			toaddress() {
				pageto("address?tokenid="+this.tokenid+'&title='+this.title)
			},
			clickCBack() {
				pageback();
			},
			towithdrawlog() {
				pageto("history?tokenid="+this.tokenid+'&title='+this.title);
			}
		}
	}
</script>
<style lang="scss">
@import '../../common/scss/variable.scss';
.app-withdraw {
	.app-withdraw{
		.item {
			.center{
				 .name{
					 font-size: 14px !important;
				 }
			}
		}
	} 
	.header_top{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top:10upx;
		padding:30upx 0;
		// border-top:10upx solid #f6f6f6;
		border-bottom:10upx solid #f6f6f6;
		.items{
			flex: 1;
			text-align: center;
			line-height: 24upx;
			p{
				font-size: 14px;
				color: #929292;
				margin-bottom: 20upx;
			}
			span{
				font-size: 14px;
			}
		}
	}
	.item {
		margin: 0 30upx;
		height: 120upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1upx solid $list-border-bt-color;
		&.ex {
			border: 0;
		}
		.left {
			font-size: 14px;
			color: $font-list-tip-color;
			width: 120upx;
		}
		input {
			height: 120upx;
			flex: 1;
			font-size: 14px;
			margin-left: 20upx;
		}
		.right {
			line-height: 120upx;
			font-size: 14px;
			color: $font-title-color;
			margin-left: 20upx;
			flex: 1;
		}
		.all {
			color: $theme-color !important;
			font-size: 14px;
		}
		.right-after {
			font-size: 14px;
			color: $list-arrow-rt-color;
			width: 40px;
			height: 120upx;
			text-align: right;
			line-height: 120upx;
		}
		.center {
			flex: 1;
			line-height: 120upx;
			flex-direction: column;
			.name {
				font-size: 14px;
				color: $font-list-tip-color;
				margin-left: 20upx;
			}
			.min_withdraw {
				input {
					width: 100%;
					height: 40upx;
					font-size: 14px;
					color: $font-list-tip-color;
				}
			}
			.address {
				font-size: 14px;
				color: $font-title-color;
				font-weight: bold;
				margin-top: 16upx;
				margin-left: 20upx;
			}
			.current_num {
				font-size: 14px;
				color: $red-adorn;
				margin-left: 20upx;
			}
		}
		&.yzm {
			align-items: flex-start;
		}
		&.password, &.repassword {
			.icon-yincang {
				padding: 10px;
				margin: -10px;
				&.active {
					color: $theme-color;
				}
			}
		}
		&.code {
			color: $font-title-color;
			align-items: center;
			.iconfont {
				color: $list-arrow-rt-color;
				font-size: 14px;
			}
		}
	}
	.split {
		width: 100%;
		height: 10upx;
		background-color: $page_gray_color;
		margin-top: 10upx;
	}
	.btn {
		width: 360upx;
		height: 80upx;
		background-color: $theme-color;
		font-size: 14px;
		color: #ffffff;
		text-align: center;
		line-height: 80upx;
		border-radius: 10upx;
		margin: 50upx auto 50upx;
	}
}
</style>
