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
			<scroll-view id="selecScroll" :style="{height:style.contentViewHeight+'px'}" @scrolltolower="getDatas" scroll-y="true" scroll-with-animation="true">
				<view class="li"  v-for="(item,index) in dyData" :key="index" @tap="clickBullentin(item)">
					<view class="name">
						{{item.title}}
					</view>
					<view class="info" v-html="item.content"></view>
				</view>
				<view class="nodata" v-if="dyData.length == 0">
					{{i18n.nodata}}
				</view>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	import {mapMutations, mapGetters} from 'vuex'
	import {showToast, pageto, pageback,fetch,deterLang} from "../../common/js/util.js"
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
		mounted:function(){
			const query = uni.createSelectorQuery().in(this);
			query.select('#selecScroll').boundingClientRect(data => {
				const res = uni.getSystemInfoSync(); 
				this.style.contentViewHeight = res.windowHeight - data.top-50; 
			}).exec();
		},
		computed: {
			i18n() {
				return this.$t('message')
			},
			...mapGetters([
				'getRequestUrl','getGesturePassword', 'getUser', 'getLoginInfo', 'getLangType'
			])
		},
		onLoad() {
			this.getDatas();
		},
		methods: {
			clickClose() {pageback()},
			getDatas(){
				let _url = this.getRequestUrl+ '/api/user/news';
				let _data ={
					id: this.getLoginInfo.id,
					token: this.getLoginInfo.token,
					page:this.page,
					rows:10,
					lang_type: deterLang(this.getLangType)
				};
				// console.log(_data);
				const result = fetch(_url,_data,'POST')
				result.then(res=>{
					// console.log(res);
					if(res.data.code){
						if(!res.data.data){
							return
						}
						if(this.page==1){
							this.dyData = res.data.data;
							this.page ++
						}else{
							this.page ++
							let lists = res.data.data;
							this.dyData = this.dyData.concat(lists);
						}
						
					}
				})
			},
			clickBullentin(e) {
				this.setBulletin(e);
				pageto('/pages/community/bullentin');
			},
			...mapMutations([
				'setBulletin'
			])
		}
	}
</script>

<style lang="scss">
	@import '../../common/scss/variable.scss';
	.app-setting {
		overflow: hidden;
		.list {
			padding: 0 30upx 40px;
			.li {
				padding: 30upx 0;
				border-bottom: 1px solid $list-border-bt-color;
				display: flex;
				flex-direction: column;
				.name {
					font-size: 16px;
					color: $list-arrow-rt-color;
					margin-bottom: 10upx;
				}
				.info {
					font-size: 14px;
					color: $font-list-tip-color;
					width: 690upx;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
	}
	.nodata {
		width: 690upx;
	}
</style>
