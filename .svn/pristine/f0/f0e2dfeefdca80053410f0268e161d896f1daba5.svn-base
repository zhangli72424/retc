<template>
	<view class="content">
		<view class="mix-tree-list">
			<block v-for="(item, index) in treeList" :key="index">
				<view 
					class="mix-tree-item"
					:style="[{
							paddingLeft: item.rank*40 + 'px',
							zIndex: item.rank*-1 +50
						}]"
					:class="{
							border: treeParams.border === true,
							show: item.show,
							last: item.lastRank,
							showchild: item.showChild,
							rank1: item.rank == 1
						}"
					@click.stop="treeItemTap(item, index)"
				>
					<image class="mix-tree-icon" :src="item.lastRank && item.showChild ? treeParams.lastIcon : item.showChild ? treeParams.currentIcon : treeParams.defaultIcon"></image>
					<view class="innet-content">
						<view class="tree-user">{{item.username}} <text v-if="item.name && item.name.length > 0" class="inner-state">{{item.name}}</text></view>
						<view class="tree-bottom">
							<view class="yeji">
								{{i18n.yeji}}: {{item.yeji}}
							</view>
							<view class="touzi">
								{{i18n.invest_btn}}(￥): {{parseFloat(item.freeze)}}
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default(){
					return [];
				}
			},
			params: {
				type: Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				treeList: [],
				treeParams: {
					defaultIcon: '/static/mix-tree/defaultIcon.png',
					currentIcon: '/static/mix-tree/currentIcon.png',
					lastIcon: '',
					border: false
				}
			}
		},
		computed: {
			i18n () {  
				return this.$t('message')
			}
		},
		watch: {
			list(list){
				this.treeParams = Object.assign(this.treeParams, this.params);
				this.renderTreeList(list);
			}
		},
		methods: {
			//扁平化树结构
			renderTreeList(list=[], rank=0, parentId=[]){
				list.forEach(item=>{
					this.treeList.push({
						id: item.id,
						username: item.username,
						name: item.name,
						freeze: item.freeze,
						yeji: item.yeji,
						parentId,  // 父级id数组
						rank,  // 层级
						showChild: false,  //子级是否显示
						show: rank === 0  // 自身是否显示
					})
					if(Array.isArray(item.xj) && item.xj.length > 0){
						let parents = [...parentId];
						parents.push(item.id);
						this.renderTreeList(item.xj, rank+1, parents);
					}else{
						this.treeList[this.treeList.length-1].lastRank = true;
					}
				})
			},
			// 点击
			treeItemTap(item){
				if (item.rank == 2) return;
				let list = this.treeList;
				let id = item.id;
				// if(item.lastRank === true){
				// 	//点击最后一级时触发事件
				// 	this.$emit('treeItemClick', item);
				// 	return;
				// }
				item.showChild = !item.showChild;
				list.forEach(childItem=>{
					if(item.showChild === false){
						if(!childItem.parentId.includes(id)){
							return;
						}
						if(childItem.lastRank !== true){
							childItem.showChild = false;
						}
						childItem.show = false;
					}else{
						if(childItem.parentId[childItem.parentId.length-1] === id){
							childItem.show = true;
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		overflow: hidden;
	}
	.mix-tree-list{
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
	}
	.mix-tree-item{
		display: flex;
		align-items: center;
		flex-direction: row;
		font-size: 30upx;
		color: #333;
		height: 0;
		opacity: 0;
		transition: .2s;
		position: relative;
		
		.innet-content {
			display: flex;
			justify-content: center;
			flex-direction: column;
			width: 100%;
			.tree-user {
				text {
					padding: 4upx 10upx;
					background-color: #adfcff;
					color: #2a7af2;
					font-size: 9px;
					margin-left: 30upx;
					border-radius: 4upx;
					margin-top: -2px;
				}
			}
			.tree-bottom {
				flex-shrink: 1;
				display: flex;
				flex-direction: row;
				// justify-content: space-between;
				align-items: center;
				margin-top: 12upx;
				width: 100%;
				font-size: 12px;
				view {
					flex-shrink: 1;
				}
				view+view {
					margin-left: 40upx;
				}
			}
		}
	}
	.mix-tree-item.border{
		border-bottom: 1px solid #eee;
	}
	.mix-tree-item.show{
		height: 100upx;
		opacity: 1;
	}
	.mix-tree-item.show.rank1 {
		height: 100upx;
	}
	.mix-tree-icon{
		width: 26upx;
		height: 26upx;
		margin-right: 8upx;
		opacity: .9;
	}
	
	.mix-tree-item.showchild:before{
		transform: rotate(90deg);
	}
	.mix-tree-item.last:before{
		opacity: 0;
	}
</style>
