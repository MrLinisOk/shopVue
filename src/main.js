import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import http from './util/http'
import 'vant/lib/index.css';//引入Vant样式
import 'element-ui/lib/theme-chalk/index.css';//Element组件样式
import qs from 'qs'
//定义全局变量
Vue.prototype.$qs = qs
var axios = require('axios')
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//将API方法绑定到全局
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.prototype.$http = http; // 引入前后端交互工具
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
