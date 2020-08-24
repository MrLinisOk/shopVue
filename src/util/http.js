import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8090/";//本地后台服务器地址
axios.defaults.responseType = 'json';
axios.defaults.timeout = 200000;

const get = (url, params) => {
    console.log('url:' + url);
    console.log('data:' + JSON.stringify(params));
    return axios({
        method: 'get',
        withCredentials: true,
        url,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            timestamp: getNow(new Date()),
            apiCode: url,
            apiVersion: '1.0.0',
        },
        params,
        data: undefined,
    });
};

const post = (url, data) => {
    console.log('url:' + url);
    console.log('data:' + JSON.stringify(data));
    if (!data) {
        data = {};
    }
    data = JSON.stringify(data);
    return axios({
        method: 'post',
        withCredentials: true,
        url,
        responseType: 'text',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',

            timestamp: getNow(new Date()),
            apiCode: url,
            apiVersion: '1.0.0',
        },
        transformResponse: [
            function(data) {
                return JSON.parse(data);
            },
        ],
        pararms: undefined,
        data: data || {},
    });
};
const getNow = now => {
    return (
        now.getFullYear() +
        fillDate(now.getMonth()) +
        fillDate(now.getDate()) +
        fillDate(now.getHours()) +
        fillDate(now.getMinutes()) +
        fillDate(now.getSeconds())
    );
};
const fillDate = str => {
    if (('' + str).length == 1) {
        str = '0' + str;
    }
    return ('' + str).length == 1 ? '0' + str : str;
};
export default { get, post };
