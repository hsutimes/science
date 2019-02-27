import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import store from './store';
import router from './router';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(() => {
  iView.LoadingBar.finish();
});

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')