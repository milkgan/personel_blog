// 轮播图
import { getBanners } from "@/api/banner";

export default {
  namespaced: true,
  state: {
    isLoading: true,
    data: [],
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value;
    },
    setData(state, value) {
      state.data = value;
    },
  },
  actions: {
    async fetchBanner(context) {
      if (context.state.data.length) {
        return;
      }
      context.commit("setIsLoading", true);
      const resp = await getBanners();
      context.commit("setData", resp);
      context.commit("setIsLoading", false);
    },
  },
};
