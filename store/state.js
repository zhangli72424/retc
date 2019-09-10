const state = {
	area: uni.getStorageSync('area') || {},
	lang_type: uni.getStorageSync('lang') || 'chs',
	// requestUrl: "http://47.52.77.5",  //测试服务器
	requestUrl: "http://retcim.com",  //正式服务器
	// requestUrl: "http://103.229.64.41",  //正式服务器
	incode: uni.getStorageSync('code') || '86',
	loginInfo: uni.getStorageSync('loginInfo') || {},
	user: uni.getStorageSync('user') || '',
	pass: uni.getStorageSync('pass') || '',
	gesturePassword:uni.getStorageSync('gesturePassword') || '',
	curAddress:'',
	bullentin: '',
	textArr: {
		chs: [ "资产", "社区", "我的" ],
		en: [ "Assets",  "Community", "Mine" ],
		ko: [ "자산",  "커뮤니티", "내" ],
		
	},
	firstInvestment:{},   ///首次投资币种,
	details:{},
}
export default state