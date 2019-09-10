import {validate} from "./validate.js"
/*
* showToast  消息提示框
* @title     弹窗的内容
* @duration  弹窗持续的时间
* @mask      是否添加遮罩
* @icon      消息提示框的图标
* */
export function showToast(title="", duration=2000, mask=true, icon="none") {
	if (!title) {
		console.log("showToast title is wrong");
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

/*
* pageback   页面返回一页
*/
export function pageto(str) {
	uni.navigateTo({
		url: str
	})
}
/*
* pageback   页面返回一页
*/
export function pageback() {
	uni.navigateBack({
		delta: 1
	})
}

/*
* deterLang 格式化提交给后台的语言
* @return 1 中文 2 英文
*/
export function deterLang(lang) {
	switch(lang) {
		case "chs":
			return 1;
			break;
		case "en":
			return 2;
			break;
		case 'ko':
			return 3;
			break;
	}
}

/*
* 封装异步请求
*/
export const fetch = async (url, data = {}, method = "GET") => {
    const [error, res] = await uni.request({
    	url,
		data,
		method
    })
	if (error) {
		return error;
	} else {
		return res;
	}
};


/* *
* formatTabs
* */
export const formatTabs = (lang = 'chs') => {
	if (lang == 'chs') {
		return [
			{
				name: "社区动态",
				fontSize: "13px"
			},
			// {
			// 	name: "销毁池",
			// 	fontSize: "13px",
			// },
			{
				name: "应用",
				fontSize: "13px"
			}
		]
	} else if (lang == 'en') {
		return [
			{
				name: "Dynamic",
				fontSize: "13px"
			},
			// {
			// 	name: "Destroy",
			// 	fontSize: "13px",
			// },
			{
				name: "Application",
				fontSize: "13px"
			}
		]
	} else if (lang == 'ko') {
		return [
			{
				name: "커뮤니티 역학",
				fontSize: "13px"
			},
			// {
			// 	name: "수영장 파괴",
			// 	fontSize: "13px",
			// },
			{
				name: "신청서",
				fontSize: "13px"
			}
		]
	}
}

/*
*	_updataTabBar 更新底部导航
* */
export function _updataTabBar(arr, lang) {
			uni.setTabBarItem({
				index:  0,
				text: arr[lang][0]
			})
			uni.setTabBarItem({
				index:  1,
				text: arr[lang][1]
			})
			uni.setTabBarItem({
				index:  2,
				text: arr[lang][2]
			})
			// uni.setTabBarItem({
			// 	index:  3,
			// 	text: arr[lang][3]
			// })
			uni.setTabBarStyle({
				color: '#7D7D7D',
				selectedColor: '#000000',
				backgroundColor: "#F9F9F9"
			})
		}
		
		
export function forceUpdate (update, update_tip, isJumping, soon_update, fail) {
	//#ifdef APP-PLUS  
		var server = "http://retcim.com/api/index/ve"; //检查更新地址  
		var req = { //升级检测数据  
			"appid": plus.runtime.appid,  
			"version": plus.runtime.version
		};
		let _this = this;
		// return false;
		uni.request({  
			url: server,
			data: '',  
			success: (res) => {
				if(res.data.code){
					let downs = res.data.data.down;
					if(res.data.data.is_up  == '1'){
						if(req.version  == res.data.data.ve){
						}else{
							uni.showModal({ //提醒用户更新  
								title: update,  
								content: update_tip,  
								success: (res) => {  
									if (res.confirm) {
										uni.showToast(isJumping)
										setTimeout(()=>{
											plus.runtime.openURL(downs);
										}, 500)												 
									}else{
										uni.showToast(soon_update);
										setTimeout(()=>{
											// #ifdef APP-PLUS  
											plus.runtime.quit();  
											// #endif
											uni.redirectTo({
												url: '/pages/login/login'
											})
										}, 500)
									}
								},
								fail:(err)=>{
									showToast(fail)
								}
							})
						}
					}
				}
			}  
		})  
	//#endif
}