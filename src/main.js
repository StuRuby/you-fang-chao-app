import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Mint from 'mint-ui';
import Mock from './mock';
import Http from './api';
import 'mint-ui/lib/style.css';

Vue.use(Mint);
Vue.use(Http);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
