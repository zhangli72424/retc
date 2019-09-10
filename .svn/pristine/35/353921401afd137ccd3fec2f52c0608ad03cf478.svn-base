<template>
	<view class="app-register">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top" @tap="clickCBack">
			<view class="iconfont icon-arrow-left"></view>
			<view>{{i18n.person_info}}</view>
		</view>
		<view class="gg-line"></view>
		<view class="content">
			<view class="avatar">
				<image :src="lvimg"></image>
			</view>
			<view class="list">
				<view class="item">
					<view class="left">{{i18n.cellnum}}</view>
					<view class="right">{{name}}</view>
				</view>
				<view class="item">
					<view class="left">{{i18n.nickname}}</view>
					<view class="right" v-if="!isModifyNick"  @tap="modifyNick">{{nickname}}</view>
					<input class="right" type="text" focus="true" @blur="blur(0)" v-if="isModifyNick" v-model="nickname"/>
				</view>
				<!-- <view class="item">
					<view class="left">{{i18n.sex}}</view>
					<view class="right" v-if="!isModifySex"  @tap="modifySex">{{gender}}</view>
					<input class="right" type="text" focus="true" @blur="blur(1)" v-if="isModifySex" v-model="gender"/>
				</view> -->
			</view>
		</view>
		<view class="save" hover-class="fixed-hove-class" :class="isOk ? 'active' : ''" @tap="save">
			{{i18n.save}}
		</view>
	</view>
</template>

<script>
	import {mapGetters, mapMutations} from 'vuex'
	import {pageback,showToast, deterLang, showLangContent, pageto, fetch} from "../../common/js/util.js"
	import {validate} from '../../common/js/validate.js'
	export default {
		data() {
			return {
				nickname: '',
				name:'',
				isOk:false,
				gender: "",
				isModifyNick: false,
				isModifySex: false,
				inNickname:'',
				isfast: false,
				lvimg: ''
			}
		},
		onLoad(e) {
			this.gender = "";
			this.inNickname = e.nickname
			this.nickname = e.nickname;
			this.lvimg = e.avatar;
		},
		onShow(){
			this.name     = this.getLoginInfo.email;
		},
		computed: {
			i18n() {
				return this.$t('message');
			},
			...mapGetters([
				'getLoginInfo','getRequestUrl'
			])
		},
		watch:{
			nickname(val,newval){
				let _this = this 
				if(newval===''){
					_this.isOk = false
				}else{
					if(val == this.inNickname){
						_this.isOk = false
					}else{
						_this.isOk = true
					}
				}
			}
		},
		methods: {
			clickCBack() {
				pageback();
			},
			modifySex() {
				this.isModifySex = true;
			},
			modifyNick() {
				this.isModifyNick = true;
			},
			blur(e) {
				if (e) {
					this.isModifySex = false;
				} else {
					this.isModifyNick = false;
				}
			},
			save() {
				if (this.isfast) return;
				if (!this.nickname.length) {
					showToast('请输入昵称');
					return;
				}
				this.isfast = true;
				let _url = `${this.getRequestUrl}/api/User/upname`;
				let _data ={
					id:this.getLoginInfo.id,
					token:this.getLoginInfo.token,
					nickname:this.nickname
				}
				const result = fetch(_url,_data, 'post')
				result.then((res)=>{
					if(res.data.code){
						showToast(res.data.msg)
						setTimeout(()=> {
							this.isfast = false;
						}, 1000);
						setTimeout(() => {
							pageback();
						}, 1500);
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
.app-register {
	.content {
		.avatar {
			width: 120upx;
			height: 120upx;
			margin: 60upx auto 30upx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.list {
			padding: 0 30upx;
			.item {
				border-top: 1upx solid $list-border-bt-color;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100upx;
				view {
					color: $font-title-color;
					font-size: 14px;
					&.right {
						font-weight: bold;
						padding: 10px;
						margin: -10px;
					}
				}
				input {
					font-size: 14px;
					&.right {
						width: 50%;
					}
				}
				&:last-child {
					border-bottom: 1upx solid $list-border-bt-color;
				}
			}
		}
	}
	.save {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100upx;
		line-height: 100upx;
		background-color: $btn-bg-color;
		text-align: center;
		color: #ffffff;
		font-size: 16px;
		&.active{
			background-color: $theme-color;
		}
	}
}
</style>
