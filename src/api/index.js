import axios from 'axios';
import qs from 'qs';
import config from './httpConfig';
/**
 * 以下为可用的实例方法，指定的配置将与实例配置合并.
 * axios.request(config)
 * axios.get(url[, config])
 * axios.delete(url[, config])
 * axios.head(url[, config])
 * axios.post(url[, data[, config]])
 * axios.put(url[, data[, config]])
 * axios.patch(url[, data[, config]])
 */
const Axios = axios.create(config);

//请求拦截器
Axios.interceptors.request.use(
    config => {
        //序列化`post data`
        if (config.method === 'POST') config.data = qs.stringify(config.data);
        return config;
    },
    error => {
        return Promise.reject(error.data.error.message);
    }
);

//响应拦截器
Axios.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        return Promise.reject(error);
    }
);

export default {
    install: function(Vue, option) {
        Object.defineProperty(Vue.prototype, '$http', {
            value: Axios
        });
    }
};
