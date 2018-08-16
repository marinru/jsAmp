import "./globals";
import Vue from "vue";
import App from "@/components/App";
import store from "@/store";

new Vue({
    render: h => h(App),
    store
}).$mount("#app");