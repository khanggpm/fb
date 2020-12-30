// Import Vue
import Vue from 'vue';

// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js';

// Import Framework7-Vue Plugin
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js';

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.css';

// Import App Component
import App from '../components/app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);



import router from './routes'
import store from './../store'
import http from 'axios';
import toastr from 'toastr';
import { Dialog, Button, Input, Select, Option, Tag,
  DatePicker, Pagination, Upload, Tooltip, Switch,Tabs,
  TabPane, Form , FormItem, Row } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'
import 'element-ui/lib/theme-chalk/index.css';
import _ from 'lodash';
import firebase from "./../../config/firebase";

// configure language
locale.use(lang)
Vue.component(Dialog.name, Dialog);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Tag.name, Tag);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Pagination.name, Pagination);
Vue.component(Upload.name, Upload);
Vue.component(Tooltip.name, Tooltip);
Vue.component(Switch.name, Switch);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Row.name, Row);

const appDb = firebase.database()
Vue.prototype.$http = http;
Vue.prototype.$toastr = toastr;
Vue.prototype.$_ = _;
Vue.prototype.$firebase = firebase;


Vue.config.productionTip = false


console.log(firebase)
// firebase.auth().onAuthStateChanged(user => {
//   store.dispatch("fetchUser", user);
// });

// Init App
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  // Register App Component
  components: {
    app: App
  },
});
