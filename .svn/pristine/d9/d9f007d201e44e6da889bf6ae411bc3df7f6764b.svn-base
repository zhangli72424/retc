import Vue from 'vue'
import VueI18n from 'vue-i18n'
import LangEn from './lang/en.js'
import LangChs from './lang/zhCH.js'
import LangKo from './lang/ko.js'

Vue.use(VueI18n);
// 1 中文 2 英文 3韩文
const i18n = new VueI18n({
    locale: uni.getStorageSync('lang') || 'chs',
    messages: {
        'en': LangEn,
        'chs' : LangChs,
		'ko': LangKo
    }
});

export default i18n