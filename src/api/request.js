import axios from "axios";
import showMessgae from "@/utils/showMessage";

const instance = axios.create();

instance.interceptors.response.use(function (res) {
    if(res.data.code !== 0) {
        showMessgae({
            content: res.data.msg,
            type: "error"
        });
        return [];
    }else {
        return res.data.data;
    }
    
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;