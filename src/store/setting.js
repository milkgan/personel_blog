// 全局配置
import { getSetting } from "@/api/setting";
import { titleController } from "@/utils";

export default {
    namespaced: true,
    state: {
        isLoading: true,
        data: null
    },
    mutations: {
        setIsLoading(state, value) {
            state.isLoading = value;
        },
        setData(state, value) {
            state.data = value;
        }
    },
    actions: {
        async fetchSetting(context) {
            context.commit("setIsLoading", true);
            const resp = await getSetting();
            context.commit("setData", resp);
            context.commit("setIsLoading", false);
            // if(resp.favicon) {
            //     // <link rel="shortcut icon" type="images/x-icon" href="./favicon.ico">
            //     let link = document.querySelector('link[rel="shortcut icon"]');
            //     if(link) {
            //         return;
            //     }
            //     link = document.createElement("link");
            //     link.rel = "shortcut icon";
            //     link.type = "images/x-icon";
            //     link.href = "resp.favicon";
            //     document.querySelector("head").appendChild(link);   
            // }
            if(resp.siteTitle) {
                titleController.setSiteTitle(resp.siteTitle);
            }
        }
    }
}