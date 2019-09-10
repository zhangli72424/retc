import Vue from 'vue'
import App from './App'
import i18n from './lang/index'
import store from './store/index.js'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype._i18n = i18n
Vue.prototype.$store = store

const app = new Vue({
    ...App,
	store,
	i18n
})
app.$mount()
