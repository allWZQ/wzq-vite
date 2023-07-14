import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  state: () => {
    return {
      isLogin: false,
    };
  },
  actions: {
    setIsLogin(data: boolean) {
      this.isLogin = data;
    },
  },
});
