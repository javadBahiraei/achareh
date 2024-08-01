import axios, { AxiosError } from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["Client-Path"] = window.location.href;

const AcharehInstance = axios.create({
    baseURL: `${process.env.VUE_APP_ACHAREH_API_BASE_ADDRESS}/api`,
    
    // withCredentials: true,
});

[
    AcharehInstance,
].forEach((x) => {
    x.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    x.interceptors.response.use(
        (response: any) => {

            return response;
        },
        async (error: AxiosError) => {
            if (error.response) {
                if (error.response.status === 403) {
                    alert('خطا در برقرای ارتباط')
                } else if (error.response.status === 404) {
                    alert('خطا در برقرای ارتباط')
                }
            }
            return Promise.reject(error);
        }
    );
});



export default {
    AcharehApi: AcharehInstance,
};
