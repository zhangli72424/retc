<template>
	<view class="app-area">
		<view class="gg-height"></view>
		<view class="gg-status-bar"></view>
		<view class="gg-top between">
			<view>{{i18n.area}}</view>
			<view class="iconfont icon-cha" @tap="clickClose"></view>
		</view>
		<view v-for="(part,index) in areas" :key="part.title" class="lists">
			<h3 class="subtitle">{{part.title}}</h3>
			<view class="subline" v-for="(item,index) in part.data" :key="item.code" @tap="selectedArea(item)">
				<view class="text">{{item.zh}} <text class="codenum">{{item.code}}</text></view>
				<text class="iconfont icon-arrow-right"></text>
			</view>
		</view>
		<loading v-if="isShowLoading"></loading>
	</view>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
import {showToast} from '../../common/js/util.js'
import loading from '../../components/loading/loading.vue'
export default {
	data() {
		return {
			areas: [],
			isShowLoading: false
		}
	},
	computed: {
		i18n () {  
			return this.$t('message')
		},
		...mapGetters([
			'getRequestUrl'
		])
	},
	onLoad() {
		this._getData();
	},
	methods: {
		_getData() {
			this.isShowLoading = true;
			uni.request({
				url: this.getRequestUrl + "/api/Countries/Countries",
				success: (res) => {
					this.isShowLoading = false;
					if (res.data.code) {
						this.areas = res.data.data;
					} else {
						showToast(res.data.msg);
					}
				},
				fail: () => {
					this.isShowLoading = false;
					showToast(this.i18n.request_fail);
				}
			})
		},
		clickClose() {
			uni.navigateBack({
				delta: 1
			})
		},
		selectedArea(e) {
			this.setIncode(e.code);
			this.setArea(e);
			setTimeout(()=> {
				uni.navigateBack({ delta: 1 });
			}, 500)
		},
		...mapMutations([
			'setArea',
			'setIncode'
		])
	},
	components: {
		loading
	}
}
</script>

<style lang="scss">
@import "../../common/scss/variable.scss";
page {
	view, h3 {
		box-sizing: border-box;
	}
}
.app-area {
	.lists {
		h3 {
			font-size: 16px;
			padding: 0 30upx;
			height: 30px;
			line-height: 30px;
			background-color: #eeeeee;
		}
		.subline {
			padding: 0 45upx;
			display: flex;
			flex-direction: row;
			height: 40px;
			justify-content: space-between;
			border-bottom: 1upx solid $list-border-bt-color;
			align-items: center;
			.iconfont {
				font-size: 14px;
				padding: 0 10px;
				margin: 0 -10px;
			}
			.text {
				line-height: 40px;
				font-size: 14px;
			}
			.codenum {
				margin-left: 10upx;
			}
		}
	}
}
</style>
