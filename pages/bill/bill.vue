<template>
	<view class="app-bill">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top">
			<view class="iconfont icon-arrow-left" @tap="clickClose"></view>
			<view @tap="clickClose">{{i18n.mybill}}</view>
		</view>
		<view class="gg-line"></view>
		<view class="content" v-if="tabs.length > 0">
			<tabs :tabs="tabs" space="1" @handleClick="handleClick"></tabs>
		</view>
		<view class="uni-total-flex">
			<view class="txt">
				<text>{{i18n.total_income}}:</text>
				<text>{{total}}</text>
			</view>
		</view>
		<view class="split"></view>
		<view class="list">
			<!-- <scroll-view  id="selecScroll" :style="{height:style.contentViewHeight+'px'}" @scrolltolower="_getData" scroll-y="true" scroll-with-animation="true"> -->
				<view class="item" v-for="(item, index) in lists" :key="index">
					<view class="left">
						<view class="name">{{item.typeStr}}</view>
						<view class="time">{{item.time}}</view>
					</view>
					<view class="num">
						<view class="name">{{item.num}}({{item.pcs}})</view>
						<view class="time">{{item.amount}} CYE</view>
					</view>
				</view>
				<view class="nodata" v-if="lists.length == 0">
					{{i18n.nodata}}
				</view>
			<!-- </scroll-view> -->
			
		</view>
	</view>
</template>

<script>
import {showToast} from "../../common/js/util.js"
import {mapGetters} from "vuex"
import tabs from "../../components/tabs/tabsec.vue";
import loading from '../../components/loading/loading.vue';
var timer;
export default {
	data() {
		return {
			isShowLoding: false,
			type: 0,
			page: 1,
			incomeId: 13,
			otherpage:false,
			day_sum:'',
			style:{
				contentViewWidth:0,
				contentViewHeight:0,
				mitemHeight:0
			},
			tabs: [
				{
					id: 0,
					name: ""
				},
				{
					id: 1,
					name: "" 
				},
				{
					id: 2,
					name: ""
				},
				{
					id: 3,
					name: ""
				},
				{
					id: 4,
					name: ""
				}
			],
			total:'',
			lists: []
		}
	},
	// mounted:function(){
	// 	const query = uni.createSelectorQuery().in(this);
	// 	query.select('#selecScroll').boundingClientRect(data => {
	// 		const res = uni.getSystemInfoSync(); 
	// 		this.style.contentViewHeight = res.windowHeight - data.top-20; 
	// 	}).exec();
	// },
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
		this.tabs[0].name = this.i18n.static_income1
		this.tabs[1].name = this.i18n.performance1
		this.tabs[2].name = this.i18n.performance2
		this.tabs[3].name = this.i18n.community_income1;
		this.tabs[4].name = this.i18n.direct_income1
		
	},
	onLoad() {
		this.tabs.forEach(item => {
			if (item.id == 0) {
				return item.name = this.i18n.static_income1;
			} else if (item.id == 1) {
				return item.name = this.i18n.performance1;
			}else if(item.id == 2){
				return item.name = this.i18n.performance2;
			} else if (item.id == 3) {
				return item.name = this.i18n.community_income1;
			} else if (item.id == 4) {
				return item.name = this.i18n.direct_income1;
			}
		});
		this.page = 1;
		this.getDetails();
	},
	methods: {
		_getData(){
			this.getDetails(this.page,this.rows);
		},
		clickClose() {
			uni.navigateBack({
				delta: 1
			})
		},
		handleClick(e) {
			this.page=1;
			this.lists =[];
			this.otherpage = false;
			if(e == 1){
				this.incomeId =14;
			}else if(e==2){
				this.incomeId =18;
			}else if(e ==3){
				this.incomeId =15;
			}else if(e==4){
				this.incomeId =17;
			}else{
				this.incomeId =13;
			}
			this.getDetails(this.page,this.rows);
		},
		getDetails(page = 1, rows = this.rows){
			let _data = {
				id:this.getLoginInfo.id,
				token:this.getLoginInfo.token,
				type: this.incomeId,
				rows,
				page:this.page
			}
			let _self = this
			uni.request({
				url: this.getRequestUrl + "/api/User/detailed",
				data: _data,
				method: "post",
				success: (res) => {
					if(res.data.code){
						this.day_sum = res.data.data.day_sum+"";
						this.total = res.data.data.sum + "";
						if(res.data.data.data.data.length == '0'){
							return;
						}
						if(this.page ==1){
							this.page ++;
							
							this.lists = res.data.data.data.data;
							this.lists.forEach((item,index)=>{
								this.lists[index].num = parseFloat(item.num)
								this.lists[index].pcs = _self.i18n.BlockPackage
							})
						}else{
							this.page ++;
							let lists = res.data.data.data.data;
							lists.forEach((item,index)=>{
								lists[index].num = parseFloat(item.num)
								lists[index].pcs = _self.i18n.BlockPackage
							})
							this.day_sum = res.data.data.day_sum+"";
							this.lists = this.lists.concat(lists)
						}
					} else {
						showToast(res.data.msg);
					}
				},
				fail: () => {
					showToast(this.i18n.request_fail)
				}
			})
		}
	},
	onPullDownRefresh: function() {
				//下拉刷新的时候请求一次数据
        this.getDetails();
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
@import '../../common/scss/variable.scss';
.app-bill {
	.gg-status-bar{
		background-color: $theme-color;
	}
	.content {
		padding: 30upx 30upx 0;
		overflow-x: hidden;
		background-color: $theme-color;
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
