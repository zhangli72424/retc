<template>
	<view class="content">
		<view class="mix-tree-list">
			<block v-for="(item, index) in treeList" :key="index">
				<view 
					class="mix-tree-item"
					:style="[{
							paddingLeft: item.rank*15 + 'px',
							zIndex: item.rank*-1 +50
						}]"
					:class="{
							border: treeParams.border === true,
							show: item.show,
							last: item.lastRank,
							showchild: item.showChild
						}"
					@click.stop="treeItemTap(item, index)"
				>
					<image class="mix-tree-icon" :src="item.lastRank && item.showChild ? treeParams.lastIcon : item.showChild ? treeParams.currentIcon : treeParams.defaultIcon"></image>
					{{item.username}}
					<block v-if="item.children && item.children.length > 0">
						<view 
							class="mix-tree-item"
							:style="[{
									paddingLeft: item.rank*15 + 'px',
									zIndex: item.rank*-1 +50
								}]"
							:class="{
									border: treeParams.border === true,
									show: item.show,
									last: item.lastRank,
									showchild: item.showChild
								}"
							@click.stop="treeItemTap(item, index)"
							v-for="itm in item.children" :key="itm.id"
						>
							<image class="mix-tree-icon" :src="itm.lastRank && itm.showChild ? treeParams.lastIcon : itm.showChild ? treeParams.currentIcon : treeParams.defaultIcon"></image>
							{{itm.username}}
						</view>
					</block>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import {showToast, fetch} from '../../common/js/util.js'
	import {mapGetters} from 'vuex'
	export default {
		props: {
			silist: {
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
				updateList: [],
				list: [],
				ewai: 0,
				treeParams: {
					defaultIcon: '/static/mix-tree/defaultIcon.png',
					currentIcon: '/static/mix-tree/currentIcon.png',
					lastIcon: '',
					border: false
				}
			}
		},
		computed: {
			...mapGetters([
				'getLoginInfo',
				'getRequestUrl'
			])
		},
		watch: {
			silist(list){
				this.treeParams = Object.assign(this.treeParams, this.params);
				this.list = list;
				this.renderTreeList(list);
			},
			list (list) {
				console.log(123456);
				this.list = list;
				this.treeList = [];
				this.renderTreeList(list, 0, []);
			}
		},
		methods: {
			renderTreeList(list=[], rank=0, parentId=[]){
				list.forEach(item=>{
					this.treeList.push({
						id: item.id,
						username: item.username,
						parentId,  // 父级id数组
						rank,  // 层级 rank是1的话是子元素 rank是0的话是最初始的
						showChild: false,  //子级是否显示
						// 控制的是show类样式 高80upx 透明度是1
						show: rank === 0  // 默认只有自身显示
					})
					if (this.ewai == 1) {
						this.treeList[0].showChild = true;
					}
					// 如果存在子元素的话
					if(Array.isArray(item.children) && item.children.length > 0){
						// 默认为空
						let parents = [...parentId];
						// 往里面添加元素
						parents.push(item.id);
						// 迭代
						this.renderTreeList(item.children, rank+1, parents);
					}else{
					// 如果没有子元素的话 那么该元素就是最后一个元素
						this.treeList[this.treeList.length-1].lastRank = true;
					}
				})
			},
			treeItemTap(item){
				// 所点击的元素
				let list = this.treeList;
				let id = item.id;
				
				if(item.rank == 0) {
					this.ewai = 0;
					item.showChild = !item.showChild;
					list.forEach(childItem=>{
						if(item.showChild === false){
							//隐藏所有子级
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

				if(item.rank == 1) { // 大于0 的时候分别是子1 和子2
				
					this.ewai = 1;
					
					let _data = {
						id: this.getLoginInfo.id,
						token: this.getLoginInfo.token,
						userid: item.id
					}
					
					// 获取子级的数据
					fetch(this.getRequestUrl+'/api/User/myZt2', _data, "post")
						.then(res => {
							if (res.data.code) {
								let _tmpIdx;
								let _tmpArr = this.list[0].children;
								for (let i = 0; i < _tmpArr.length; i++) {
									if (_tmpArr[i].id == _data.userid ) {
										_tmpIdx = i;
									}
								}
								let _result = res.data.data;
								let _parentId;
								if (_result.length > 0) {
									item.lastRank = false;
									item.showChild = !item.showChild;
									_parentId = item.parentId.concat(item.id);
								}
								
								_result.forEach(childItem => {
									childItem.parentId = _parentId;
									childItem.rank = 2;
									childItem.showchild = false;
									childItem.show = true;
								})
								
								
								
								let __list = [...this.list];
								
								__list[0].children[_tmpIdx] = Object.assign(item, {
									children: _result
								});
								
								__list.forEach(childItem=>{
									if(childItem.parentId && childItem.parentId.includes(id)){
										childItem.showChild = true;
									}
								})
								
								this.list = __list;
								this.$forceUpdate();
							} else {
								showToast(res.data.msg);
							}
						})
				}
				if(item.rank == 2) return;
			}
		}
	}
</script>

<style>
	.mix-tree-list{
		display: flex;
		flex-direction: column;
		padding-left: 30upx;
	}
	.mix-tree-item{
		display: flex;
		align-items: center;
		font-size: 30upx;
		color: #333;
		height: 0;
		opacity: 0;
		transition: .2s;
		position: relative;
	}
	.mix-tree-item.border{
		border-bottom: 1px solid #eee;
	}
	.mix-tree-item.show{
		height: 80upx;
		opacity: 1;
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
