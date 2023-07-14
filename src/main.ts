import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import * as VueRouter from "vue-router";
import { paths, routes } from "./router.config";
import { createPinia } from "pinia";
import { useUserStore } from "./stores/user";

const app = createApp(App);
const pinia = createPinia();
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const userStore = useUserStore();
  if (userStore.isLogin) {
    if (to.path === paths.login) {
      next(paths.home);
    } else {
      next();
    }
  } else {
    if (to.path === paths.login) {
      next();
    } else {
      next(paths.login);
    }
  }
});

app.use(pinia);
app.use(router);
app.mount("#app");
