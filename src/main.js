import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router'

// vuex
import store from './store'

// 公共样式
import './assets/style/common.css'
import './assets/style/index.scss'

// 适配
import 'amfe-flexible'

// vant组件
import { Button, Field, Tabbar, TabbarItem, NoticeBar, List, PullRefresh, Cell, Tab, Tabs, Icon, Col, Row, CellGroup, NavBar, Overlay, PasswordInput, NumberKeyboard, Toast, DropdownMenu, DropdownItem, Switch,  RadioGroup, Radio} from 'vant';
import 'vant/lib/index.css';

Vue.use(NoticeBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Field);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Overlay);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);
Vue.use(Toast);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Switch);
Vue.use(RadioGroup);
Vue.use(Radio);

// api
import $axios from './utils/request'

import head from './components/head.vue'
Vue.component('heads', head)

// 开发环境
Vue.config.productionTip = false

// 获取项目生产环境基地址
console.log(process.env.VUE_APP_URL);


new Vue({
  router,
  store,
  $axios,
  render: h => h(App)
}).$mount('#app')
