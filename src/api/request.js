import axios from "axios";
import showMessgae from "@/utils/showMessage";

const instance = axios.create();

instance.interceptors.response.use(function (res) {
    console.log(res.data.code)
    if(res.data.code !== 0) {
        return showMessgae()
    }else {
        return res.data.data;
    }
    
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;