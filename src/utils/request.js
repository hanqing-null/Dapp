/**
    axios的配置文件
    1、设置post数据格式为表单格式
    2、设置基路径
    3、序列化字符串
*/
import axios from 'axios';
import qs from 'qs';
import router from '../router';


// 封装

export function Router({ method, url, data, params }) {
    return axios({
        method,
        url,
        data,
        params,
    })
}

//配置
//配置前后端数据交互的请求头：
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 设置后台的访问地址
axios.defaults.baseURL = 'http://www.dapp.com/index.php/api/';
// 拦截
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data, { arrayFormat: 'repeat' });
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axios;