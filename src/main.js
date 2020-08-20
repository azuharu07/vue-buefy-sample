import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy"; // 追加

Vue.config.productionTip = false;
Vue.use(Buefy); // 追加

new Vue({
    render: (h) => h(App),
}).$mount("#app");
