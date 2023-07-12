import Home from "./router/home/index.vue";
import Login from "./router/login/index.vue";

export const paths = {
  home: "/",
  login: "/login",
};

export const routes = [
  { path: paths.home, component: Home },
  { path: paths.login, component: Login },
];
