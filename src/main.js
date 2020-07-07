import Vue from 'vue'
import App from './App.vue'
import http from './util/http'
import 'vant/lib/index.css';//引入Vant样式

Vue.config.productionTip = false
Vue.prototype.$http = http; // 引入前后端交互工具


new Vue({
  render: h => h(App),
}).$mount('#app')
